// Restrained, scroll-driven heat vapour. No independent loop or timer.
export function createRoastVapour(stage,own) {
 const ns='http://www.w3.org/2000/svg';const svg=document.createElementNS(ns,'svg');
 svg.classList.add('sb-roast-vapour');svg.setAttribute('aria-hidden','true');
 const paths=Array.from({length:4},()=>{const path=document.createElementNS(ns,'path');svg.append(path);return path;});
 stage.append(svg);own({dispose(){svg.remove();}});
 const ease=(p,a,b)=>{const t=Math.max(0,Math.min(1,(p-a)/(b-a)));return t*t*(3-2*t)};
 return {update(p){
  const alpha=ease(p,.712,.737)*(1-ease(p,.784,.804));svg.style.opacity=alpha.toFixed(4);svg.style.visibility=alpha>.001?'visible':'hidden';
  if(alpha<.001)return;
  const w=stage.clientWidth,h=stage.clientHeight,mobile=w<760;
  svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
  const vh=mobile?Math.min(h*.78,w*5/3):h*1.02,scale=vh/960;
  const cx=w*(mobile?.5:.665),cy=h*(mobile?.36:.45);
  const phase=(p-.712)*105;
  paths.forEach((path,i)=>{
   const x=cx+(-65+i*42)*scale,y=cy-(195+(i%2)*22)*scale;
   const sway=Math.sin(phase+i*1.7)*24*scale;
   path.setAttribute('d',`M ${x} ${y} C ${x-24*scale} ${y-38*scale}, ${x+sway+28*scale} ${y-69*scale}, ${x+sway} ${y-101*scale} S ${x-sway-20*scale} ${y-158*scale}, ${x+sway*.7} ${y-193*scale}`);
   path.style.strokeWidth=`${(i%2?9:13)*scale}px`;
   path.style.opacity=(.10+.035*Math.sin(phase+i)).toFixed(3);
  });
 }};
}
