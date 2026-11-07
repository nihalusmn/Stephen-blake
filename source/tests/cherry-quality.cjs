const {chromium}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const label=process.argv[2]||'after';
(async()=>{
 const browser=await chromium.launch({channel:'chrome'});
 try{
  for(const [width,height] of [[1440,1000],[390,844]]){
   const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:width===390?2:1});
   const errors=[];page.on('pageerror',e=>errors.push(e.message));
   page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
   await page.goto('http://127.0.0.1:4175/dist/',{waitUntil:'domcontentloaded'});
   await page.waitForFunction(()=>document.documentElement.classList.contains('sb-on'));
   if(label!=='before')await page.waitForFunction(()=>document.documentElement.dataset.macroReady==='true');
   await page.waitForTimeout(1200);
   for(const progress of [.09,.23,.30,.57,.61,.735,.80,.97]){
    await page.evaluate(t=>window.sbLenis.scrollTo((document.querySelector('#sb-origin').offsetHeight-innerHeight)*parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sb-story'))*t,{immediate:true}),progress);
    await page.waitForTimeout(650);
    await page.screenshot({path:`output/cherry-refinement/${label}-${width}-${progress}.png`});
   }
   assert.deepEqual(errors,[]);
   console.log('PASS',label,width,'all transformation stages rendered without errors');
   await page.close();
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
