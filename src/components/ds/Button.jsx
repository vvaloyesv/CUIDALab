const SIZES = {
  sm: { height: 34, padding: '0 16px', font: 'var(--text-sm)', gap: 6 },
  md: { height: 44, padding: '0 22px', font: 'var(--text-md)', gap: 8 },
  lg: { height: 54, padding: '0 30px', font: 'var(--text-lg)', gap: 10 },
};

const VARIANTS = {
  primary: { background: 'var(--accent)', color: 'var(--accent-contrast)', border: '1px solid transparent' },
  secondary: { background: 'var(--surface-inverse)', color: 'var(--text-inverse)', border: '1px solid transparent' },
  outline: { background: 'transparent', color: 'var(--ink-800)', border: '1px solid var(--border-strong)' },
  ghost: { background: 'transparent', color: 'var(--ink-800)', border: '1px solid transparent' },
};

export default function Button({
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  style = {},
  children,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return (
    <button
      type={type}
      disabled={disabled}
      data-variant={variant}
      className="cuido-btn"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        height: s.height,
        padding: s.padding,
        width: fullWidth ? '100%' : 'auto',
        font: 'var(--type-body)',
        fontSize: s.font,
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.01em',
        borderRadius: 'var(--radius-button)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
        ...v,
        ...style,
      }}
      {...rest}
    >
      {iconLeft && <span style={{ display: 'inline-flex', flex: '0 0 auto' }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex', flex: '0 0 auto' }}>{iconRight}</span>}
    </button>
  );
}
