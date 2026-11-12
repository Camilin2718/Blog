export function Heading({ level = 2, children, className = '' }) {
  const Tag = `h${level}`;
  return <Tag className={`atom-heading atom-heading--${level} ${className}`.trim()}>{children}</Tag>;
}
