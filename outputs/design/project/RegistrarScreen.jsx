/* RegistrarScreen — registrar una nueva actividad de cuidado. */
(function () {
  const NS = window.CuidoSistemaDeDiseO_5a985d;

  function RegistrarScreen({ Icon, onDone }) {
    const { Select, Slider, Textarea, Button, Chip, Card } = NS;
    const [hours, setHours] = React.useState(2);
    const [cat, setCat] = React.useState('Cocina');
    const rate = 9200; // valor por hora estimado
    const value = (hours * rate).toLocaleString('es-CO');

    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--surface-page)' }}>
        <div style={{ padding: '54px 22px 10px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ font: 'var(--type-eyebrow)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--ink-600)' }}>Cuida</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <button onClick={onDone} style={{ border: 'none', background: 'var(--surface-card)', width: 40, height: 40, borderRadius: '50%', boxShadow: 'var(--shadow-sm)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon n="ArrowLeft" s={20} />
            </button>
            <h1 style={{ font: 'var(--type-h3)', color: 'var(--ink-800)' }}>Registrar cuidado</h1>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '10px 22px 24px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div>
            <div style={{ font: 'var(--type-label)', marginBottom: 10, color: 'var(--text-strong)' }}>Categoría</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Cocina', 'Cuidado directo', 'Hogar', 'Salud', 'Acompañamiento'].map((c) => (
                <Chip key={c} selected={cat === c} onClick={() => setCat(c)}>{c}</Chip>
              ))}
            </div>
          </div>

          <Slider label="Tiempo dedicado" min={0.5} max={12} step={0.5} value={hours} showValue format={(v) => `${v} h`} onChange={(e) => setHours(Number(e.target.value))} />

          <Card tone="lime" padding="md" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ font: 'var(--type-eyebrow)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', opacity: 0.6 }}>Valor económico estimado</div>
              <div style={{ font: 'var(--type-h2)', fontSize: 'var(--text-3xl)', letterSpacing: 'var(--tracking-tight)', marginTop: 4 }}>${value}</div>
            </div>
            <Icon n="HandCoins" s={40} />
          </Card>

          <Textarea label="Notas (opcional)" rows={3} placeholder="Describe la actividad…" />
        </div>

        <div style={{ padding: '12px 22px 30px', background: 'var(--surface-page)' }}>
          <Button fullWidth size="lg" iconLeft={<Icon n="Check" s={20} />} onClick={onDone}>Guardar actividad</Button>
        </div>
      </div>
    );
  }
  window.CuidoRegistrarScreen = RegistrarScreen;
})();
