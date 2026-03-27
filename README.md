<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Oqbah — Developer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:        #080c10;
      --surface:   #0e1420;
      --border:    rgba(255,255,255,0.07);
      --accent:    #00e5ff;
      --accent2:   #ff6b35;
      --muted:     #4a5568;
      --text:      #e2e8f0;
      --text-dim:  #8899a6;
      --font-head: 'Syne', sans-serif;
      --font-mono: 'DM Mono', monospace;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font-head);
      overflow-x: hidden;
      cursor: none;
    }

    /* ── Custom Cursor ── */
    #cursor {
      width: 12px; height: 12px;
      background: var(--accent);
      border-radius: 50%;
      position: fixed; top: 0; left: 0;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: transform 0.08s ease, background 0.2s;
      mix-blend-mode: difference;
    }
    #cursor-ring {
      width: 36px; height: 36px;
      border: 1.5px solid var(--accent);
      border-radius: 50%;
      position: fixed; top: 0; left: 0;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      transition: transform 0.18s ease, width 0.2s, height 0.2s, border-color 0.2s;
      opacity: 0.6;
    }
    body:hover #cursor { opacity: 1; }

    /* ── Noise overlay ── */
    body::before {
      content: '';
      position: fixed; inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
      opacity: 0.025;
      pointer-events: none;
      z-index: 0;
    }

    /* ── Nav ── */
    nav {
      position: fixed; top: 0; left: 0; right: 0;
      z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 24px 48px;
      background: rgba(8,12,16,0.85);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border);
    }
    .nav-logo {
      font-size: 1.1rem; font-weight: 800; letter-spacing: 0.05em;
      color: var(--accent); text-transform: uppercase;
    }
    .nav-links { display: flex; gap: 36px; list-style: none; }
    .nav-links a {
      font-family: var(--font-mono);
      font-size: 0.78rem; color: var(--text-dim);
      text-decoration: none; letter-spacing: 0.08em;
      transition: color 0.2s;
      position: relative;
    }
    .nav-links a::before {
      content: attr(data-index);
      font-size: 0.6rem; color: var(--accent);
      margin-right: 4px;
    }
    .nav-links a:hover { color: var(--text); }

    /* ── Hero ── */
    #hero {
      min-height: 100vh;
      display: flex; flex-direction: column;
      justify-content: center;
      padding: 140px 48px 80px;
      position: relative;
      overflow: hidden;
    }
    .hero-grid-lines {
      position: absolute; inset: 0; pointer-events: none;
      background-image:
        linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
    }
    .hero-eyebrow {
      font-family: var(--font-mono);
      font-size: 0.75rem; color: var(--accent);
      letter-spacing: 0.2em; text-transform: uppercase;
      margin-bottom: 24px;
      opacity: 0; animation: fadeUp 0.7s 0.2s forwards;
    }
    .hero-name {
      font-size: clamp(4rem, 10vw, 9rem);
      font-weight: 800; line-height: 0.92;
      letter-spacing: -0.03em;
      opacity: 0; animation: fadeUp 0.7s 0.35s forwards;
    }
    .hero-name .accent { color: var(--accent); }
    .hero-title {
      margin-top: 28px;
      font-family: var(--font-mono);
      font-size: clamp(0.9rem, 2vw, 1.1rem);
      color: var(--text-dim); font-style: italic;
      opacity: 0; animation: fadeUp 0.7s 0.5s forwards;
    }
    .hero-cta {
      margin-top: 48px; display: flex; gap: 16px;
      opacity: 0; animation: fadeUp 0.7s 0.65s forwards;
    }
    .btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 14px 28px; border-radius: 4px;
      font-family: var(--font-mono); font-size: 0.8rem;
      letter-spacing: 0.1em; text-transform: uppercase;
      text-decoration: none; transition: all 0.25s; cursor: none;
    }
    .btn-primary {
      background: var(--accent); color: #000; font-weight: 400;
    }
    .btn-primary:hover { background: #fff; transform: translateY(-2px); }
    .btn-outline {
      border: 1px solid var(--border); color: var(--text-dim);
    }
    .btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

    .hero-scroll-hint {
      position: absolute; bottom: 40px; left: 48px;
      font-family: var(--font-mono); font-size: 0.7rem;
      color: var(--muted); letter-spacing: 0.1em;
      display: flex; align-items: center; gap: 12px;
    }
    .scroll-line {
      width: 40px; height: 1px; background: var(--muted);
    }

    /* ── Section shell ── */
    section { position: relative; z-index: 1; }
    .section-inner {
      max-width: 1100px; margin: 0 auto;
      padding: 100px 48px;
    }
    .section-label {
      font-family: var(--font-mono); font-size: 0.72rem;
      color: var(--accent); letter-spacing: 0.2em;
      text-transform: uppercase; margin-bottom: 16px;
      display: flex; align-items: center; gap: 12px;
    }
    .section-label::after {
      content: ''; flex: 1; max-width: 60px;
      height: 1px; background: var(--accent); opacity: 0.4;
    }
    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800; line-height: 1.1;
      letter-spacing: -0.02em;
      margin-bottom: 56px;
    }

    /* ── About ── */
    #about { background: var(--surface); }
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px; align-items: start;
    }
    .about-text p {
      font-family: var(--font-mono); font-size: 0.95rem;
      color: var(--text-dim); line-height: 1.8; font-style: italic;
      margin-bottom: 20px;
    }
    .about-text p strong { color: var(--text); font-style: normal; }
    .skills-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
    }
    .skill-tag {
      padding: 10px 14px;
      border: 1px solid var(--border);
      border-radius: 4px;
      font-family: var(--font-mono); font-size: 0.75rem;
      color: var(--text-dim); letter-spacing: 0.05em;
      transition: all 0.2s;
      position: relative; overflow: hidden;
    }
    .skill-tag::before {
      content: '';
      position: absolute; left: 0; top: 0; bottom: 0;
      width: 2px; background: var(--accent);
      transform: scaleY(0); transform-origin: bottom;
      transition: transform 0.2s;
    }
    .skill-tag:hover { border-color: rgba(0,229,255,0.3); color: var(--text); }
    .skill-tag:hover::before { transform: scaleY(1); }

    /* ── Projects ── */
    .projects-list { display: flex; flex-direction: column; gap: 1px; }
    .project-item {
      display: grid;
      grid-template-columns: 60px 1fr auto;
      gap: 24px; align-items: center;
      padding: 28px 0;
      border-bottom: 1px solid var(--border);
      transition: all 0.2s;
      cursor: none;
    }
    .project-item:first-child { border-top: 1px solid var(--border); }
    .project-num {
      font-family: var(--font-mono); font-size: 0.7rem;
      color: var(--muted); letter-spacing: 0.1em;
      align-self: start; padding-top: 4px;
    }
    .project-info h3 {
      font-size: 1.4rem; font-weight: 700;
      letter-spacing: -0.01em; margin-bottom: 6px;
      transition: color 0.2s;
    }
    .project-info p {
      font-family: var(--font-mono); font-size: 0.8rem;
      color: var(--text-dim); font-style: italic; line-height: 1.6;
    }
    .project-tags {
      display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px;
    }
    .tag {
      font-family: var(--font-mono); font-size: 0.65rem;
      color: var(--accent); border: 1px solid rgba(0,229,255,0.25);
      padding: 3px 8px; border-radius: 2px; letter-spacing: 0.06em;
    }
    .project-arrow {
      font-size: 1.4rem; color: var(--muted);
      transition: all 0.2s; align-self: center;
    }
    .project-item:hover .project-info h3 { color: var(--accent); }
    .project-item:hover .project-arrow { color: var(--accent); transform: translateX(4px); }
    .project-item:hover { background: rgba(0,229,255,0.02); padding-left: 8px; padding-right: 8px; border-radius: 6px; margin: 0 -8px; }

    /* ── Contact ── */
    #contact { background: var(--surface); }
    .contact-box {
      border: 1px solid var(--border);
      border-radius: 8px; padding: 60px;
      text-align: center;
      position: relative; overflow: hidden;
    }
    .contact-box::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 60% 60% at 50% 0%, rgba(0,229,255,0.05), transparent);
    }
    .contact-box h3 {
      font-size: clamp(1.8rem, 3vw, 2.6rem);
      font-weight: 800; letter-spacing: -0.02em;
      margin-bottom: 16px; position: relative;
    }
    .contact-box p {
      font-family: var(--font-mono); color: var(--text-dim);
      font-size: 0.9rem; font-style: italic; margin-bottom: 40px;
      position: relative;
    }
    .contact-links {
      display: flex; justify-content: center; gap: 20px;
      flex-wrap: wrap; position: relative;
    }
    .contact-link {
      display: flex; align-items: center; gap: 8px;
      font-family: var(--font-mono); font-size: 0.8rem;
      color: var(--text-dim); text-decoration: none;
      letter-spacing: 0.08em;
      padding: 12px 20px; border: 1px solid var(--border);
      border-radius: 4px; transition: all 0.2s; cursor: none;
    }
    .contact-link:hover {
      color: var(--accent); border-color: rgba(0,229,255,0.4);
      transform: translateY(-3px);
    }

    /* ── Footer ── */
    footer {
      padding: 32px 48px;
      border-top: 1px solid var(--border);
      display: flex; justify-content: space-between; align-items: center;
    }
    footer p {
      font-family: var(--font-mono); font-size: 0.72rem;
      color: var(--muted); letter-spacing: 0.1em;
    }
    .footer-status {
      display: flex; align-items: center; gap: 8px;
      font-family: var(--font-mono); font-size: 0.72rem; color: var(--muted);
    }
    .status-dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: #22c55e;
      animation: pulse 2s infinite;
    }

    /* ── Animations ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.3; }
    }

    .reveal {
      opacity: 0; transform: translateY(30px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .reveal.visible { opacity: 1; transform: translateY(0); }

    /* ── Responsive ── */
    @media (max-width: 768px) {
      nav { padding: 20px 24px; }
      .nav-links { display: none; }
      #hero, .section-inner, footer { padding-left: 24px; padding-right: 24px; }
      .hero-scroll-hint { left: 24px; }
      .about-grid { grid-template-columns: 1fr; gap: 40px; }
      .project-item { grid-template-columns: 40px 1fr; }
      .project-arrow { display: none; }
      .contact-box { padding: 40px 24px; }
    }
  </style>
</head>
<body>

<!-- Cursor -->
<div id="cursor"></div>
<div id="cursor-ring"></div>

<!-- Nav -->
<nav>
  <span class="nav-logo">OQB</span>
  <ul class="nav-links">
    <li><a href="#about"   data-index="01">About</a></li>
    <li><a href="#projects" data-index="02">Projects</a></li>
    <li><a href="#contact" data-index="03">Contact</a></li>
  </ul>
</nav>

<!-- Hero -->
<section id="hero">
  <div class="hero-grid-lines"></div>
  <p class="hero-eyebrow">Available for work</p>
  <h1 class="hero-name">
    Oqbah<br/><span class="accent">.</span>
  </h1>
  <p class="hero-title">
    // Flutter Developer · ASP.NET · AI/LLM Engineering
  </p>
  <div class="hero-cta">
    <a href="#projects" class="btn btn-primary">View Projects →</a>
    <a href="#contact"  class="btn btn-outline">Get in Touch</a>
  </div>
  <div class="hero-scroll-hint">
    <span class="scroll-line"></span>
    scroll to explore
  </div>
</section>

<!-- About -->
<section id="about">
  <div class="section-inner">
    <div class="section-label">About</div>
    <h2 class="section-title reveal">Crafting experiences<br/>across platforms.</h2>
    <div class="about-grid reveal">
      <div class="about-text">
        <p>
          I'm a mobile & backend developer with <strong>5+ years of experience</strong> building
          production-grade apps. My core stack is Flutter for cross-platform mobile,
          paired with ASP.NET for robust backend APIs.
        </p>
        <p>
          Currently expanding into <strong>AI/LLM engineering</strong> — building
          intelligent, context-aware applications using the Anthropic API,
          LangChain, and RAG architectures.
        </p>
        <p>
          Passionate about <strong>Sudanese culture & technology</strong>, building
          digital products that serve the Arabic-speaking world.
        </p>
      </div>
      <div class="skills-grid">
        <div class="skill-tag">Flutter / Dart</div>
        <div class="skill-tag">ASP.NET Core</div>
        <div class="skill-tag">SignalR / WS</div>
        <div class="skill-tag">Angular</div>
        <div class="skill-tag">Anthropic API</div>
        <div class="skill-tag">LangChain</div>
        <div class="skill-tag">Python</div>
        <div class="skill-tag">SQL / EF Core</div>
        <div class="skill-tag">Firebase</div>
        <div class="skill-tag">Arabic UI / RTL</div>
      </div>
    </div>
  </div>
</section>

<!-- Projects -->
<section id="projects">
  <div class="section-inner">
    <div class="section-label">Work</div>
    <h2 class="section-title reveal">Selected Projects</h2>
    <div class="projects-list">

      <div class="project-item reveal">
        <span class="project-num">01</span>
        <div class="project-info">
          <h3>Ride Sharing App</h3>
          <p>Real-time rider & driver matching with live map tracking, built with Flutter + SignalR.</p>
          <div class="project-tags">
            <span class="tag">Flutter</span>
            <span class="tag">SignalR</span>
            <span class="tag">ASP.NET</span>
            <span class="tag">Google Maps</span>
          </div>
        </div>
        <span class="project-arrow">→</span>
      </div>

      <div class="project-item reveal">
        <span class="project-num">02</span>
        <div class="project-info">
          <h3>Sudanese Cultural Games</h3>
          <p>Arabic-first educational mini-games covering Sudanese history, cities, music & food. Full RTL support.</p>
          <div class="project-tags">
            <span class="tag">Flutter</span>
            <span class="tag">Arabic / RTL</span>
            <span class="tag">Game Design</span>
          </div>
        </div>
        <span class="project-arrow">→</span>
      </div>

      <div class="project-item reveal">
        <span class="project-num">03</span>
        <div class="project-info">
          <h3>Admin Dashboard</h3>
          <p>Full-featured management dashboard with analytics, connected to ASP.NET REST APIs.</p>
          <div class="project-tags">
            <span class="tag">Angular</span>
            <span class="tag">ASP.NET</span>
            <span class="tag">EF Core</span>
          </div>
        </div>
        <span class="project-arrow">→</span>
      </div>

      <div class="project-item reveal">
        <span class="project-num">04</span>
        <div class="project-info">
          <h3>LLM-Powered Tools</h3>
          <p>Experimental AI applications using the Anthropic API — prompt chaining, RAG pipelines, and agent workflows.</p>
          <div class="project-tags">
            <span class="tag">Python</span>
            <span class="tag">Anthropic API</span>
            <span class="tag">LangChain</span>
          </div>
        </div>
        <span class="project-arrow">→</span>
      </div>

    </div>
  </div>
</section>

<!-- Contact -->
<section id="contact">
  <div class="section-inner">
    <div class="section-label">Contact</div>
    <div class="contact-box reveal">
      <h3>Let's build something.</h3>
      <p>// Open to freelance projects, collaborations, and full-time roles.</p>
      <div class="contact-links">
        <a href="mailto:your@email.com" class="contact-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          your@email.com
        </a>
        <a href="https://github.com/yourgithub" target="_blank" class="contact-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          yourgithub
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" class="contact-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer>
  <p>© 2026 Oqbah. Built with vanilla HTML.</p>
  <div class="footer-status">
    <span class="status-dot"></span>
    Available for new projects
  </div>
</footer>

<script>
  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animCursor() {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();
  document.querySelectorAll('a, button, .project-item, .skill-tag').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      ring.style.width = '56px'; ring.style.height = '56px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.width = '36px'; ring.style.height = '36px';
    });
  });

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.style.transitionDelay = (i * 0.08) + 's';
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
</script>
</body>
</html>
