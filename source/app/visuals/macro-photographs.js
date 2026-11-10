import * as THREE from 'three';
import { createJourneyFilm } from './journey-film.js';
import { createHeroHandoff } from './hero-handoff.js';
const cherryURL = 'assets/photography/macro/cherry.webp';
const greenURL = 'assets/photography/macro/green.webp';
const roastedURL = 'assets/photography/macro/roasted.webp';
const peelURL = 'assets/photography/process/peel.webp';
const naturalURL = 'assets/photography/process/natural.webp';
const parchmentURL = 'assets/photography/process/parchment.webp';
const honeyURL = 'assets/photography/process/honey.webp';
const goldenURL = 'assets/photography/process/golden.webp';
const groundsURL = 'assets/photography/process/grounds.webp';

// A reversible photographic film: every transform is a function of scroll.
// DOM compositing preserves the source detail on high-density mobile screens.
// DOM images use separate cacheable files, including when the ZIP opens locally.
export function createMacroPhotographs(world, camera, own, invalidate) {
  const stage = document.getElementById('sb-stage');
  const root = document.documentElement;
  const film = document.createElement('div');
  film.className = 'sb-process-film';
  film.setAttribute('aria-hidden','true');
  stage.append(film);
  const motion = createJourneyFilm(stage, own, invalidate);
  const opening = createHeroHandoff(stage, own, invalidate);
  let ready = false, disposed = false;
  let width=stage.clientWidth,height=stage.clientHeight;
  const urls = {cherry:cherryURL, green:greenURL, roasted:greenURL, peel:peelURL,
    natural:naturalURL, parchment:parchmentURL, honey:honeyURL, golden:goldenURL, grounds:groundsURL};
  const layers = {}, fragments = [];
  const clamp = n => Math.max(0,Math.min(1,n));
  const smooth = (p,a,b) => {const t=clamp((p-a)/(b-a));return t*t*(3-2*t);};
  const mix = (a,b,t) => a+(b-a)*t;
  const span = (p,a,b,c,d) => smooth(p,a,b)*(1-smooth(p,c,d));
  function layer(name,url) {
    const el = new Image(); el.alt=''; el.draggable=false; el.src=url;
    el.className='sb-process-object'; el.dataset.object=name;
    film.append(el); layers[name]=el; return el;
  }
  Object.entries(urls).forEach(([name,url])=>layer(name,url));
  layers.roasted.style.filter='sepia(1) saturate(1.7) brightness(.48)';
  for(const [name,url] of [['peelLeft',peelURL],['peelRight',peelURL],['hullLeft',parchmentURL],['hullRight',parchmentURL]]) {
    const el=layer(name,url);
    el.style.clipPath=name.endsWith('Left')?'inset(0 50% 0 0)':'inset(0 0 0 50%)';
  }
  // Real coffee texture breaks into small irregular pieces, then settles.
  const cols=7,rows=10;
  for(let row=0;row<rows;row++)for(let col=0;col<cols;col++){
    const el=document.createElement('i'); el.className='sb-coffee-fragment';
    el.style.backgroundImage=`url("${roastedURL}")`;
    el.style.backgroundSize=`${cols*100}% ${rows*100}%`;
    el.style.backgroundPosition=`${col/(cols-1)*100}% ${row/(rows-1)*100}%`;
    el.style.clipPath='polygon(7% 3%,96% 0,100% 81%,73% 100%,0 90%)';
    film.append(el); fragments.push({el,row,col,noise:Math.sin((row*cols+col)*127.1)*.5+.5});
  }
  Promise.allSettled(Object.values(layers).map(el=>el.decode())).then(()=>{
    if(disposed)return;
    ready=true;
    const usable=Object.values(layers).every(el=>el.naturalWidth>0&&el.naturalHeight>0);
    root.dataset.macroReady='true';
    if(!usable)root.dataset.macroDegraded='true';
    invalidate();
  });
  own({dispose(){disposed=true;film.remove();root.classList.remove('sb-film-light');delete root.dataset.macroReady;delete root.dataset.macroDegraded;delete root.dataset.processStage;}});
  function put(name,x,y,h,alpha=1,angle=0,width) {
    const el=layers[name];
    if(!el||!el.naturalWidth||!el.naturalHeight){if(el)el.style.opacity='0';return;}
    const w=width||h*el.naturalWidth/el.naturalHeight;
    el.style.width=`${w.toFixed(2)}px`; el.style.height=`${h.toFixed(2)}px`;
    el.style.transform=`translate3d(${(x-w/2).toFixed(2)}px,${(y-h/2).toFixed(2)}px,0) rotate(${angle.toFixed(3)}deg)`;
    el.style.opacity=clamp(alpha).toFixed(4);
  }
  const v=new THREE.Vector3(),eye=new THREE.Vector3();
  return {get ready(){return ready;}, resize(w,h){width=w;height=h;motion.resize(w,h);opening.resize(w,h);}, update(p,cherry,seed,bean,roast,beanSize,alive){
    opening.update(p);
    // Drive the video before still-image decoding completes. On mobile Safari
    // a failed optional still used to keep the prior 3D scene on screen and
    // prevent the approved film from ever being revealed.
    const coverage=motion.update(p,true);
    if(!ready){film.style.opacity='0';return coverage>.999;}
    const w=width,h=height,mobile=w<768;
    const entry=smooth(p,.113,.140),out=1-smooth(p,.925,.982);
    film.style.opacity=(entry*out*(1-coverage)).toFixed(4);
    film.style.visibility=entry*out*(1-coverage)>.001?'visible':'hidden';
    root.classList.toggle('sb-film-light',p>.109);
    const chapter=p<.190?'origin':p<.335?'harvest':p<.412?'natural':p<.488?'honey':p<.56?'washed':p<.645?'hulling':p<.700?'green':p<.802?'roasting':p<.872?'grinding':'collection';
    root.dataset.processStage=chapter;
    // Do not animate 83 invisible fallback layers under the opaque film.
    if(coverage>.999 || entry*out<.001)return true;
    for(const el of Object.values(layers))el.style.opacity='0';
    for(const f of fragments)f.el.style.opacity='0';
    // Let the photograph's hanging cherry establish the exact first anchor.
    v.copy(cherry.position).project(camera);
    eye.copy(cherry.position).applyMatrix4(camera.matrixWorldInverse);
    const initialH=cherry.scale.x*2.16*h/(2*Math.abs(eye.z)*Math.tan(camera.fov*Math.PI/360));
    const enter=smooth(p,.085,.190);
    const touch=matchMedia('(pointer: coarse)').matches;
    const centerX=(mobile||touch)?w*.5:w*.665;
    const centerY=(mobile||touch)?h*.38:h*.45;
    const objectH=Math.min(h*((mobile||touch)?.37:.48),w*((mobile||touch)?.72:.34));
    const x=mix((v.x+1)*w/2,centerX,enter);
    const y=mix((1-v.y)*h/2,centerY,enter);
    const cherryH=mix(initialH,objectH,enter);
    // The still-image fallback follows the same Natural → Honey → Washed order.
    const peel=smooth(p,.418,.462);
    if(p<.335) put('cherry',x,y,cherryH,1-smooth(p,.329,.345),mix(-2,1,enter));
    put('natural',centerX,centerY,objectH*.9,span(p,.329,.350,.407,.430),-2);
    if(p>.409&&p<.488){
      put('cherry',centerX,centerY,objectH,1-smooth(p,.418,.459));
      put('honey',centerX,centerY,objectH*.86,smooth(p,.442,.468),0,objectH*.57);
      const shellAlpha=span(p,.418,.435,.459,.479);
      for(const side of [-1,1])put(side<0?'peelLeft':'peelRight',centerX+side*peel*objectH*.34,centerY+peel*peel*objectH*.24,objectH*.94,shellAlpha,side*peel*28,objectH*.95);
    }
    put('parchment',centerX,centerY,objectH*.86,span(p,.484,.505,.555,.580),0,objectH*.57);
    // Parchment removal follows the three alternative processing methods.
    const hull=smooth(p,.568,.631);
    const hullAlpha=span(p,.560,.574,.610,.645);
    for(const side of [-1,1])put(side<0?'hullLeft':'hullRight',centerX+side*hull*objectH*.34,centerY+hull*hull*objectH*.19,objectH*.86,hullAlpha,side*hull*24,objectH*.57);
    const green=span(p,.592,.633,.710,.795);
    put('green',centerX,centerY,objectH*.86,green,-2,objectH*.57);
    const golden=0;
    put('golden',centerX,centerY,objectH*mix(.86,.91,smooth(p,.738,.778)),golden,-2,objectH*.60);
    const roasted=smooth(p,.705,.796)*(1-smooth(p,.802,.85));
    const roastH=objectH*.86,roastW=objectH*.57;
    put('roasted',centerX,centerY,roastH,roasted,-2,roastW);
    const crush=smooth(p,.802,.865);
    if(p>.802&&p<.877){
      // Bottom grains release first; each remains tied to its source location.
      layers.roasted.style.clipPath=`inset(0 0 ${crush*100}% 0)`;
      layers.roasted.style.opacity=(1-smooth(p,.839,.865)).toFixed(4);
      for(const f of fragments){
        const local=smooth(p,.803+(9-f.row)*.003,.832+(9-f.row)*.003);
        const a=local*(1-smooth(p,.850,.878));
        const tx=centerX-roastW/2+f.col*roastW/cols+(f.noise-.5)*roastW*.8*local;
        const ty=centerY-roastH/2+f.row*roastH/rows+local*local*objectH*.56;
        f.el.style.width=`${roastW/cols+1}px`;f.el.style.height=`${roastH/rows+1}px`;
        f.el.style.transform=`translate3d(${tx}px,${ty}px,0) rotate(${(f.noise-.5)*130*local}deg) scale(${1-local*.65})`;
        f.el.style.opacity=a.toFixed(4);
      }
    }else layers.roasted.style.clipPath='none';
    const pile=smooth(p,.827,.863);
    put('grounds',centerX,centerY+objectH*.31,objectH*.35,pile,0,objectH*.85);
    // The final specimens move directly into the real collection photographs.
    if(p>.873){
      const compose=smooth(p,.873,.943);
      const cards=[...document.querySelectorAll('.sb-card__img')];
      const names={green:'green',roasted:'roasted',filter:'grounds'};
      cards.forEach((card,i)=>{
        const r=card.getBoundingClientRect(),sr=stage.getBoundingClientRect();
        const name=names[card.closest('.sb-card').dataset.cat];
        const grounds=name==='grounds';
        const targetH=r.height*.61;
        const fromX=grounds?centerX:centerX+(name==='green'?-1:1)*objectH*.28;
        const alpha=grounds?1:smooth(p,.875,.904);
        const hh=mix(grounds?objectH*.35:objectH*.67,targetH,compose);
        put(name,mix(fromX,r.left-sr.left+r.width/2,compose),mix(centerY+(grounds?objectH*.31:0),r.top-sr.top+r.height*.46,compose),hh,alpha,0,hh*(grounds?1.9:.67));
      });
      layers.roasted.style.clipPath='none';
    }
    // Photographic entry and product handoff surround the actual motion film.
    // The complete still sequence remains available if video decoding fails.
    return true;
  }};
}
