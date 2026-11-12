import { NavLink } from 'react-router-dom';

export function NavLinkItem({ to, label, icon: Icon, onClick }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        `atom-nav-link ${isActive ? 'atom-nav-link--active' : ''}`.trim()
      }
    >
      {Icon && <Icon size={16} aria-hidden="true" />}
      <span>{label}</span>
    </NavLink>
  );
}
