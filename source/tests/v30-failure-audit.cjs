const {chromium,webkit}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('fs');
(async()=>{const engine=process.env.SB_ENGINE||'chromium';const b=await (engine==='webkit'?webkit.launch():chromium.launch({channel:'chrome'}));const results=[];
try{for(const name of ['normal','webgl-denied','save-data','one-photo-fails','video-fails','panel-delayed']){
const p=await b.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
await p.addInitScript(name=>{window.auditErrors=[];document.addEventListener('sb:visual-error',e=>auditErrors.push(e.detail));if(name==='webgl-denied'){const native=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(t,...a){return t.startsWith('webgl')?null:native.call(this,t,...a)}}if(name==='save-data')Object.defineProperty(navigator,'connection',{value:{saveData:true},configurable:true});},name);
if(name==='one-photo-fails')await p.route('**/photography/process/honey.webp',r=>r.abort());
if(name==='video-fails')await p.route('**/*.mp4',r=>r.abort());
if(name==='panel-delayed')await p.route('**/mobile/natural-v30.mp4',async r=>{await new Promise(resolve=>setTimeout(resolve,8000));try{await r.continue()}catch{}});
await p.goto(process.env.SB_URL||'https://stephen-blake.vercel.app/',{waitUntil:'load'});
await p.waitForTimeout(3500);
await p.evaluate(()=>{const t=window.ScrollTrigger?.getAll().find(t=>t.trigger?.id==='sb-origin');if(t)window.sbLenis.scrollTo(t.start+(t.end-t.start)*.38,{immediate:true})});await p.waitForTimeout(800);
const result=await p.evaluate(()=>({scripts:[...document.scripts].map(s=>s.src),class:document.documentElement.className,data:{...document.documentElement.dataset},errors:window.auditErrors,progress:document.querySelector('#sb-stage').dataset.journeyProgress,filmOpacity:document.querySelector('.sb-process-film')?.style.opacity,stripOpacity:document.querySelector('.sb-process-horizontal')?.style.opacity,canvasVisibility:document.querySelector('#sb-canvas').style.visibility,videos:[...document.querySelectorAll('video')].map(v=>({src:v.currentSrc,ready:v.readyState,time:v.currentTime,opacity:v.style.opacity,seeking:v.seeking}))}));results.push({name,...result});console.log(name,JSON.stringify(result));await p.close();}
fs.writeFileSync(process.env.SB_REPORT||'docs/V30-FAILURE-REPRODUCTIONS.json',JSON.stringify(results,null,2));}finally{await b.close()}})().catch(e=>{console.error(e);process.exit(1)});
