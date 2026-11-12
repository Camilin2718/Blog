import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  Cpu,
  Home,
  Layers,
  Moon,
  Rocket,
  Sun,
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
    const activeEl = navRef.current?.querySelector('.atom-nav-link--active');
    activeEl?.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
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

        <nav ref={navRef} aria-label="Navegación principal del blog" className="navbar__links">
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
        </div>
      </div>
    </header>
  );
}
