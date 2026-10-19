const {chromium}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({channel:'chrome'});
 try{
  const p=await browser.newPage({viewport:{width:390,height:740},isMobile:true,hasTouch:true});
  const errors=[];p.on('pageerror',e=>errors.push(e.message));
  await p.goto('http://127.0.0.1:4175/dist/',{waitUntil:'domcontentloaded'});
  await p.waitForFunction(()=>document.documentElement.classList.contains('sb-on'));
  for(const height of [740,844,920,740]){
   await p.setViewportSize({width:390,height});await p.waitForTimeout(400);
   for(const progress of [.15,.35,.65]){
    await p.evaluate(t=>window.sbLenis.scrollTo((document.querySelector('#sb-origin').offsetHeight-innerHeight)*.86*t,{immediate:true}),progress);
    await p.waitForTimeout(450);
    const coverage=await p.locator('.sb-stage').evaluate(e=>{const r=e.getBoundingClientRect();return {top:r.top,bottom:r.bottom,h:innerHeight}});
    assert(coverage.top<=1&&coverage.bottom>=coverage.h-1,JSON.stringify(coverage));
   }
  }
  await p.screenshot({path:'docs/previews/mobile-animation-full-height.png'});
  await p.locator('.packaging-gallery').scrollIntoViewIfNeeded();
  await p.waitForFunction(()=>[...document.querySelectorAll('.packaging-gallery img')].every(i=>i.complete&&i.naturalWidth>0));
  assert.equal(await p.locator('.packaging-gallery img').count(),2);
  await p.screenshot({path:'docs/previews/mobile-packaging.png'});
  await p.locator('.story-depth').scrollIntoViewIfNeeded();
  assert.equal(await p.locator('.story-depth__grid article').count(),6);
  assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await p.screenshot({path:'docs/previews/mobile-about.png'});
  assert.deepEqual(errors,[]);
  console.log('PASS mobile viewport changes: no animation gap; both packaging images; six Story sections; no horizontal overflow or JS errors');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
