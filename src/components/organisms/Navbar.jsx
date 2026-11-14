import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import {
  Cpu,
  Layers,
  Menu,
  Moon,
  Rocket,
  Sun,
  X,
} from 'lucide-react';
import { Button, NavLinkItem } from '../atoms';

const NAV_ITEMS = [
  { to: '/', label: '1. ¿Qué es?', icon: Cpu },
  { to: '/ventajas', label: '2. Ventajas y usos', icon: Layers },
  { to: '/retos-futuro', label: '3. Retos y futuro', icon: Rocket },
];

export function Navbar({ blogTitle, theme, onToggleTheme }) {
  const { pathname } = useLocation();
  const navRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Barra de progreso de lectura ligada al scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, current)));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

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
      {/* Barra de progreso de lectura interactiva */}
      <div
        className="navbar__progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

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
          {/* Botón de tema con texto explicativo visible */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="navbar__theme-toggle"
            aria-label="Cambiar modo de tema"
            title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            <span className="navbar__theme-label">
              {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
            </span>
          </button>

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

      {/* Renderizar el menú móvil en un portal directo al body para sobresalir de cualquier contenedor */}
      {typeof document !== 'undefined' &&
        createPortal(
          <div
            className={`navbar__portal-wrapper ${
              mobileMenuOpen ? 'navbar__portal-wrapper--open' : ''
            }`}
          >
            <div
              className="navbar__mobile-backdrop"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            <div
              className="navbar__mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
            >
              <div className="navbar__mobile-nav">
                <div className="navbar__mobile-header">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <span className="navbar__mobile-tag">Menú de Navegación</span>
                    <strong className="navbar__mobile-brand-title">{blogTitle}</strong>
                  </div>
                  <button
                    type="button"
                    className="navbar__mobile-close-btn"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Cerrar menú"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="navbar__mobile-links">
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

                {/* Alternador de tema también dentro del menú móvil */}
                <div className="navbar__mobile-footer">
                  <button
                    type="button"
                    onClick={onToggleTheme}
                    className="navbar__mobile-theme-btn"
                  >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    <span>{theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
