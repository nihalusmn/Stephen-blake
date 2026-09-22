export function setupStoryFilm() {
  const video = document.querySelector('#story-film');
  if (!video) return () => {};
  const automatic = !matchMedia('(prefers-reduced-motion: reduce)').matches && !navigator.connection?.saveData;
  video.muted = true;
  video.defaultMuted = true;
  video.autoplay = automatic;
  if (!automatic) video.pause();
  let userControlled = false;
  let visible = false;
  const takeControl = () => { userControlled = true; };
  const sync = () => {
    if (!automatic || userControlled) return;
    if (visible && !document.hidden) video.play().catch(() => {});
    else video.pause();
  };
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  }, { threshold: 0.2 });
  video.addEventListener('pointerdown', takeControl);
  video.addEventListener('keydown', takeControl);
  document.addEventListener('visibilitychange', sync);
  observer.observe(video);
  return () => {
    observer.disconnect();
    video.pause();
    video.removeEventListener('pointerdown', takeControl);
    video.removeEventListener('keydown', takeControl);
    document.removeEventListener('visibilitychange', sync);
  };
}
