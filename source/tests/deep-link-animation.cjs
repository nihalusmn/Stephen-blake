const {chromium}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch({channel:'chrome'});
 try{
  for(const width of [1440,390])for(const hash of ['#story','#green-coffee']){
   const p=await browser.newPage({viewport:{width,height:900}});const errors=[];
   p.on('pageerror',e=>errors.push(e.message));
   const base=width===390?pathToFileURL(path.resolve('dist/index.html')).href:'http://127.0.0.1:4175/dist/';
   await p.goto(base+hash,{waitUntil:'domcontentloaded'});
   await p.waitForFunction(()=>document.documentElement.classList.contains('sb-on'));
   await p.waitForTimeout(1200);
   assert.equal(await p.locator('#story video').count(),0);
   await p.locator('#story img').scrollIntoViewIfNeeded();
   await p.waitForFunction(()=>document.querySelector('#story img').naturalWidth===1080);
   await p.evaluate(()=>window.sbLenis.scrollTo(0,{immediate:true,force:true}));
   await p.waitForTimeout(900);
   assert.equal(await p.locator('#sb-canvas').evaluate(e=>Number(e.style.opacity)),0);
   await p.evaluate(()=>window.sbLenis.scrollTo((document.querySelector('#sb-origin').offsetHeight-innerHeight)*.86*.3,{immediate:true,force:true}));
   await p.waitForTimeout(1500);
   assert(await p.locator('#sb-canvas').evaluate(e=>Number(e.style.opacity)>.99));
   await p.screenshot({path:`docs/previews/deep-link-${width}-${hash.slice(1)}.png`});
   assert.deepEqual(errors,[]);console.log('PASS',width,hash,'return home and animated scroll; photo replaces video');
   await p.close();
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
