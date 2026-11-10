// One policy for assets, geometry and CSS, including cold landscape entry.
export function phoneLayout(width = innerWidth) {
  return matchMedia('(pointer: coarse)').matches || width < 768;
}
