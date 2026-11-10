// All recovery pictures are exact frames of the approved movie, not a second
// animation. Bounded decoded-image cache; never a startup dependency.
import chapterCovers from './chapter-covers.json';
export function createRecoveryFrames() {
  const cache = new Map();
  const covers = new Map();
  let disposed = false;
  function frame(time, range = [0, 49.05]) {
    return Math.max(Math.ceil(range[0] * 4), Math.min(Math.floor(range[1] * 4), Math.round(time * 4), 196));
  }
  function get(index) {
    if (disposed) return Promise.resolve(null);
    let entry = cache.get(index);
    if (entry && (!entry.failed || Date.now() - entry.created < 5000)) {
      cache.delete(index); cache.set(index, entry); return entry.promise;
    }
    const img = new Image(); img.alt = ''; img.decoding = 'async'; img.fetchPriority = 'high';
    entry = {created: Date.now(), failed: false, pending: true};
    entry.promise = new Promise(resolve => {
      const finish = success => {
        clearTimeout(timeout); img.onload = img.onerror = null; entry.pending = false; entry.failed = !success;
        resolve(success && !disposed ? img : null);
      };
      const timeout = setTimeout(() => {finish(false); img.removeAttribute('src');}, 10000);
      img.onload = () => finish(true);
      img.onerror = () => finish(false);
      img.src = `assets/video/recovery-v31/frame-${String(index).padStart(3, '0')}.jpg`;
    });
    cache.set(index, entry);
    // Never evict an in-flight entry: doing so launches duplicate downloads
    // when the same panel is revisited on a slow connection.
    for (const [key,value] of cache) {
      if (cache.size <= 24) break;
      if (!value.pending) cache.delete(key);
    }
    return entry.promise;
  }
  function cover(time) {
    const index=Math.round(time*4),url=chapterCovers[index];
    if (!url || disposed) return Promise.resolve(null);
    if (!covers.has(index)) covers.set(index,new Promise(resolve=>{
      const img=new Image();img.onload=()=>resolve(disposed?null:img);img.onerror=()=>resolve(null);img.src=url;
    }));
    return covers.get(index);
  }
  return {frame, get, cover, dispose() {disposed = true; cache.clear(); covers.clear();}};
}
