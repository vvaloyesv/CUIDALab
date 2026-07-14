/* HomeScreen — pantalla principal de la app de cuidado.
   Lista de actividades registradas sobre gradiente cálido, con filtros. */
(function () {
  const NS = window.CuidoSistemaDeDiseO_5a985d;

  function HomeScreen({ Icon, onOpenRegistrar }) {
    const { Tabs, GlassCard, IconButton, Avatar, Badge } = NS;
    const [filter, setFilter] = React.useState('todas');

    const activities = [
      { id: 1, title: 'Preparar comida', cat: 'Cocina', tone: 'peach', hours: '2 h', value: '$18.400', icon: 'CookingPot', imp: true },
      { id: 2, title: 'Cuidado de niñas y niños', cat: 'Cuidado directo', tone: 'lavender', hours: '4 h', value: '$36.800', icon: 'Baby', imp: true },
      { id: 3, title: 'Limpieza del hogar', cat: 'Hogar', tone: 'cyan', hours: '1.5 h', value: '$13.800', icon: 'Sparkles', imp: false },
      { id: 4, title: 'Acompañar a cita médica', cat: 'Salud', tone: 'mint', hours: '2 h', value: '$18.400', icon: 'Stethoscope', imp: false },
    ];
    const shown = filter === 'imp' ? activities.filter(a => a.imp) : activities;

    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--grad-warm)' }}>
        {/* Header */}
        <div style={{ padding: '54px 22px 14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <div style={{ font: 'var(--type-eyebrow)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--ink-600)' }}>Martes, 12 jul</div>
            <Avatar name="María López" tone="ink" size={38} ring />
          </div>
          <h1 style={{ font: 'var(--type-h1)', fontSize: 'var(--text-3xl)', color: 'var(--ink-800)', letterSpacing: 'var(--tracking-tight)' }}>Tus cuidados</h1>
          <p style={{ font: 'var(--type-body-sm)', color: 'var(--ink-600)', marginTop: 4 }}>Hoy has aportado <strong style={{ color: 'var(--ink-800)' }}>$87.400</strong> en trabajo no remunerado</p>
        </div>

        {/* Filtros */}
        <div style={{ padding: '4px 22px 12px' }}>
          <Tabs size="sm" value={filter} onChange={setFilter}
            items={[{ value: 'todas', label: 'Todas', count: activities.length }, { value: 'imp', label: 'Importantes' }, { value: 'hoy', label: 'Hoy' }]} />
        </div>

        {/* Lista */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '4px 22px 120px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {shown.map((a) => (
            <GlassCard key={a.id} scheme="light" padding="none" style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ width: 46, height: 46, flex: '0 0 auto', borderRadius: 'var(--radius-full)', background: `var(--${a.tone})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-800)' }}>
                <Icon n={a.icon} s={22} />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ font: 'var(--type-h4)', fontSize: 'var(--text-lg)', color: 'var(--ink-800)' }}>{a.title}</span>
                  {a.imp && <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--lavender-strong)' }} />}
                </div>
                <div style={{ font: 'var(--type-body-sm)', fontSize: 'var(--text-xs)', color: 'var(--ink-600)', marginTop: 2 }}>{a.cat} · {a.hours}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ font: 'var(--type-label)', color: 'var(--ink-800)' }}>{a.value}</div>
                <div style={{ font: 'var(--type-body-sm)', fontSize: '10px', color: 'var(--ink-500)' }}>valor est.</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    );
  }
  window.CuidoHomeScreen = HomeScreen;
})();
