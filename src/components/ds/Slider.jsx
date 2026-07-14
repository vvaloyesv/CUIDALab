export default function Slider({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  label = null,
  showValue = false,
  format = (v) => v,
  disabled = false,
  style = {},
  ...rest
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ width: '100%', ...style }}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          {label && <span style={{ font: 'var(--type-label)', color: 'var(--text-strong)' }}>{label}</span>}
          {showValue && <span style={{ font: 'var(--type-label)', color: 'var(--text-muted)' }}>{format(value)}</span>}
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="cuido-slider"
        style={{
          width: '100%',
          height: 26,
          appearance: 'none',
          WebkitAppearance: 'none',
          background: 'transparent',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          '--pct': pct + '%',
        }}
        {...rest}
      />
    </div>
  );
}
