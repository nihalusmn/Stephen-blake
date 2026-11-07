// One screen-space camera ties the estate cherry to the first motion frame.
// Coordinates refer to the unchanged estate master and the selected film.
const clamp = x => Math.max(0, Math.min(1, x));
export const openingEase = (p, a, b) => { const t=clamp((p-a)/(b-a)); return t*t*(3-2*t); };
const mix = (a,b,t) => a+(b-a)*t;
export function openingGeometry(w,h,p) {
  const cover=Math.max(w/1672,h/941);
  const anchorX=(w-1672*cover)/2+967.5*cover;
  const anchorY=(h-941*cover)/2+236.5*cover;
  const mobile=w<760;
  const videoH=mobile?Math.min(h*.78,w*5/3):h*1.02;
  const videoW=videoH*.75;
  const videoX=w*(mobile?.5:.665),videoY=h*(mobile?.36:.45);
  // Body bounds in the unchanged opening frame, excluding its stem.
  const targetX=videoX+(360-360)*videoH/960;
  const targetY=videoY+(385-480)*videoH/960;
  const targetH=420*videoH/960;
  const t=openingEase(p,.004,.105);
  const zoom=Math.exp(Math.log(targetH/(45*cover))*t);
  const x=mix(anchorX,targetX,t),y=mix(anchorY,targetY,t);
  const bodyH=45*cover*zoom;
  return {x,y,zoom,tx:x-anchorX*zoom,ty:y-anchorY*zoom,bodyH,
    frameScale:bodyH/420,videoH,videoW,targetX,targetY,targetH};
}
export function createHeroHandoff(stage,own,invalidate) {
  const image=new Image(); image.alt='';image.draggable=false;
  image.className='sb-hero-match';image.setAttribute('aria-hidden','true');
  image.src='assets/video/coffee-journey-poster-v28.jpg';
  // A code-native silhouette mask isolates the existing opening frame. No
  // new generated cherry or replacement estate photograph is introduced.
  const mask=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 960"><defs><filter id="soft" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="1.2"/></filter></defs><path fill="white" filter="url(#soft)" d="M350 175 C285 170 247 214 225 281 C203 346 207 427 232 484 C257 549 299 590 355 595 C420 594 466 547 492 486 C518 419 513 333 487 267 C459 204 416 176 370 175 Z"/></svg>`;
  image.style.maskImage=`url("data:image/svg+xml,${encodeURIComponent(mask)}")`;
  stage.append(image);
  let disposed=false,ready=false;
  image.decode().then(()=>{if(!disposed){ready=true;invalidate();}}).catch(()=>{});
  own({dispose(){disposed=true;image.remove();}});
  return {update(p){
    const g=openingGeometry(stage.clientWidth,stage.clientHeight,p);
    const alpha=ready?openingEase(p,.025,.060)*(1-openingEase(p,.105,.119)):0;
    image.style.opacity=alpha.toFixed(4);
    image.style.visibility=alpha>.001?'visible':'hidden';
    if(alpha>.001){
      const settle=1-openingEase(p,.080,.105);
      const sx=g.frameScale*(1+.24*settle),sy=g.frameScale*(1+.13*settle);
      image.style.width=`${720*sx}px`;image.style.height=`${960*sy}px`;
      image.style.transform=`translate3d(${g.x-360*sx}px,${g.y-385*sy}px,0)`;
    }
    return g;
  }};
}
