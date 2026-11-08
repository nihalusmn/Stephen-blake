const {chromium}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{const b=await chromium.launch({channel:'chrome'});try{
 const p=await b.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await p.goto('http://127.0.0.1:4175/dist/');await p.waitForFunction(()=>document.documentElement.dataset.macroReady==='true'&&document.documentElement.dataset.journeyVideo==='ready');
 const cdp=await p.context().newCDPSession(p);
 for(let swipe=0;swipe<2;swipe++){
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:195,y:680}]});
  for(let i=1;i<=12;i++){await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:195,y:680-i*38}]});await p.waitForTimeout(18);}
  await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await p.waitForTimeout(650);
 }
 const state=await p.evaluate(()=>({scroll:scrollY,lenis:window.sbLenis.scroll,progress:+document.querySelector('#sb-stage').dataset.journeyProgress,syncTouch:window.sbLenis.options.syncTouch,smoothWheel:window.sbLenis.options.smoothWheel}));
 assert(state.scroll>300);assert(Math.abs(state.scroll-state.lenis)<2);assert(state.progress>.1);assert.equal(state.syncTouch,false);assert.equal(state.smoothWheel,false);
 await p.locator('#burger').click();await p.waitForTimeout(150);assert(await p.evaluate(()=>window.sbLenis.isStopped));
 await p.locator('#drawer-close').click();await p.waitForTimeout(150);assert(await p.evaluate(()=>!window.sbLenis.isStopped));
 const count=await p.evaluate(()=>window.ScrollTrigger.getAll().length);
 for(let i=0;i<2;i++){await p.emulateMedia({reducedMotion:'reduce'});await p.waitForTimeout(150);assert.equal(await p.locator('video').count(),0);await p.emulateMedia({reducedMotion:'no-preference'});await p.waitForFunction(()=>document.documentElement.dataset.macroReady==='true'&&document.documentElement.dataset.journeyVideo==='ready');assert.equal(await p.locator('.sb-journey-video').count(),1);assert((await p.evaluate(()=>window.ScrollTrigger.getAll().length))<=count+1);}
 fs.writeFileSync('docs/mobile-touch-v30.json',JSON.stringify({state,checks:['Native touch input scrolls the film','Lenis follows the native position','No simulated touch inertia','Menu locks/unlocks scroll','Repeated reduced-motion teardown restores one film without duplicate triggers']},null,2));
 console.log('PASS native touch, menu lock and repeated mobile lifecycle');
}finally{await b.close()}})().catch(e=>{console.error(e);process.exit(1)});
