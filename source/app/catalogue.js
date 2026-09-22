import { originProfiles } from './origins.js';
import { scrollToElement } from './animations/scroll.js';

const ASSETS = {"/coffee-cherries.webp": "assets/source/coffee-cherries.webp", "/origin-hills.webp": "assets/source/origin-hills.webp", "/roastery.webp": "assets/source/roastery.webp", "/brand-transparent.png": "assets/source/brand-transparent.png"};
/* Catalogue photography lives in assets/products/ — one crop, one grade,
   one art direction.  Source photographs are separate cacheable files in assets/source/. */
const GRADED = new Set(["/beans-4048.webp", "/beans-4049.webp", "/beans-4054.webp", "/beans-4057.webp", "/beans-4062.webp", "/roasted-sample.webp", "/coffee-hero.webp", "/filter-arabica-concept.webp", "/filter-arabica-70.webp", "/filter-arabica-80.webp", "/filter-robusta-concept.webp", "/filter-robusta-60.webp", "/filter-robusta-70.webp", "/filter-robusta-80.webp", "/filter-ashwagandha.webp", "/filter-lions-mane.webp", "/filter-sea-moss.webp", "/filter-shilajit.webp"]);
const A = p => GRADED.has(p) ? 'assets/products' + p : (ASSETS[p] || p);
/* ---- catalogue: preserved verbatim from the live site's data ---- */
const CATALOGUE = [
{id:'arabica-cherry-a',name:'Arabica Unwashed',category:'Green coffee',species:'Arabica',grade:'AAA · AA · A · B · C · PB',image:'assets/photography/green-arabica-unwashed-reference-960.webp',description:'Unwashed Indian Arabica. Explore six green-bean grades and build a lot specification around your roast and cup.',process:'Unwashed, green beans',origin:'India, region on request',notes:'Request a sample for cup evaluation',packaging:'Discuss bag size and liner requirements',moq:'On enquiry'},
{id:'robusta-cherry-aaa',name:'Robusta Cherry',category:'Green coffee',species:'Robusta',grade:'AAA · AA · A · B · C · PB',image:'assets/photography/green-robusta-clean-960.webp',description:'Green Robusta for roasting, blending and commercial coffee applications.',process:'Confirm lot specification',origin:'India, region on request',notes:'Request a sample for cup evaluation',packaging:'Discuss bag size and liner requirements',moq:'On enquiry'},
{id:'arabica-parchment-c',name:'Arabica Washed',category:'Green coffee',species:'Arabica',grade:'AAA · AA · A · B · PB · C',image:'assets/photography/green-arabica-washed-clean-960.webp',description:'Washed Indian Arabica, available in PL AAA, AA, A, B, PB and C grades. Select a grade and request a representative sample.',process:'Washed, green beans',origin:'India, region on request',notes:'Request a sample for cup evaluation',packaging:'Discuss bag size and liner requirements',moq:'On enquiry'},
{id:'roasted-coffee',name:'Roasted Coffee Beans',category:'Roasted coffee',species:'Arabica / Robusta',grade:'AAA · AA · A · B · C · PB',image:'/coffee-hero.webp',description:'Roast profiles developed for cafés, hospitality and retail coffee brands.',process:'Medium-dark roast',origin:'India, to specification',notes:'Profile developed to your brief',packaging:'Retail or bulk requirements',moq:'On enquiry'},
{id:'ground-coffee',name:'Ground Coffee',category:'Ground coffee',species:'Arabica / Robusta / Blend',grade:'To specification',image:'/filter-arabica-concept.webp',description:'Coffee ground for your brewing method, from espresso to filter.',process:'Grind size to brief',origin:'India, to specification',notes:'Discuss strength, body and brew method',packaging:'Retail or bulk requirements',moq:'On enquiry'},
{id:'filter-robusta-pure',name:'Robusta Pure Filter Coffee',category:'Filter coffee',species:'Robusta',grade:'100% Robusta coffee',image:'/filter-robusta-concept.webp',description:'Robusta Cherry coffee, ground for the traditional filter coffee ritual.',process:'Ground for filter brewing',origin:'Coffee origin: India',notes:'Evaluate a sample using your preferred brew method',packaging:'Discuss retail and bulk formats',moq:'On enquiry'},
{id:'filter-robusta-80',name:'Robusta Filter Coffee 80:20',category:'Filter coffee',species:'Robusta',grade:'80% Robusta · 20% chicory',image:'/filter-robusta-80.webp',description:'Robusta Cherry coffee blended with chicory, ground for the traditional filter coffee ritual.',process:'Ground for filter brewing',origin:'Coffee origin: India',notes:'Evaluate a sample using your preferred brew method',packaging:'Discuss retail and bulk formats',moq:'On enquiry'},
{id:'filter-robusta-70',name:'Robusta Filter Coffee 70:30',category:'Filter coffee',species:'Robusta',grade:'70% Robusta · 30% chicory',image:'/filter-robusta-70.webp',description:'Robusta Cherry coffee blended with chicory, ground for the traditional filter coffee ritual.',process:'Ground for filter brewing',origin:'Coffee origin: India',notes:'Evaluate a sample using your preferred brew method',packaging:'Discuss retail and bulk formats',moq:'On enquiry'},
{id:'filter-robusta-60',name:'Robusta Filter Coffee 60:40',category:'Filter coffee',species:'Robusta',grade:'60% Robusta · 40% chicory',image:'/filter-robusta-60.webp',description:'Robusta Cherry coffee blended with chicory, ground for the traditional filter coffee ritual.',process:'Ground for filter brewing',origin:'Coffee origin: India',notes:'Evaluate a sample using your preferred brew method',packaging:'Discuss retail and bulk formats',moq:'On enquiry'},
{id:'filter-arabica-pure',name:'Arabica Pure Filter Coffee',category:'Filter coffee',species:'Arabica',grade:'100% Arabica coffee',image:'/filter-arabica-concept.webp',description:'Arabica Unwashed coffee, ground for the traditional filter coffee ritual.',process:'Ground for filter brewing',origin:'Coffee origin: India',notes:'Evaluate a sample using your preferred brew method',packaging:'Discuss retail and bulk formats',moq:'On enquiry'},
{id:'filter-arabica-80',name:'Arabica Filter Coffee 80:20',category:'Filter coffee',species:'Arabica',grade:'80% Arabica · 20% chicory',image:'/filter-arabica-80.webp',description:'Arabica Unwashed coffee blended with chicory, ground for the traditional filter coffee ritual.',process:'Ground for filter brewing',origin:'Coffee origin: India',notes:'Evaluate a sample using your preferred brew method',packaging:'Discuss retail and bulk formats',moq:'On enquiry'},
{id:'filter-arabica-70',name:'Arabica Filter Coffee 70:30',category:'Filter coffee',species:'Arabica',grade:'70% Arabica · 30% chicory',image:'/filter-arabica-70.webp',description:'Arabica Unwashed coffee blended with chicory, ground for the traditional filter coffee ritual.',process:'Ground for filter brewing',origin:'Coffee origin: India',notes:'Evaluate a sample using your preferred brew method',packaging:'Discuss retail and bulk formats',moq:'On enquiry'},
{id:'filter-lions-mane',name:'Lion’s Mane Filter Coffee',category:'Filter coffee',species:'Coffee blend',grade:'10% lion’s mane',image:'/filter-lions-mane.webp',description:'Lion’s Mane Filter Coffee, prepared for filter brewing. Ask for the complete ingredient specification and a sample.',process:'Ground for filter brewing',origin:'Coffee origin: India',notes:'Evaluate a sample using your preferred brew method',packaging:'Discuss retail and bulk formats',moq:'On enquiry'},
{id:'filter-shilajit',name:'Shilajit Filter Coffee',category:'Filter coffee',species:'Coffee blend',grade:'8% shilajit',image:'/filter-shilajit.webp',description:'Shilajit Filter Coffee, prepared for filter brewing. Ask for the complete ingredient specification and a sample.',process:'Ground for filter brewing',origin:'Coffee origin: India',notes:'Evaluate a sample using your preferred brew method',packaging:'Discuss retail and bulk formats',moq:'On enquiry'},
{id:'filter-sea-moss',name:'Sea Moss Filter Coffee',category:'Filter coffee',species:'Coffee blend',grade:'10% sea moss',image:'/filter-sea-moss.webp',description:'Sea Moss Filter Coffee, prepared for filter brewing. Ask for the complete ingredient specification and a sample.',process:'Ground for filter brewing',origin:'Coffee origin: India',notes:'Evaluate a sample using your preferred brew method',packaging:'Discuss retail and bulk formats',moq:'On enquiry'},
{id:'filter-ashwagandha',name:'Ashwagandha Filter Coffee',category:'Filter coffee',species:'Coffee blend',grade:'Ashwagandha blend',image:'/filter-ashwagandha.webp',description:'Ashwagandha Filter Coffee, prepared for filter brewing. Ask for the complete ingredient specification and a sample.',process:'Ground for filter brewing',origin:'Coffee origin: India',notes:'Evaluate a sample using your preferred brew method',packaging:'Discuss retail and bulk formats',moq:'On enquiry'},
{id:'custom-blends',name:'Your signature blend',category:'Custom blends',species:'Blend',grade:'To specification',image:'/roasted-sample.webp',description:'Start with a flavour brief. We build a coffee that belongs to your brand.',process:'Custom development enquiry',origin:'To specification',notes:'Flavour, strength and application led',packaging:'Custom requirements',moq:'On enquiry'}
];
/* ----------------------------------------------------------------------
   THE THREE PRIMARY CATEGORIES
   Buyers choose a coffee *world* first — raw, roasted or ground — and only
   then look at individual lots.  Every catalogue entry keeps its own, more
   specific `category`; this maps that onto the three the homepage tells a
   story about.  Nothing is duplicated and nothing is invented.
   ---------------------------------------------------------------------- */
const GROUPS = [
  { key:'green', name:'Green coffee beans', kicker:'Selected at origin',
    lead:'Unwashed and washed Indian green beans, graded and shipped to roasters, traders and private-label producers. Sample first, specification agreed per lot.',
    art:'assets/photography/category-green-1120.webp',
    match:['Green coffee'] },
  { key:'roasted', name:'Roasted coffee', kicker:'Roasted for character',
    lead:'Whole bean and ground, roasted to a profile agreed against your own sample. Roast date, profile and shelf life confirmed on every despatch.',
    art:'assets/photography/category-roasted-1120.webp',
    match:['Roasted coffee','Ground coffee'] },
  { key:'filter', name:'Filter coffee', kicker:'Crafted for the cup',
    lead:'South Indian filter coffee — pure, chicory blends and herbal additions, ground to your brewing specification and packed to your format.',
    art:'assets/photography/category-filter-1120.webp',
    match:['Filter coffee'] }
];
const GROUP_BY_KEY = {}; GROUPS.forEach(g => GROUP_BY_KEY[g.key] = g);
const GROUP_OF = {};     GROUPS.forEach(g => g.match.forEach(c => GROUP_OF[c] = g.key));
CATALOGUE.forEach(p => { p.group = GROUP_OF[p.category] || 'custom'; });
const GROUP_HASH = { 'green':'#green-coffee', 'roasted':'#roasted-coffee', 'filter':'#filter-coffee' };
const HASH_GROUP = { '#green-coffee':'green', '#roasted-coffee':'roasted', '#filter-coffee':'filter' };
const HERBAL = new Set(['filter-lions-mane','filter-shilajit','filter-ashwagandha','filter-sea-moss']);
const REGIONS = {
  'Karnataka':'Coorg, Chikmagalur, Baba Budangiri',
  'Kerala':'Wayanad and the Western Ghats',
  'Tamil Nadu':'Nilgiris, Shevaroys, Anamalais',
  'Andhra Pradesh':'Araku Valley, Eastern Ghats',
  'Odisha':'Koraput, Eastern Ghats'
};
const PROCESSES = [
  ['Natural','Dried with the fruit intact. Start here when you want fruit expression and body.'],
  ['Washed','Fruit removed and washed before drying. A cleaner starting point when you want clarity.'],
  ['Honey','Some mucilage left on during drying. Ask which specific method was used for the lot.']
];

const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const WA = t => 'https://wa.me/918111888667?text=' + encodeURIComponent(t);
const calm = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------- state ---------------- */
const state = {
  group:null, species:'All species', q:'', region:'Karnataka',
  step:0,
  req:{ origin:'', form:'', variety:'', process:'' }
};

/* ==========================================================
   MOTION
   ========================================================== */
window.__watch = () => $$('[data-reveal]').forEach(el => el.classList.add('seen'));
window.__watch();

/* ==========================================================
   MASTHEAD
   Three states: transparent over the film, smoked glass over the dark
   editorial sections, paper over the parchment ones.
   ========================================================== */
const mast = $('#masthead'), waf = $('#wafloat');

/* where the cinematic prologue releases the page */
function filmEnd(){
  const el = $('#sb-origin');
  if(!el || !document.documentElement.classList.contains('sb-on')) return 0;
  return el.offsetTop + el.offsetHeight - innerHeight;
}
let darkBands = [];
function measureBands(){
  darkBands = $$('[data-dark]').map(el => {
    const r = el.getBoundingClientRect();
    return [r.top + scrollY, r.bottom + scrollY];
  });
}
addEventListener('resize', () => { clearTimeout(measureBands.t);
  measureBands.t = setTimeout(measureBands, 150); }, { passive:true });
addEventListener('load', measureBands);
measureBands();

addEventListener('scroll', () => {
  const end = filmEnd();
  const past = scrollY > end + 24;
  mast.classList.toggle('stuck', past);
  if(past){
    const y = scrollY + 42;
    mast.classList.toggle('on-dark', darkBands.some(b => y >= b[0] && y < b[1]));
  } else mast.classList.remove('on-dark');
  /* the floating button belongs to the website, not to the film */
  waf.classList.toggle('show', scrollY > filmEnd() + innerHeight * 0.25);
}, { passive:true });

/* ==========================================================
   CATALOGUE
   ========================================================== */
const HERBAL_LABEL = 'Herbal blends';
function speciesOptions(){
  return ['All species','Arabica','Robusta'].concat(state.group === 'filter' ? [HERBAL_LABEL] : []);
}
/* Products are filtered by data, not hidden by CSS: a category view only
   ever renders the coffees that belong to it. */
function filtered(){
  if(!state.group) return [];
  return CATALOGUE.filter(p => {
    if(p.group !== state.group) return false;
    if(state.species !== 'All species'){
      if(state.species === HERBAL_LABEL){ if(!HERBAL.has(p.id)) return false; }
      else if(!p.species.includes(state.species)) return false;
    }
    return `${p.name} ${p.species} ${p.category} ${p.grade} ${p.description}`
      .toLowerCase().includes(state.q.toLowerCase());
  });
}
const gradeLine = p => p.grade === 'To specification' ? 'Specified to your brief' : p.grade;
/* The metadata line names the coffee, not the enquiry: values that are
   really instructions to us ("confirm lot specification") are left out. */
const metaLine = p => {
  const proc = (p.process || '').split(',')[0].trim();
  const say = proc && !/^(confirm|custom|grind size)/i.test(proc) ? proc : '';
  return [p.species, say].filter(Boolean).join(' \u00b7 ');
};
const altFor = p => p.category === 'Green coffee'
  ? p.name + ', illustrative green coffee photograph'
  : p.name + ', illustrative product photograph';

/* ==========================================================
   THE CATEGORY VIEW
   One level below the three cinematic panels: the real lots.
   ========================================================== */
const rangeEl = $('#range');
function renderRangeNav(){
  $('#range-nav').innerHTML = GROUPS.map(g =>
    `<a href="${GROUP_HASH[g.key]}" class="chip${state.group===g.key?' is-on':''}" data-group="${g.key}"
        aria-current="${state.group===g.key?'true':'false'}">${esc(g.name)}</a>`).join('');
}
function renderSpecies(){
  const sp = speciesOptions();
  if(!sp.includes(state.species)) state.species = 'All species';
  $('#species').innerHTML = '<span>Variety</span>' + sp.map(s =>
    `<button class="chip${state.species===s?' is-on':''}" data-sp="${esc(s)}">${esc(s)}</button>`).join('');
}
/* One image, one line of metadata, one name, one grade, one link — and
   the whole card is the target, so there is nothing else to aim at. */
function card(p, i){
  return `
    <article class="card" data-reveal style="--rd:${Math.min(i,5)*60}ms">
      <span class="card__img"><img src="${A(p.image)}" ${p.category === 'Green coffee' ? `srcset="${p.image.replace('-960', '-480')} 480w, ${p.image} 960w" sizes="(max-width: 600px) 90vw, (max-width: 1000px) 44vw, 30vw" width="1122" height="1402"` : ''} alt="${esc(altFor(p))}" loading="lazy" decoding="async"></span>
      <span class="card__meta">${esc(metaLine(p))}</span>
      <h3>${esc(p.name)}</h3>
      <span class="card__grade">${esc(gradeLine(p))}</span>
      <button class="card__link" data-open="${p.id}">View specification
        <svg class="icon" viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><use href="#i-ne"/></svg></button>
    </article>`;
}
function renderGrid(){
  const list = filtered();
  $('#empty').hidden = list.length > 0;
  const total = state.group ? CATALOGUE.filter(p => p.group === state.group).length : 0;
  $('#range-count').textContent = list.length === total
    ? (total === 1 ? 'One coffee in this category' : total + ' coffees in this category')
    : list.length + ' of ' + total + ' shown';
  /* Traditional coffee stays the centre of gravity: the functional blends
     follow it under their own heading rather than sitting among it. */
  if(state.group === 'filter'){
    const classic = list.filter(p => !HERBAL.has(p.id));
    const functional = list.filter(p => HERBAL.has(p.id));
    $('#grid').innerHTML = classic.map(card).join('');
    const fx = $('#functional');
    fx.hidden = functional.length === 0;
    $('#functional-grid').innerHTML = functional.map(card).join('');
  } else {
    $('#grid').innerHTML = list.map(card).join('');
    $('#functional').hidden = true;
  }
  window.__watch();
  document.dispatchEvent(new CustomEvent('sb:catalogue-updated'));
}

/* Opening a category is the site's one real route: it is reflected in the
   URL, so back/forward and shared links behave the way people expect. */
function openGroup(key, opts){
  const g = GROUP_BY_KEY[key]; if(!g) return;
  opts = opts || {};
  /* the chosen world steps forward and the other two step back, so the
     category that opens below is visibly the one that was clicked */
  const row = $('#sb-cards');
  if(row && !calm()){
    row.classList.add('is-choosing');
    row.querySelectorAll('.sb-card').forEach(a =>
      a.classList.toggle('is-chosen', a.dataset.cat === key));
  }
  rangeEl.classList.remove('is-entering');
  void rangeEl.offsetWidth;
  if(!calm()) rangeEl.classList.add('is-entering');
  if(state.group !== key){
    state.q = ''; const q = $('#q'); if(q) q.value = '';
    state.species = 'All species';
  }
  state.group = key;
  rangeEl.hidden = false;
  $('#range-kicker').textContent = g.kicker;
  $('#range-h').textContent = g.name;
  $('#range-lead').textContent = g.lead;
  const art = $('#range-art');
  if(art.getAttribute('src') !== g.art) art.src = g.art;
  renderRangeNav(); renderSpecies(); renderGrid();
  document.title = g.name + ' — Stephen Blake, Indian coffee exporters';
  /* the page just got taller: the smooth-scroll systems need to know */
  if(window.sbLenis) window.sbLenis.resize();
  if(window.ScrollTrigger) window.ScrollTrigger.refresh();
  if(opts.push !== false && location.hash !== GROUP_HASH[key]){
    history.pushState({group:key}, '', GROUP_HASH[key]);
  }
  if(opts.scroll !== false){
    requestAnimationFrame(() => scrollToElement(rangeEl, {behavior: calm() ? 'auto' : 'smooth'}));
  }
}
function closeGroups(push){
  state.group = null;
  rangeEl.hidden = true;
  rangeEl.classList.remove('is-entering');
  const row = $('#sb-cards');
  if(row){ row.classList.remove('is-choosing');
    row.querySelectorAll('.sb-card').forEach(a => a.classList.remove('is-chosen')); }
  document.title = 'Stephen Blake — Indian Coffee. Grown, graded, shipped.';
  if(push !== false && location.hash) history.pushState({}, '', location.pathname + location.search);
  goToCategories();
}
/* The three categories are the last frame of the cinematic prologue, so the
   jump has to land on that frame rather than on an element's top edge. */
function goToCategories(){
  const origin = $('#sb-origin');
  if(document.documentElement.classList.contains('sb-on') && origin){
    const story = parseFloat(getComputedStyle(document.documentElement)
      .getPropertyValue('--sb-story')) || 0.86;
    const y = origin.offsetTop + (origin.offsetHeight - innerHeight) * story;
    if(window.sbLenis) window.sbLenis.scrollTo(y, {duration: calm() ? 0 : 1.3, force:true});
    else scrollTo({top:y, behavior: calm() ? 'auto' : 'smooth'});
  } else {
    scrollToElement($('#coffees'), {behavior: calm() ? 'auto' : 'smooth'});
  }
}
/* The prologue's panels, the category navigator and the navbar all come
   through here: there is exactly one way into a category. */
window.sbSetCategory = key => openGroup(key);

document.addEventListener('click', e => {
  const back = e.target.closest('#range-back');
  if(back){ e.preventDefault(); closeGroups(); return; }
  const g = e.target.closest('[data-cat],[data-group]');
  if(g){ e.preventDefault(); openGroup(g.dataset.cat || g.dataset.group); return; }
  const nav = e.target.closest('a[href="#coffees"]');
  if(nav){ e.preventDefault(); goToCategories(); }
}, true);

$('#species').addEventListener('click', e => {
  const b = e.target.closest('[data-sp]'); if(!b) return;
  state.species = b.dataset.sp; renderSpecies(); renderGrid();
});
$('#q').addEventListener('input', e => { state.q = e.target.value; renderGrid(); });
$('#reset').addEventListener('click', () => {
  state.q = ''; $('#q').value = ''; state.species = 'All species';
  renderSpecies(); renderGrid();
});

function routeFromHash(scroll){
  const key = HASH_GROUP[location.hash];
  if(key) openGroup(key, {push:false, scroll:scroll});
  else if(state.group) closeGroups(false);
}
addEventListener('popstate', () => routeFromHash(true));

/* ==========================================================
   PRODUCT DOSSIER  (scrolls: the grid child carries min-height:0)
   ========================================================== */
const dlg = $('#dossier');
let ds = null;
function openProduct(id, wantSample){
  const p = CATALOGUE.find(x => x.id === id); if(!p) return;
  const isFilter = p.category === 'Filter coffee',
        roasted  = p.id === 'roasted-coffee',
        washed   = p.id === 'arabica-parchment-c';
  const grades = (isFilter || p.grade === 'To specification') ? [] : p.grade.split(' · ');
  ds = { p, isFilter, roasted, washed, grades, grade: grades[0] || '',
         origin:'India, any region', species: roasted ? 'Arabica' : p.species, wantSample:!!wantSample };
  renderDossier();
  if(!dlg.open) dlg.showModal();
  document.dispatchEvent(new CustomEvent('sb:product-opened'));
  dlg.querySelector('.dossier__body').scrollTop = 0;
}
function renderDossier(){
  const p = ds.p;
  const photo = p.image;
  const label = p.category === 'Green coffee' ? 'Illustrative image · Request a representative lot sample' : 'Representative product image';
  const format = ds.isFilter ? p.grade : ds.roasted ? 'Medium-dark roast'
    : ds.washed ? 'Washed, green beans'
    : p.category === 'Green coffee' ? 'Unwashed, green beans' : p.process;
  const lotDetail = ds.roasted ? 'Ask for roast date, roast profile, whole-bean specification and shelf life.'
    : ds.isFilter ? 'Ask for the full ingredient declaration and grind specification.'
    : 'Ask for crop year, moisture, screen size, defect count and lot traceability.';

  dlg.innerHTML = `
  <button class="dclose" data-act="close" aria-label="Close"><svg class="icon" viewBox="0 0 20 20" width="18" height="18"><use href="#i-close"/></svg></button>
  <div class="dossier">
    <div class="dossier__visual">
      <img src="${A(photo)}" ${p.category === 'Green coffee' ? `srcset="${photo.replace('-960', '-480')} 480w, ${photo} 960w" sizes="(max-width: 860px) 94vw, 45vw" width="1122" height="1402"` : ''} alt="${esc(p.name + ', ' + label)}" decoding="async">
      <p class="dossier__cap">${esc(label)}</p>
    </div>
    <div class="dossier__body">
      <span class="data">${esc(p.category)} — ${esc(ds.roasted ? 'whole bean' : p.species)}</span>
      <h2>${esc(p.name)}</h2>
      <p class="lead" style="font-size:1rem">${esc(p.description)}</p>

      ${ds.roasted ? `<div class="dsec"><h4>Choose the coffee</h4><div class="chips">
        ${['Arabica','Robusta'].map(x => `<button class="chip" data-species="${x}" aria-pressed="${ds.species===x}">${x}</button>`).join('')}
      </div></div>` : ''}

      ${ds.grades.length ? `<div class="dsec"><h4>Grades listed for this coffee</h4><div class="chips">
        ${ds.grades.map(g => `<button class="chip" data-grade="${esc(g)}" aria-pressed="${ds.grade===g}">${ds.washed?'PL ':''}${esc(g)}</button>`).join('')}
      </div>
      <p class="hint">${ds.grade === 'PB'
        ? 'Peaberry is a distinct bean shape. Ask for the screen and sorting specification and cup it on your own roast.'
        : 'Ask for the screen size, defect tolerance and a representative sample for this grade, then compare it against your buying specification.'}</p>
      <p class="hint">Grade names describe the selection. Final quality and availability are agreed against a specific lot.</p></div>` : ''}

      <div class="dsec"><h4>Origin preference</h4><div class="chips">
        ${['India, any region','Karnataka','Kerala','Tamil Nadu','Andhra Pradesh','Odisha'].map(x =>
          `<button class="chip" data-origin="${esc(x)}" aria-pressed="${ds.origin===x}">${esc(x)}</button>`).join('')}
      </div>
      <p class="hint">These are sourcing preferences, not a live availability list. We confirm the region and estate for the lot we propose.</p></div>

      <div class="dsec"><h4>What we'll confirm for you</h4>
        <dl class="specs">
          <dt>Coffee</dt><dd>${esc(ds.roasted ? ds.species : p.species)}</dd>
          <dt>Format</dt><dd>${esc(format)}</dd>
          <dt>Origin</dt><dd>${esc(p.origin)}</dd>
          <dt>Sample</dt><dd>${esc(p.notes)}</dd>
          <dt>Packaging</dt><dd>${esc(p.packaging)}</dd>
          <dt>Minimum order</dt><dd>${esc(p.moq)}</dd>
          <dt>Export</dt><dd>Send destination port, quantity and preferred Incoterm.</dd>
          <dt>${ds.roasted ? 'Roast &amp; freshness' : 'Lot details'}</dt><dd>${lotDetail}</dd>
        </dl>
      </div>

      <div class="dossier__acts">
        <button class="btn" data-act="request">Take this into a request <svg class="icon" viewBox="0 0 20 20" width="18" height="18"><use href="#i-arrow"/></svg></button>
        <a class="btn btn--ghost" data-act="wa" href="#" target="_blank" rel="noreferrer">Ask on WhatsApp</a>
      </div>
    </div>
  </div>`;
  const brief = [p.name, ds.grade && (ds.washed ? 'PL ' : 'Grade ') + ds.grade,
    ds.roasted && ds.species, ds.origin].filter(Boolean).join(', ');
  dlg.querySelector('[data-act="wa"]').href = WA('Hello Stephen Blake, I would like to ask about ' + brief + '.');
}
dlg.addEventListener('click', e => {
  const t = e.target;
  const g = t.closest('[data-grade]'), sp = t.closest('[data-species]'), or = t.closest('[data-origin]');
  if(g || sp || or){
    const keep = dlg.querySelector('.dossier__body').scrollTop;
    if(g) ds.grade = g.dataset.grade;
    if(sp) ds.species = sp.dataset.species;
    if(or) ds.origin = or.dataset.origin;
    renderDossier();
    dlg.querySelector('.dossier__body').scrollTop = keep;
    return;
  }
  const act = t.closest('[data-act]'); if(!act) return;
  if(act.dataset.act === 'close'){ dlg.close(); return; }
  if(act.dataset.act === 'request'){
    const p = ds.p;
    state.req.form = p.category === 'Custom blends' ? 'Custom blends' : p.category;
    state.req.variety = ds.roasted ? ds.species
      : ['Arabica','Robusta'].includes(p.species) ? p.species
      : HERBAL.has(p.id) ? 'Herbal blend' : 'Open to recommendation';
    if(ds.origin !== 'India, any region') state.req.origin = ds.origin;
    state.req.coffee = p.name;
    if(ds.grade) $('input[name="grade"]').value = (ds.washed ? 'PL ' : '') + ds.grade;
    if(ds.wantSample) $('#f-kind').value = 'Sample request';
    dlg.close();
    renderPicks(); goStep(4);
    scrollToElement($('#request'), {behavior: calm() ? 'auto' : 'smooth'});
  }
});
document.addEventListener('click', e => {
  const o = e.target.closest('[data-open]'); if(o) return openProduct(o.dataset.open, false);
  const s = e.target.closest('[data-sample]'); if(s) return openProduct(s.dataset.sample, true);
});

/* ==========================================================
   ORIGINS + PROCESSING
   ========================================================== */
function renderRegions(){
  $('#regions').innerHTML = Object.keys(REGIONS).map(r =>
    `<button class="chip" data-region="${r}" aria-pressed="${state.region===r}">${r}</button>`).join('');
  $('#region-name').textContent = state.region;
  $('#region-areas').textContent = REGIONS[state.region].replace(/, /g, ' · ');
  const profile = originProfiles[state.region];
  $('#region-title').textContent = profile.title;
  $('#region-note').textContent = profile.story;
  $('#region-specialty').textContent = profile.specialty;
  $('#region-reason').textContent = profile.reason;
  $('#region-ask').textContent = profile.ask;
  window.sbLenis?.resize();
  window.ScrollTrigger?.refresh();
  $('#region-badge').textContent = state.region;
  $('#region-cta').firstChild.textContent = 'Request coffee from ' + state.region + ' ';
}
$('#regions').addEventListener('click', e => {
  const b = e.target.closest('[data-region]'); if(!b) return;
  state.region = b.dataset.region; renderRegions();
  [...$('#regions').querySelectorAll('button')].find(el => el.dataset.region === state.region)?.focus({preventScroll:true});
});
$('#region-cta').addEventListener('click', () => {
  state.req.origin = state.region; renderPicks(); goStep(1);
});

function renderProcess(){
  $('#proc').innerHTML = PROCESSES.map(([t,d]) => {
    const on = state.req.process === t;
    return `<button data-proc="${t}" class="${on?'is-on':''}" aria-pressed="${on}" data-reveal>
      <h3>${t}</h3><p>${d}</p>
      <span class="state">${on ? 'In your request' : 'Add to my request'}
        <svg class="icon" viewBox="0 0 20 20" width="15" height="15"><use href="#i-${on?'check':'ne'}"/></svg></span>
    </button>`; }).join('');
  window.__watch();
}
$('#proc').addEventListener('click', e => {
  const b = e.target.closest('[data-proc]'); if(!b) return;
  state.req.process = state.req.process === b.dataset.proc ? '' : b.dataset.proc;
  renderProcess(); renderPicks();
});
$('#pl-cta').addEventListener('click', () => {
  state.req.form = 'Custom blends'; $('#f-pl').value = 'Yes';
  $('#f-kind').value = 'Private label enquiry'; renderPicks(); goStep(2);
});

/* ==========================================================
   THE REQUEST FLOW
   ========================================================== */
const STEPS = ['Origin','Coffee','Variety','Process','Volume','Your details'];
const PICKS = {
  origin: [['','Open to recommendation','We suggest a region for your brief'],
    ['Karnataka','Karnataka','Coorg, Chikmagalur, Baba Budangiri'],
    ['Kerala','Kerala','Wayanad and the Western Ghats'],
    ['Tamil Nadu','Tamil Nadu','Nilgiris, Shevaroys, Anamalais'],
    ['Andhra Pradesh','Andhra Pradesh','Araku Valley, Eastern Ghats'],
    ['Odisha','Odisha','Koraput, Eastern Ghats']],
  form: [['Green coffee','Green coffee','For your own roastery','/beans-4054.webp'],
    ['Roasted coffee','Roasted beans','Profile to your brief','/coffee-hero.webp'],
    ['Ground coffee','Ground coffee','Grind to your brew method','/filter-arabica-concept.webp'],
    ['Filter coffee','Filter coffee','Pure, chicory and herbal blends','/filter-robusta-80.webp'],
    ['Custom blends','Custom / private label','Built around your brand','/roasted-sample.webp']],
  variety: [['','Open to recommendation','Tell us the cup you want and we will propose'],
    ['Arabica','Arabica','Aroma and acidity'],
    ['Robusta','Robusta','Body, strength and crema'],
    ['Blend','Blend','Arabica and Robusta to a ratio'],
    ['Herbal blend','Herbal blend','Lion\u2019s mane, shilajit, sea moss or ashwagandha']],
  process: [['','Open to recommendation','We propose a process for your brief'],
    ['Natural','Natural','Dried with the fruit intact'],
    ['Washed','Washed','Fruit removed and washed before drying'],
    ['Honey','Honey','Some mucilage left on during drying'],
    ['Experimental process enquiry','Experimental','Ask and we will confirm feasibility']]
};
function renderPicks(){
  const cell = (key, [val,title,sub,img]) => {
    const on = state.req[key] === val;
    if(img) return `<button class="pick pick--photo" data-pick="${key}" data-val="${esc(val)}" aria-pressed="${on}">
      <img src="${A(img)}" alt="" loading="lazy"><b>${esc(title)}</b><span>${esc(sub)}</span></button>`;
    return `<button class="pick" data-pick="${key}" data-val="${esc(val)}" aria-pressed="${on}">
      <span class="pick__tick"><svg class="icon" viewBox="0 0 20 20" width="12" height="12"><use href="#i-check"/></svg></span>
      <strong>${esc(title)}</strong><small>${esc(sub)}</small></button>`;
  };
  $('#p-origin').innerHTML  = PICKS.origin.map(r => cell('origin', r)).join('');
  $('#p-form').innerHTML    = PICKS.form.map(r => cell('form', r)).join('');
  $('#p-variety').innerHTML = PICKS.variety.map(r => cell('variety', r)).join('');
  $('#p-process').innerHTML = PICKS.process.map(r => cell('process', r)).join('');
  renderRail(); renderSummary();
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-pick]'); if(!b) return;
  state.req[b.dataset.pick] = b.dataset.val;
  if(b.dataset.pick === 'process'){ renderProcess(); }
  if(b.dataset.pick === 'origin' && b.dataset.val){ state.region = b.dataset.val; renderRegions(); }
  renderPicks();
  if(!calm()) setTimeout(() => goStep(state.step + 1), 260);
  else goStep(state.step + 1);
});
function renderRail(){
  $('#rail').innerHTML = STEPS.map((s,i) =>
    `<button data-go="${i}" class="${i===state.step?'now':i<state.step?'done':''}">${i+1}. ${s}</button>`).join('');
}
$('#rail').addEventListener('click', e => {
  const b = e.target.closest('[data-go]'); if(b) goStep(+b.dataset.go);
});
function goStep(n){
  state.step = Math.max(0, Math.min(STEPS.length - 1, n));
  $$('.flow__panel').forEach(p => p.classList.toggle('on', +p.dataset.step === state.step));
  $('#flow-back').hidden = state.step === 0;
  $('#flow-skip').hidden = state.step > 3;
  $('#flow-next').innerHTML = state.step === STEPS.length - 1
    ? 'Prepare my request <svg class="icon" viewBox="0 0 20 20" width="18" height="18"><use href="#i-arrow"/></svg>'
    : 'Continue <svg class="icon" viewBox="0 0 20 20" width="18" height="18"><use href="#i-arrow"/></svg>';
  renderRail(); renderSummary(); updateWa();
}
$('#flow-back').addEventListener('click', () => goStep(state.step - 1));
$('#flow-skip').addEventListener('click', () => goStep(state.step + 1));

function briefPairs(){
  const v = n => { const el = $(`[name="${n}"]`); return el ? el.value.trim() : ''; };
  const out = [];
  if(state.req.coffee) out.push(['Coffee', state.req.coffee]);
  if(state.req.form)   out.push(['Form', state.req.form]);
  if(state.req.variety)out.push(['Variety', state.req.variety]);
  if(v('grade'))       out.push(['Grade', v('grade')]);
  if(state.req.process)out.push(['Process', state.req.process]);
  out.push(['Origin', state.req.origin || 'Open to recommendation']);
  if(v('amount'))      out.push(['Quantity', v('amount') + ' ' + v('unit')]);
  if(v('country'))     out.push(['Destination', [v('city'), v('country')].filter(Boolean).join(', ')]);
  if(v('incoterm') && v('incoterm') !== 'Discuss with sales') out.push(['Incoterm', v('incoterm')]);
  if(v('packaging'))   out.push(['Packaging', v('packaging')]);
  if(v('privateLabel') && v('privateLabel') !== 'No') out.push(['Private label', v('privateLabel')]);
  if(v('sourcing') && v('sourcing') !== 'Standard commercial specification') out.push(['Sourcing', v('sourcing')]);
  return out;
}
function renderSummary(){
  const pairs = briefPairs();
  $('#summary-list').innerHTML = pairs.map(([k,val]) => `<dt>${k}</dt><dd>${esc(val)}</dd>`).join('');
  $('#summary').hidden = pairs.length === 0;
}
function updateWa(){
  const pairs = briefPairs();
  const msg = pairs.length
    ? 'Hello Stephen Blake. I would like to request coffee — ' + pairs.map(([k,v]) => `${k}: ${v}`).join(', ') + '.'
    : 'Hello Stephen Blake. I would like to discuss a coffee requirement.';
  ['#wa-main','#wa-flow','#wafloat'].forEach(sel => { const el = $(sel); if(el) el.href = WA(msg); });
}
$('.flow').addEventListener('input', () => { renderSummary(); updateWa(); });

/* submit */
$('#flow-next').addEventListener('click', () => {
  if(state.step < STEPS.length - 1) return goStep(state.step + 1);
  const v = n => ($(`[name="${n}"]`)?.value || '').trim();
  const status = $('#status');
  if(v('website')) return;                                   /* honeypot */
  const missing = [['name','your name'],['company','your company'],['email','your email'],
    ['country','a destination country'],['amount','a quantity']].filter(([k]) => !v(k));
  const badEmail = v('email') && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v('email'));
  if(missing.length || badEmail){
    status.hidden = false; status.dataset.kind = 'error';
    status.textContent = badEmail && !missing.length
      ? 'That email address looks incomplete — check it and send again.'
      : 'Add ' + missing.map(m => m[1]).join(', ') + ' so we can reply.';
    const first = missing[0] ? missing[0][0] : 'email';
    if(['country','amount'].includes(first)){ goStep(4); }
    setTimeout(() => $(`[name="${first}"]`)?.focus(), 80);
    return;
  }
  /* live site: POST /api/enquiries and show the returned reference */
  const ref = Math.random().toString(16).slice(2,10);
  status.hidden = false; status.dataset.kind = 'ok';
  status.innerHTML = `Your brief is ready. Reference <b>${ref}</b>. Send it to our coffee team <a class="link" href="${WA('Hello Stephen Blake, request ' + ref + ': ' + briefPairs().map(([k,v]) => k + ': ' + v).join(', ') + '. Contact: ' + v('name') + ', ' + v('company') + ', ' + v('email'))}" target="_blank" rel="noreferrer">on WhatsApp</a>.`;
  scrollToElement(status, {block:'center', behavior: calm() ? 'auto' : 'smooth'});
});

/* ---------------- nav ---------------- */
const drawer = $('#drawer');
$('#burger').addEventListener('click', () => { drawer.classList.add('is-open'); $('#drawer-close').focus(); });
$('#drawer-close').addEventListener('click', () => { drawer.classList.remove('is-open'); $('#burger').focus(); });
drawer.addEventListener('click', e => { if(e.target.closest('a')) drawer.classList.remove('is-open'); });
addEventListener('keydown', e => { if(e.key === 'Escape') drawer.classList.remove('is-open'); });

/* ---------------- init ---------------- */
renderRangeNav(); renderRegions(); renderProcess(); renderPicks(); goStep(0);
/* a shared link such as /#green-coffee should land on that category.  The
   prologue is several viewports tall and its measurements settle late, so
   the jump is made once the layout has stopped moving. */
if(HASH_GROUP[location.hash]) addEventListener('load', () => {
  const land = () => {
    if(window.ScrollTrigger) window.ScrollTrigger.refresh();
    if(window.sbLenis) window.sbLenis.resize();
    const y = Math.round(rangeEl.getBoundingClientRect().top + scrollY - 84);
    /* a hard jump, not a smooth one: pausing Lenis across the write is the
       reliable way to land on an exact position it will then adopt */
    if(window.sbLenis){ window.sbLenis.stop(); scrollTo(0, y); window.sbLenis.start(); }
    else scrollTo(0, y);
  };
  setTimeout(land, 320);
  setTimeout(land, 900);
});
routeFromHash(false);
$$('img[src^="/"]').forEach(i => { i.src = A(i.getAttribute('src')); });
/* images whose only source is the embedded asset map: no src until we
   have one, so the browser never requests a path that does not exist */
$$('img[data-sb-src]').forEach(i => { i.src = A(i.dataset.sbSrc); });
