import { ScrollTrigger } from '../animations/core.js';
import { createJourneyFilm } from './journey-film.js';
import { phoneLayout } from './media-policy.js';
import { openingGeometry, createHeroHandoff } from './hero-handoff.js';

const NOTE_T = [
  [.108,.123,.188],[.190,.214,.332],[.418,.436,.484],[.494,.512,.556],
  [.333,.345,.408],[.572,.598,.641],[.650,.665,.696],[.707,.721,.798],
  [.806,.821,.870],[.872,.880,.910]
];
const STAGE_T = [[0,.190],[.190,.335],[.335,.560],[.560,.645],[.645,.700],[.700,.802],[.802,.875]];
const clamp = n => Math.max(0,Math.min(1,n));
const smooth = (p,a,b) => {const t=clamp((p-a)/(b-a));return t*t*(3-2*t);};
const seg = (p,a,b) => clamp((p-a)/(b-a));

// The single production timeline for every device. No WebGL renderer and no
// optional macro-image dependency can prevent the approved film from running.
export function createFilmOnlyJourney() {
  const root=document.documentElement;
  const origin=document.getElementById('sb-origin');
  const stage=document.getElementById('sb-stage');
  if(!origin||!stage)return null;

  const canvas=document.getElementById('sb-canvas');
  const loader=document.getElementById('sb-loader');
  const bgPlant=document.getElementById('hero-bg');
  const bgHills=document.getElementById('sb-hills');
  const bgStudio=document.getElementById('sb-studio');
  const bgPaper=document.getElementById('sb-paper');
  const veil=document.getElementById('sb-veil');
  const hero=stage.querySelector('.hero');
  const notes=[...stage.querySelectorAll('.sb-note')];
  const rail=document.getElementById('sb-rail');
  const railSteps=[...stage.querySelectorAll('.sb-rail__step')];
  const cats=document.getElementById('coffees');
  const catsHead=stage.querySelector('.sb-cats__head');
  const cards=[...stage.querySelectorAll('.sb-card')];
  const touch=matchMedia('(pointer: coarse)').matches;
  let width=stage.clientWidth||innerWidth;
  let height=innerHeight,viewportWidth=innerWidth;
  let disposed=false,resizeTimer,lastProgress=0,mediaRaf=0;
  const oldVars=['--sb-track','--sb-collection-trim','--sb-viewport'];
  const previousVars=Object.fromEntries(oldVars.map(k=>[k,root.style.getPropertyValue(k)]));
  const cleanups=[];

  root.classList.add('sb-on','sb-film-only');
  root.dataset.motionMode='film-only';
  if(canvas)canvas.style.display='none';
  loader?.classList.add('is-done');

  const invalidate=()=>{if(!disposed&&!mediaRaf)mediaRaf=requestAnimationFrame(()=>{mediaRaf=0;apply(lastProgress);});};
  const own=item=>cleanups.push(item);
  const film=createJourneyFilm(stage,own,invalidate);
  const openingImage=createHeroHandoff(stage,own,invalidate);

  function noteAt(el,p,[a,b,c]){
    const inn=smooth(p,a,b),out=smooth(p,c-Math.min(.012,(c-b)*.3),c),v=inn*(1-out);
    el.style.opacity=v.toFixed(3);
    el.style.transform=`translateY(${((1-inn)*18-out*14).toFixed(1)}px)`;
  }
  function updateRail(p){
    if(!rail)return;
    rail.style.opacity=seg(p,.05,.12)*(1-seg(p,.878,.92));
    railSteps.forEach((el,i)=>{
      const [a,b]=STAGE_T[i],value=clamp((p-a)/(b-a)),bar=el.querySelector('i');
      if(bar)bar.style.width=`${(value*100).toFixed(1)}%`;
      el.classList.toggle('is-now',p>=a&&p<b);el.classList.toggle('is-done',p>=b);
    });
  }
  function updateCategories(p){
    if(!cats)return;
    const show=seg(p,.900,.962);
    cats.style.opacity=show.toFixed(3);cats.style.pointerEvents=show>.9?'auto':'none';cats.inert=show<=.9;
    const head=seg(p,.906,.948);
    if(catsHead){catsHead.style.opacity=head.toFixed(3);catsHead.style.transform=`translate3d(0,${((1-head)*18).toFixed(1)}px,0)`;}
    const imageOpacity=smooth(p,.920,.985);
    cards.forEach((card,i)=>{
      const img=card.querySelector('img'),body=card.querySelector('.sb-card__body'),scrim=card.querySelector('.sb-card__scrim');
      if(img)img.style.opacity=imageOpacity.toFixed(3);
      if(scrim)scrim.style.opacity=imageOpacity.toFixed(3);
      if(body){const value=clamp((seg(p,.962,1)-i*.02)/.94);body.style.opacity=value.toFixed(3);body.style.transform=`translate3d(0,${((1-value)*16).toFixed(1)}px,0)`;}
    });
  }
  function apply(p){
    if(disposed)return;
    p=clamp(p);lastProgress=p;stage.dataset.journeyProgress=p.toFixed(6);
    const toPaper=seg(p,.905,.985);
    const opening=openingGeometry(width,height,p);
    if(bgPlant){bgPlant.style.transformOrigin='0 0';bgPlant.style.transform=`translate3d(${opening.tx}px,${opening.ty}px,0) scale(${opening.zoom})`;bgPlant.style.filter='none';bgPlant.style.opacity=(1-smooth(p,.078,.116)).toFixed(3);}
    if(bgHills)bgHills.style.opacity='0';
    if(bgStudio)bgStudio.style.opacity=(smooth(p,.078,.116)*(1-toPaper)).toFixed(3);
    if(bgPaper)bgPaper.style.opacity=toPaper.toFixed(3);
    // The dark estate scrim ends with the photograph; it must not tint the
    // daylight film or expose a dark rectangle around its masked edges.
    if(veil)veil.style.opacity=(.82*(1-smooth(p,.055,.110))).toFixed(3);
    if(hero){const opacity=1-seg(p,.012,.052);hero.style.opacity=opacity.toFixed(3);hero.style.transform=`translate3d(0,${(-seg(p,.010,.078)*46).toFixed(1)}px,0)`;hero.style.visibility=opacity<.01?'hidden':'visible';hero.inert=opacity<.1;}
    notes.forEach((el,i)=>NOTE_T[i]&&noteAt(el,p,NOTE_T[i]));
    updateRail(p);updateCategories(p);
    root.classList.toggle('sb-film-light',p>.109);
    root.dataset.processStage=p<.190?'origin':p<.335?'harvest':p<.412?'natural':p<.488?'honey':p<.56?'washed':p<.645?'hulling':p<.700?'green':p<.802?'roasting':p<.872?'grinding':'collection';
    openingImage.update(p);film.update(p);
  }
  function layout(){
    if(disposed)return;
    width=stage.clientWidth||innerWidth;height=innerHeight;viewportWidth=innerWidth;
    if(touch)root.style.setProperty('--sb-viewport',`${height}px`);
    root.dataset.motionLayout=phoneLayout(width)?'phone':'desktop';
    // The full film contains nine chapters. Give a phone swipe the same
    // chapter travel as desktop instead of compressing them into 3.6 screens.
    root.style.setProperty('--sb-track',`${6.676*height}px`);
    film.resize(width,height);openingImage.resize(width,height);
    const wrap=cats?.querySelector('.wrap');
    root.style.setProperty('--sb-collection-trim',`${Math.max(0,height-(cats?parseFloat(getComputedStyle(cats).paddingTop)||0:0)-(wrap?.offsetHeight||height)-24)}px`);
  }
  layout();
  const storyEnd=parseFloat(getComputedStyle(root).getPropertyValue('--sb-story'))||1;
  const trigger=ScrollTrigger.create({
    trigger:origin,start:'top top',end:()=>`+=${Math.max(1,origin.offsetHeight-height)}`,scrub:true,
    onUpdate:self=>apply(self.progress/storyEnd),
    onRefresh:self=>apply(self.progress/storyEnd)
  });
  window.addEventListener('resize',onResize,{passive:true});
  window.addEventListener('orientationchange',onResize,{passive:true});
  const fontsChanged=()=>{if(!disposed){layout();ScrollTrigger.refresh();}};
  document.fonts?.ready?.then(fontsChanged);
  document.fonts?.addEventListener('loadingdone',fontsChanged);
  function onResize(){
    if(touch&&innerWidth===viewportWidth&&Math.abs(innerHeight-height)<height*.25){clearTimeout(resizeTimer);return;}
    const progress=lastProgress,withinJourney=scrollY>=trigger.start&&scrollY<=trigger.end;
    clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{
      layout();ScrollTrigger.refresh();window.sbLenis?.resize();
      if(withinJourney){const y=trigger.start+(trigger.end-trigger.start)*storyEnd*progress;
        if(window.sbLenis)window.sbLenis.scrollTo(y,{immediate:true});else window.scrollTo(0,y);
        apply(progress);
      }
    },140);
  }
  ScrollTrigger.refresh();
  apply(trigger.progress/storyEnd);

  function dispose(){
    if(disposed)return;disposed=true;clearTimeout(resizeTimer);cancelAnimationFrame(mediaRaf);trigger.kill();
    window.removeEventListener('resize',onResize);window.removeEventListener('orientationchange',onResize);document.fonts?.removeEventListener('loadingdone',fontsChanged);
    cleanups.splice(0).reverse().forEach(item=>item.dispose?.());
    [bgPlant,bgHills,bgStudio,bgPaper,veil,hero,cats,catsHead,rail].forEach(el=>el?.removeAttribute('style'));
    notes.concat(cards).forEach(el=>el.removeAttribute('style'));
    cards.forEach(card=>['img','.sb-card__body','.sb-card__scrim'].forEach(sel=>card.querySelector(sel)?.removeAttribute('style')));
    if(hero)hero.inert=false;if(cats)cats.inert=false;
    if(canvas)canvas.removeAttribute('style');
    root.classList.remove('sb-on','sb-film-only','sb-film-light');delete root.dataset.motionMode;delete root.dataset.motionLayout;delete root.dataset.processStage;
    delete stage.dataset.journeyProgress;
    oldVars.forEach(k=>previousVars[k]?root.style.setProperty(k,previousVars[k]):root.style.removeProperty(k));
    ScrollTrigger.refresh();
  }
  return {dispose};
}
