import Icon from '../components/ds/Icon';
import Button from '../components/ds/Button';
import IconButton from '../components/ds/IconButton';
import Slider from '../components/ds/Slider';
import Input from '../components/ds/Input';
import { CARE_CATEGORIES, TRABAJO } from '../lib/cuido';

function CategoryCard({ cat, value, onChange, onDecrement, onIncrement }) {
  return (
    <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-sm)', padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ width: 'var(--size-badge-icon)', height: 'var(--size-badge-icon)', borderRadius: '50%', background: cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', color: 'var(--ink-800)' }}>
          <Icon n={cat.icon} s={19} />
        </span>
        <span style={{ font: 'var(--type-label)', fontSize: 'var(--text-md)', color: 'var(--ink-800)' }}>{cat.label}</span>
      </div>
      {cat.unit === 'weekly' && (
        <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: 0 }}>
          Cuéntanos tus horas en una semana típica.
        </p>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <IconButton variant="outline" size="sm" label="Restar una hora" disabled={value <= 0} onClick={onDecrement} style={{ width: 'var(--size-stepbtn)', height: 'var(--size-stepbtn)' }}>
          <Icon n="Minus" s={15} />
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
        <IconButton variant="outline" size="sm" label="Sumar una hora" disabled={value >= cat.max} onClick={onIncrement} style={{ width: 'var(--size-stepbtn)', height: 'var(--size-stepbtn)' }}>
          <Icon n="Plus" s={15} />
        </IconButton>
      </div>
    </div>
  );
}

export default function View1RegistroDesktop({ cuido }) {
  const { state, v1Disabled, nameMissing, setName, setHour, stepHour, startMatrix } = cuido;

  return (
    <div style={{ padding: '40px 0 100px', display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-warm)', borderRadius: 'var(--radius-xl)', padding: '48px 56px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }}>
        <span style={{ position: 'absolute', top: -50, right: -30, width: 200, height: 200, borderRadius: '50%', background: 'var(--mint)', opacity: 0.5, filter: 'blur(10px)', pointerEvents: 'none' }} />
        <span style={{ position: 'absolute', bottom: -60, left: -40, width: 170, height: 170, borderRadius: '50%', background: 'var(--lavender-strong)', opacity: 0.3, filter: 'blur(12px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ font: 'var(--type-eyebrow)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--ink-600)' }}>Ejercicio personal</span>
          <h1 style={{ font: 'var(--type-h1)', fontSize: 'var(--text-4xl)', letterSpacing: 'var(--tracking-tight)', color: 'var(--ink-800)', margin: 0 }}>¿Cuánto cuidas sin que se cuente?</h1>
          <p style={{ font: 'var(--type-body)', fontSize: 'var(--text-lg)', color: 'var(--ink-700)', margin: '6px 0 0', maxWidth: 560 }}>
            Cuéntanos cuántas horas dedicas, en un día típico, a cada una de estas actividades. Al final verás tus horas totales y su valor económico estimado.
          </p>
        </div>
        <div style={{ position: 'relative', width: '100%', height: 260, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
          <img src="/banner-mujeres-cuidando.webp" alt="Mujeres cuidando" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--surface-sunken)', borderRadius: 'var(--radius-card)', padding: '18px 20px' }}>
          <Icon n="Info" s={18} />
          <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: 0 }}>
            Este ejercicio es un punto de referencia para tu reflexión, no una medición exacta. Guardamos tu nombre y tus respuestas para conservar tu resultado.
          </p>
        </div>
        <Input
          label="¿Cómo te llamas?"
          placeholder="Escribe tu nombre"
          value={state.name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <span style={{ font: 'var(--type-label)', fontSize: 'var(--text-md)', color: 'var(--text-strong)' }}>En un día típico, ¿cuánto tiempo dedicas a…</span>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {CARE_CATEGORIES.map((cat) => (
          <CategoryCard
            key={cat.key}
            cat={cat}
            value={state.hours[cat.key] || 0}
            onChange={(e) => setHour(cat.key, Number(e.target.value))}
            onDecrement={() => stepHour(cat.key, cat.max, -1)}
            onIncrement={() => stepHour(cat.key, cat.max, 1)}
          />
        ))}
      </div>

      <div style={{ height: 1, background: 'var(--border-subtle)', margin: '8px 0' }} />

      <div>
        <span style={{ font: 'var(--type-label)', fontSize: 'var(--text-md)', color: 'var(--text-strong)' }}>Aparte, tu trabajo o negocio</span>
        <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: '4px 0 0' }}>
          No cuenta como cuidado, pero nos ayuda a mostrarte si se cruza con tu tiempo de cuidado.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        <CategoryCard
          cat={TRABAJO}
          value={state.hours[TRABAJO.key] || 0}
          onChange={(e) => setHour(TRABAJO.key, Number(e.target.value))}
          onDecrement={() => stepHour(TRABAJO.key, TRABAJO.max, -1)}
          onIncrement={() => stepHour(TRABAJO.key, TRABAJO.max, 1)}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end', marginTop: 12 }}>
        {v1Disabled && (
          <span style={{ font: 'var(--type-body-sm)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
            {nameMissing ? 'Escribe tu nombre para continuar.' : 'Registra al menos una actividad con horas mayores a cero.'}
          </span>
        )}
        <Button size="lg" disabled={v1Disabled} onClick={startMatrix} style={{ minWidth: 220 }}>Continuar</Button>
      </div>
    </div>
  );
}
