const runtime='/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/';
const {chromium,webkit}=require(runtime+'playwright'),{PNG}=require(runtime+'pngjs');
const assert=require('node:assert/strict'),fs=require('node:fs');
const base=process.env.SB_URL||'http://127.0.0.1:4175/dist/';
const engine=process.env.SB_ENGINE||'chromium';
const report=process.env.SB_REPORT||`docs/V31-${engine}-acceptance.json`;
const results=[],errors=[];fs.mkdirSync('output/v31',{recursive:true});
const selector=t=>t===.38?'[data-method="natural"] .sb-panel-surface':t===.46?'[data-method="honey"] .sb-panel-surface':t===.53?'[data-method="washed"] .sb-panel-surface':'.sb-journey-surface';
async function go(p,t){
 const before=await p.evaluate(t=>{const s=window.ScrollTrigger.getAll().find(x=>x.trigger?.id==='sb-origin');const b={start:s.start,end:s.end,width:innerWidth,height:innerHeight,stage:document.querySelector('#sb-stage').clientHeight,origin:document.querySelector('#sb-origin').offsetHeight,vars:document.documentElement.style.cssText};window.scrollTo(0,s.start+(s.end-s.start)*t);return b;},t);
 try{await p.waitForFunction(t=>Math.abs(+document.querySelector('#sb-stage').dataset.journeyProgress-t)<.002,t,{timeout:6000});}catch(e){console.log('SCROLL TIMEOUT',t,before,await p.evaluate(()=>({p:document.querySelector('#sb-stage').dataset.journeyProgress,y:scrollY,w:innerWidth,h:innerHeight,vars:document.documentElement.style.cssText,log:JSON.stringify(window.__scrollLog)})));throw e;}
 await p.waitForTimeout(100);
}
async function frame(p,t,label,sequence=false){
 await go(p,t);const sel=selector(t);
 try{await p.waitForFunction(({sel,sequence})=>{const el=document.querySelector(sel);return el?.dataset.hasFrame==='true'&&el.dataset.presentation!=='preview'&&Math.abs(+el.dataset.frameTime-+el.dataset.targetTime)<.16&&(!sequence||el.dataset.presentation==='sequence')},{sel,sequence},{timeout:16000});}catch(error){console.log('FRAME TIMEOUT',label,t,await p.evaluate(()=>({progress:document.querySelector('#sb-stage').dataset.journeyProgress,surfaces:[...document.querySelectorAll('.sb-journey-surface,.sb-panel-surface')].map(e=>({...e.dataset,time:e.querySelector('video').currentTime,ready:e.querySelector('video').readyState,seeking:e.querySelector('video').seeking,error:e.querySelector('video').error?.code}))})));throw error;}
 const check=await p.locator(sel).evaluate(async el=>{
  const c=el.querySelector('canvas'),time=+el.dataset.frameTime,index=Math.min(196,Math.round(time*4));
  const img=new Image();img.src=`assets/video/recovery-v31/frame-${String(index).padStart(3,'0')}.jpg`;await img.decode();
  const ref=document.createElement('canvas');ref.width=c.width;ref.height=c.height;const x=ref.getContext('2d');x.drawImage(img,0,0,c.width,c.height);
  const a=c.getContext('2d').getImageData(0,0,c.width,c.height).data,b=x.getImageData(0,0,c.width,c.height).data;let difference=0,n=0,subject=0;
  for(let y=Math.round(c.height*.2);y<c.height*.7;y+=5)for(let xx=Math.round(c.width*.25);xx<c.width*.75;xx+=5){const i=(y*c.width+xx)*4;for(let ch=0;ch<3;ch++){difference+=Math.abs(a[i+ch]-b[i+ch]);n++;}if(Math.min(a[i],a[i+1],a[i+2])<150)subject++;}
  return {...el.dataset,difference:difference/n,subject,rect:{x:el.getBoundingClientRect().x,y:el.getBoundingClientRect().y,width:el.getBoundingClientRect().width,height:el.getBoundingClientRect().height},canvasWidth:c.width,canvasVisibility:getComputedStyle(c).visibility,overflow:document.documentElement.scrollWidth>innerWidth};
 });
 assert(check.difference<25,`${label}: displayed pixels differ from approved film: ${check.difference}`);
 assert(check.subject>8,`${label}: empty picture`);assert.equal(check.canvasVisibility,'visible');assert(!check.overflow);
 // Read actual screen pixels over the specimen: catches an opaque strip,
 // hidden canvas or another layer obscuring an otherwise valid buffer.
 const shot=PNG.sync.read(await p.screenshot());let dark=0,total=0;
 const r=check.rect;const left=Math.max(0,Math.floor(r.x+r.width*.30)),right=Math.min(shot.width,Math.floor(r.x+r.width*.70));
 const top=Math.max(90,Math.floor(r.y+r.height*.24)),bottom=Math.min(shot.height,Math.floor(r.y+r.height*.60));
 for(let y=top;y<bottom;y+=3)for(let x=left;x<right;x+=3){const i=(y*shot.width+x)*4;total++;if(Math.min(shot.data[i],shot.data[i+1],shot.data[i+2])<150)dark++;}
 if(!(total>50&&dark/total>.01)){await p.screenshot({path:`output/v31/${engine}-screen-failure.png`});console.log('SCREEN FAILURE',t,check,total,dark,await p.evaluate(()=>({progress:document.querySelector('#sb-stage').dataset.journeyProgress,scroll:scrollY,href:location.href,log:JSON.stringify(window.__scrollLog),strip:document.querySelector('.sb-process-horizontal').style.cssText,track:document.querySelector('.sb-process-horizontal__track').style.cssText})));}
 assert(total>50&&dark/total>.01,`${label}: specimen not visible on screen`);
 results.push({test:label,frame:t,...check,screenSubjectRatio:dark/total});console.log('PASS',label,t,check.presentation,check.difference.toFixed(2));
}
async function collection(p,label){await go(p,.995);await p.waitForTimeout(200);assert(await p.locator('.sb-card img').evaluateAll(a=>a.length===3&&a.every(i=>i.naturalWidth&&+getComputedStyle(i).opacity>.95)));assert(await p.locator('#coffees').evaluate(e=>!e.inert&&+getComputedStyle(e).opacity>.95));await p.screenshot({path:`output/v31/${engine}-${label}-collection.png`});await p.locator('.sb-card[data-cat="green"]').click();await p.waitForTimeout(300);assert(await p.locator('#grid .card').count()>0);console.log('PASS',label,'collection images and product navigation');}
(async()=>{const b=await(engine==='webkit'?webkit.launch():chromium.launch({channel:'chrome'}));try{
 const cases=(process.env.SB_CASES?process.env.SB_CASES.split(','):['healthy','webgl-and-data-saver','optional-still-fails','delayed-font','all-videos-blocked','delayed-panel','transient-error','metadata-events','metadata-only','slow-seek','landscape','desktop']);
 for(const name of cases){console.log('CASE',name);
  const desktop=name==='desktop',landscape=name==='landscape';
  const p=await b.newPage({viewport:desktop?{width:1440,height:1000}:landscape?{width:844,height:390}:{width:390,height:844},deviceScaleFactor:1,isMobile:!desktop,hasTouch:!desktop});
  await p.addInitScript(()=>{window.__scrollLog=[];const original=window.scrollTo;window.scrollTo=function(...args){__scrollLog.push({args,stack:new Error().stack});return original.apply(this,args)};addEventListener('resize',()=>__scrollLog.push({resize:[innerWidth,innerHeight]}));});
  p.on('pageerror',e=>errors.push(`${name}: ${e.message}`));let fontReleased=false;let blocked=name==='all-videos-blocked',delayed=name==='delayed-panel',first=true;
  if(name==='webgl-and-data-saver')await p.addInitScript(()=>{window.webglCalls=0;const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(t,...a){if(t.startsWith('webgl')){webglCalls++;return null;}return original.call(this,t,...a)};Object.defineProperty(navigator,'connection',{value:{saveData:true},configurable:true})});
  if(name==='delayed-font')await p.route(/fonts\.googleapis\.com\/|\/assets\/fonts\/.*\.woff2/,async r=>{await new Promise(resolve=>setTimeout(resolve,3000));fontReleased=true;try{await r.abort()}catch{}});
  if(name==='optional-still-fails')await p.route('**/coffee-journey-poster-v28.jpg',r=>r.abort());
  if(blocked)await p.route('**/*.mp4',r=>blocked?r.abort():r.continue());
  if(delayed)await p.route('**/mobile/natural-v31.mp4',async r=>{if(delayed)await new Promise(resolve=>setTimeout(resolve,5000));try{await r.continue()}catch{}});
  if(name==='transient-error')await p.route('**/mobile/opening-v31.mp4',r=>{if(first){first=false;return r.abort()}return r.continue()});
  if(name==='metadata-events')await p.addInitScript(()=>{for(const type of ['loadeddata','canplay'])document.addEventListener(type,e=>e.stopImmediatePropagation(),true)});
  if(name==='metadata-only')await p.addInitScript(()=>{const state=Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype,'readyState'),time=Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype,'currentTime');Object.defineProperty(HTMLMediaElement.prototype,'readyState',{...state,get(){const value=state.get.call(this);return !this.__requestedSeek&&value>0?1:value}});Object.defineProperty(HTMLMediaElement.prototype,'currentTime',{...time,set(v){this.__requestedSeek=true;time.set.call(this,v)}})});
  if(name==='slow-seek')await p.addInitScript(()=>{const prop=Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype,'currentTime');Object.defineProperty(HTMLMediaElement.prototype,'currentTime',{...prop,set(v){clearTimeout(this.__delay);this.__delay=setTimeout(()=>prop.set.call(this,v),180)}})});
  await p.goto(base,{waitUntil:'domcontentloaded'});await p.waitForFunction(()=>document.documentElement.dataset.motionMode==='film-only');
  if(name==='delayed-font')assert(!fontReleased,'Animation startup must not wait for an optional font response');
  if(!desktop)assert((await p.locator('.sb-journey-surface video').getAttribute('src')).includes('/mobile/'));
  if(name==='webgl-and-data-saver')assert.equal(await p.evaluate(()=>window.webglCalls),0);
  const cues=['healthy','all-videos-blocked','landscape','desktop'].includes(name)?[.14,.29,.38,.46,.53,.615,.76,.845,.53,.46,.38,.29]:name==='delayed-panel'?[.38,.53,.38]:[.29,.38,.53,.76];
  for(const t of cues)await frame(p,t,`${name}`,blocked);
  if(blocked){blocked=false;await p.evaluate(()=>window.dispatchEvent(new Event('online')));await frame(p,.76,'blocked-video-online-recovery');await p.waitForFunction(()=>document.querySelector('.sb-journey-surface').dataset.presentation==='video');}
  if(delayed){delayed=false;await p.waitForTimeout(5200);await frame(p,.38,'delayed-panel-completes');assert.equal(await p.locator(selector(.38)).getAttribute('data-presentation'),'video');}
  if(name==='healthy'){
   await p.evaluate(()=>document.querySelector('#sb-canvas').dispatchEvent(new Event('webglcontextlost')));await frame(p,.76,'context-loss-does-not-affect-video');
   await p.evaluate(()=>{Object.defineProperty(document,'hidden',{value:true,configurable:true});document.dispatchEvent(new Event('visibilitychange'))});await p.waitForTimeout(500);
   await p.evaluate(()=>{Object.defineProperty(document,'hidden',{value:false,configurable:true});document.dispatchEvent(new Event('visibilitychange'))});await frame(p,.53,'foreground-resume');
   await p.setViewportSize({width:844,height:390});await p.waitForTimeout(400);assert(Math.abs(await p.locator('#sb-stage').getAttribute('data-journey-progress')-.53)<.005,'Rotation must preserve the story position');await frame(p,.53,'portrait-to-landscape');assert((await p.locator('[data-method="washed"] video').getAttribute('src')).includes('/mobile/')); 
   await p.setViewportSize({width:390,height:844});await p.waitForTimeout(400);
  }
  if(!['delayed-panel','all-videos-blocked'].includes(name))await p.waitForFunction(sel=>document.querySelector(sel).dataset.presentation==='video',selector(cues[cues.length-1]),{timeout:16000});
  await collection(p,name);await p.close();
  fs.writeFileSync(report,JSON.stringify({results,errors},null,2));
 }
 const p=await b.newPage({reducedMotion:'reduce',viewport:{width:390,height:844},isMobile:true,hasTouch:true});const requests=[];p.on('request',r=>requests.push(r.url()));await p.goto(base,{waitUntil:'domcontentloaded'});await p.waitForTimeout(600);assert.equal(await p.locator('video').count(),0);assert(!requests.some(u=>u.includes('/video/')));assert(await p.locator('.sb-card img').evaluateAll(a=>a.every(i=>i.naturalWidth)));console.log('PASS reduced motion: no cinematic media');
 for(let i=0;i<2;i++){await p.emulateMedia({reducedMotion:'no-preference'});await p.waitForFunction(()=>document.documentElement.dataset.motionMode==='film-only');assert(await p.locator('.sb-frame-decoder').count()>=4&&await p.locator('.sb-frame-decoder').count()<=9,'Phone chapter decoder pool must remain bounded');await frame(p,.53,'reduced-motion-restart');await p.emulateMedia({reducedMotion:'reduce'});await p.waitForTimeout(250);assert.equal(await p.locator('.sb-frame-decoder').count(),0)}
 assert.deepEqual(errors,[]);fs.writeFileSync(report,JSON.stringify({results,errors,status:'passed',date:new Date().toISOString()},null,2));
}finally{await b.close()}})().catch(e=>{console.error(e);fs.writeFileSync(report,JSON.stringify({results,errors,failure:String(e)},null,2));process.exit(1)});
