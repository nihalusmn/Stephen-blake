const runtime='/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/';
const {chromium}=require(runtime+'playwright'),{PNG}=require(runtime+'pngjs');
const fs=require('fs'),assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({channel:'chrome'});const results=[];
try{
 for(const width of [390,758,1440]){
  const page=await browser.newPage({viewport:{width,height:844},isMobile:width===390,hasTouch:width===390});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{window.__loads=[];const orig=HTMLMediaElement.prototype.load;HTMLMediaElement.prototype.load=function(){__loads.push({src:this.getAttribute('src'),t:performance.now()});return orig.call(this)}});
  await page.goto((process.env.SB_URL||'http://127.0.0.1:4175/dist/'),{waitUntil:'domcontentloaded'});await page.waitForFunction(()=>document.documentElement.dataset.motionMode==='film-only');
  const go=async p=>page.evaluate(p=>{const s=ScrollTrigger.getAll().find(t=>t.trigger?.id==='sb-origin');sbLenis.scrollTo(s.start+(s.end-s.start)*p,{immediate:true})},p);
  // Warm all chapters once, then reverse repeatedly without reloading media.
  for(const p of [.14,.29,.38,.46,.53,.61,.67,.76,.84,.89]){await go(p);await page.waitForTimeout(700)}
  await go(.29);await page.waitForTimeout(500);await page.screenshot({path:`output/v31/rc3-${width}-harvest.png`});
  const shot=PNG.sync.read(await page.screenshot());
  for(const [x,y] of [[12,300],[width-12,300],[12,700],[width-12,700]]){
   const i=(y*shot.width+x)*4;assert(Math.min(shot.data[i],shot.data[i+1],shot.data[i+2])>225,`Dark vignette at ${width}, ${x},${y}`);
  }
  const before=await page.evaluate(()=>__loads.length),samples=[];
  for(let pass=0;pass<4;pass++)for(let i=0;i<50;i++){
   const p=pass%2?.87-i*.015:.135+i*.015;await go(p);await page.waitForTimeout(30);
   samples.push(await page.evaluate(()=>{
    const p=+document.querySelector('#sb-stage').dataset.journeyProgress;
    const selector=p>.341&&p<.556?`[data-method="${p<.412?'natural':p<.488?'honey':'washed'}"] .sb-panel-surface`:'.sb-journey-surface';
    const el=document.querySelector(selector);const preview=document.createElement('canvas');preview.width=24;preview.height=32;const ctx=preview.getContext('2d');ctx.drawImage(el.querySelector('canvas'),0,0,24,32);const bytes=ctx.getImageData(0,0,24,32).data;let hash=0;for(let i=0;i<bytes.length;i++)hash=(Math.imul(hash,31)+bytes[i])|0;return {p,pixelHash:hash,frame:+el.dataset.frameTime,target:+el.dataset.targetTime,kind:el.dataset.presentation,chapter:el.dataset.frameChapter,expected:document.documentElement.dataset.processStage,at:performance.now()};
   }));
  }
  await go(.76);await page.waitForTimeout(400);const ending=await page.locator('.sb-journey-surface').evaluate(e=>({...e.dataset}));
  const after=await page.evaluate(()=>__loads.length);
  const lags=samples.map(x=>Math.abs(x.frame-x.target)).sort((a,b)=>a-b);
  const changed=samples.filter((x,i)=>!i||x.pixelHash!==samples[i-1].pixelHash).length;
  results.push({width,loadsBefore:before,loadsAfter:after,changed,total:samples.length,p95Lag:lags[Math.floor(lags.length*.95)],maxLag:lags.at(-1),ending,errors,samples});
  assert.equal(after,before,'Warm reverse scrolling must not reset video sources');
  assert(changed>samples.length*.75,`Insufficient redraws: ${changed}/${samples.length}`);
  assert(Math.abs(+ending.frameTime-+ending.targetTime)<.16,'Must settle on requested frame within 400ms');
  assert.deepEqual(errors,[]);console.log('PASS rapid scroll',width,'changes',changed,'p95',lags[Math.floor(lags.length*.95)].toFixed(3));
  await page.close();
 }
 fs.writeFileSync((process.env.SB_REPORT||'docs/V31-rc3-rapid.json'),JSON.stringify({status:'passed',results},null,2));
} catch(e){fs.writeFileSync((process.env.SB_REPORT||'docs/V31-rc3-rapid.json'),JSON.stringify({failure:String(e),results},null,2));throw e}finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
