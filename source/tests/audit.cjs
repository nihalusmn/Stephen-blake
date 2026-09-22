if (process.argv.includes('--visuals')) { require('./visuals.cjs'); } else if (process.argv.includes('--lifecycle')) { require('./lifecycle.cjs'); } else {
const { chromium } = require('/Users/nihalusmanmm/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const base = process.env.SB_URL || 'http://127.0.0.1:4173/dist/';
const results = [], errors = [];
const check = (name, value) => { assert.ok(value, name); results.push(name); console.log('PASS', name); };
(async () => {
 const browser = await chromium.launch({ channel: 'chrome', headless: true });
 const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
 page.on('pageerror', error => errors.push(error.message));
 page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
 page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
 await page.goto(base); await page.waitForTimeout(2200);
 check('Desktop Three.js initializes', await page.evaluate(() => document.documentElement.classList.contains('sb-on')));
 check('Lenis and ScrollTrigger initialize', await page.evaluate(() => !!window.sbLenis && window.ScrollTrigger.getAll().length > 0));
 check('Native scrollIntoView is intact', await page.evaluate(() => Element.prototype.scrollIntoView.toString().includes('[native code]')));
 check('Exactly three photographic categories', await page.evaluate(() => {
  const imgs = [...document.querySelectorAll('.sb-card img')]; return imgs.length === 3 && imgs.every(i => /category-(filter|roasted|green)-/.test(i.src));
 }));
 await page.screenshot({path:'/tmp/sb-desktop.png'});
 // Exercise every chapter, allowing the progress-driven scene to settle.
 for (const progress of [0.1, .3, .5, .7, .93, 1]) {
  await page.evaluate(p => { const el = document.querySelector('#sb-origin'); const y = (el.offsetHeight-innerHeight)*.86*p; window.sbLenis.scrollTo(y,{immediate:true}); },progress);
  await page.waitForTimeout(850);
 }
 await page.waitForTimeout(800);
 check('Journey fades completely into photos', await page.evaluate(() => +document.querySelector('#sb-canvas').style.opacity < .01 && [...document.querySelectorAll('.sb-card img')].every(i => +i.style.opacity > .99)));
 await page.screenshot({path:'/tmp/sb-categories.png'});
 for (const [category, count] of [['filter',11],['roasted',2],['green',3]]) {
  await page.evaluate(key => window.sbSetCategory(key),category); await page.waitForTimeout(1100);
  check(`${category} catalogue count`, await page.locator('#grid .card, #functional:not([hidden]) .card').count() === count);
  await page.locator('#q').fill('zz-no-such-coffee'); check(`${category} empty feedback`, await page.locator('#empty').isVisible());
  await page.locator('#reset').click();
  await page.locator('#grid [data-open]').first().click();
  check(`${category} product detail opens`,await page.locator('#dossier').evaluate(el=>el.open));
  await page.waitForTimeout(100);
  check(`${category} modal stops Lenis`, await page.evaluate(()=>window.sbLenis.isStopped));
  await page.keyboard.press('Escape'); await page.waitForTimeout(100);
  check(`${category} modal resumes Lenis`, await page.evaluate(()=>!window.sbLenis.isStopped));
 }
 await page.locator('#species [data-sp="Arabica"]').click();
 check('Species filter', await page.locator('#grid .card').count() === 2);
 await page.locator('#species [data-sp="All species"]').click();
 await page.locator('#grid [data-open]').first().click();
 await page.locator('#dossier [data-act="request"]').click(); await page.waitForTimeout(1000);
 check('Product carries into enquiry', await page.locator('#summary-list').innerText().then(text=>text.includes('Arabica')));
 check('Request closes modal', await page.locator('#dossier').evaluate(el=>!el.open));
 // Existing wizard is a local brief builder, no network submission.
 await page.locator('#rail [data-go="5"]').click(); await page.locator('#flow-next').click();
 check('Enquiry validates missing fields', await page.locator('#status').getAttribute('data-kind') === 'error');
 await page.locator('[name="name"]').fill('Test buyer'); await page.locator('[name="company"]').fill('Test company'); await page.locator('[name="email"]').fill('buyer@example.com');
 await page.locator('#rail [data-go="4"]').click();
 await page.locator('[name="country"]').fill('India'); await page.locator('[name="amount"]').fill('20');
 await page.locator('#rail [data-go="5"]').click(); await page.locator('#flow-next').click();
 check('Enquiry prepares valid brief', await page.locator('#status').getAttribute('data-kind') === 'ok');
 check('WhatsApp retains enquiry content', (await page.locator('#wa-flow').getAttribute('href')).includes('wa.me/918111888667'));
 // Confirm all same-page navigation destinations exist (category hashes are routes).
 check('Navigation destinations valid', await page.evaluate(()=>[...document.querySelectorAll('a[href^="#"]')].every(a=> a.hash==='' || a.hash==='#' || ['#green-coffee','#roasted-coffee','#filter-coffee'].includes(a.hash) || !!document.getElementById(a.hash.slice(1)))));
 for (const id of ['origins','private-label','story','request']) {
  const nav = page.locator(`.mainnav a[href="#${id}"]`);
  if(await nav.count()) {await nav.click();await page.waitForTimeout(1000);check(`${id} anchor navigation`,await page.evaluate(id=>location.hash==='#'+id && Math.abs(document.getElementById(id).getBoundingClientRect().top-84)<12,id));}
 }
 await page.evaluate(()=>window.sbSetCategory('filter'));await page.waitForTimeout(900);
 await page.evaluate(()=>window.sbSetCategory('roasted'));await page.waitForTimeout(900);
 await page.goBack();await page.waitForTimeout(900);check('Browser back restores category',(await page.locator('#range-h').innerText()).includes('Filter'));
 await page.goForward();await page.waitForTimeout(900);check('Browser forward restores category',(await page.locator('#range-h').innerText()).includes('Roasted'));
 await page.emulateMedia({reducedMotion:'reduce'}); await page.waitForTimeout(300);
 check('Live reduced motion cleans scene and scroll',await page.evaluate(()=>!window.sbLenis&&!document.documentElement.classList.contains('sb-on')));
 check('Reduced motion leaves photos visible',await page.locator('.sb-card img').first().evaluate(el=>getComputedStyle(el).opacity==='1'));
 await page.emulateMedia({reducedMotion:'no-preference'});
 for (const [width,height] of [[820,1180],[390,844],[360,740]]) {
  await page.setViewportSize({width,height});await page.goto(base);await page.waitForTimeout(1800);
  check(`No horizontal overflow at ${width}px`,await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  if(width<760) {
   check(`Mobile journey initializes ${width}px`,await page.evaluate(()=>document.documentElement.classList.contains('sb-on')));
   await page.locator('#burger').click();
   check(`Mobile menu expanded ${width}px`,await page.locator('#burger').getAttribute('aria-expanded')==='true');
   await page.keyboard.press('Shift+Tab');check(`Mobile focus trap ${width}px`,await page.evaluate(()=>document.querySelector('#drawer').contains(document.activeElement)));
   await page.keyboard.press('Escape');await page.waitForTimeout(100);
   check(`Mobile menu restores focus ${width}px`,await page.locator('#burger').evaluate(el=>el===document.activeElement));
   await page.locator('#burger').click();await page.locator('#drawer a[href="#coffees"]').click();await page.waitForTimeout(1100);
   check(`Mobile navigation closes drawer ${width}px`,!(await page.locator('#drawer').getAttribute('class')).includes('is-open'));
   await page.screenshot({path:`/tmp/sb-mobile-${width}.png`});
  }
 }
 await page.setViewportSize({width:1440,height:1000});await page.goto(base+'/#green-coffee');await page.waitForTimeout(1500);
 check('Direct category link',await page.locator('#range-h').innerText().then(t=>t.includes('Green')));
 check('Deep link avoids Three.js',await page.evaluate(()=>!document.documentElement.classList.contains('sb-on')));
 // Scroll through the whole page to load and validate every lazy image.
 await page.evaluate(async()=> {const imgs=[...document.images];for(const img of imgs){img.loading='eager';}await Promise.all(imgs.map(i=>i.decode().catch(()=>{})));});
 check('No broken images',await page.evaluate(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0)));
 await page.goto(base);await page.waitForTimeout(1600);
 await page.evaluate(()=>document.querySelector('#sb-canvas').dispatchEvent(new Event('webglcontextlost',{cancelable:true})));
 check('Context loss leaves accessible fallback',await page.evaluate(()=>!document.documentElement.classList.contains('sb-on')&&getComputedStyle(document.querySelector('.sb-card img')).opacity==='1'));
 check('No console or network errors',errors.length===0);
 fs.writeFileSync('docs/test-results.json',JSON.stringify({date:new Date().toISOString(),base,passed:results,errors},null,2));
 await browser.close();
})().catch(error=>{console.error(error);console.error(errors);process.exit(1)});

}
