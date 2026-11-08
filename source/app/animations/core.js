import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ignoreMobileResize:true});
export { gsap, ScrollTrigger };
export const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
