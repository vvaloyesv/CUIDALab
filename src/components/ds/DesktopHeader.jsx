import LogoBadge from './LogoBadge';

const STEPS = [
  { n: 1, label: 'Registro' },
  { n: 2, label: 'Matriz de horas' },
  { n: 3, label: 'Resultados' },
];

export default function DesktopHeader({ step }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-card)' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '18px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LogoBadge size={36} />
          <span style={{ font: 'var(--type-h4)', color: 'var(--ink-800)' }}>Cuida</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {STEPS.map((s, i) => (
            <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    font: 'var(--type-label)',
                    fontSize: 'var(--text-xs)',
                    flex: '0 0 auto',
                    background: step === s.n ? 'var(--lime-300)' : step > s.n ? 'var(--ink-800)' : 'var(--ink-150)',
                    color: step === s.n ? 'var(--ink-800)' : step > s.n ? 'var(--white)' : 'var(--text-muted)',
                  }}
                >
                  {s.n}
                </span>
                <span style={{ font: 'var(--type-label)', fontSize: 'var(--text-sm)', color: step === s.n ? 'var(--ink-800)' : 'var(--text-muted)' }}>
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && <span style={{ width: 28, height: 1, background: 'var(--border-subtle)' }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
