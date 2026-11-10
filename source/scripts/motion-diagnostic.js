// Temporary phone test only. Injected by diagnose-motion.py, never in the build.
(() => {
  const token = new URL(document.currentScript.src).searchParams.get('token');
  const session = Math.random().toString(36).slice(2);
  const errors = [], started = performance.now();
  const clean = value => String(value || '').slice(0, 250);
  addEventListener('error', e => errors.push(clean(e.message || e.target?.tagName + ':' + e.target?.src)), true);
  addEventListener('unhandledrejection', e => errors.push(clean(e.reason?.message || e.reason)));
  document.addEventListener('sb:visual-error', e => errors.push(clean(e.detail)));
  let count = 0;
  function send(manual = false) {
    if (!manual && ++count > 120) return;
    const root = document.documentElement, stage = document.querySelector('#sb-stage');
    const body = {session, elapsed: Math.round(performance.now()-started), ua: clean(navigator.userAgent),
      viewport: [innerWidth,innerHeight,devicePixelRatio], scroll: Math.round(scrollY),
      ready: document.readyState, hidden: document.hidden, reduced: matchMedia('(prefers-reduced-motion: reduce)').matches,
      saveData: navigator.connection?.saveData, classes: clean(root.className), data: {...root.dataset},
      progress: stage?.dataset.journeyProgress, errors: errors.slice(-8),
      surfaces: [...document.querySelectorAll('.sb-journey-surface,.sb-panel-surface')].map(el => {
        const v=el.querySelector('video'), c=el.querySelector('canvas'), r=el.getBoundingClientRect();
        let pixels;
        try {const a=c?.getContext('2d')?.getImageData(Math.floor(c.width/2),Math.floor(c.height*.4),1,1).data; pixels=a ? [...a] : null;} catch {}
        return {data:{...el.dataset}, ready:v?.readyState, network:v?.networkState, time:v?.currentTime,
          seeking:v?.seeking, paused:v?.paused, error:v?.error?.code, size:[v?.videoWidth,v?.videoHeight],
          buffered:v?[...Array(v.buffered.length)].map((_,i)=>[v.buffered.start(i),v.buffered.end(i)]):[],
          rect:[r.x,r.y,r.width,r.height].map(Math.round), opacity:getComputedStyle(el).opacity,pixels};
      }),
      resources: performance.getEntriesByType('resource').filter(e=>/assets|fonts/.test(e.name)).slice(-30).map(e=>({
        path:new URL(e.name).pathname.slice(-100), ms:Math.round(e.duration), bytes:e.transferSize}))};
    fetch('/__motion-diagnostics?token='+encodeURIComponent(token),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),keepalive:true}).catch(()=>{});
  }
  setInterval(send, 2000);
  addEventListener('pagehide',send);document.addEventListener('visibilitychange',send);
  document.addEventListener('DOMContentLoaded',()=>{
    const b=document.createElement('button');b.textContent='Send motion diagnostic';
    b.style.cssText='position:fixed;bottom:8px;left:8px;z-index:2147483647;background:#18352b;color:#f2ebdd;border:1px solid #a88752;padding:8px;font:12px system-ui';
    b.onclick=()=>{send(true);b.textContent='Diagnostic sent';};document.body.append(b);send();
  });
})();
