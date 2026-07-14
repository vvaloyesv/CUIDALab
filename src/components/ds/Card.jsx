const TONES = {
  default: { background: 'var(--surface-card)', color: 'var(--text-body)' },
  sunken: { background: 'var(--surface-sunken)', color: 'var(--text-body)' },
  lime: { background: 'var(--lime-300)', color: 'var(--ink-800)' },
  lavender: { background: 'var(--lavender)', color: 'var(--ink-800)' },
  peach: { background: 'var(--peach)', color: 'var(--ink-800)' },
  ink: { background: 'var(--surface-inverse)', color: 'var(--text-inverse)' },
};

const PADS = { none: 0, sm: 'var(--space-4)', md: 'var(--pad-card)', lg: 'var(--space-8)' };

export default function Card({ tone = 'default', padding = 'md', style = {}, children, ...rest }) {
  const t = TONES[tone] || TONES.default;
  return (
    <div
      style={{
        padding: PADS[padding],
        borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-sm)',
        ...t,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
