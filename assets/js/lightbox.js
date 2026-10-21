// Full-screen viewer for album photo grids. Without JS, thumbnails just link to the image.
(() => {
  const links = [...document.querySelectorAll('.photo-grid a')];
  if (!links.length || typeof HTMLDialogElement !== 'function') return;

  const dlg = document.createElement('dialog');
  dlg.className = 'lightbox';
  dlg.innerHTML =
    '<figure><img alt=""><figcaption></figcaption></figure>' +
    '<p class="lb-count" aria-live="polite"></p>' +
    '<button type="button" class="lb-close" aria-label="Close">×</button>' +
    '<button type="button" class="lb-prev" aria-label="Previous photo">‹</button>' +
    '<button type="button" class="lb-next" aria-label="Next photo">›</button>';
  document.body.append(dlg);

  const img = dlg.querySelector('img');
  const cap = dlg.querySelector('figcaption');
  const count = dlg.querySelector('.lb-count');
  let i = 0;

  const show = (n) => {
    i = (n + links.length) % links.length;
    const a = links[i];
    img.src = a.href;
    img.alt = a.querySelector('img').alt;
    cap.textContent = a.dataset.caption || '';
    count.textContent = `${i + 1} / ${links.length}`;
    new Image().src = links[(i + 1) % links.length].href; // preload next
  };

  links.forEach((a, n) => a.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return; // let "open in new tab" work
    e.preventDefault();
    show(n);
    dlg.showModal();
  }));

  dlg.querySelector('.lb-prev').addEventListener('click', () => show(i - 1));
  dlg.querySelector('.lb-next').addEventListener('click', () => show(i + 1));
  dlg.querySelector('.lb-close').addEventListener('click', () => dlg.close());
  // Esc closes natively; arrows navigate.
  dlg.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(i - 1);
    else if (e.key === 'ArrowRight') show(i + 1);
  });
  // Clicking the dark area around the photo closes.
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg || e.target.tagName === 'FIGURE') dlg.close();
  });
  // Return focus to the photo last viewed (after the browser's own focus restore).
  dlg.addEventListener('close', () => requestAnimationFrame(() => links[i].focus()));

  // Swipe left/right on touch screens.
  let x0 = null;
  dlg.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  dlg.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(dx < 0 ? i + 1 : i - 1);
    x0 = null;
  });
})();
