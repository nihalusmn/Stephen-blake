const { chromium } = require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
(async()=>{
 const b=await chromium.launch({channel:'chrome',headless:true});
 const p=await b.newPage({viewport:{width:1440,height:1000}});const errors=[];const checks=[];
 p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 const pass=(n,v)=>{assert.ok(v,n);checks.push(n);console.log('PASS',n)};
 const url='http://127.0.0.1:4175/dist/';
 await p.goto(url);await p.waitForTimeout(1800);
 const initial=await p.evaluate(()=>window.ScrollTrigger.getAll().length);
 for(let i=0;i<2;i++){
  await p.emulateMedia({reducedMotion:'reduce'});await p.waitForTimeout(150);
  pass('Scene cleanup '+i,await p.evaluate(()=>!document.documentElement.classList.contains('sb-on')&&!window.sbLenis));
  await p.emulateMedia({reducedMotion:'no-preference'});await p.waitForTimeout(1700);
  pass('Scene reinitialization '+i,await p.evaluate(()=>document.documentElement.classList.contains('sb-on')&&!!window.sbLenis));
  pass('No duplicate triggers '+i,await p.evaluate(n=>window.ScrollTrigger.getAll().length<=n+1,initial));
 }
 await p.setViewportSize({width:390,height:844});await p.waitForTimeout(400);
 pass('Resize to mobile preserves scene',await p.evaluate(()=>document.documentElement.classList.contains('sb-on')));
 await p.setViewportSize({width:1440,height:1000});await p.waitForTimeout(1700);
 pass('Resize back to desktop restores scene',await p.evaluate(()=>document.documentElement.classList.contains('sb-on')));
 await p.keyboard.press('PageDown');await p.waitForTimeout(300);
 pass('Keyboard scroll preserved',await p.evaluate(()=>scrollY>0));
 const off=await b.newPage({viewport:{width:1440,height:1000}});
 off.on('pageerror',e=>errors.push(e.message));off.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 await off.addInitScript(()=>{const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){if(type.startsWith('webgl'))return null;return original.call(this,type,...args)}});
 await off.goto(url);await off.waitForTimeout(1400);
 pass('No WebGL retains photos and catalogue',await off.evaluate(()=>!document.documentElement.classList.contains('sb-on')&&document.querySelectorAll('.sb-card').length===3));
 await off.locator('.sb-card[data-cat="green"]').click();await off.waitForTimeout(1100);
 pass('No WebGL category remains functional',await off.locator('#grid .card').count()===3);
 const reduced=await b.newPage({reducedMotion:'reduce'});const requests=[];
 reduced.on('request',r=>requests.push(r.url()));await reduced.goto(url);await reduced.waitForTimeout(1000);
 pass('Reduced motion does not fetch scene',!requests.some(u=>/\/origin-[^/]+\.js/.test(u)));
 pass('No lifecycle errors',errors.length===0);
 fs.writeFileSync('docs/lifecycle-results.json',JSON.stringify({date:new Date().toISOString(),checks,errors},null,2));
 await b.close();
})().catch(e=>{console.error(e);process.exit(1)});
