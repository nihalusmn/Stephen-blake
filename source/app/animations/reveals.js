import { gsap, ScrollTrigger, reducedMotion } from './core.js';
export function setupReveals(enabled) {
  const owned = new Map();
  const revealAll = () => document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('seen'));
  if (!enabled || reducedMotion.matches) { window.__watch = revealAll; revealAll(); return () => {}; }
  const watch = () => {
    for (const [el, tween] of owned) if (!el.isConnected) {
      tween.scrollTrigger?.kill(); tween.kill(); owned.delete(el);
    }
    document.querySelectorAll('[data-reveal]').forEach(el => {
      if (owned.has(el) || el.closest('.hero__copy, #hero-copy') || !el.getClientRects().length) return;
      el.classList.add('seen');
      const mask = el.dataset.reveal === 'mask';
      const delay = Math.min(.18, (parseFloat(el.style.getPropertyValue('--rd')) || 0) / 1000);
      const tween = gsap.fromTo(el, mask ? { clipPath: 'inset(0 0 100% 0)' } : { opacity: 0, y: 12 }, {
        ...(mask ? { clipPath: 'inset(0 0 0% 0)' } : { opacity: 1, y: 0 }),
        duration: mask ? .65 : .38, delay, ease: 'power2.out', clearProps: 'opacity,transform,clipPath',
        scrollTrigger: { trigger: el, start: 'top 94%', once: true },
      });
      owned.set(el, tween);
    });
    ScrollTrigger.refresh();
  };
  document.documentElement.classList.add('sb-gsap-reveals');
  window.__watch = watch; watch();
  return () => {
    owned.forEach(tween => { tween.scrollTrigger?.kill(); tween.revert(); });
    document.documentElement.classList.remove('sb-gsap-reveals');
    window.__watch = revealAll; revealAll();
  };
}
