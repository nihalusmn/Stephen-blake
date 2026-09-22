const {chromium}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
(async()=>{
 const b=await chromium.launch({channel:'chrome'});
 try {
  for(const mode of ['http','file','reduced']){
   const p=await b.newPage({viewport:{width:mode==='file'?390:1440,height:900},reducedMotion:mode==='reduced'?'reduce':'no-preference'});
   const errors=[];p.on('pageerror',e=>errors.push(e.message));
   const url=mode==='file'?pathToFileURL(path.resolve('dist/index.html')).href:'http://127.0.0.1:4175/dist/';
   await p.goto(url+'#story',{waitUntil:'domcontentloaded'});
   const video=p.locator('#story-film');
   await video.scrollIntoViewIfNeeded();
   if(mode==='reduced'){
    await p.waitForTimeout(1000);assert(await video.evaluate(v=>v.paused));
    await video.evaluate(v=>v.play());
   }
   await p.waitForFunction(()=>document.querySelector('#story-film').currentTime>0.2);
   const state=await video.evaluate(v=>({width:v.videoWidth,height:v.videoHeight,controls:v.controls,loop:v.loop,muted:v.muted,src:v.currentSrc}));
   console.log(mode,state);
   assert(state.width===1080&&state.height===1920&&state.controls&&state.loop);
   await p.screenshot({path:`docs/previews/story-film-${mode}.png`});
   await video.dispatchEvent('pointerdown');await video.evaluate(v=>v.pause());
   await p.waitForTimeout(500);assert(await video.evaluate(v=>v.paused));
   assert.deepEqual(errors,[]);await p.close();console.log(mode+' story video passed');
  }
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exit(1)});
