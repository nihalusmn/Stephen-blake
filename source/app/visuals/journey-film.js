import { createRoastVapour } from './roast-vapour.js';
import { phoneLayout } from './media-policy.js';
import { createRecoveryFrames } from './recovery-frames.js';
import { createScrubSurface } from './scrub-surface.js';
export const FILM_CUES = [
  [.119,0],[.190,.45],[.335,1.50],[.412,10],[.488,15],[.560,20.50],
  [.645,26.50],[.700,30.50],[.802,38.50],[.872,44.50],[.900,49.05]
];
const clamp=n=>Math.max(0,Math.min(1,n));
const ease=(p,a,b)=>{const t=clamp((p-a)/(b-a));return t*t*(3-2*t);};
const PHONE_CHAPTERS=[
  {until:.560,name:'opening',offset:0}, {until:.645,name:'hulling',offset:20.5},
  {until:.700,name:'green',offset:26.5}, {until:.802,name:'roasting',offset:30.5},
  {until:.872,name:'grinding',offset:38.5}, {until:Infinity,name:'collection',offset:44.5}
];
export function filmTime(p) {
  if(p<=FILM_CUES[0][0])return 0;
  for(let i=1;i<FILM_CUES.length;i++){
    const [p1,t1]=FILM_CUES[i],[p0,t0]=FILM_CUES[i-1];
    if(p<=p1)return t0+(t1-t0)*clamp((p-p0)/(p1-p0));
  }
  return FILM_CUES[FILM_CUES.length-1][1];
}
export function createJourneyFilm(stage,own,invalidate){
  const root=document.documentElement,frames=createRecoveryFrames();
  let width=stage.clientWidth,height=stage.clientHeight,phone=phoneLayout(width),disposed=false,lastProgress=0;
  // Request the opening picture before optional panel media. It is a frame of
  // this same film, and stays usable while the decoder starts on cellular.
  frames.get(0);
  const main=createScrubSurface({className:'sb-journey-surface',frames,changed:invalidate});stage.append(main.element);
  const strip=document.createElement('section');strip.className='sb-process-horizontal';strip.setAttribute('aria-label','Three alternative coffee processing methods');
  const track=document.createElement('div');track.className='sb-process-horizontal__track';strip.append(track);stage.append(strip);
  const definitions=[
    {name:'Natural',note:4,start:.335,end:.412,t0:1.50,t1:9.70},
    {name:'Honey',note:2,start:.412,end:.488,t0:10,t1:14.70},
    {name:'Washed',note:3,start:.488,end:.550,t0:15,t1:20.48}
  ];
  const panels=definitions.map((d,i)=>{
    const panel=document.createElement('article');panel.className='sb-process-horizontal__panel';panel.dataset.method=d.name.toLowerCase();
    const label=document.createElement('p');label.className='sb-process-horizontal__label';label.textContent=`0${i+1} / ${d.name} process`;
    const surface=createScrubSurface({className:'sb-panel-surface',frames,changed:invalidate});
    const caption=document.createElement('div');caption.className='sb-notes';
    const note=document.createElement('figure');note.className='sb-panel-note';
    const source=stage.querySelector(`[data-note="${d.note}"]`);
    for(const child of source.childNodes)note.append(child.cloneNode(true));
    caption.append(note);panel.append(label,surface.element,caption);track.append(panel);
    // Independent exact-film cover frames, ready before the panel is approached.
    frames.get(frames.frame(d.t0,[d.t0,d.t1]));
    return {...d,panel,surface,note,source};
  });
  const surfaces=[main,...panels.map(p=>p.surface)];
  const retry=document.createElement('button');retry.type='button';retry.className='sb-motion-retry';retry.textContent='Retry motion';retry.hidden=true;
  retry.setAttribute('aria-label','The film is using recovery frames. Retry loading video motion.');stage.append(retry);
  const retryAll=()=>surfaces.filter(s=>s.active).forEach(s=>s.retry());retry.addEventListener('click',retryAll);
  const resume=()=>{if(!document.hidden)surfaces.forEach(s=>{if(['error','fallback'].includes(s.state))s.retry();else s.resume();});};
  const gesture=()=>surfaces.forEach(s=>s.resume(true));
  document.addEventListener('visibilitychange',resume);window.addEventListener('pageshow',resume);window.addEventListener('online',resume);
  window.addEventListener('pointerup',gesture,{passive:true});window.addEventListener('touchend',gesture,{passive:true});window.addEventListener('keydown',gesture);
  const vapour=createRoastVapour(stage,own);
  function mainSource(p){
    const chapter=PHONE_CHAPTERS.find(c=>p<c.until);
    main.source(phone?`assets/video/mobile/${chapter.name}-v31.mp4`:'assets/video/coffee-journey-v28.mp4',phone?chapter.offset:0);
  }
  function setSources(){
    mainSource(lastProgress);
    panels.forEach(p=>p.surface.source(phone?`assets/video/mobile/${p.name.toLowerCase()}-v31.mp4`:'assets/video/coffee-journey-v28.mp4',phone?p.t0:0));
  }
  function sizeSurface(surface,x,y,h){
    const el=surface.element;el.style.width=`${h*.75}px`;el.style.height=`${h}px`;
    el.style.left=`${x}px`;el.style.top=`${y}px`;el.style.transform='translate(-50%,-50%)';
  }
  function resize(w,h){
    width=w;height=h;const next=phoneLayout(w);if(next!==phone){phone=next;setSources();}
    vapour.resize(w,h);
    panels.forEach(p=>sizeSurface(p.surface,phone?w*.5:w/6,h*(phone?.36:.40),phone?Math.min(h*.78,w*5/3):Math.min(h*(p.name==='Honey'?1.1:.76),w/3*(p.name==='Honey'?1.8:1.4)/.75)));
  }
  setSources();resize(width,height);main.prepare();
  own({dispose(){
    disposed=true;document.removeEventListener('visibilitychange',resume);window.removeEventListener('pageshow',resume);window.removeEventListener('online',resume);
    window.removeEventListener('pointerup',gesture);window.removeEventListener('touchend',gesture);window.removeEventListener('keydown',gesture);
    retry.removeEventListener('click',retryAll);retry.remove();surfaces.forEach(s=>s.dispose());frames.dispose();strip.remove();
    root.classList.remove('sb-horizontal-active');delete root.dataset.processPanel;delete root.dataset.journeyVideo;
  }});
  return {resize,update(p){
    if(disposed)return;
    lastProgress=p;mainSource(p);
    if(phone && p>.50 && p<.90) {
      const index=PHONE_CHAPTERS.findIndex(c=>p<c.until);
      const next=PHONE_CHAPTERS[Math.min(index+1,PHONE_CHAPTERS.length-1)];
      main.warm(`assets/video/mobile/${next.name}-v31.mp4`);
    }
    vapour.update(p);
    const horizontal=ease(p,.329,.341)*(1-ease(p,.556,.574));
    strip.style.opacity=horizontal.toFixed(4);strip.style.visibility=horizontal>.001?'visible':'hidden';
    strip.style.transform=`translate3d(0,${-ease(p,.556,.574)*100}%,0)`;
    const shift=ease(p,.402,.424)+ease(p,.478,.500);
    track.style.transform=phone?`translate3d(${-shift*100/3}%,0,0)`:'none';
    root.classList.toggle('sb-horizontal-active',horizontal>.01);root.dataset.processPanel=p<.412?'natural':p<.488?'honey':'washed';
    for(const [i,item] of panels.entries()){
      const reveal=ease(p,item.start-.006,item.start+.024);
      item.panel.style.transform=!phone&&i?`translate3d(${(1-reveal)*width*.52}px,0,0)`:'none';
      item.panel.style.opacity=!phone&&i?ease(p,item.start-.006,item.start+.006).toFixed(4):'1';
      item.note.style.opacity=phone?item.source.style.opacity:'1';
      if(p>.23&&p<.59&&(!phone||p>item.start-.10))item.surface.prepare();
      item.surface.update(item.t0+(item.t1-item.t0)*clamp((p-item.start)/(item.end-item.start)),horizontal>.001&&(phone?Math.abs(shift-i)<1.001:reveal>.001),item.name.toLowerCase(),[item.t0,item.t1]);
    }
    const join=ease(p,.19,.335),moving=p<.341,startH=phone?Math.min(height*.78,width*5/3):height*1.02;
    const endH=phone?startH:Math.min(height*.76,width/3*1.4/.75),vh=moving?startH+(endH-startH)*join:startH;
    const x=width*(moving?((phone?.5:.665)+((phone?.5:1/6)-(phone?.5:.665))*join):(phone?.5:.665));
    const y=height*(moving?((phone?.36:.45)+((phone?.36:.40)-(phone?.36:.45))*join):(phone?.36:.45));
    sizeSurface(main,x,y,vh);
    const alpha=ease(p,.090,.119)*(1-ease(p,.892,.930))*(1-horizontal);
    main.element.style.opacity=alpha.toFixed(4);main.element.style.visibility=alpha>.001?'visible':'hidden';
    const key=p<.190?'origin':p<.335?'harvest':p<.560?'processing':p<.645?'hulling':p<.700?'green':p<.802?'roasting':p<.872?'grinding':'collection';
    const range=p<.335?[0,1.5]:p<.560?[1.5,20.5]:p<.645?[20.5,26.5]:p<.700?[26.5,30.5]:p<.802?[30.5,38.5]:p<.872?[38.5,44.5]:[44.5,49.05];
    main.update(filmTime(p),(p<.341||p>.556)&&p<.935,key,range);
    root.dataset.journeyVideo=main.state;
    retry.hidden=p<.1||p>.93||!surfaces.some(s=>s.active&&['fallback','error'].includes(s.state));
  }};
}
