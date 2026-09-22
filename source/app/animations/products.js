import { gsap, reducedMotion } from './core.js';
export function setupProducts() {
  let tween;
  const opened = () => {
    tween?.revert();
    if (reducedMotion.matches) return;
    const elements = document.querySelectorAll('#dossier .dossier__body > *');
    tween = gsap.fromTo(elements, { opacity: 0, y: 6 }, {
      opacity: 1, y: 0, duration: .24, stagger: .025, clearProps: 'opacity,transform', ease: 'power2.out',
    });
  };
  document.addEventListener('sb:product-opened', opened);
  return () => { tween?.revert(); document.removeEventListener('sb:product-opened', opened); };
}
