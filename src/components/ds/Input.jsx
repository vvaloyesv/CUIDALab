export default function Input({
  label = null,
  hint = null,
  error = null,
  size = 'md',
  disabled = false,
  style = {},
  ...rest
}) {
  const h = size === 'sm' ? 40 : size === 'lg' ? 56 : 48;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%' }}>
      {label && <label style={{ font: 'var(--type-label)', color: 'var(--text-strong)' }}>{label}</label>}
      <div
        className="cuido-input-wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          height: h,
          padding: '0 18px',
          background: 'var(--surface-card)',
          border: '1px solid ' + (error ? 'var(--danger)' : 'var(--border-default)'),
          borderRadius: 'var(--radius-input)',
          opacity: disabled ? 0.55 : 1,
        }}
      >
        <input
          disabled={disabled}
          style={{
            flex: 1,
            minWidth: 0,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            font: 'var(--type-body)',
            fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-md)',
            color: 'var(--text-strong)',
            ...style,
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{ font: 'var(--type-body-sm)', fontSize: 'var(--text-xs)', color: error ? 'var(--danger)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
