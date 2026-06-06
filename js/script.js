/* ── Cursor ── */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  cursor.style.left     = e.clientX + 'px';
  cursor.style.top      = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
});

/* ── Scroll Reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  const siblings = el.parentElement.querySelectorAll('.reveal');
  const idx = Array.from(siblings).indexOf(el);
  el.dataset.delay = idx * 80;
  revealObserver.observe(el);
});

/* ── Gallery Data ── */
const galleryData = {
  'hoppies':        { count: 6, label: 'Hoppies Club' },
  'meshwark-rider': { count: 6, label: 'Meshwark Rider' },
  'meshwark-driver':{ count: 6, label: 'Meshwark Driver' },
  'wash-station':   { count: 5, label: 'Wash Station' },
  'kidney-care':    { count: 5, label: 'Kidney Care' },
  'encryption-tool':{ count: 4, label: 'Data Encryption Tool' }
};

let currentGallery = [];
let lightboxIndex  = 0;

function openGallery(appName, slug) {
  const overlay   = document.getElementById('galleryOverlay');
  const nameEl    = document.getElementById('galleryAppName');
  const grid      = document.getElementById('galleryGrid');

  nameEl.textContent = appName;
  grid.innerHTML = '';
  currentGallery = [];

  const data = galleryData[slug] || { count: 4 };

  for (let i = 1; i <= data.count; i++) {
    const src = `img/${slug}/${i}.jpg`;
    currentGallery.push(src);

    const thumb = document.createElement('div');
    thumb.className = 'gallery-thumb';
    thumb.innerHTML = `
      <div class="placeholder">
        <div class="placeholder-phone"></div>
        <span class="placeholder-index">SCREEN ${String(i).padStart(2,'0')}</span>
      </div>
      <span class="replace-hint">replace with screenshot</span>
    `;

    const img = new Image();
    img.onload = () => {
      thumb.innerHTML = '';
      thumb.appendChild(img);
    };
    img.src  = src;
    img.alt  = `${appName} screenshot ${i}`;
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';

    const capturedIdx = i - 1;
    thumb.addEventListener('click', () => openLightbox(capturedIdx));
    grid.appendChild(thumb);
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGallery() {
  document.getElementById('galleryOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('galleryClose').addEventListener('click', closeGallery);
document.getElementById('galleryOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeGallery();
});

/* ── Lightbox ── */
function openLightbox(idx) {
  lightboxIndex = idx;
  const lb = document.getElementById('lightbox');
  updateLightboxImg();
  lb.classList.add('open');
}

function updateLightboxImg() {
  const img     = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');
  img.src = currentGallery[lightboxIndex];
  counter.textContent = `${lightboxIndex + 1} / ${currentGallery.length}`;
}

document.getElementById('lightboxClose').addEventListener('click', () => {
  document.getElementById('lightbox').classList.remove('open');
});
document.getElementById('lightboxPrev').addEventListener('click', () => {
  lightboxIndex = (lightboxIndex - 1 + currentGallery.length) % currentGallery.length;
  updateLightboxImg();
});
document.getElementById('lightboxNext').addEventListener('click', () => {
  lightboxIndex = (lightboxIndex + 1) % currentGallery.length;
  updateLightboxImg();
});
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
});

/* ── Keyboard Navigation ── */
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (lb.classList.contains('open')) {
    if (e.key === 'ArrowLeft')  { lightboxIndex = (lightboxIndex - 1 + currentGallery.length) % currentGallery.length; updateLightboxImg(); }
    if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % currentGallery.length; updateLightboxImg(); }
    if (e.key === 'Escape')     lb.classList.remove('open');
  } else if (document.getElementById('galleryOverlay').classList.contains('open')) {
    if (e.key === 'Escape') closeGallery();
  }
});

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.style.color = 'var(--accent)';
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(s => navObserver.observe(s));
