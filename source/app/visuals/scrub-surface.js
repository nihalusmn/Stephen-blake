// A paused movie decodes frames; a 2D presentation buffer retains the last good
// frame during seeks/reloads. No WebGL, autoplay dependency or Blob download.
export function createScrubSurface({className, frames, changed}) {
  const element = document.createElement('div'); element.className = className;
  function decoder() {
    const v=document.createElement('video'); v.className='sb-frame-decoder';
    v.muted=v.defaultMuted=v.playsInline=true;
    v.setAttribute('muted','');v.setAttribute('playsinline','');v.setAttribute('aria-hidden','true');
    // A decoder is not a presentation layer. The canvas retains visible pixels.
    v.style.display='none';
    v.preload='metadata';v.disablePictureInPicture=true;return v;
  }
  let video = decoder();
  const decoders = new Map();
  const image = new Image(); image.alt = ''; image.className = 'sb-frame-image';
  const canvas = document.createElement('canvas'); canvas.className = 'sb-frame-buffer';
  canvas.width = 720; canvas.height = 960; canvas.setAttribute('aria-hidden', 'true');
  const ctx = canvas.getContext('2d', {alpha: false});
  element.append(video, canvas); if (!ctx) element.append(image);
  let disposed = false, url = '', offset = 0, loaded = false, active = false;
  let target = 0, chapter = 'origin', bounds = [0, 49.05], generation = 0;
  let attempts = 0, loadingAt = 0, seekingAt = 0, timer = 0, frameRequest = 0;
  let drawnTime = -1, drawnChapter = '', lastVideoAt = 0, state = 'idle', fallbackRequest = '';
  let lastGesture = 0, presentationRAF = 0, pendingImage = false, lastProgressAt = 0, coverKey = '', capturePending = false;
  function status(value) {if (state !== value) {state = value; element.dataset.mediaState = value; changed();}}
  function publish(source, time) {
    drawnTime = time; drawnChapter = chapter;
    element.dataset.presentation = source; element.dataset.frameTime = time.toFixed(3);
    element.dataset.frameChapter = chapter; element.dataset.hasFrame = 'true';
    changed();
  }
  function paint(source, time, type) {
    if (disposed || drawnChapter === chapter && Math.abs(drawnTime - time) < .001 && element.dataset.presentation === type) return;
    if (ctx) {
      try {
        if (type === 'video' && source.videoWidth && source.videoWidth !== canvas.width) {canvas.width = source.videoWidth; canvas.height = source.videoHeight;}
        ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
      }
      catch (error) {element.dataset.drawError = error.name; return false;}
      canvas.style.visibility = 'visible'; image.style.visibility = 'hidden';
    } else {
      if (type !== 'video') {image.src = source.src; image.style.visibility = 'visible';}
      else image.style.visibility = 'hidden';
      video.style.display = type === 'video' ? '' : 'none';
      video.style.opacity = type === 'video' ? '1' : '0';
    }
    publish(type, time); delete element.dataset.drawError; return true;
  }
  // A decoder may finish behind the scroll target. Accept useful progress in
  // the current chapter instead of starving the screen until scrolling stops.
  function useful(time) {
    if (time < bounds[0] - .06 || time > bounds[1] + .06) return false;
    return drawnChapter !== chapter || Math.abs(time-target) <= Math.abs(drawnTime-target) + .025;
  }
  function fallback(force = false) {
    if (!active || disposed || pendingImage) return;
    const index = frames.frame(target, bounds), key = `${chapter}:${index}:${generation}`;
    if (!force && fallbackRequest === key) return;
    fallbackRequest = key; pendingImage = true;
    const requestChapter = chapter, requestGeneration = generation;
    frames.get(index).then(img => {
      pendingImage = false;
      if (!img) {if (fallbackRequest === key) fallbackRequest = ''; return;}
      if (disposed || !active) return;
      if (requestChapter !== chapter || requestGeneration !== generation) {fallback(); return;}
      // A late image must never overwrite a newer decoded video frame.
      if (drawnChapter === chapter && element.dataset.presentation === 'video' && Math.abs(drawnTime - target) < .15) return;
      if (useful(index / 4)) paint(img, index / 4, 'sequence');
      // Only one image request per surface can be in flight. Coalesce all
      // intervening scroll positions into the latest target, even in reverse.
      if (index !== frames.frame(target, bounds)) fallback();
    });
  }
  function cover() {
    if (drawnChapter === chapter || coverKey === chapter) return;
    const requested = chapter, time = bounds[0]; coverKey = chapter;
    frames.cover(time).then(img => {
      if (img && !disposed && active && requested === chapter && drawnChapter !== chapter) paint(img,time,'preview');
    });
  }
  function desired() {return Math.max(0, Math.min(target - offset, Number.isFinite(video.duration) ? Math.max(0, video.duration - .04) : target - offset));}
  function present(decodedTime = video.currentTime) {
    if (disposed || !active || video.seeking || video.readyState < 2 || video.error) return;
    const time = decodedTime + offset;
    if (!useful(time)) return;
    if (paint(video, time, 'video') !== false) {lastVideoAt = performance.now(); attempts = 0; status('ready');}
  }
  function afterFrame() {
    if (disposed || !active || capturePending) return;
    capturePending=true;
    const candidate=video, epoch=generation;
    const finish=decodedTime=>{
      if(candidate!==video || epoch!==generation || !capturePending)return;
      capturePending=false;
      if(frameRequest)candidate.cancelVideoFrameCallback?.(frameRequest);frameRequest=0;
      cancelAnimationFrame(presentationRAF);presentationRAF=0;
      present(decodedTime);
      if(Math.abs(candidate.currentTime-desired())>1/48)sync();
    };
    // Do not start the next seek before the completed frame has been
    // presented. currentTime is a requested position, not proof of pixels.
    if(candidate.requestVideoFrameCallback)frameRequest=candidate.requestVideoFrameCallback((_,metadata)=>finish(metadata.mediaTime));
    // Paused decoders can omit rVFC; allow two paint opportunities after
    // seeked/loadeddata before reading their presentation buffer.
    presentationRAF=requestAnimationFrame(()=>{
      presentationRAF=requestAnimationFrame(()=>finish(candidate.currentTime));
    });
  }
  function sync() {
    if (disposed || !active || !loaded || document.hidden || video.error || video.readyState < 1 || !Number.isFinite(video.duration)) return;
    if (video.seeking || capturePending) return;
    const time = desired();
    if (Math.abs(video.currentTime - time) > 1 / 48 || video.readyState < 2) {
      try {seekingAt = performance.now(); video.currentTime = time || .001; status('seeking');}
      catch {status('waiting');}
    } else afterFrame();
  }
  function load() {
    if (disposed || !url) return;
    generation++; fallbackRequest = ''; loaded = true; loadingAt = lastProgressAt = performance.now(); seekingAt = 0;
    if (frameRequest) video.cancelVideoFrameCallback?.(frameRequest); frameRequest = 0;
    cancelAnimationFrame(presentationRAF);presentationRAF=0;capturePending=false;
    video.pause(); video.src = url; video.load(); status('loading'); fallback(true);
  }
  function retry(manual = false) {
    if (disposed || !active || document.hidden) return;
    if (manual) attempts = 0;
    if (attempts >= 2) {status('fallback'); fallback(); return;}
    attempts++; load();
  }
  function onError(event) {if (!disposed && event.target===video) {status('error'); loadingAt = performance.now(); fallback(true);}}
  function mediaEvent(event) {
    if (disposed || !loaded || event.target!==video) return;
    if (['progress','loadedmetadata','loadeddata','seeked'].includes(event.type)) lastProgressAt = performance.now();
    if (event.type === 'loadedmetadata') status('metadata');
    // Never wait for loadeddata/canplay exclusively. A metadata-only resource
    // can accept a seek; progress/seeked/resume drive recovery too.
    if (video.readyState >= 2 && !video.seeking) afterFrame();
    else sync();
  }
  const mediaEvents = ['loadedmetadata', 'loadeddata', 'canplay', 'progress', 'seeked', 'durationchange'];
  function listen(v) {mediaEvents.forEach(name=>v.addEventListener(name,mediaEvent));v.addEventListener('error',onError);}
  listen(video);
  function select(nextURL) {
    if (frameRequest) video.cancelVideoFrameCallback?.(frameRequest); frameRequest=0;
    cancelAnimationFrame(presentationRAF);presentationRAF=0;capturePending=false;video.pause();video.style.opacity='0';video.style.display='none';
    let next=decoders.get(nextURL);
    if (!next) {
      next=decoders.size ? decoder() : video;
      if (next!==video) listen(next);
      decoders.set(nextURL,next);
    }
    video=next;element.prepend(video);
    loaded=!!video.getAttribute('src');
    loadingAt=lastProgressAt=performance.now();seekingAt=0;
    status(video.error?'error':video.readyState>=1?'metadata':loaded?'loading':'idle');
  }
  function poll() {
    if (disposed || !active || document.hidden) return;
    const now = performance.now();
    if (!loaded) load();
    if (video.error) {if (now - loadingAt > 1200) retry(); return;}
    sync();
    if (drawnChapter !== chapter || Math.abs(drawnTime - target) > .16 && now - lastVideoAt > 350) fallback();
    const waitingSince = video.seeking ? seekingAt : loadingAt;
    if (state !== 'ready' && state !== 'fallback' && now - Math.max(waitingSince,lastProgressAt) > 12000) retry();
  }
  timer = setInterval(poll, 500);
  return {
    element, get video() {return video;}, canvas,
    get state() {return state;}, get active() {return active;},
    source(nextURL, nextOffset = 0) {
      if (url === nextURL && offset === nextOffset) return;
      url = nextURL; offset = nextOffset; attempts = 0;
      // update() supplies the new chapter/target before load() seeks or asks
      // for a cover frame. Never seek the old target inside a new chapter.
      generation++; fallbackRequest = '';select(nextURL);
    },
    warm(nextURL) {
      if (disposed || !nextURL || decoders.has(nextURL)) return;
      // The same chapter player is reused on reverse scroll. Preparing only
      // its metadata does not restart the active decoder or full-film fetch.
      const next=decoder();listen(next);decoders.set(nextURL,next);element.append(next);
      next.src=nextURL;next.load();
    },
    prepare() {if (!loaded) load();},
    update(time, enabled, key, range) {
      target = time; active = enabled; chapter = key; bounds = range;
      element.dataset.targetTime = time.toFixed(3);
      if (!active) return;
      cover();
      if (!loaded) load();
      if (drawnChapter !== chapter || state === 'error' || state === 'fallback' || Math.abs(drawnTime-target) > .16 && performance.now()-lastVideoAt > 350) fallback();
      sync();
    },
    resume(gesture = false) {
      if (!active || disposed || document.hidden) return;
      if (video.error && attempts < 2) retry(); else sync();
      // Some mobile policies only initialize a decoder after a real gesture.
      // Brief muted priming is immediately paused; it never plays the story.
      if (gesture && state !== 'ready' && performance.now() - lastGesture > 1500 && !video.error) {
        lastGesture = performance.now();
        const primed=video;
        try {const playing = primed.play(); playing?.then(() => {primed.pause(); if (!disposed && primed===video) sync();}).catch(() => {});} catch {}
      }
      fallback();
    },
    retry() {retry(true);},
    dispose() {
      disposed = true; clearInterval(timer); cancelAnimationFrame(presentationRAF);
      if (frameRequest) video.cancelVideoFrameCallback?.(frameRequest);
      for (const v of new Set([video,...decoders.values()])) {
        mediaEvents.forEach(name=>v.removeEventListener(name,mediaEvent));v.removeEventListener('error',onError);
        v.pause();v.removeAttribute('src');v.load();v.remove();
      }
      decoders.clear();element.remove();
    }
  };
}
