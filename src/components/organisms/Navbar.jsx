import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  Cpu,
  Home,
  Layers,
  Menu,
  Moon,
  Rocket,
  Sun,
  X,
} from 'lucide-react';
import { Button, NavLinkItem } from '../atoms';

const NAV_ITEMS = [
  { to: '/', label: 'Inicio', icon: Home },
  { to: '/entrada', label: 'Entrada del Blog', icon: BookOpen },
  { to: '/que-es', label: '1. ¿Qué es?', icon: Cpu },
  { to: '/ventajas', label: '2. Ventajas y usos', icon: Layers },
  { to: '/retos-futuro', label: '3. Retos y futuro', icon: Rocket },
];

export function Navbar({ blogTitle, theme, onToggleTheme }) {
  const { pathname } = useLocation();
  const navRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Bloquear el scroll del body cuando el menú móvil esté abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const updateIndicator = () => {
    const navEl = navRef.current;
    if (!navEl) return;

    const activeEl = navEl.querySelector('.atom-nav-link--active');
    if (!activeEl) {
      setIndicator((prev) => ({ ...prev, ready: false }));
      return;
    }

    setIndicator({
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
      ready: true,
    });
  };

  useLayoutEffect(() => {
    updateIndicator();
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    document.fonts?.ready?.then(updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [pathname]);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" title={blogTitle}>
          <span className="navbar__brand-text">{blogTitle}</span>
        </Link>

        {/* Menú de escritorio horizontal */}
        <nav
          ref={navRef}
          aria-label="Navegación principal de escritorio"
          className="navbar__links navbar__links--desktop"
        >
          <span
            aria-hidden="true"
            className="navbar__indicator"
            style={{
              width: `${indicator.width}px`,
              transform: `translateX(${indicator.left}px)`,
              opacity: indicator.ready ? 1 : 0,
            }}
          />
          {NAV_ITEMS.map((item) => (
            <NavLinkItem
              key={item.to}
              to={item.to}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </nav>

        <div className="navbar__actions">
          <Button
            variant="secondary"
            onClick={onToggleTheme}
            icon={theme === 'dark' ? Sun : Moon}
            aria-label="Cambiar tema claro u oscuro"
            title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            className="navbar__theme-btn"
          />

          {/* Botón hamburguesa exclusivo para móvil */}
          <button
            type="button"
            className="navbar__burger-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {mobileMenuOpen && (
        <div
          className="navbar__mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`navbar__mobile-drawer ${
          mobileMenuOpen ? 'navbar__mobile-drawer--open' : ''
        }`}
        aria-label="Menú móvil"
      >
        <div className="navbar__mobile-nav">
          <div className="navbar__mobile-header">
            <span className="navbar__mobile-tag">Navegación del Blog</span>
            <button
              type="button"
              className="navbar__mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={20} />
            </button>
          </div>
          {NAV_ITEMS.map((item) => (
            <NavLinkItem
              key={item.to}
              to={item.to}
              label={item.label}
              icon={item.icon}
              onClick={() => setMobileMenuOpen(false)}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
