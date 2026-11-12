export function SurfaceCard({
  children,
  padded = true,
  interactive = false,
  highlight = false,
  className = '',
}) {
  const classes = [
    'atom-surface',
    padded ? 'atom-surface--padded' : '',
    interactive ? 'atom-surface--interactive' : '',
    highlight ? 'atom-surface--highlight' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}
