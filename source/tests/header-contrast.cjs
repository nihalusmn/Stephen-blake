const {chromium}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{const b=await chromium.launch({channel:'chrome'});const checks=[];try{const p=await b.newPage({viewport:{width:1440,height:1000}});await p.goto('http://127.0.0.1:4175/dist/?version=29');await p.waitForFunction(()=>document.documentElement.dataset.journeyVideo==='ready');
for(const [id,dark] of [['private-label',true],['request',false]]){
 await p.evaluate(id=>window.sbLenis.scrollTo(document.getElementById(id).getBoundingClientRect().top+scrollY+10,{immediate:true}),id);await p.waitForTimeout(800);
 const state=await p.locator('#masthead').evaluate(el=>({dark:el.classList.contains('on-dark'),bg:getComputedStyle(el).backgroundColor,color:getComputedStyle(el.querySelector('.mainnav')).color}));
 assert.equal(state.dark,dark);const [r,g,bb]=state.bg.match(/[\d.]+/g).map(Number);assert(dark?Math.max(r,g,bb)<50:Math.min(r,g,bb)>200);checks.push({id,...state});
}
await p.locator('#rail [data-go="5"]').click();await p.evaluate(()=>window.sbLenis.scrollTo(document.querySelector('.flow'),{immediate:true,offset:-100}));await p.waitForTimeout(700);await p.screenshot({path:'output/audit-2026-11-07/verified-enquiry.png'});fs.writeFileSync('docs/header-contrast-results.json',JSON.stringify({checks},null,2));console.log('PASS header contrast on dark/light sections and enquiry screenshot');
}finally{await b.close()}})().catch(e=>{console.error(e);process.exit(1)});
