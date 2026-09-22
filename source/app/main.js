import './catalogue.js';
import './motion.css';
import { ScrollTrigger, reducedMotion } from './animations/core.js';
import { motionConfig } from './config.js';
import { setupScroll } from './animations/scroll.js';
import { setupReveals } from './animations/reveals.js';
import { setupProducts } from './animations/products.js';
import { setupJourney } from './visuals/journey.js';
import { setupNavigation } from './accessibility.js';
window.ScrollTrigger = ScrollTrigger;
let cleanups = [];
function stop() { cleanups.splice(0).reverse().forEach(cleanup => cleanup()); }
function start() {
  stop();
  cleanups = [setupScroll(motionConfig.smoothScroll), setupReveals(motionConfig.reveals),
    setupProducts(), setupNavigation(), setupJourney()];
}
start();
reducedMotion.addEventListener('change', start);
const desktop = matchMedia(`(min-width: ${motionConfig.minimumSceneWidth}px)`);
desktop.addEventListener('change', start);
addEventListener('pagehide', stop);
addEventListener('pageshow', event => { if (event.persisted) start(); });
if (import.meta.hot) import.meta.hot.dispose(() => {
  stop(); reducedMotion.removeEventListener('change', start); desktop.removeEventListener('change', start);
});
