import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const updatePointer = (event: PointerEvent) => {
      page.style.setProperty('--mouse-x', `${event.clientX}px`);
      page.style.setProperty('--mouse-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', updatePointer);
    return () => window.removeEventListener('pointermove', updatePointer);
  }, []);

  return (
    <div ref={pageRef} className="portfolio-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="ambient-orbit orbit-one" aria-hidden="true" />
      <div className="ambient-orbit orbit-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label="TheBude Dev bosh sahifasi">
          <span className="brand-mark">TB</span>
          <span>TheBude<span className="brand-dot">.</span>dev</span>
        </a>
        <nav className="site-nav" aria-label="Asosiy navigatsiya">
          <a className="nav-link active" href="#home">Bosh sahifa</a>
          <a className="nav-link" href="#about">Men haqimda</a>
          <a className="nav-link" href="#contact">Bog'lanish</a>
        </nav>
        <Link className="header-cta" to="/projects">
          <span>Loyihalar</span><span aria-hidden="true">↗</span>
        </Link>
      </header>

      <main>
        <section id="home" className="hero-section content-width">
          <div className="hero-copy reveal reveal-one">
            <div className="eyebrow"><span className="status-dot" /> Ochiqman — yangi imkoniyatlar uchun</div>
            <h1>Raqamli mahsulotlar<br /><em>yarataman.</em></h1>
            <p className="hero-intro">Men Bunyod — g'oyalarni tez, aniq va odamlarga yoqimli ishlaydigan web tajribalariga aylantiradigan full-stack dasturchiman.</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/projects">Ishlarimni ko'rish <span>↗</span></Link>
              <a className="button button-quiet" href="#contact">Bog'lanamiz <span>↓</span></a>
            </div>
            <div className="hero-meta"><span>01</span><span className="meta-line" /><span>Full-stack developer</span></div>
          </div>

          <div className="hero-visual reveal reveal-two">
            <div className="visual-label label-top">BUILD / SHIP / REPEAT</div>
            <div className="browser-card">
              <div className="browser-bar"><span className="window-dot red" /><span className="window-dot yellow" /><span className="window-dot green" /><span className="browser-url">thebude.dev / playground</span></div>
              <div className="browser-screen">
                <img src="/web_d_gif.gif" alt="Web development jarayoni animatsiyasi" />
                <div className="screen-caption"><span>Crafting better interfaces</span><strong>2026</strong></div>
              </div>
            </div>
            <div className="floating-note"><span className="note-icon">✦</span><span><strong>Detail first.</strong><br />Impact always.</span></div>
            <div className="visual-label label-bottom">TASHKENT / UZ</div>
          </div>
        </section>

        <div className="ticker" aria-label="Mutaxassisliklar">
          <div className="ticker-track"><span>FRONTEND</span><i>✦</i><span>BACKEND</span><i>✦</i><span>UI / UX</span><i>✦</i><span>PRODUCT THINKING</span><i>✦</i><span>FRONTEND</span><i>✦</i><span>BACKEND</span><i>✦</i></div>
        </div>

        <section id="about" className="about-section content-width">
          <div className="section-heading reveal"><span className="section-index">02 /</span><h2>Men<br /><em>Sulaymonov Bunyod</em></h2></div>
          <div className="about-layout">
            <div className="about-art reveal reveal-one"><div className="art-frame"><img src="/ABOUTME-ezgif.com-video-to-gif-converter.gif" alt="Bunyodning web development animatsiyasi" /></div><span className="art-caption">Curiosity is<br />a feature.</span></div>
            <div className="about-copy reveal reveal-two"><p className="large-copy">Hozirda O'zbekiston Milliy universitetida Kompyuter ilmlari va dasturlash texnologiyalari yo'nalishida 5-kurs masofaviy ta'lim talabasiman (3-kursni kunduzgi ta'limda o'qiganman)<strong> Full-Stack dasturchiman</strong></p><p>O'zbekiston Milliy universitetida Kompyuter ilmlari yo'nalishida tahsil olganman. .NET, PostgreSQL va zamonaviy frontend texnologiyalari bilan mahsulotning to'liq hayot siklini quraman.</p><div className="skill-list"><span>React / TypeScript</span><span>.NET / C#</span><span>PostgreSQL</span><span>UI systems</span></div></div>
          </div>
        </section>

        <section id="contact" className="contact-section content-width">
          <div className="contact-panel reveal"><div className="contact-top"><span className="section-index">03 / ALOQA</span><span className="contact-spark">✦</span></div><h2>Men Bilan<br /><em>Bog'lanasizmi?</em></h2><p>Keyingi yaxshi g'oyangiz haqida gaplashishga tayyorman.</p><a className="contact-email" href="mailto:Sbunyod15@gmail.com">Sbunyod15@gmail.com <span>↗</span></a><div className="contact-links"><a href="https://t.me/the_bude" target="_blank" rel="noopener noreferrer">Telegram <span>↗</span></a><a href="https://github.com/TheBude" target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a><a href="tel:+99850072270">+998 50 072 22 70 <span>↗</span></a></div></div>
        </section>
      </main>

      <footer className="site-footer content-width"><span>© 2026 TheBude Dev</span><span>Made with intention <i>✦</i></span><span>Toshkent, O'zbekiston</span></footer>
    </div>
  );
};

export default Home;