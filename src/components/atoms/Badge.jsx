export function Badge({ children, variant = 'accent', icon: Icon, className = '' }) {
  return (
    <span className={`atom-badge atom-badge--${variant} ${className}`.trim()}>
      {Icon && <Icon size={14} aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );
}
