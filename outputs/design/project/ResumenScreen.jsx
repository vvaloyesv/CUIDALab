/* ResumenScreen — resumen del valor económico mensual del cuidado. */
(function () {
  const NS = window.CuidoSistemaDeDiseO_5a985d;

  function ResumenScreen({ Icon }) {
    const { ProgressRing, StatCard, Card, Tabs, Badge } = NS;
    const [range, setRange] = React.useState('mes');

    const breakdown = [
      { label: 'Cuidado directo', value: '$920.000', pct: 42, tone: 'lavender-strong' },
      { label: 'Cocina', value: '$540.000', pct: 25, tone: 'peach' },
      { label: 'Hogar', value: '$430.000', pct: 20, tone: 'cyan' },
      { label: 'Salud y otros', value: '$290.000', pct: 13, tone: 'mint' },
    ];

    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--surface-page)' }}>
        <div style={{ padding: '54px 22px 8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h1 style={{ font: 'var(--type-h2)', fontSize: 'var(--text-3xl)', color: 'var(--ink-800)', letterSpacing: 'var(--tracking-tight)' }}>Tu valor</h1>
            <Tabs size="sm" value={range} onChange={setRange} items={['Semana', 'Mes', 'Año'].map(l => ({ value: l.toLowerCase(), label: l }))} />
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 22px 120px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Anillo principal */}
          <Card padding="lg" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <div style={{ font: 'var(--type-eyebrow)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--text-subtle)' }}>Valor del cuidado · este mes</div>
            <ProgressRing value={78} size={200} thickness={22} label="$2.180.000" caption="186 horas" color="var(--lime-400)" />
            <Badge tone="success" dot>+12% vs. mes anterior</Badge>
          </Card>

          {/* Métricas */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <StatCard title="Horas" value="186" unit="h" delta="+8%" icon={<Icon n="Clock" s={16} />} />
            <StatCard title="Actividades" value="94" delta="+15%" tone="lime" icon={<Icon n="ListChecks" s={16} />} />
          </div>

          {/* Desglose */}
          <Card padding="md" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ font: 'var(--type-h4)', color: 'var(--ink-800)' }}>Por tipo de cuidado</div>
            {breakdown.map((b) => (
              <div key={b.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-body)' }}>{b.label}</span>
                  <span style={{ font: 'var(--type-label)', color: 'var(--ink-800)' }}>{b.value}</span>
                </div>
                <div style={{ height: 8, borderRadius: 999, background: 'var(--ink-150)', overflow: 'hidden' }}>
                  <div style={{ width: `${b.pct}%`, height: '100%', borderRadius: 999, background: `var(--${b.tone})` }} />
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    );
  }
  window.CuidoResumenScreen = ResumenScreen;
})();
