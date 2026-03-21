import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, SlidersHorizontal, X } from 'lucide-react';
import { navItems } from '../data/profileContent.js';

function NavLinks({ lang, onNavigate }) {
  return (
    <nav className="nav-links" aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onNavigate}
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }
        >
          {lang === 'fr' ? item.fr : item.en}
        </NavLink>
      ))}
    </nav>
  );
}

export default function Navbar({ lang, onOpenWelcome }) {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleReconfigure() {
    setMenuOpen(false);
    onOpenWelcome();
  }

  return (
    <header className="navbar-shell">
      <div className="navbar">
        <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">YAB</span>
          <span className="brand-text">Portfolio</span>
        </NavLink>

        <div className="navbar-desktop">
          <NavLinks lang={lang} />
        </div>

        <div className="toolbar">
          <button type="button" className="config-btn" onClick={handleReconfigure}>
            <SlidersHorizontal size={14} />
            {lang === 'fr' ? 'Refaire mon choix' : 'Redo my choice'}
          </button>

          <button
            type="button"
            className="menu-btn"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="mobile-menu">
          <button type="button" className="config-btn config-btn-mobile" onClick={handleReconfigure}>
            <SlidersHorizontal size={14} />
            {lang === 'fr' ? 'Refaire mon choix' : 'Redo my choice'}
          </button>
          <NavLinks lang={lang} onNavigate={() => setMenuOpen(false)} />
        </div>
      ) : null}
    </header>
  );
}
