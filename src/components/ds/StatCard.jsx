const TONES = {
  default: { background: 'var(--surface-card)', color: 'var(--text-strong)' },
  lime: { background: 'var(--lime-300)', color: 'var(--ink-800)' },
  ink: { background: 'var(--surface-inverse)', color: 'var(--white)' },
  sunken: { background: 'var(--surface-sunken)', color: 'var(--text-strong)' },
};

export default function StatCard({ title, value, tone = 'default', style = {}, ...rest }) {
  const t = TONES[tone] || TONES.default;
  return (
    <div
      style={{
        padding: 'var(--space-5)',
        borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        ...t,
        ...style,
      }}
      {...rest}
    >
      <span style={{ font: 'var(--type-label)', fontSize: 'var(--text-sm)', opacity: 0.72 }}>{title}</span>
      <span style={{ font: 'var(--type-h2)', fontSize: 'var(--text-3xl)', letterSpacing: 'var(--tracking-tight)', lineHeight: 1 }}>
        {value}
      </span>
    </div>
  );
}
