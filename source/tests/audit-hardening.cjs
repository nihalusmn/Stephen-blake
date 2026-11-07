const {chromium}=require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const b=await chromium.launch({channel:'chrome'}),p=await b.newPage({viewport:{width:1440,height:1000}}),errors=[],checks=[];
 const pass=(name)=>{checks.push(name);console.log('PASS',name)};
 p.on('pageerror',e=>errors.push(e.message));
 try{
 await p.goto('http://127.0.0.1:4175/dist/');await p.waitForFunction(()=>!!window.sbLenis);
 // Details must remain keyboard-operable after choosing a grade or origin.
 await p.evaluate(()=>window.sbSetCategory('green'));await p.locator('[data-open="arabica-parchment-c"]').click();
 await p.locator('#dossier [data-grade="PB"]').click();
 assert.equal(await p.evaluate(()=>document.activeElement.dataset.grade),'PB');
 await p.locator('#dossier [data-origin="Kerala"]').click();
 assert.equal(await p.evaluate(()=>document.activeElement.dataset.origin),'Kerala');
 assert.equal(await p.locator('#dossier').getAttribute('aria-labelledby'),'dossier-title');pass('Product choices preserve keyboard focus and dialog name');
 await p.locator('#dossier [data-act="request"]').click();
 assert((await p.locator('#summary-list').innerText()).includes('Washed'));
 await p.evaluate(()=>window.sbSetCategory('filter'));await p.locator('[data-open="filter-robusta-pure"]').click();await p.locator('#dossier [data-act="request"]').click();
 assert.equal(await p.locator('[name="grade"]').inputValue(),'');
 const summary=await p.locator('#summary-list').innerText();assert(!summary.includes('Kerala'));assert(!summary.includes('Washed'));pass('Switching products clears stale grade, origin and process');
 await p.locator('#rail [data-go="5"]').click();
 const malicious='<img src=x onerror="window.__auditInjected=1">';
 for(const [name,value] of Object.entries({name:malicious,company:'Audit company',email:'buyer@example.com',phone:'+91 90000 00000',requirements:'Nitrogen flushed. Delivery in December. '+malicious}))await p.locator(`[name="${name}"]`).fill(value);
 await p.locator('[name="kind"]').selectOption('Sample request');
 await p.locator('#rail [data-go="4"]').click();await p.locator('[name="country"]').fill('India');await p.locator('[name="amount"]').fill('-5');
 await p.locator('#rail [data-go="5"]').click();await p.locator('#flow-next').click();
 assert.equal(await p.locator('#status').getAttribute('data-kind'),'error');
 assert.equal(await p.locator('.flow__panel.on').getAttribute('data-step'),'4');assert(await p.locator('#status').isVisible());pass('Negative quantities are rejected at the volume step');
 await p.locator('[name="amount"]').fill('500');await p.locator('#rail [data-go="5"]').click();await p.locator('#flow-next').click();
 assert.equal(await p.locator('#status').getAttribute('data-kind'),'ok');
 const msg=new URL(await p.locator('#status a').getAttribute('href')).searchParams.get('text');
 for(const value of ['+91 90000 00000','Nitrogen flushed. Delivery in December.','Sample request','buyer@example.com',malicious])assert(msg.includes(value),value);
 assert.equal(await p.evaluate(()=>window.__auditInjected),undefined);assert.equal(await p.locator('#status img,#summary img').count(),0);pass('Complete WhatsApp brief preserves contact, notes and type; HTML input stays text');
 await p.locator('[name="requirements"]').fill('Updated packing instructions');assert(await p.locator('#status').isHidden());
 const fresh=new URL(await p.locator('#wa-flow').getAttribute('href')).searchParams.get('text');assert(fresh.includes('Updated packing instructions'));pass('Editing a prepared enquiry invalidates the stale send link');
 await p.locator('#rail [data-go="0"]').click();await p.locator('#p-origin [data-val="Kerala"]').click();await p.locator('#rail [data-go="5"]').click();await p.waitForTimeout(400);
 assert.equal(await p.locator('.flow__panel.on').getAttribute('data-step'),'5');pass('Queued auto-advance cannot override a manually chosen step');
 await p.evaluate(()=>window.sbLenis.scrollTo(0,{immediate:true}));await p.locator('.mainnav a[href="#story"]').click();await p.waitForTimeout(850);
 await p.evaluate(()=>window.sbSetCategory('green'));await p.waitForTimeout(850);await p.goBack();await p.waitForTimeout(1100);
 assert.equal(new URL(p.url()).hash,'#story');assert(Math.abs(await p.locator('#story').evaluate(e=>e.getBoundingClientRect().top)-84)<15);pass('Browser back from a category restores the intended story section');
 // Every rendered same-origin non-anchor link must resolve; do not visit external destinations.
 const links=await p.locator('a[href]').evaluateAll(as=>[...new Set(as.map(a=>a.href))].filter(h=>{const u=new URL(h);return u.origin===location.origin&&!u.hash}));
 for(const link of links){const r=await p.request.get(link);assert(r.ok(),link)}pass('No dead policy or administration destinations');
 for(const group of ['green','roasted','filter']){
  await p.evaluate(g=>window.sbSetCategory(g),group);await p.waitForTimeout(300);
  const ids=await p.locator('#range [data-open]:visible').evaluateAll(es=>es.map(e=>e.dataset.open));
  for(const id of ids){console.log('Checking product',id);await p.locator(`[data-open="${id}"]`).click();await p.waitForFunction(()=>{const i=document.querySelector('#dossier img');return i.complete&&i.naturalWidth>0},null,{timeout:10000});await p.locator('#dossier [data-act="close"]').click()}
 }pass('Every catalogue product opens with a loaded specification image');
 assert.deepEqual(errors,[]);pass('No application exceptions');
 fs.writeFileSync('docs/audit-hardening-results.json',JSON.stringify({date:new Date().toISOString(),checks,errors},null,2));
 }finally{await b.close()}
})().catch(e=>{console.error(e);process.exit(1)});
