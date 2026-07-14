import Icon from './ds/Icon';
import Logo from './ds/Logo';
import LogoBadge from './ds/LogoBadge';

const SLIDE_W = 1600;
const SLIDE_H = 900;

// Handjet es una fuente de ancho fijo (tipo LED): un espacio " " ocupa una celda
// completa, así que "7 h" en Handjet deja un salto enorme entre el número y la
// unidad. Se separan en dos <span> con su propio tipo de letra y gap controlado.
function InlinePill({ display, background, color, fontSize = 1.2 }) {
  const idx = display.lastIndexOf(' ');
  const num = idx === -1 ? display : display.slice(0, idx);
  const unit = idx === -1 ? '' : display.slice(idx + 1);
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'baseline', gap: 4,
      background, color, borderRadius: 12, padding: '2px 18px', whiteSpace: 'nowrap',
    }}>
      <span style={{ fontFamily: "'Handjet', monospace", fontWeight: 700, fontSize: `${fontSize}em`, lineHeight: 1.15 }}>{num}</span>
      {unit && <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: `${fontSize * 0.6}em` }}>{unit}</span>}
    </span>
  );
}

function BarList({ rows, fontSize = 15 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
      {rows.map((row) => (
        <div key={row.key || row.label} style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, gap: 8, minWidth: 0 }}>
            <span style={{ fontSize, color: 'var(--ink-700)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0, flex: '1 1 auto' }}>{row.label}</span>
            <span style={{ fontSize, fontWeight: 600, color: 'var(--ink-800)', flex: '0 0 auto', whiteSpace: 'nowrap' }}>{row.display}</span>
          </div>
          <div style={{ height: 11, borderRadius: 999, background: 'rgba(0,0,0,0.08)', overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: 999, background: row.color, width: row.pctStyle }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function StatCard({ icon, iconBg, label, value }) {
  return (
    <div style={{ flex: 1, minWidth: 0, background: 'rgba(255,255,255,0.78)', borderRadius: 18, padding: '18px 22px', boxShadow: '0 6px 18px rgba(75,45,70,0.12)', display: 'flex', alignItems: 'center', gap: 16 }}>
      <span style={{ width: 44, height: 44, borderRadius: '50%', background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
        <Icon n={icon} s={20} color="var(--ink-800)" />
      </span>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 11.5, lineHeight: 1.3, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-600)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</div>
        <div style={{ fontWeight: 700, fontSize: 28, letterSpacing: '-0.02em', color: 'var(--ink-800)', marginTop: 8, whiteSpace: 'nowrap' }}>{value}</div>
      </div>
    </div>
  );
}

export default function ReportSlide({
  userName, todayDisplay, netDisplay, grossDisplay, pctCareDisplay, pctWorkDisplay, workHoursDisplay,
  slideGrossRows, slideComparisonRows,
  hasOverlap, overlapDisplay, jornadaInsight,
  monthlyDisplay, annualDisplay, monthlyHoursDisplay, annualHoursDisplay, simileText,
}) {
  return (
    <div
      style={{
        width: SLIDE_W,
        height: SLIDE_H,
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--grad-dusk)',
        fontFamily: 'var(--font-sans)',
        color: 'var(--ink-800)',
        boxSizing: 'border-box',
        padding: '56px 72px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span style={{ position: 'absolute', top: -90, left: -70, width: 340, height: 340, borderRadius: '50%', background: 'var(--lime-300)', opacity: 0.35 }} />
      <span style={{ position: 'absolute', bottom: -110, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'var(--lavender-strong)', opacity: 0.3 }} />

      {/* header */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
          <LogoBadge size={44} />
          <span style={{ fontWeight: 600, fontSize: 20, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink-700)' }}>Cuida</span>
        </div>
        <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--ink-600)', background: 'rgba(255,255,255,0.6)', padding: '8px 18px', borderRadius: 999, whiteSpace: 'nowrap', flex: '0 0 auto' }}>
          Ejercicio personal · {todayDisplay}
        </span>
      </div>

      {/* headline */}
      <div style={{ position: 'relative', marginTop: 18 }}>
        <span style={{ fontWeight: 600, fontSize: 16, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink-600)' }}>
          Resultados de {userName}
        </span>
        <h1 style={{ margin: '4px 0 0', fontWeight: 700, fontSize: 52, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink-800)', display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
          Hoy dediqué <InlinePill display={netDisplay} background="var(--ink-800)" color="var(--lime-300)" /> a mi cuidado y al de otras personas
        </h1>
        <p style={{ margin: '6px 0 0', fontSize: 17, color: 'var(--ink-700)', maxWidth: 900 }}>Un trabajo esencial que sostiene la vida, aunque pocas veces se reconoce.</p>
      </div>

      {/* fila de 4 stat cards */}
      <div style={{ position: 'relative', display: 'flex', gap: 16, marginTop: 24 }}>
        <StatCard icon="Clock" iconBg="var(--lime-300)" label="Tiempo total en el que cuidas" value={grossDisplay} />
        <StatCard icon="Heart" iconBg="var(--lavender-strong)" label="Del día, dedicas al cuidado" value={pctCareDisplay} />
        <StatCard icon="Clock" iconBg="var(--ink-300)" label="Horas de trabajo remunerado" value={workHoursDisplay} />
        <StatCard icon="Briefcase" iconBg="var(--peach)" label="Del día, dedicas al trabajo remunerado" value={pctWorkDisplay} />
      </div>

      {/* cuerpo: 3 columnas */}
      <div style={{ position: 'relative', flex: 1, display: 'flex', gap: 18, marginTop: 20, minHeight: 0 }}>
        <div style={{ flex: 1.05, minWidth: 0, background: 'rgba(255,255,255,0.62)', borderRadius: 18, padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden' }}>
          <div style={{ fontWeight: 600, fontSize: 18, color: 'var(--ink-800)' }}>Así repartiste tu tiempo de cuidado, actividad por actividad.</div>
          <BarList rows={slideGrossRows} fontSize={15} />
        </div>

        <div style={{ flex: 0.95, minWidth: 0, background: 'rgba(255,255,255,0.62)', borderRadius: 18, padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden' }}>
          <div style={{ fontWeight: 600, fontSize: 18, color: 'var(--ink-800)' }}>¿Cómo se distribuye tu tiempo de cuidado frente al de otras personas?</div>
          <BarList rows={slideComparisonRows} fontSize={15} />
          <div style={{ height: 1, background: 'rgba(0,0,0,0.12)', margin: '2px 0' }} />
          {hasOverlap ? (
            <div>
              <div style={{ fontSize: 14, color: 'var(--ink-800)' }}><strong>{overlapDisplay}</strong> de cuidado ocurrió al mismo tiempo que otra actividad</div>
              <div style={{ fontSize: 12, color: 'var(--ink-600)', lineHeight: 1.35, marginTop: 4 }}>
                Una misma hora puede contener más de una tarea de cuidado. Cocinar, acompañar o hacer compras suelen suceder al mismo tiempo. Por eso, algunas horas se cuentan más de una vez.
              </div>
            </div>
          ) : (
            <div style={{ fontSize: 14, color: 'var(--ink-600)', lineHeight: 1.35 }}>Ninguna hora de cuidado se solapó con otra actividad.</div>
          )}
          <div style={{ fontSize: 13, color: 'var(--ink-600)', lineHeight: 1.35 }}>{jornadaInsight}</div>
        </div>

        <div style={{ flex: 0.85, minWidth: 0, background: 'var(--ink-800)', borderRadius: 18, padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 14, color: 'var(--lime-300)', overflow: 'hidden' }}>
          <div style={{ fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.85 }}>Lo que vale su tiempo</div>
          <div>
            <div style={{ fontSize: 14, opacity: 0.75 }}>Al mes</div>
            <div style={{ fontWeight: 700, fontSize: 30, letterSpacing: '-0.02em' }}>{monthlyDisplay}</div>
          </div>
          <div>
            <div style={{ fontSize: 14, opacity: 0.75 }}>Al año</div>
            <div style={{ fontWeight: 700, fontSize: 30, letterSpacing: '-0.02em' }}>{annualDisplay}</div>
          </div>
          <div style={{ height: 1, background: 'rgba(252,253,118,0.25)' }} />
          <div>
            <div style={{ fontSize: 14, opacity: 0.75 }}>Si esto se repite, al mes</div>
            <div style={{ fontWeight: 600, fontSize: 19 }}>{monthlyHoursDisplay}</div>
          </div>
          <div>
            <div style={{ fontSize: 14, opacity: 0.75 }}>Si esto se repite, al año</div>
            <div style={{ fontWeight: 600, fontSize: 19 }}>{annualHoursDisplay}</div>
          </div>
          <div style={{ fontSize: 12.5, lineHeight: 1.35, opacity: 0.85 }}>{simileText}</div>
        </div>
      </div>

      {/* footer */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, gap: 24 }}>
        <p style={{ margin: 0, fontSize: 14, color: 'var(--ink-600)', maxWidth: 1080, lineHeight: 1.4 }}>
          Ejercicio de reflexión personal, no una medición exacta. Proyección de valor a partir de horas netas × $10.714/hora. No representa un ingreso real ni un aporte reconocido.
        </p>
        <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--ink-700)', whiteSpace: 'nowrap' }}>yocuida</span>
      </div>
    </div>
  );
}
