const { chromium } = require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
(async()=>{
const b=await chromium.launch({channel:'chrome',headless:true});const p=await b.newPage({viewport:{width:1440,height:1000}});
await p.goto('http://127.0.0.1:4173/dist/');await p.waitForTimeout(2000);
for(const progress of [.92,.95,.97,1]){
await p.evaluate(n=>{const el=document.getElementById('sb-origin');window.sbLenis.scrollTo((el.offsetHeight-innerHeight)*.86*n,{immediate:true})},progress);await p.waitForTimeout(1600);
await p.screenshot({path:`/tmp/sb-transition-${progress}.png`});
}
assert.equal(await p.locator('.sb-card').count(),3);
for(const key of ['filter','roasted','green']){await p.evaluate(k=>window.sbSetCategory(k),key);await p.waitForTimeout(900);assert.ok((await p.locator('#range-art').getAttribute('src')).includes(`photography/category-${key}`))}
await b.close();console.log('PASS transition screenshots and generated category header imagery');
})().catch(e=>{console.error(e);process.exit(1)});
