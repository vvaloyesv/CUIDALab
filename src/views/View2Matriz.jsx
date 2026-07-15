import Icon from '../components/ds/Icon';
import Button from '../components/ds/Button';

export default function View2Matriz({ cuido }) {
  const { state, seq, current, target, placed, limitMsg, buildHourCells, goPrev, goNext } = cuido;

  if (!current) return null;

  const hourCells = buildHourCells(current, target);
  const continueLabel = state.activeIndex >= seq.length - 1 ? 'Ver mis resultados' : 'Siguiente actividad';
  const matrixContinueDisabled = placed < target;

  return (
    <>
      <div style={{ padding: '44px var(--pad-screen) 8px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={cuido.backToV1}
            style={{ border: 'none', background: 'var(--surface-card)', width: 38, height: 38, borderRadius: '50%', boxShadow: 'var(--shadow-sm)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Icon n="ArrowLeft" s={18} />
          </button>
          <span style={{ font: 'var(--type-body-sm)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
            Actividad {state.activeIndex + 1} de {seq.length}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
          <span style={{ width: 'var(--size-badge-icon-lg)', height: 'var(--size-badge-icon-lg)', borderRadius: '50%', background: current.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', color: 'var(--ink-800)' }}>
            <Icon n={current.icon} s={21} />
          </span>
          <div>
            <div style={{ font: 'var(--type-h3)', color: 'var(--ink-800)' }}>{current.label}</div>
            <div style={{ font: 'var(--type-body-sm)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>Llevas {placed} de {target} horas ubicadas</div>
          </div>
        </div>
        <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: '2px 0 0' }}>
          Marca en qué horas del día hiciste esta actividad. Si una hora ya está ocupada por otra actividad, aún puedes marcarla — así vemos cuándo se cruzan.
        </p>
      </div>

      <div style={{ padding: '6px var(--pad-screen) 140px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="cuido-hourgrid">
          {hourCells.map((cell) => (
            <button
              key={cell.hour}
              onClick={cell.onClick}
              title={cell.fullRangeLabel}
              style={{
                aspectRatio: '1',
                border: cell.border,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                font: 'var(--type-label)',
                fontSize: 'clamp(9px, 1.6vw, 12px)',
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

        {limitMsg && (
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', background: 'color-mix(in srgb, var(--warning) 14%, transparent)', borderRadius: 'var(--radius-md)', padding: '10px 14px' }}>
            <Icon n="TriangleAlert" s={16} />
            <span style={{ font: 'var(--type-body-sm)', fontSize: 'var(--text-xs)', color: 'var(--ink-700)' }}>{limitMsg}</span>
          </div>
        )}

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 4 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, font: 'var(--type-body-sm)', fontSize: 11, color: 'var(--text-muted)' }}>
            <span style={{ width: 12, height: 12, borderRadius: 4, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', display: 'inline-block' }} />Disponible
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, font: 'var(--type-body-sm)', fontSize: 11, color: 'var(--text-muted)' }}>
            <span style={{ width: 12, height: 12, borderRadius: 4, background: 'var(--ink-200)', display: 'inline-block' }} />Ocupado por otra actividad
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, font: 'var(--type-body-sm)', fontSize: 11, color: 'var(--text-muted)' }}>
            <span style={{ width: 12, height: 12, borderRadius: 4, background: current.color, border: '2px solid var(--ink-800)', display: 'inline-block' }} />Seleccionado
          </span>
        </div>
      </div>

      <div style={{ position: 'sticky', bottom: 0, padding: '16px var(--pad-screen) 22px', background: 'linear-gradient(to top, var(--surface-page) 70%, transparent)', display: 'flex', gap: 10 }}>
        {state.activeIndex > 0 && (
          <Button variant="outline" size="lg" onClick={goPrev} style={{ width: 90 }}>Atrás</Button>
        )}
        <div style={{ flex: 1 }}>
          <Button fullWidth size="lg" disabled={matrixContinueDisabled} onClick={goNext}>{continueLabel}</Button>
        </div>
      </div>
    </>
  );
}
