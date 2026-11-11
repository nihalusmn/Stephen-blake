const runtime='/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/';
const {chromium}=require(runtime+'playwright');
const assert=require('node:assert/strict'),fs=require('fs');
const products=[
 ['robusta-cherry-aaa','robusta-cherry',['AAA']],
 ['arabica-cherry-a','arabica-cherry',['A']],
 ['arabica-parchment-c','arabica-pl',['A','PB','C']]
];
(async()=>{
 const browser=await chromium.launch({channel:'chrome'}),results=[];
 try {
  for(const width of [390,1440]){
   const page=await browser.newPage({viewport:{width,height:900}}),errors=[];
   page.on('pageerror',e=>errors.push(e.message));
   await page.goto('http://127.0.0.1:4175/dist/?version=32#green-coffee');
   await page.waitForFunction(()=>!!window.sbSetCategory);
   await page.evaluate(()=>window.sbSetCategory('green'));
   for(const [id,family,real] of products){
    await page.locator(`#grid [data-open="${id}"]`).first().click();
    for(const grade of ['AAA','AA','A','B','C','PB']){
     await page.locator(`#dossier [data-grade="${grade}"]`).click();
     const img=page.locator('#dossier .dossier__visual img');
     await img.evaluate(i=>i.decode());
     const src=await img.getAttribute('src'),caption=await page.locator('.dossier__cap').innerText();
     const slug=id==='arabica-parchment-c'&&grade==='C'?'arabica-parchment-c':`${family}-${grade.toLowerCase()}`;
     const expected=real.includes(grade)?`green-${slug}-v32-original-logo-960.webp`:'green-collection-tray-v32-original-logo-960.webp';
     assert(src.includes(expected),`${id} ${grade}: wrong image ${src}`);
     assert(caption.includes(real.includes(grade)?'Retouched sample photograph':'Green coffee reference photograph'));
     assert.equal(await img.evaluate(e=>getComputedStyle(e).objectFit),'contain','Keep grade label inside the frame');
     assert(await img.evaluate(e=>e.naturalWidth>300&&e.getBoundingClientRect().height>100),'Responsive photograph must decode and remain visible');
     results.push({width,id,grade,src,caption});
    }
    await page.screenshot({path:`output/green-photo-review/site-${width}-${id}.png`});
    await page.keyboard.press('Escape');
   }
   assert(await page.locator('#coffees [data-cat="green"] img').getAttribute('src').then(s=>s.includes('green-collection-tray-v32')));
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   assert.deepEqual(errors,[]);await page.close();
  }
  fs.writeFileSync('docs/V32-grade-photography-checks.json',JSON.stringify({status:'passed',checks:results},null,2));
  console.log('PASS 36 grade/image/caption checks, mobile + desktop, collection photo and uncropped sample labels');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
