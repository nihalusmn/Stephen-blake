export function setupNavigation() {
  const drawer = document.getElementById('drawer');
  const burger = document.getElementById('burger');
  const abort = new AbortController();
  const update = () => {
    const open = drawer.classList.contains('is-open');
    burger.setAttribute('aria-expanded', String(open));
    drawer.inert = !open;
    if (open && !drawer.contains(document.activeElement)) document.getElementById('drawer-close').focus();
  };
  const observer = new MutationObserver(update);
  observer.observe(drawer, { attributes: true, attributeFilter: ['class'] }); update();
  drawer.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const nodes = [...drawer.querySelectorAll('a[href], button')].filter(el => el.getClientRects().length);
    const first = nodes[0], last = nodes.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }, { signal: abort.signal });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && drawer.contains(document.activeElement)) burger.focus();
  }, { signal: abort.signal });
  return () => { observer.disconnect(); abort.abort(); };
}
