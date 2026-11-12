import { Link } from 'react-router-dom';

export function Button({
  children,
  variant = 'primary',
  to,
  href,
  icon: Icon,
  className = '',
  ...props
}) {
  const classes = `atom-btn atom-btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {Icon && <Icon size={17} aria-hidden="true" />}
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" {...props}>
        {Icon && <Icon size={17} aria-hidden="true" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {Icon && <Icon size={17} aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
}
