const {chromium}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');const {pathToFileURL}=require('node:url');const path=require('node:path');
(async()=>{
 const root=process.argv[2];assert(root,'Pass the extracted release directory');
 const browser=await chromium.launch({channel:'chrome'});
 try{
  for(const width of [1440,390]){
   const p=await browser.newPage({viewport:{width,height:844}});const errors=[];p.on('pageerror',e=>errors.push(e.message));
   await p.goto(pathToFileURL(path.join(root,'index.html')).href);
   await p.waitForFunction(()=>document.documentElement.dataset.journeyVideo==='ready');
   for(const progress of [.30,.38,.46,.553,.615,.78,.845,.995]){
    await p.evaluate(t=>window.sbLenis.scrollTo((document.querySelector('#sb-origin').offsetHeight-innerHeight)*parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sb-story'))*t,{immediate:true}),progress);
    await p.waitForTimeout(1600);
    assert(await p.locator('.sb-journey-video').evaluate(v=>v.currentTime>1));
    if(progress===.553){assert.equal(await p.locator('.sb-process-panel-video').count(),3);assert(await p.locator('.sb-process-panel-video').evaluateAll(vs=>vs.every(v=>v.paused&&v.readyState>=2)));await p.screenshot({path:`output/continuity-v28/final-processes-${width}.png`});}
   }
   assert(await p.locator('.sb-card img').evaluateAll(imgs=>imgs.length===3&&imgs.every(i=>i.complete&&i.naturalWidth>0&&+i.style.opacity>.95)));
   assert.equal(await p.locator('#faq details').count(),4);
   await p.screenshot({path:`output/collection-v28/release-${width}.png`});
   await p.locator('.sb-card[data-cat="green"]').click();await p.waitForTimeout(900);
   assert.equal(await p.locator('#grid .card').count(),3);
   for(const category of ['roasted','filter']){await p.locator(`#range-nav a[href="#${category}-coffee"]`).click();await p.waitForTimeout(500);assert(await p.locator('#grid .card').count()>0);}
   assert.deepEqual(errors,[]);await p.close();console.log('PASS extracted ZIP: animation, captions, product handoff, catalogue',width);
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
