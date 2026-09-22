const {chromium}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
(async()=>{
 const b=await chromium.launch({channel:'chrome'});
 try {
  for(const width of [1440,390]){
   const p=await b.newPage({viewport:{width,height:900}});const errors=[];
   p.on('pageerror',e=>errors.push(e.message));
   await p.goto(pathToFileURL(path.resolve('index.html')).href,{waitUntil:'domcontentloaded'});
   await p.waitForTimeout(2200);
   assert(p.url().includes('/dist/index.html'));
   assert(await p.evaluate(()=>document.documentElement.classList.contains('sb-on')));
   assert.equal(await p.locator('#sb-canvas').evaluate(e=>Number(e.style.opacity)),0);
   assert(await p.locator('#hero-bg').evaluate(e=>e.complete&&e.naturalWidth>0));
   assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   await p.screenshot({path:`docs/previews/portable-home-${width}.png`});
   for(const progress of [.09,.30,.60,.98]){
    await p.evaluate(t=>window.sbLenis.scrollTo((document.querySelector('#sb-origin').offsetHeight-innerHeight)*.86*t,{immediate:true}),progress);
    await p.waitForTimeout(1400);
    if(progress===.30)assert(await p.locator('#sb-canvas').evaluate(e=>Number(e.style.opacity)>.99));
    await p.screenshot({path:`docs/previews/portable-${width}-${progress}.png`});
   }
   await p.goto(pathToFileURL(path.resolve('dist/index.html')).href+'#green-coffee',{waitUntil:'domcontentloaded'});
   await p.locator('#grid').scrollIntoViewIfNeeded();await p.waitForTimeout(1000);
   assert.equal(await p.locator('#grid img').count(),3);
   assert(await p.locator('#grid img').evaluateAll(a=>a.every(i=>i.complete&&i.naturalWidth>0)));
   assert.deepEqual(errors,[]);
   console.log(`PASS ${width}: file opening, hero, animated scroll stages, category photos, layout, no page errors`);
   await p.close();
  }
 }finally{await b.close()}
})().catch(e=>{console.error(e);process.exit(1)});
