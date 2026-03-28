/* ── Cursor ── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY; });
(function anim(){
  cursor.style.left=mx+'px'; cursor.style.top=my+'px';
  rx+=(mx-rx)*.13; ry+=(my-ry)*.13;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(anim);
})();
document.querySelectorAll('a,button,.mobile-card,.game-card,.web-item,.skill-row').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ cursor.style.transform='translate(-50%,-50%) scale(2.2)'; ring.style.width='52px'; ring.style.height='52px'; });
  el.addEventListener('mouseleave',()=>{ cursor.style.transform='translate(-50%,-50%) scale(1)'; ring.style.width='34px'; ring.style.height='34px'; });
});

/* ── Scroll reveal ── */
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
},{ threshold:0.1 });
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ══════════════════════════════════════════
   GALLERY DATA
   To replace a placeholder with a real image:
     Change  src: ''
     to      src: 'images/hoppies/screen1.png'
   (or any relative/absolute path you like)
══════════════════════════════════════════ */
const galleryData = {
  'hoppies': {
    count: 6,
    images: [
      { src: 'assets/images/hoppies/1.webp', alt: 'Hoppies – Home screen' },
      { src: 'assets/images/hoppies/2.webp', alt: 'Hoppies – Riders feed' },
      { src: 'assets/images/hoppies/3.webp', alt: 'Hoppies – Event page' },
      { src: 'assets/images/hoppies/4.webp', alt: 'Hoppies – Safety tips' },
      { src: 'assets/images/hoppies/5.webp', alt: 'Hoppies – User profile' },
      { src: 'assets/images/hoppies/6.webp', alt: 'Hoppies – Map view' },
    ]
  },
  'meshwark-rider': {
    count: 26,
    images: [
      { src: 'assets/images/meshwark-rider/1.jpg', alt: 'Meshwark Rider – Splash' },
      { src: 'assets/images/meshwark-rider/2.jpg', alt: 'Meshwark Rider – Login' },
      { src: 'assets/images/meshwark-rider/3.jpg', alt: 'Meshwark Rider – Home' },
      { src: 'assets/images/meshwark-rider/4.jpg', alt: 'Meshwark Rider – Request ride' },
      { src: 'assets/images/meshwark-rider/5.jpg', alt: 'Meshwark Rider – Live map' },
      { src: 'assets/images/meshwark-rider/6.jpg', alt: 'Meshwark Rider – Trip details' },
      { src: 'assets/images/meshwark-rider/7.jpg', alt: 'Meshwark Rider – Payment' },
      { src: 'assets/images/meshwark-rider/8.jpg', alt: 'Meshwark Rider – History' },
      { src: 'assets/images/meshwark-rider/9.jpg', alt: 'Meshwark Rider – Profile' },
      { src: 'assets/images/meshwark-rider/10.jpg', alt: 'Meshwark Rider – Settings' },
      { src: 'assets/images/meshwark-rider/11.jpg', alt: 'Meshwark Rider – Notifications' },
      { src: 'assets/images/meshwark-rider/12.jpg', alt: 'Meshwark Rider – Support' },
      { src: 'assets/images/meshwark-rider/13.jpg', alt: 'Meshwark Rider – About' },
      { src: 'assets/images/meshwark-rider/14.jpg', alt: 'Meshwark Rider – Help' },
      { src: 'assets/images/meshwark-rider/15.jpg', alt: 'Meshwark Rider – Feedback' },
      { src: 'assets/images/meshwark-rider/16.jpg', alt: 'Meshwark Rider – Rate driver' },
      { src: 'assets/images/meshwark-rider/17.jpg', alt: 'Meshwark Rider – Trip summary' },
      { src: 'assets/images/meshwark-rider/18.jpg', alt: 'Meshwark Rider – Invoice' },
      { src: 'assets/images/meshwark-rider/19.jpg', alt: 'Meshwark Rider – Wallet' },
      { src: 'assets/images/meshwark-rider/20.jpg', alt: 'Meshwark Rider – Promotions' },
      { src: 'assets/images/meshwark-rider/21.jpg', alt: 'Meshwark Rider – Emergency' },
      { src: 'assets/images/meshwark-rider/22.jpg', alt: 'Meshwark Rider – Share' },
      { src: 'assets/images/meshwark-rider/23.jpg', alt: 'Meshwark Rider – Language' },
      { src: 'assets/images/meshwark-rider/24.png', alt: 'Meshwark Rider – Map view' },
      { src: 'assets/images/meshwark-rider/25.jpg', alt: 'Meshwark Rider – Driver details' },
      { src: 'assets/images/meshwark-rider/26.jpg', alt: 'Meshwark Rider – Trip completed' },
    ]
  },
  'meshwark-driver': {
    count: 23,
    images: [
      { src: 'assets/images/meshwark-driver/1.jpg', alt: 'Meshwark Driver – Home' },
      { src: 'assets/images/meshwark-driver/2.jpg', alt: 'Meshwark Driver – Login' },
      { src: 'assets/images/meshwark-driver/3.jpg', alt: 'Meshwark Driver – Profile' },
      { src: 'assets/images/meshwark-driver/4.jpg', alt: 'Meshwark Driver – Earnings' },
      { src: 'assets/images/meshwark-driver/5.jpg', alt: 'Meshwark Driver – Settings' },
      { src: 'assets/images/meshwark-driver/6.jpg', alt: 'Meshwark Driver – Online status' },
      { src: 'assets/images/meshwark-driver/7.jpg', alt: 'Meshwark Driver – Incoming ride' },
      { src: 'assets/images/meshwark-driver/8.jpg', alt: 'Meshwark Driver – Navigation' },
      { src: 'assets/images/meshwark-driver/9.jpg', alt: 'Meshwark Driver – Trip details' },
      { src: 'assets/images/meshwark-driver/10.jpg', alt: 'Meshwark Driver – Payment received' },
      { src: 'assets/images/meshwark-driver/11.jpg', alt: 'Meshwark Driver – Rating' },
      { src: 'assets/images/meshwark-driver/12.jpg', alt: 'Meshwark Driver – History' },
      { src: 'assets/images/meshwark-driver/13.jpg', alt: 'Meshwark Driver – Wallet' },
      { src: 'assets/images/meshwark-driver/14.jpg', alt: 'Meshwark Driver – Statistics' },
      { src: 'assets/images/meshwark-driver/15.jpg', alt: 'Meshwark Driver – Notifications' },
      { src: 'assets/images/meshwark-driver/16.jpg', alt: 'Meshwark Driver – Support' },
      { src: 'assets/images/meshwark-driver/17.jpg', alt: 'Meshwark Driver – Help' },
      { src: 'assets/images/meshwark-driver/18.jpg', alt: 'Meshwark Driver – About' },
      { src: 'assets/images/meshwark-driver/19.jpg', alt: 'Meshwark Driver – Feedback' },
      { src: 'assets/images/meshwark-driver/20.jpg', alt: 'Meshwark Driver – Emergency' },
      { src: 'assets/images/meshwark-driver/21.png', alt: 'Meshwark Driver – Map view' },
      { src: 'assets/images/meshwark-driver/22.png', alt: 'Meshwark Driver – Route details' },
      { src: 'assets/images/meshwark-driver/23.jpg', alt: 'Meshwark Driver – Trip completed' },
    ]
  },
  'wash-station': {
    count: 11,
    images: [
      { src: 'assets/images/wash-station/1.jpg', alt: 'Wash Station – Dashboard' },
      { src: 'assets/images/wash-station/2.jpg', alt: 'Wash Station – Book service' },
      { src: 'assets/images/wash-station/3.jpg', alt: 'Wash Station – Track status' },
      { src: 'assets/images/wash-station/4.jpg', alt: 'Wash Station – History' },
      { src: 'assets/images/wash-station/5.jpg', alt: 'Wash Station – Services' },
      { src: 'assets/images/wash-station/6.jpg', alt: 'Wash Station – Pricing' },
      { src: 'assets/images/wash-station/7.jpg', alt: 'Wash Station – Location' },
      { src: 'assets/images/wash-station/8.jpg', alt: 'Wash Station – Contact' },
      { src: 'assets/images/wash-station/9.jpg', alt: 'Wash Station – Profile' },
      { src: 'assets/images/wash-station/10.jpg', alt: 'Wash Station – Settings' },
      { src: 'assets/images/wash-station/11.jpg', alt: 'Wash Station – Notifications' },
    ]
  },
  'kidney-care': {
    count: 5,
    images: [
      { src: '', alt: 'Kidney Care – Home' },
      { src: '', alt: 'Kidney Care – Patient record' },
      { src: '', alt: 'Kidney Care – Medication' },
      { src: '', alt: 'Kidney Care – Reports' },
      { src: '', alt: 'Kidney Care – Settings' },
    ]
  },
  'encryption-tool': {
    count: 4,
    images: [
      { src: '', alt: 'Encryption Tool – Home' },
      { src: '', alt: 'Encryption Tool – Encrypt' },
      { src: '', alt: 'Encryption Tool – Decrypt' },
      { src: '', alt: 'Encryption Tool – Key management' },
    ]
  },
};

/* ── Gallery state ── */
let currentImages = [];
let lightboxIndex = 0;

/* ── Build placeholder thumb ── */
function buildThumb(item, idx) {
  const div = document.createElement('div');
  div.className = 'gallery-thumb';
  div.setAttribute('data-index', idx);

  if (item.src) {
    // Real image
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    div.appendChild(img);
  } else {
    // Placeholder
    const ph = document.createElement('div');
    ph.className = 'placeholder';
    ph.innerHTML = `
      <div class="placeholder-phone"></div>
      <span class="placeholder-index">screen_${String(idx+1).padStart(2,'0')}</span>
    `;
    div.appendChild(ph);

    const hint = document.createElement('div');
    hint.className = 'replace-hint';
    hint.textContent = 'replace with screenshot';
    div.appendChild(hint);
  }

  div.addEventListener('click', ()=> openLightbox(idx));
  return div;
}

/* ── Open gallery modal ── */
function openGallery(appName, key) {
  const data   = galleryData[key] || { images: [] };
  currentImages = data.images;

  document.getElementById('galleryAppName').textContent = appName;

  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  currentImages.forEach((item, idx)=> grid.appendChild(buildThumb(item, idx)));

  const overlay = document.getElementById('galleryOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ── Close gallery modal ── */
function closeGallery() {
  document.getElementById('galleryOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('galleryClose').addEventListener('click', closeGallery);
document.getElementById('galleryOverlay').addEventListener('click', e=>{
  if (e.target === e.currentTarget) closeGallery();
});

/* ── Lightbox ── */
function openLightbox(idx) {
  lightboxIndex = idx;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}
function updateLightbox() {
  const item = currentImages[lightboxIndex];
  const img  = document.getElementById('lightboxImg');
  // Show placeholder SVG if no real src
  if (item.src) {
    img.src = item.src;
    img.style.display = '';
  } else {
    // Generate an inline placeholder SVG for the lightbox
    img.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='640' viewBox='0 0 320 640'%3E%3Crect width='320' height='640' fill='%230e1420'/%3E%3Crect x='120' y='220' width='80' height='140' rx='10' fill='none' stroke='%2300e5ff' stroke-width='2' stroke-opacity='.3'/%3E%3Crect x='133' y='235' width='54' height='110' rx='3' fill='%2300e5ff' fill-opacity='.05'/%3E%3Ctext x='160' y='400' text-anchor='middle' font-family='monospace' font-size='12' fill='%234a5568'%3Escreen_${String(lightboxIndex+1).padStart(2,'0')}%3C/text%3E%3Ctext x='160' y='420' text-anchor='middle' font-family='monospace' font-size='10' fill='%234a5568'%3Ereplace with screenshot%3C/text%3E%3C/svg%3E`;
  }
  document.getElementById('lightboxCounter').textContent =
    `${lightboxIndex + 1} / ${currentImages.length}`;
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', ()=>{
  lightboxIndex = (lightboxIndex - 1 + currentImages.length) % currentImages.length;
  updateLightbox();
});
document.getElementById('lightboxNext').addEventListener('click', ()=>{
  lightboxIndex = (lightboxIndex + 1) % currentImages.length;
  updateLightbox();
});
document.getElementById('lightbox').addEventListener('click', e=>{
  if (e.target === e.currentTarget) closeLightbox();
});
// Keyboard nav
document.addEventListener('keydown', e=>{
  const lb = document.getElementById('lightbox');
  const ov = document.getElementById('galleryOverlay');
  if (e.key === 'Escape') { closeLightbox(); closeGallery(); }
  if (lb.classList.contains('open')) {
    if (e.key === 'ArrowLeft')  { lightboxIndex = (lightboxIndex-1+currentImages.length)%currentImages.length; updateLightbox(); }
    if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex+1)%currentImages.length; updateLightbox(); }
  }
});
