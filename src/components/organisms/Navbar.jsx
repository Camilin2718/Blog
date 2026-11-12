import { useState } from 'react';
import {
  BookOpen,
  Cpu,
  Eye,
  EyeOff,
  Home,
  Layers,
  Menu,
  Moon,
  Rocket,
  Sun,
  TrendingUp,
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

export function Navbar({ blogTitle, theme, onToggleTheme, showGuides, onToggleGuides }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLinkItem
          to="/"
          label={blogTitle}
          icon={TrendingUp}
          onClick={() => setMenuOpen(false)}
        />

        <nav
          aria-label="Navegación principal del blog"
          className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}
        >
          {NAV_ITEMS.map((item) => (
            <NavLinkItem
              key={item.to}
              to={item.to}
              label={item.label}
              icon={item.icon}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </nav>

        <div className="navbar__actions">
          <Button
            variant="ghost"
            onClick={onToggleGuides}
            icon={showGuides ? EyeOff : Eye}
            title={showGuides ? 'Ocultar guía de pautas para captura' : 'Mostrar guía de pautas'}
            aria-label="Alternar guía de pautas"
          >
            <span style={{ fontSize: '0.82rem' }}>{showGuides ? 'Modo Captura' : 'Ver Guía'}</span>
          </Button>

          <Button
            variant="ghost"
            onClick={onToggleTheme}
            icon={theme === 'dark' ? Sun : Moon}
            aria-label="Cambiar tema claro u oscuro"
            title="Cambiar tema"
          />

          <Button
            variant="ghost"
            className="navbar__menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            icon={menuOpen ? X : Menu}
            aria-label="Abrir menú de navegación"
          />
        </div>
      </div>
    </header>
  );
}
