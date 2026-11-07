const {chromium}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({channel:'chrome'});const report=[];
 try{for(const [width,height] of [[1440,1000],[390,844],[768,1024]]){
  const page=await browser.newPage({viewport:{width,height}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:4175/dist/');await page.waitForFunction(()=>document.documentElement.dataset.journeyVideo==='ready');
  for(const p of [0,.025,.045,.060,.078,.092,.105,.119,.145,.18,.23,.30,.33,.355,.38,.405,.46,.53,.615,.775]){
   await page.evaluate(p=>window.sbLenis.scrollTo((document.querySelector('#sb-origin').offsetHeight-innerHeight)*parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sb-story'))*p,{immediate:true}),p);await page.waitForFunction(()=>Math.abs(+document.querySelector('.sb-stage').dataset.journeyProgress-scrollY/((document.querySelector('#sb-origin').offsetHeight-innerHeight)*parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sb-story'))))<.000001);await page.waitForTimeout(250);
   const state=await page.evaluate(()=>{
    const v=document.querySelector('.sb-journey-video'),match=document.querySelector('.sb-hero-match'),bg=document.querySelector('#hero-bg');
    const r=match.getBoundingClientRect(),b=v.getBoundingClientRect();
    const body={x:r.x+r.width*360/720,y:r.y+r.height*385/960,h:r.height*420/960};
    const movie={x:b.x+b.width*360/720,y:b.y+b.height*385/960,h:b.height*420/960};
    return {body,movie,time:v.currentTime,opacity:+v.style.opacity,match:+match.style.opacity,estate:+bg.style.opacity,transform:bg.style.transform,notes:[...document.querySelectorAll('.sb-note')].filter(e=>+e.style.opacity>.5).map(e=>e.querySelector('h2').textContent),vapour:+document.querySelector('.sb-roast-vapour').style.opacity,panels:[...document.querySelectorAll('.sb-process-panel-video')].map(e=>e.currentTime),overflow:document.documentElement.scrollWidth>innerWidth};
   });
   assert(!state.overflow);if(p===0)assert.equal(state.match,0);
   if(p===.105){for(const k of ['x','y','h'])assert(Math.abs(state.body[k]-state.movie[k])<1,`Matched cherry ${k}`);assert.equal(state.time,0,'Film holds first frame during zoom');}
   if(p===.23||p===.30||p===.33){assert(state.time>.65&&state.time<1.5,'Intact cherry continues its fall');if(p!==.33)assert.deepEqual(state.notes,['Harvested at ripeness']);}
   if(p===.355){assert(state.panels[0]>3.5&&state.panels[0]<3.8,'Cherry dries within Natural');assert.deepEqual(state.notes,['Natural process']);}
   if(p===.775)assert(state.vapour>.99,'Vapour visible only during roast');
   if(p===.23)assert.equal(state.vapour,0,'No vapour before roasting');
   if(p===.405)assert(state.panels[0]>8.9,'Natural finishes with parchment seeds');
   if([0,.045,.060,.078,.092,.105,.145,.23,.355,.38].includes(p))await page.screenshot({path:`output/continuity-v28/opening-${width}-${p}.png`});
   report.push({width,height,p,...state});
  }
  await page.evaluate(()=>window.sbLenis.scrollTo((document.querySelector('#sb-origin').offsetHeight-innerHeight)*parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sb-story'))*.060,{immediate:true}));await page.waitForFunction(()=>Math.abs(+document.querySelector('.sb-stage').dataset.journeyProgress-scrollY/((document.querySelector('#sb-origin').offsetHeight-innerHeight)*parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sb-story'))))<.000001);
  const reversed=await page.locator('#hero-bg').evaluate(e=>e.style.transform);const before=report.find(r=>r.width===width&&r.p===.060).transform;const nums=s=>s.match(/-?[0-9.]+/g).map(Number);console.log('Reverse check',width,{reversed,before});assert(nums(reversed).every((n,i)=>Math.abs(n-nums(before)[i])<1),'Reverse scroll returns to same camera');
  assert.deepEqual(errors,[]);await page.close();console.log('PASS matched zoom, whole-cherry harvest, Honey peel, reverse',width);
 }
 fs.writeFileSync('docs/hero-handoff-checks.json',JSON.stringify(report,null,2));
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
