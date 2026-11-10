import { motionConfig } from '../config.js';
import { reducedMotion, ScrollTrigger } from '../animations/core.js';
import { scrollToElement } from '../animations/scroll.js';
import { createFilmOnlyJourney } from './film-only-journey.js';
export function setupJourney() {
  let scene, cancelled = false;
  const loader = document.getElementById('sb-loader');
  if (!motionConfig.cinematic || reducedMotion.matches) {
    loader?.classList.add('is-done'); return () => {};
  }
  // Establish the pinned layout before measuring its viewport. WebKit can
  // otherwise report the previous unpinned layout height during this turn.
  document.documentElement.classList.add('sb-on');
  const timer = setTimeout(() => {
    if (cancelled) return;
    try {
      scene = createFilmOnlyJourney();
      ScrollTrigger.refresh(); window.sbLenis?.resize();
      let target;
      try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch {}
      if (target) scrollToElement(target, {behavior: 'auto'});
    } catch (error) {
      scene?.dispose();document.documentElement.classList.remove('sb-on');
      document.dispatchEvent(new CustomEvent('sb:visual-error', {detail: error.message}));
    } finally {loader?.classList.add('is-done');}
  }, 180);
  return () => {cancelled = true; clearTimeout(timer); scene?.dispose();document.documentElement.classList.remove('sb-on');};
}
