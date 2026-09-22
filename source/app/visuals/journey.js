import { motionConfig } from '../config.js';
import { reducedMotion, ScrollTrigger } from '../animations/core.js';
import { scrollToElement } from '../animations/scroll.js';
export function setupJourney() {
  let scene, cancelled = false;
  const eligible = motionConfig.cinematic && motionConfig.three && !reducedMotion.matches &&
    innerWidth >= motionConfig.minimumSceneWidth && !navigator.connection?.saveData;
  const loader = document.getElementById('sb-loader');
  if (!eligible) {
    loader?.classList.add('is-done'); return () => {};
  }
  // A photograph paints first. The scene chunk is fetched only for capable views.
  const start = async () => {
    if (cancelled) return;
    try {
      const { createOrigin } = await import('../origin.js');
      if (cancelled || reducedMotion.matches) return;
      // Deep links must retain the journey when the visitor returns home.
      let target;
      try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch {}
      scene = createOrigin();
      ScrollTrigger.refresh();
      window.sbLenis?.resize();
      if (target) scrollToElement(target, { behavior: 'auto' });
    } catch (error) {
      document.dispatchEvent(new CustomEvent('sb:visual-error', { detail: error.message }));
    } finally { loader?.classList.add('is-done'); }
  };
  const timer = setTimeout(start, 180);
  return () => { cancelled = true; clearTimeout(timer); scene?.dispose(); };
}
