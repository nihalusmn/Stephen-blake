import { gsap } from '../animations/core.js';
// Reusable owner for future glTF scenes, textures, particles and timelines.
// Register loaders' results with own(); register timeline/ScrollTrigger with own().
export function createSceneScope() {
  const cleanups = [];
  return {
    own(resource) {
      cleanups.push(() => { if (resource.kill) resource.kill(); else if (resource.disconnect) resource.disconnect(); else resource.dispose?.(); });
      return resource;
    },
    listen(target, type, callback, options) {
      target.addEventListener(type, callback, options);
      cleanups.push(() => target.removeEventListener(type, callback, options));
    },
    tick(callback) { gsap.ticker.add(callback); cleanups.push(() => gsap.ticker.remove(callback)); },
    dispose(scene, renderer, extras = []) {
      cleanups.splice(0).reverse().forEach(cleanup => cleanup());
      const resources = new Set(extras);
      scene?.traverse(object => {
        if (object.geometry) resources.add(object.geometry);
        if (object.skeleton) resources.add(object.skeleton);
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.filter(Boolean).forEach(material => {
          resources.add(material);
          Object.values(material).forEach(value => { if (value?.isTexture) resources.add(value); });
          Object.values(material.uniforms || {}).forEach(uniform => { if (uniform.value?.isTexture) resources.add(uniform.value); });
        });
      });
      resources.forEach(resource => resource.dispose?.());
      scene?.clear(); renderer?.dispose(); renderer?.forceContextLoss();
    },
  };
}
