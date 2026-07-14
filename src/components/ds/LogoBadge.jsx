import Logo from './Logo';

export default function LogoBadge({ size = 34, logoSize, strokeWidth, style = {} }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'var(--ink-800)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto',
        ...style,
      }}
    >
      <Logo size={logoSize || Math.round(size * 0.58)} strokeWidth={strokeWidth || Math.round(size * 0.26)} />
    </span>
  );
}
