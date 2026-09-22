import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap, ScrollTrigger, reducedMotion } from './core.js';
let lenis;
let queued;
export function scrollToElement(element, options = {}) {
  if (!element) return;
  // Current Lenis already applies CSS scroll-padding-top to element targets.
  const offset = options.block === 'center' ? -innerHeight * .32 + 84 : 0;
  const immediate = reducedMotion.matches || options.behavior === 'auto';
  if (lenis) {
    const run = () => lenis.scrollTo(element, { offset, immediate, duration: .75 });
    if (lenis.isStopped) queued = run;
    else run();
  } else element.scrollIntoView({ ...options, behavior: immediate ? 'instant' : 'smooth' });
}
export function setupScroll(enabled) {
  const abort = new AbortController();
  const signal = abort.signal;
  if (enabled && !reducedMotion.matches) {
    lenis = new Lenis({ lerp: .14, smoothWheel: true, syncTouch: false, autoRaf: false,
      prevent: node => !!node.closest('dialog, #drawer') });
    window.sbLenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
  }
  const tick = time => lenis?.raf(time * 1000);
  if (lenis) { gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0); }
  const lock = () => {
    const locked = !!document.querySelector('dialog[open], #drawer.is-open');
    document.documentElement.classList.toggle('sb-scroll-locked', locked);
    if (locked) lenis?.stop();
    else { lenis?.start(); const run = queued; queued = null; run?.(); }
  };
  const observer = new MutationObserver(lock);
  ['dossier', 'drawer'].forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el, { attributes: true, attributeFilter: ['open', 'class'] });
  });
  lock();
  document.addEventListener('click', e => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const link = e.target.closest('a[href^="#"]');
    if (!link || link.hasAttribute('download')) return;
    const hash = link.getAttribute('href');
    let target;
    try { target = document.getElementById(decodeURIComponent(hash.slice(1))); } catch { return; }
    if (!target || hash.length < 2) return;
    e.preventDefault();
    if (location.hash !== hash) history.pushState(null, '', hash);
    scrollToElement(target);
    if (!target.matches('a,button,input,select,textarea,[tabindex]')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }, { signal });
  return () => {
    abort.abort(); observer.disconnect(); gsap.ticker.remove(tick);
    lenis?.destroy(); lenis = null; queued = null; delete window.sbLenis;
    document.documentElement.classList.remove('sb-scroll-locked');
  };
}
