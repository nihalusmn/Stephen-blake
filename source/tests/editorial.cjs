const {chromium}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({channel:'chrome'});
 try{
  for(const [width,height] of [[390,844],[768,1024],[1440,900],[1920,1080]]){
   const page=await browser.newPage({viewport:{width,height}});const errors=[];
   page.on('pageerror',e=>errors.push(e.message));
   await page.goto('http://127.0.0.1:4175/dist/',{waitUntil:'domcontentloaded'});
   await page.waitForTimeout(2500);
   assert.equal((await page.locator('h1').innerText()).replace(/\s+/g,' ').trim(),'STEPHEN BLAKE');
   assert.equal(await page.locator('.hero__statement').innerText(),'From Earth. Through Fire. Into Character.');
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   for(const selector of ['h1','.hero__statement','.hero__categories','.hero__acts']){
    const box=await page.locator(selector).boundingBox();assert(box.x>=0&&box.x+box.width<=width+1&&box.y+box.height<=height,selector+' exceeds viewport at '+width);
   }
   await page.screenshot({path:`docs/previews/editorial-home-${width}.png`});
   for(const id of ['story','private-label','request']){
    await page.evaluate(id=>window.sbLenis.scrollTo(document.getElementById(id),{immediate:true}),id);
    await page.waitForTimeout(1000);
    await page.screenshot({path:`docs/previews/editorial-${id}-${width}.png`});
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   }
   assert.deepEqual(errors,[]);console.log('PASS editorial copy, layout, Story, packaging and form at',width);
   await page.close();
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
