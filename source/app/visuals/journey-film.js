import { createRoastVapour } from './roast-vapour.js';
// The motion master is local, silent and scrubbed by the existing scroll timeline.
// Keep captions in HTML: they stay sharp, accessible and independently editable.
export const FILM_CUES = [
  [.119, 0], [.190, .45], [.335, 1.50], [.412, 10.0], [.488, 15.0],
  [.560, 20.50], [.645, 26.50], [.700, 30.50],
  [.802, 38.50], [.872, 44.50], [.900, 49.05]
];
export function createJourneyFilm(stage, own, invalidate) {
  let width=stage.clientWidth,height=stage.clientHeight;
  const mobileMedia=width<768;
  const filmURL=mobileMedia?'assets/video/mobile/coffee-journey-v30.mp4':'assets/video/coffee-journey-v28.mp4';
  const video = document.createElement('video');
  video.className = 'sb-journey-video';
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.disablePictureInPicture = true;
  video.setAttribute('aria-hidden', 'true');
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.poster = 'assets/video/coffee-journey-poster-v28.jpg';
  video.src = filmURL;
  stage.append(video);
  const vapour=createRoastVapour(stage,own);
  let disposed = false, ready = false, failed = false, target = 0;
  let blobURL, blobLoading=false,mainActive=true;
  const download = new AbortController();
  const root = document.documentElement;
  const clamp = n => Math.max(0, Math.min(1, n));
  const ease = (p,a,b) => {const t=clamp((p-a)/(b-a));return t*t*(3-2*t);};
  function timeFor(p) {
    if(p <= FILM_CUES[0][0]) return 0;
    for(let i=1;i<FILM_CUES.length;i++) {
      const [p1,t1]=FILM_CUES[i], [p0,t0]=FILM_CUES[i-1];
      if(p<=p1) return t0+(t1-t0)*clamp((p-p0)/(p1-p0));
    }
    return FILM_CUES.at(-1)[1];
  }
  // A pinned horizontal chapter: each processing route owns its own panel.
  // All players remain paused; only scroll position requests a frame.
  const strip=document.createElement('section');
  strip.className='sb-process-horizontal';
  strip.setAttribute('aria-label','Three alternative coffee processing methods');
  const track=document.createElement('div');track.className='sb-process-horizontal__track';strip.append(track);
  const definitions=[
    {name:'Natural',note:4,start:.335,end:.412,t0:1.50,t1:9.70},
    {name:'Honey',note:2,start:.412,end:.488,t0:10.00,t1:14.70},
    {name:'Washed',note:3,start:.488,end:.550,t0:15.00,t1:20.48}
  ];
  const panels=definitions.map((d,i)=>{
    const panel=document.createElement('article');panel.className='sb-process-horizontal__panel';panel.dataset.method=d.name.toLowerCase();
    const label=document.createElement('p');label.className='sb-process-horizontal__label';label.textContent=`0${i+1} / ${d.name} process`;panel.append(label);
    const player=document.createElement('video');player.className='sb-process-panel-video';
    player.muted=true;player.defaultMuted=true;player.playsInline=true;player.preload='auto';player.setAttribute('muted','');player.setAttribute('playsinline','');player.setAttribute('aria-hidden','true');player.disablePictureInPicture=true;
    const caption=document.createElement('div');caption.className='sb-notes';
    const note=document.createElement('figure');note.className='sb-panel-note';
    const source=stage.querySelector(`[data-note="${d.note}"]`);note.innerHTML=source.innerHTML;caption.append(note);panel.append(player,caption);track.append(panel);
    const state={...d,panel,player,note,source,target:d.t0,active:false,offset:mobileMedia?d.t0:0};
    const sync=()=>{if(disposed||!state.active||player.seeking||player.readyState<2)return;const target=Math.max(0,Math.min(player.duration-.05,state.target-state.offset));if(Math.abs(player.currentTime-target)>1/30)try{player.currentTime=target}catch{}};
    player.addEventListener('loadeddata',sync);player.addEventListener('seeked',sync);state.sync=sync;
    state.error=()=>{if(state.retried||disposed)return;state.retried=true;state.offset=0;player.src=video.src;player.load();};
    player.addEventListener('error',state.error);
    return state;
  });
  stage.append(strip);
  function loadPanel(item){
    if(item.player.getAttribute('src'))return;
    item.player.src=mobileMedia?`assets/video/mobile/${item.name.toLowerCase()}-v30.mp4`:video.src;
    item.player.load();
  }
  function updatePanels(p,enabled) {
    const alpha=enabled?ease(p,.329,.341)*(1-ease(p,.556,.574)):0;
    strip.style.opacity=alpha.toFixed(4);strip.style.visibility=alpha>.001?'visible':'hidden';
    strip.style.transform=`translate3d(0,${(-ease(p,.556,.574)*100).toFixed(3)}%,0)`;
    const offset=ease(p,.402,.424)+ease(p,.478,.500);
    const desktop=width>=768;
    track.style.transform=desktop?'none':`translate3d(${(-offset*100/3).toFixed(4)}%,0,0)`;
    root.classList.toggle('sb-horizontal-active',alpha>.01);
    root.dataset.processPanel=p<.412?'natural':p<.488?'honey':'washed';
    // Only prepare routes near the viewport; phones decode the visible panel(s).
    if(enabled&&p>.27&&p<.59)for(const item of panels){
      if(desktop || p>item.start-.07)loadPanel(item);
    }
    for(const item of panels){item.target=item.t0+(item.t1-item.t0)*clamp((p-item.start)/(item.end-item.start));const reveal=ease(p,item.start-.006,item.start+.024);
      item.panel.style.transform=desktop&&item.name!=='Natural'?`translate3d(${((1-reveal)*width*.52).toFixed(2)}px,0,0)`:'none';
      item.panel.style.opacity=desktop&&item.name!=='Natural'?ease(p,item.start-.006,item.start+.006).toFixed(4):'1';
      item.note.style.opacity=desktop?'1':item.source.style.opacity;
      const index=panels.indexOf(item);
      item.active=enabled&&alpha>.001&&(desktop?reveal>.001:Math.abs(offset-index)<1.01);
      if(item.active)item.sync();}
    return alpha;
  }
  function seek() {
    if(disposed || !mainActive || failed || !ready || video.seeking || video.readyState < 2) return;
    const desired=Math.min(target, Math.max(0, video.duration-.05));
    if(Math.abs(video.currentTime-desired)>1/30) {
      try {video.currentTime=desired;} catch { /* A later media event retries. */ }
    }
  }
  function loaded() {
    if(disposed)return;
    // Some simple hosts omit byte-range support: the browser reports a zero
    // seekable range despite loading the frame. A local Blob restores seeking.
    const seekable=video.seekable.length && video.seekable.end(video.seekable.length-1)>.1;
    if(!seekable) {
      if(!blobLoading && /^https?:$/.test(location.protocol)) {
        blobLoading=true;
        fetch(filmURL,{signal:download.signal})
          .then(r=>{if(!r.ok)throw new Error('Film unavailable');return r.blob();})
          .then(blob=>{if(disposed)return;blobURL=URL.createObjectURL(blob);video.src=blobURL;video.load();})
          .catch(()=>{if(!disposed)error();});
      }
      return;
    }
    ready=true;root.dataset.journeyVideo='ready';seek();invalidate();
  }
  function sought() {if(!disposed){seek();invalidate();}}
  function error() {failed=true;ready=false;root.dataset.journeyVideo='fallback';invalidate();}
  video.addEventListener('loadeddata',loaded);
  video.addEventListener('canplay',loaded);
  video.addEventListener('seeked',sought);
  video.addEventListener('error',error);
  own({dispose(){
    disposed=true; download.abort();video.pause();
    video.removeEventListener('loadeddata',loaded);video.removeEventListener('canplay',loaded);
    video.removeEventListener('seeked',sought);video.removeEventListener('error',error);
    for(const item of panels){item.player.removeEventListener('loadeddata',item.sync);item.player.removeEventListener('seeked',item.sync);item.player.removeEventListener('error',item.error);item.player.removeAttribute('src');item.player.load();}strip.remove();root.classList.remove('sb-horizontal-active');delete root.dataset.processPanel;
    video.removeAttribute('src');video.load();video.remove();if(blobURL)URL.revokeObjectURL(blobURL);delete root.dataset.journeyVideo;
  }});
  function resize(w,h){
    width=w;height=h;vapour.resize(w,h);
    video.style.height=`${h}px`;video.style.left='0';video.style.top='0';video.style.transformOrigin='0 0';
  }
  resize(width,height);
  return {
    resize,
    update(p) {
      vapour.update(p);
      const w=width,h=height,mobile=w<768,join=ease(p,.19,.335);
      const startH=mobile?Math.min(h*.78,w*5/3):h*1.02;
      const endH=mobile?startH:Math.min(h*.76,(w/3)*1.4/.75);
      const moving=p<.341;
      const vh=moving?startH+(endH-startH)*join:startH;
      const x=w*(moving?((mobile?.5:.665)+((mobile?.5:1/6)-(mobile?.5:.665))*join):(mobile?.5:.665));
      const y=h*(moving?((mobile?.36:.45)+((mobile?.36:.40)-(mobile?.36:.45))*join):(mobile?.36:.45));
      video.style.transform=`translate3d(${x-vh*.375}px,${y-vh*.5}px,0) scale(${vh/h})`;
      target=timeFor(p);
      // The primary film is hidden while the horizontal routes own the screen.
      mainActive=p<.341||p>.556;
      if(mainActive)seek();
      const coverage=ready&&!failed ? ease(p,.090,.119)*(1-ease(p,.892,.930)) : 0;
      const horizontal=updatePanels(p,ready&&!failed);
      const alpha=coverage*(1-horizontal);
      video.style.opacity=alpha.toFixed(4);
      video.style.visibility=alpha>.001?'visible':'hidden';
      return coverage;
    }
  };
}
