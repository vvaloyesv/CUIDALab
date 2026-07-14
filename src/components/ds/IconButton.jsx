const SIZES = { sm: 34, md: 42, lg: 52 };

const VARIANTS = {
  primary: { background: 'var(--accent)', color: 'var(--accent-contrast)', border: '1px solid transparent' },
  dark: { background: 'var(--surface-inverse)', color: 'var(--text-inverse)', border: '1px solid transparent' },
  outline: { background: 'var(--surface-card)', color: 'var(--ink-800)', border: '1px solid var(--border-default)' },
  ghost: { background: 'transparent', color: 'var(--ink-800)', border: '1px solid transparent' },
};

export default function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  disabled = false,
  style = {},
  children,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      className="cuido-iconbtn"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: dim,
        height: dim,
        borderRadius: 'var(--radius-full)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
        ...v,
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
