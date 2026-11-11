const runtime='/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/';
const {chromium}=require(runtime+'playwright'),fs=require('fs'),assert=require('node:assert/strict');
(async()=>{
 const b=await chromium.launch({channel:'chrome'});
 try{
 const p=await b.newPage({viewport:{width:1440,height:900},deviceScaleFactor:2,isMobile:false,hasTouch:false});
 const c=await p.context().newCDPSession(p);await c.send('Network.enable');await c.send('Network.setCacheDisabled',{cacheDisabled:true});
 await c.send('Network.emulateNetworkConditions',{offline:false,latency:200,downloadThroughput:180000,uploadThroughput:90000,connectionType:'cellular3g'});
 await c.send('Emulation.setCPUThrottlingRate',{rate:4});
 const errors=[],requests=[];p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>requests.push(r.url()));
 if(process.env.SB_BLOCK_VIDEO)await p.route('**/*.mp4',r=>r.abort());
 await p.goto('http://127.0.0.1:4175/dist/',{waitUntil:'domcontentloaded'});await p.waitForFunction(()=>document.documentElement.dataset.motionMode==='film-only');
 const samples=[];
 for(const direction of ['forward','reverse'])for(let i=0;i<50;i++){
  const t=direction==='forward'?.12+i*.015:.855-i*.015;
  await p.evaluate(t=>{const x=ScrollTrigger.getAll().find(t=>t.trigger?.id==='sb-origin');sbLenis.scrollTo(x.start+(x.end-x.start)*t,{immediate:true})},t);
  await p.waitForTimeout(180);
  samples.push(await p.evaluate(direction=>{
   const progress=+document.querySelector('#sb-stage').dataset.journeyProgress;
   const chosen=progress>=.341&&progress<=.556?document.querySelector(`[data-method="${progress<.412?'natural':progress<.488?'honey':'washed'}"] .sb-panel-surface`):document.querySelector('.sb-journey-surface');
   const c=chosen.querySelector('canvas'),pixels=c.getContext('2d').getImageData(0,0,c.width,c.height).data;let subject=0;
   for(let y=0;y<c.height;y+=16)for(let x=0;x<c.width;x+=16){const i=(y*c.width+x)*4;if(pixels[i+3]>0&&Math.min(...pixels.slice(i,i+3))<150)subject++}
   return {direction,p:progress,expected:document.documentElement.dataset.processStage,chosen:{...chosen.dataset},subject,
    items:[...document.querySelectorAll('.sb-journey-surface,.sb-panel-surface')].map(e=>({...e.dataset,ready:e.querySelector('video').readyState,time:e.querySelector('video').currentTime,seeking:e.querySelector('video').seeking}))};
  },direction));
 }
 await p.waitForTimeout(2000);
 await p.screenshot({path:'output/v31/desktop-slow-network.png'});
 const report={samples,errors,resources:await p.evaluate(()=>performance.getEntriesByType('resource').map(e=>({url:e.name,bytes:e.transferSize,start:e.startTime,duration:e.duration})))};
 const reportPath=process.env.SB_BLOCK_VIDEO?'docs/V32-desktop-slow-blocked.json':'docs/V32-desktop-slow-network.json';
 fs.writeFileSync(reportPath,JSON.stringify(report,null,2));
 assert.deepEqual(errors,[]);assert(!requests.some(u=>/coffee-journey-v30|coffee-journey-v28\.mp4/.test(u)),'Desktop must use chapter files, not the full master');
 for(const s of samples){assert(s.chosen.hasFrame==='true'&&s.subject>5,`Blank frame at ${s.p}`);
  // At the two intentional crossfades, either adjacent stage is valid.
  if(s.p>.344&&s.p<.554||s.p<.329||s.p>.578)assert.equal(s.chosen.frameChapter,s.expected,`Wrong chapter at ${s.p}`);
 }
 assert(new Set(samples.map(s=>s.chosen.frameTime)).size>=12,'Frames must advance during scrolling, not just after it stops');
 await p.evaluate(()=>{const x=ScrollTrigger.getAll().find(t=>t.trigger?.id==='sb-origin');sbLenis.scrollTo(x.start+(x.end-x.start)*.995,{immediate:true})});
 await p.waitForFunction(()=>[...document.querySelectorAll('.sb-card img')].every(e=>e.naturalWidth&&+getComputedStyle(e).opacity>.95),null,{timeout:30000});
 assert(await p.locator('#coffees').evaluate(e=>!e.inert));
 report.status='passed';report.collection='all three photographs visible, links enabled';fs.writeFileSync(reportPath,JSON.stringify(report,null,2));
 console.log('PASS',samples.length,'continuous cold-cellular forward/reverse samples, correct chapter pixels, collection');
 }finally{await b.close()}
})().catch(e=>{console.error(e);process.exit(1)});
