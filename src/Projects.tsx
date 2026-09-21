import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  return (
    <div className="portfolio-shell projects-page">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="ambient-orbit orbit-one" aria-hidden="true" />
      <div className="ambient-orbit orbit-two" aria-hidden="true" />

      <header className="site-header">
        <Link className="brand" to="/" aria-label="TheBude Dev bosh sahifasi">
          <span className="brand-mark">TB</span>
          <span>TheBude<span className="brand-dot">.</span>dev</span>
        </Link>
        <nav className="site-nav" aria-label="Asosiy navigatsiya">
          <Link className="nav-link" to="/#home">Bosh sahifa</Link>
          <Link className="nav-link" to="/#about">Men haqimda</Link>
          <Link className="nav-link" to="/#contact">Bog'lanish</Link>
        </nav>
        <Link className="header-cta" to="/">
          <span>Bosh sahifa</span><span aria-hidden="true">↗</span>
        </Link>
      </header>

      <main>
        <section className="projects-hero content-width">
          <div className="projects-heading reveal reveal-one">
            <span className="eyebrow"><span className="status-dot" /> Tanlangan loyiha</span>
            <h1>Mening<br /><em>Loyihalarim</em></h1>
            <p>G'oya, dizayn va kod bir joyda. Men yaratgan raqamli mahsulotlar bilan tanishing.</p>
          </div>
          <div className="projects-index reveal reveal-two"><span>01</span><span className="meta-line" /><span>CASE STUDY / 2026</span></div>
        </section>

        <section className="project-feature content-width reveal">
          <div className="project-browser">
            <div className="browser-bar"><span className="window-dot red" /><span className="window-dot yellow" /><span className="window-dot green" /><span className="browser-url">unversity-web-site.vercel.app</span></div>
            <div className="project-preview"><div className="university-mark">SAMDU</div><div className="university-preview-title">Sharof Rashidov<br /><em>nomidagi Samarqand</em><br />Davlat Universiteti</div><span className="preview-caption">UNIVERSITY / DIGITAL CAMPUS</span></div>
          </div>
          <div className="project-details">
            <div className="project-kicker"><span className="section-index">01 /</span><span>Ta'lim platformasi</span></div>
            <h2>SamDU<br /><em>University Website</em></h2>
            <p className="project-lead">Sharof Rashidov nomidagi Samarqand Davlat Universiteti uchun yaratilgan zamonaviy web sayt.</p>
            <p className="project-description">Loyiha universitetning ta'lim yo'nalishlari, yangiliklari va akademik imkoniyatlarini bitta qulay raqamli makonda taqdim etadi. Tuzilishi sodda, navigatsiyasi aniq va turli ekranlarga moslangan.</p>
            <div className="project-tags"><span>Responsive design</span><span>University platform</span><span>Modern UI</span></div>
            <a className="button button-primary project-link" href="https://unversity-web-site.vercel.app/" target="_blank" rel="noopener noreferrer">Loyihani ko'rish <span>↗</span></a>
          </div>
        </section>

        <section className="project-footer content-width">
          <span>01 / 01</span><span className="project-footer-line" /><span>More projects coming soon</span>
        </section>
      </main>

      <footer className="site-footer content-width"><span>© 2026 TheBude Dev</span><span>Made with TheBude <i>✦</i></span><span>Samarqand, O'zbekiston</span></footer>
    </div>
  );
};

export default Projects;