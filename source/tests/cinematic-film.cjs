const {chromium}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');const path=require('node:path');const {pathToFileURL}=require('node:url');
const frames=[.125,.170,.23,.30,.38,.46,.53,.615,.675,.775,.845,.888,.95,.995];
(async()=>{
 const browser=await chromium.launch({channel:'chrome'});const report=[];
 try{
  for(const [width,height] of [[1440,1000],[390,844],[768,1024]]){
   const p=await browser.newPage({viewport:{width,height}});const errors=[];
   p.on('pageerror',e=>errors.push(e.message));
   await p.goto('http://127.0.0.1:4175/dist/',{waitUntil:'domcontentloaded'});
   await p.waitForFunction(()=>document.documentElement.dataset.journeyVideo==='ready');
   for(const progress of frames){
    await p.evaluate(t=>window.sbLenis.scrollTo((document.querySelector('#sb-origin').offsetHeight-innerHeight)*parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sb-story'))*t,{immediate:true}),progress);
    await p.waitForTimeout(1500);
    const state=await p.evaluate(()=>{
     const v=document.querySelector('.sb-journey-video'),r=document.querySelector('.sb-stage').getBoundingClientRect();
     return {time:v.currentTime,ready:v.readyState,seeking:v.seeking,opacity:Math.max(+v.style.opacity,+(document.querySelector('.sb-process-horizontal')?.style.opacity||0)),width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,coverage:r.top<=1&&r.bottom>=innerHeight-1,notes:[...document.querySelectorAll('.sb-note')].filter(n=>+n.style.opacity>.5).map(n=>n.textContent.trim().replace(/\s+/g,' '))};
    });
    assert(!state.overflow,'No horizontal overflow');assert(state.coverage,'Stage covers viewport');
    if(progress>.12&&progress<.89){assert(state.time>0,'Video time advances');assert(state.opacity>.9,'Video visible');assert.equal(state.notes.length,1,'One readable process caption');}
    const expected=progress===.125||progress===.170?'Every cup begins as a fruit.':progress===.23||progress===.30?'Harvested at ripeness':progress===.38?'Natural process':progress===.46?'Honey process':progress===.53?'Washed process':progress===.615?'Removing the parchment':progress===.675?'Selected. Sorted. Graded.':null;
    if(expected)assert(state.notes[0].startsWith(expected),'Correct process order: '+expected);
    if(progress===.125)assert(state.time<.6,'Branch before release');
    if(progress===.170)assert(state.time>.25&&state.time<.45,'Fall during first chapter');
    if(progress===.23)assert(state.time>.65&&state.time<.85,'Whole cherry continues falling during harvest');
    if(progress===.775)assert(state.time>35&&state.time<37,'Extended roasting');
    if(progress===.53){
     const panels=await p.locator('.sb-process-horizontal__panel').evaluateAll(els=>els.map(e=>({x:e.getBoundingClientRect().x,w:e.getBoundingClientRect().width,opacity:+e.style.opacity,video:e.querySelector('video').currentTime,paused:e.querySelector('video').paused})));
     assert.equal(panels.length,3);assert(panels.every(e=>e.paused),'No autoplay in processing panels');
     if(width>=760){assert(panels.every(e=>e.x>=-1&&e.x+e.w<=width+1&&e.opacity>.99),'All three processes visible side by side');}
     else assert(Math.abs(panels[2].x)<1,'Washed panel slides into the mobile viewport');
    }
    await p.screenshot({path:`output/continuity-v28/site-${width}-${progress}.png`});report.push({width,progress,...state});
   }
   // Reverse scrubbing must decode the earlier frame, not keep the last cup.
   await p.evaluate(()=>window.sbLenis.scrollTo((document.querySelector('#sb-origin').offsetHeight-innerHeight)*parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sb-story'))*.38,{immediate:true}));await p.waitForTimeout(1800);
   assert(await p.locator('.sb-journey-video').evaluate(v=>v.currentTime>6&&v.currentTime<7));
   assert.deepEqual(errors,[]);await p.close();console.log('PASS cinematic motion/captions/reverse/viewport',width);
  }
  const local=await browser.newPage();await local.goto(pathToFileURL(path.resolve('dist/index.html')).href);await local.waitForFunction(()=>document.documentElement.dataset.journeyVideo==='ready');
  await local.evaluate(()=>window.sbLenis.scrollTo((document.querySelector('#sb-origin').offsetHeight-innerHeight)*parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sb-story'))*.46,{immediate:true}));await local.waitForTimeout(1800);
  assert(await local.locator('.sb-journey-video').evaluate(v=>v.currentTime>13&&v.currentTime<14));await local.close();console.log('PASS direct-file video seeking');
  const fallback=await browser.newPage();await fallback.route('**/coffee-journey-v28.mp4',r=>r.abort());await fallback.goto('http://127.0.0.1:4175/dist/');await fallback.waitForFunction(()=>document.documentElement.dataset.macroReady==='true');
  await fallback.evaluate(()=>window.sbLenis.scrollTo((document.querySelector('#sb-origin').offsetHeight-innerHeight)*parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sb-story'))*.38,{immediate:true}));await fallback.waitForTimeout(1800);
  assert(await fallback.locator('.sb-process-film').evaluate(e=>+e.style.opacity>.99));await fallback.close();console.log('PASS blocked-video photographic fallback');
  fs.writeFileSync('docs/cinematic-film-checks.json',JSON.stringify({date:new Date().toISOString(),checks:report},null,2));
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
