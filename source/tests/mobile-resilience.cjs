const {chromium}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
const base=process.env.SB_URL||'http://127.0.0.1:4175/dist/';
(async()=>{
 const browser=await chromium.launch({channel:'chrome'}),errors=[],checks=[];
 const pass=name=>{checks.push(name);console.log('PASS',name)};
 try{
  for(const [width,height] of [[390,844],[844,390]]){
   const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:3,isMobile:true,hasTouch:true});
   page.on('pageerror',e=>errors.push(e.message));
   await page.addInitScript(()=>{
    const native=HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext=function(type,...args){if(type==='webgl2'||type==='webgl')return null;return native.call(this,type,...args)};
    Object.defineProperty(navigator,'connection',{configurable:true,value:{saveData:true}});
   });
   await page.goto(base);await page.waitForFunction(()=>document.documentElement.dataset.motionMode==='film-only'&&document.documentElement.dataset.journeyVideo==='ready',{timeout:30000});
   const mode=await page.evaluate(()=>({width:innerWidth,height:innerHeight,scene:document.documentElement.classList.contains('sb-on'),motion:document.documentElement.dataset.motionMode,src:document.querySelector('.sb-journey-video')?.currentSrc,videoWidth:document.querySelector('.sb-journey-video')?.videoWidth}));
   assert(mode.scene&&mode.videoWidth===720&&mode.src.includes('/video/mobile/'));
   pass(`Touch ${width}x${height}: mobile film starts with WebGL unavailable and data-saver enabled`);
   const trigger=await page.evaluate(()=>window.ScrollTrigger.getAll().find(t=>t.trigger?.id==='sb-origin'));
   assert(trigger); 
   for(const p of [.12,.38,.46,.53,.76,.995]){
    await page.evaluate(p=>{const t=window.ScrollTrigger.getAll().find(x=>x.trigger?.id==='sb-origin');window.sbLenis.scrollTo(t.start+(t.end-t.start)*p,{immediate:true});},p);
    await page.waitForTimeout(300);
    const state=await page.evaluate(()=>({progress:+document.querySelector('#sb-stage').dataset.journeyProgress,chapter:document.documentElement.dataset.processStage,video:document.querySelector('.sb-journey-video'),horizontal:document.querySelector('.sb-process-horizontal')}));
    assert(Math.abs(state.progress-p)<.03,`${width}: expected ${p}, got ${state.progress}`);
    if([.38,.46,.53].includes(p))assert(await page.locator('.sb-process-horizontal').evaluate(el=>getComputedStyle(el).visibility==='visible'));
   }
   pass(`Touch ${width}x${height}: scroll drives origin, all process panels and roast without WebGL`);
   await page.close();
  }

  const desktop=await browser.newPage({viewport:{width:1440,height:1000}}),failed=[];
  desktop.on('pageerror',e=>failed.push(e.message));
  await desktop.addInitScript(()=>{const native=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){if(type==='webgl2')return null;return native.call(this,type,...args)}});
  await desktop.goto(base);await desktop.waitForFunction(()=>document.documentElement.dataset.motionMode==='film-only'&&document.documentElement.dataset.journeyVideo==='ready',{timeout:30000});
  assert.equal(await desktop.locator('.sb-journey-video').evaluate(v=>v.videoWidth),1080);
  pass('Desktop WebGL2 rejection falls back to the same working scroll film');
  assert.deepEqual([...errors,...failed],[]);
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
