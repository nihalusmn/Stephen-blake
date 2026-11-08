const {chromium}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({channel:'chrome'}),checks=[],errors=[];
 const pass=name=>{checks.push(name);console.log('PASS',name)};
 const position=async(p,t)=>{
  await p.evaluate(t=>{const trigger=window.ScrollTrigger.getAll().find(s=>s.trigger?.id==='sb-origin');const story=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sb-story'));window.sbLenis.scrollTo(trigger.start+(trigger.end-trigger.start)*story*t,{immediate:true});},t);
  await p.waitForTimeout(750);
 };
 try{
  for(const width of [320,390,768,1440]){
   const mobile=width<768;
   const p=await browser.newPage({viewport:{width,height:844},deviceScaleFactor:mobile?2:1,isMobile:mobile,hasTouch:mobile});
   p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`)});
   await p.goto('http://127.0.0.1:4175/dist/?version=30');
   await p.waitForFunction(()=>document.documentElement.dataset.journeyVideo==='ready'&&document.documentElement.dataset.macroReady==='true');
   assert.equal(await p.locator('.sb-process-panel-video[src]').count(),0);pass(`No process decoders loaded on the hero ${width}`);
   assert.equal(await p.locator('.sb-journey-video').evaluate(v=>v.videoWidth),mobile?720:1080);
   const cues=[.11,.29,.38,.46,.53,.615,.76,.845,.995,.53,.46,.38,.29,.11,0];
   for(const t of cues){
    await position(p,t);
    const scene=await p.evaluate(()=>({progress:+document.querySelector('#sb-stage').dataset.journeyProgress,overflow:document.documentElement.scrollWidth>innerWidth,chapter:document.documentElement.dataset.processStage}));
    assert(Math.abs(scene.progress-t)<.012,`${width}: progress ${scene.progress} vs ${t}`);assert(!scene.overflow);
    if([.38,.46,.53].includes(t)){
     const name=t===.38?'natural':t===.46?'honey':'washed';
     const sample=await p.locator(`[data-method="${name}"] video`).evaluate(v=>({ready:v.readyState,time:v.currentTime,width:v.videoWidth,paused:v.paused}));
     assert(sample.ready>=2&&sample.time>.1&&sample.paused,`${width}: ${name} ${JSON.stringify(sample)}`);
     assert.equal(sample.width,mobile?720:1080);
    }
    if(t===.995)assert(await p.locator('.sb-card img').evaluateAll(imgs=>imgs.every(i=>i.naturalWidth&&+i.style.opacity>.95)));
    if([0,.46,.53,.76,.995].includes(t))await p.screenshot({path:`output/mobile-v30/verified-${width}-${t}.png`});
   }
   pass(`Every stage, reverse seeking, captions and collection ${width}`);
   if(mobile){
    await position(p,.46);
    const original=await p.evaluate(()=>({height:document.querySelector('#sb-origin').offsetHeight,progress:+document.querySelector('#sb-stage').dataset.journeyProgress}));
    await p.setViewportSize({width,height:780});await p.waitForTimeout(500);
    const resized=await p.evaluate(()=>({height:document.querySelector('#sb-origin').offsetHeight,progress:+document.querySelector('#sb-stage').dataset.journeyProgress}));
    console.log('Resize diagnostic',width,original,resized);
    assert.equal(original.height,resized.height);assert(Math.abs(original.progress-resized.progress)<.005);
    pass(`Small toolbar-sized resize does not reset timeline ${width}`);
    await p.setViewportSize({width:844,height:390});await p.waitForTimeout(700);await position(p,.53);
    assert(await p.locator('.sb-process-horizontal').evaluate(el=>+el.style.opacity>.99));
    assert.equal(await p.locator('.sb-journey-video').count(),1);pass(`Orientation change preserves one working film ${width}`);
   }
   await p.close();
  }
  // Film failure still leaves a photographic sequence; reduced motion skips media.
  const fallback=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  await fallback.route('**/*.mp4',r=>r.abort());await fallback.goto('http://127.0.0.1:4175/dist/');
  await fallback.waitForFunction(()=>document.documentElement.dataset.macroReady==='true');await position(fallback,.76);
  assert(await fallback.locator('.sb-process-film').evaluate(el=>+el.style.opacity>.9));pass('Blocked film retains photographic fallback');await fallback.close();
  assert.deepEqual(errors,[]);pass('No runtime errors or missing assets');
  fs.writeFileSync('docs/mobile-engine-v30.json',JSON.stringify({checks,errors},null,2));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
