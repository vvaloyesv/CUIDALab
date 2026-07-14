import Icon from '../components/ds/Icon';
import Button from '../components/ds/Button';
import IconButton from '../components/ds/IconButton';
import Slider from '../components/ds/Slider';
import Input from '../components/ds/Input';
import { CARE_CATEGORIES, TRABAJO } from '../lib/cuido';

function CategoryRow({ cat, value, onChange, onDecrement, onIncrement }) {
  return (
    <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-sm)', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 30, height: 30, borderRadius: '50%', background: cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', color: 'var(--ink-800)' }}>
          <Icon n={cat.icon} s={15} />
        </span>
        <span style={{ font: 'var(--type-label)', fontSize: 'var(--text-sm)', color: 'var(--ink-800)' }}>{cat.label}</span>
      </div>
      {cat.unit === 'weekly' && (
        <p style={{ font: 'var(--type-body-sm)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', margin: '-6px 0 0' }}>
          Cuéntanos tus horas en una semana típica.
        </p>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <IconButton variant="outline" size="sm" label="Restar una hora" disabled={value <= 0} onClick={onDecrement} style={{ width: 26, height: 26 }}>
          <Icon n="Minus" s={13} />
        </IconButton>
        <div style={{ flex: 1 }}>
          <Slider
            min={0}
            max={cat.max}
            step={1}
            value={value}
            showValue
            format={(v) => `${v}${cat.unit === 'weekly' ? ' h/sem' : ' h'}`}
            onChange={onChange}
          />
        </div>
        <IconButton variant="outline" size="sm" label="Sumar una hora" disabled={value >= cat.max} onClick={onIncrement} style={{ width: 26, height: 26 }}>
          <Icon n="Plus" s={13} />
        </IconButton>
      </div>
    </div>
  );
}

export default function View1Registro({ cuido }) {
  const { state, v1Disabled, nameMissing, setName, setHour, stepHour, startMatrix } = cuido;

  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-warm)', padding: '44px 22px 26px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <span style={{ position: 'absolute', top: -40, right: -30, width: 150, height: 150, borderRadius: '50%', background: 'var(--mint)', opacity: 0.55, filter: 'blur(6px)', pointerEvents: 'none' }} />
        <span style={{ position: 'absolute', bottom: -50, left: -40, width: 130, height: 130, borderRadius: '50%', background: 'var(--lavender-strong)', opacity: 0.35, filter: 'blur(10px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ font: 'var(--type-eyebrow)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--ink-600)' }}>Ejercicio personal</span>
          <h1 style={{ font: 'var(--type-h1)', fontSize: 'var(--text-3xl)', letterSpacing: 'var(--tracking-tight)', color: 'var(--ink-800)', margin: 0 }}>¿Cuánto cuidas sin que se cuente?</h1>
          <p style={{ font: 'var(--type-body)', color: 'var(--ink-700)', margin: '6px 0 0' }}>
            Cuéntanos cuántas horas dedicas, en un día típico, a cada una de estas actividades. Al final verás tus horas totales y su valor económico estimado.
          </p>
        </div>
        <div style={{ position: 'relative', width: '100%', height: 190, borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
          <img src="/banner-mujeres-cuidando.webp" alt="Mujeres cuidando" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>

      <div style={{ padding: '20px 22px 140px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--surface-sunken)', borderRadius: 'var(--radius-card)', padding: '14px 16px' }}>
          <Icon n="Info" s={18} />
          <p style={{ font: 'var(--type-body-sm)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', margin: 0 }}>
            Este ejercicio es un punto de referencia para tu reflexión, no una medición exacta. Guardamos tu nombre y tus respuestas para conservar tu resultado.
          </p>
        </div>

        <Input
          label="¿Cómo te llamas?"
          placeholder="Escribe tu nombre"
          value={state.name}
          onChange={(e) => setName(e.target.value)}
        />

        <span style={{ font: 'var(--type-label)', color: 'var(--text-strong)', marginTop: 8 }}>En un día típico, ¿cuánto tiempo dedicas a…</span>

        {CARE_CATEGORIES.map((cat) => (
          <CategoryRow
            key={cat.key}
            cat={cat}
            value={state.hours[cat.key] || 0}
            onChange={(e) => setHour(cat.key, Number(e.target.value))}
            onDecrement={() => stepHour(cat.key, cat.max, -1)}
            onIncrement={() => stepHour(cat.key, cat.max, 1)}
          />
        ))}

        <div style={{ height: 1, background: 'var(--border-subtle)', margin: '8px 0' }} />
        <span style={{ font: 'var(--type-label)', color: 'var(--text-strong)' }}>Aparte, tu trabajo o negocio</span>
        <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: '-8px 0 0' }}>
          No cuenta como cuidado, pero nos ayuda a mostrarte si se cruza con tu tiempo de cuidado.
        </p>
        <CategoryRow
          cat={TRABAJO}
          value={state.hours[TRABAJO.key] || 0}
          onChange={(e) => setHour(TRABAJO.key, Number(e.target.value))}
          onDecrement={() => stepHour(TRABAJO.key, TRABAJO.max, -1)}
          onIncrement={() => stepHour(TRABAJO.key, TRABAJO.max, 1)}
        />
      </div>

      <div style={{ position: 'sticky', bottom: 0, padding: '16px 22px 22px', background: 'linear-gradient(to top, var(--surface-page) 70%, transparent)', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {v1Disabled && (
          <span style={{ font: 'var(--type-body-sm)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', textAlign: 'center' }}>
            {nameMissing ? 'Escribe tu nombre para continuar.' : 'Registra al menos una actividad con horas mayores a cero.'}
          </span>
        )}
        <Button fullWidth size="lg" disabled={v1Disabled} onClick={startMatrix}>Continuar</Button>
      </div>
    </>
  );
}
