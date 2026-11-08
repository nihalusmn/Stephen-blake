// Repeatable local-browser benchmark. CPU throttling is not a real-phone test.
const { chromium } = require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const url = process.argv[2] || 'http://127.0.0.1:4175/dist/';
const label = process.argv[3] || 'after';
(async () => {
 const browser = await chromium.launch({channel:'chrome', headless:true});
 const results=[];
 try { for (let run=0; run<3; run++) {
  const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const cdp=await page.context().newCDPSession(page);
  await cdp.send('Emulation.setCPUThrottlingRate',{rate:4});
  await cdp.send('Performance.enable');
  await page.addInitScript(() => {
   window.bench={tasks:[],seek:[],draws:0};
   new PerformanceObserver(list=>window.bench.tasks.push(...list.getEntries().map(e=>({start:e.startTime,duration:e.duration})))).observe({type:'longtask',buffered:true});
   const pending=new WeakMap();
   document.addEventListener('seeking',e=>pending.set(e.target,performance.now()),true);
   document.addEventListener('seeked',e=>{if(pending.has(e.target))window.bench.seek.push(performance.now()-pending.get(e.target));},true);
   for(const proto of [WebGLRenderingContext.prototype,WebGL2RenderingContext.prototype]) for(const key of ['drawArrays','drawElements','drawElementsInstanced','drawArraysInstanced']) {
    const original=proto[key];if(original)proto[key]=function(...args){window.bench.draws++;return original.apply(this,args)};
   }
  });
  await page.goto(url);await page.waitForFunction(()=>document.documentElement.dataset.journeyVideo==='ready'&&document.documentElement.dataset.macroReady==='true');
  await page.waitForTimeout(1000);
  const before=(await cdp.send('Performance.getMetrics')).metrics;
  // Record a browser trace as well as aggregate measurements, on the middle run.
  if(run===1)await cdp.send('Tracing.start',{categories:'devtools.timeline,blink.user_timing',transferMode:'ReturnAsStream'});
  const measured=await page.evaluate(async()=>{
   const stage=document.querySelector('#sb-stage'),origin=document.querySelector('#sb-origin');
   const end=(origin.offsetHeight-innerHeight)*parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sb-story'));
   const initialDraws=bench.draws;bench.seek=[];const start=performance.now(),frames=[],lag=[];let last=start;
   await new Promise(resolve=>{
    function step(now){
     frames.push(now-last);last=now;
     const t=Math.min(1,(now-start)/12000),p=t<=.67?t/.67:1-(t-.67)/.33;
     window.sbLenis.scrollTo(end*p,{immediate:true});
     lag.push(Math.abs(p-Number(stage.dataset.journeyProgress||0)));
     if(t<1)requestAnimationFrame(step);else resolve();
    } requestAnimationFrame(step);
   });
   const stop=performance.now();await new Promise(r=>setTimeout(r,250));
   const pct=(a,q)=>{a=[...a].sort((x,y)=>x-y);return a[Math.min(a.length-1,Math.floor(a.length*q))]||0};
   const tasks=bench.tasks.filter(t=>t.start>=start&&t.start<=stop);
   return {elapsed:stop-start,frames:frames.length,averageFPS:frames.length*1000/(stop-start),frameP95: pct(frames,.95),framesOver34ms:frames.filter(t=>t>34).length,
    longTasks:tasks.length,blockingMS:tasks.reduce((n,t)=>n+Math.max(0,t.duration-50),0),progressLagP95:pct(lag,.95),seekP95:pct(bench.seek,.95),seeks:bench.seek.length,webglDraws:bench.draws-initialDraws,
    players:[...document.querySelectorAll('video')].map(v=>({width:v.videoWidth,height:v.videoHeight,src:v.currentSrc,decoded:v.webkitDecodedFrameCount})),
    scriptBytes:performance.getEntriesByType('resource').filter(r=>r.initiatorType==='script').reduce((n,r)=>n+r.decodedBodySize,0)};
  });
  if(run===1){
   const complete=new Promise(resolve=>cdp.once('Tracing.tracingComplete',resolve));await cdp.send('Tracing.end');const {stream}=await complete;let trace='';
   for(;;){const r=await cdp.send('IO.read',{handle:stream});trace+=r.data;if(r.eof)break;}await cdp.send('IO.close',{handle:stream});
   fs.writeFileSync(`output/mobile-v30/${label}-trace.json`,trace);
  }
  if(measured.seeks<30||measured.players.some(v=>!v.width))throw new Error('Benchmark invalid: film/processing media did not animate');
  const after=(await cdp.send('Performance.getMetrics')).metrics;
  const get=(list,name)=>list.find(m=>m.name===name)?.value||0;
  for(const key of ['TaskDuration','ScriptDuration','LayoutDuration','RecalcStyleDuration','LayoutCount','RecalcStyleCount'])measured[key]=get(after,key)-get(before,key);
  measured.heapMB=get(after,'JSHeapUsedSize')/1048576;measured.errors=errors;results.push(measured);
  console.log(label,run,JSON.stringify(measured));await page.close();
 }} finally {await browser.close();}
 fs.writeFileSync(`docs/mobile-performance-${label}.json`,JSON.stringify({date:new Date().toISOString(),environment:'Chromium on Mac, 390×844, DPR 2, touch emulation, 4× CPU slowdown, local assets; three identical 12-second forward/reverse scrolls',results},null,2));
})().catch(e=>{console.error(e);process.exit(1)});
