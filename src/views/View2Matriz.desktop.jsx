import Icon from '../components/ds/Icon';
import Button from '../components/ds/Button';

export default function View2MatrizDesktop({ cuido }) {
  const { state, seq, current, target, placed, limitMsg, buildHourCells, goPrev, goNext, backToV1 } = cuido;

  if (!current) return null;

  const hourCells = buildHourCells(current, target);
  const continueLabel = state.activeIndex >= seq.length - 1 ? 'Ver mis resultados' : 'Siguiente actividad';
  const matrixContinueDisabled = placed < target;

  return (
    <div style={{ padding: '40px 0 100px', display: 'flex', flexDirection: 'column', gap: 28 }}>
      <button
        onClick={backToV1}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start', border: 'none', background: 'var(--surface-card)', height: 40, padding: '0 16px', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-sm)', cursor: 'pointer', font: 'var(--type-label)', fontSize: 'var(--text-sm)', color: 'var(--ink-800)' }}
      >
        <Icon n="ArrowLeft" s={16} /> Volver al registro
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ font: 'var(--type-body-sm)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
            Actividad {state.activeIndex + 1} de {seq.length}
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ width: 'var(--size-badge-icon-lg)', height: 'var(--size-badge-icon-lg)', borderRadius: '50%', background: current.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', color: 'var(--ink-800)' }}>
              <Icon n={current.icon} s={26} />
            </span>
            <div>
              <div style={{ font: 'var(--type-h2)', fontSize: 'var(--text-2xl)', color: 'var(--ink-800)' }}>{current.label}</div>
              <div style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>Llevas {placed} de {target} horas ubicadas</div>
            </div>
          </div>

          <p style={{ font: 'var(--type-body)', color: 'var(--text-muted)', margin: 0, maxWidth: 640 }}>
            Marca en qué horas del día hiciste esta actividad. Si una hora ya está ocupada por otra actividad, aún puedes marcarla — así vemos cuándo se cruzan.
          </p>

          {limitMsg && (
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', background: 'color-mix(in srgb, var(--warning) 14%, transparent)', borderRadius: 'var(--radius-md)', padding: '10px 14px', maxWidth: 640 }}>
              <Icon n="TriangleAlert" s={16} />
              <span style={{ font: 'var(--type-body-sm)', fontSize: 'var(--text-xs)', color: 'var(--ink-700)' }}>{limitMsg}</span>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 4 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, font: 'var(--type-body-sm)', fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', display: 'inline-block' }} />Disponible
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, font: 'var(--type-body-sm)', fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: 'var(--ink-200)', display: 'inline-block' }} />Ocupado por otra actividad
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, font: 'var(--type-body-sm)', fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: current.color, border: '2px solid var(--ink-800)', display: 'inline-block' }} />Seleccionado
          </span>
        </div>
      </div>

      <div style={{ font: 'var(--type-label)', fontSize: 'var(--text-lg)', color: 'var(--text-strong)', textAlign: 'center' }}>
        ¿En qué horas realizas esta actividad?
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 16 }}>
        {hourCells.map((cell) => (
          <button
            key={cell.hour}
            onClick={cell.onClick}
            title={cell.fullRangeLabel}
            style={{
              minHeight: 120,
              border: cell.border,
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              font: 'var(--type-label)',
              fontSize: 17,
              lineHeight: 1.3,
              background: cell.background,
              color: cell.color,
              opacity: cell.opacity,
              cursor: cell.dimmed ? 'not-allowed' : 'pointer',
            }}
          >
            {cell.hourShort}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 4 }}>
        {state.activeIndex > 0 && (
          <Button variant="outline" size="lg" onClick={goPrev}>Atrás</Button>
        )}
        <Button size="lg" disabled={matrixContinueDisabled} onClick={goNext} style={{ minWidth: 240 }}>{continueLabel}</Button>
      </div>
    </div>
  );
}
