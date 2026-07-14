import Icon from './ds/Icon';
import LogoBadge from './ds/LogoBadge';

const SLIDE_W = 1080;
const SLIDE_H = 1920;

// Handjet es una fuente de ancho fijo (tipo LED): un espacio " " ocupa una celda
// completa, así que "9 h" en Handjet deja un salto enorme entre el número y la
// unidad. Se separan en dos <span> con su propio tipo de letra y gap controlado.
function InlinePill({ display, background, color, fontSize = 1.15 }) {
  const idx = display.lastIndexOf(' ');
  const num = idx === -1 ? display : display.slice(0, idx);
  const unit = idx === -1 ? '' : display.slice(idx + 1);
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'baseline', gap: 5,
      background, color, borderRadius: 14, padding: '4px 20px', whiteSpace: 'nowrap',
    }}>
      <span style={{ fontFamily: "'Handjet', monospace", fontWeight: 700, fontSize: `${fontSize}em`, lineHeight: 1.15 }}>{num}</span>
      {unit && <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: `${fontSize * 0.55}em` }}>{unit}</span>}
    </span>
  );
}

function StatTile({ icon, iconBg, label, value }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.55)', borderRadius: 24, padding: '26px 26px 24px', display: 'flex', flexDirection: 'column', gap: 18, minWidth: 0 }}>
      <span style={{ width: 52, height: 52, borderRadius: '50%', background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
        <Icon n={icon} s={24} color="var(--ink-800)" />
      </span>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-600)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</div>
        <div style={{ fontWeight: 700, fontSize: 36, letterSpacing: '-0.02em', color: 'var(--ink-800)', marginTop: 8, whiteSpace: 'nowrap' }}>{value}</div>
      </div>
    </div>
  );
}

function CategoryTile({ row }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.8)', borderRadius: 18, padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: row.color, flex: '0 0 auto' }} />
        <span style={{ fontWeight: 700, fontSize: 22, color: 'var(--ink-800)', whiteSpace: 'nowrap', flex: '0 0 auto' }}>{row.display}</span>
      </div>
      <span style={{ fontSize: 14.5, color: 'var(--ink-600)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.label}</span>
    </div>
  );
}

function BarRow({ row }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 8 }}>
        <span style={{ fontSize: 17, color: 'var(--ink-700)', flex: '1 1 auto', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.label}</span>
        <span style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink-800)', flex: '0 0 auto', whiteSpace: 'nowrap' }}>{row.display}</span>
      </div>
      <div style={{ height: 12, borderRadius: 999, background: 'rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        <div style={{ height: '100%', borderRadius: 999, background: row.color, width: row.pctStyle }} />
      </div>
    </div>
  );
}

export default function ReportSlideMobile({
  userName, todayDisplay, netDisplay, grossDisplay, pctCareDisplay, pctWorkDisplay, workHoursDisplay,
  slideGrossRows, slideComparisonRows,
  hasAnyOverlap, anyOverlapDisplay,
  monthlyDisplay, annualDisplay, monthlyHoursDisplay, annualHoursDisplay, simileText,
}) {
  return (
    <div
      style={{
        width: SLIDE_W,
        minHeight: SLIDE_H,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(175deg, var(--peach) 0%, var(--lavender-strong) 45%, var(--peach) 100%)',
        fontFamily: 'var(--font-sans)',
        color: 'var(--ink-800)',
        boxSizing: 'border-box',
        padding: '72px 56px',
        display: 'flex',
        flexDirection: 'column',
        gap: 26,
      }}
    >
      <span style={{ position: 'absolute', top: -150, left: -130, width: 520, height: 520, borderRadius: '50%', background: 'var(--peach)', opacity: 0.55 }} />

      {/* header */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <LogoBadge size={48} />
          <span style={{ fontWeight: 700, fontSize: 24, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink-700)' }}>Cuida</span>
        </div>
        <span style={{ fontWeight: 600, fontSize: 17, color: 'var(--ink-600)', background: 'rgba(255,255,255,0.6)', padding: '10px 20px', borderRadius: 999, whiteSpace: 'nowrap' }}>
          {todayDisplay}
        </span>
      </div>

      {/* headline */}
      <div style={{ position: 'relative' }}>
        <span style={{ fontWeight: 700, fontSize: 18, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink-600)' }}>
          Resultados de {userName}
        </span>
        <h1 style={{ margin: '10px 0 0', fontWeight: 700, fontSize: 44, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--ink-800)', display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
          Hoy dediqué <InlinePill display={netDisplay} background="var(--ink-800)" color="var(--lime-300)" /> a mi cuidado y al de otras personas
        </h1>
        <p style={{ margin: '14px 0 0', fontSize: 20, color: 'var(--ink-700)' }}>Un trabajo esencial que sostiene la vida, aunque pocas veces se reconoce.</p>
      </div>

      {/* stat grid 2x2 */}
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <StatTile icon="Clock" iconBg="var(--lime-300)" label="Tiempo en el que cuidas" value={grossDisplay} />
        <StatTile icon="Heart" iconBg="var(--lavender-strong)" label="Del día, al cuidado" value={pctCareDisplay} />
        <StatTile icon="Clock" iconBg="var(--ink-300)" label="Trabajo remunerado" value={workHoursDisplay} />
        <StatTile icon="Briefcase" iconBg="var(--peach)" label="Al trabajo remunerado" value={pctWorkDisplay} />
      </div>

      {/* desglose por actividad */}
      <div style={{ position: 'relative', background: 'rgba(255,255,255,0.4)', borderRadius: 24, padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ fontWeight: 700, fontSize: 24, color: 'var(--ink-800)' }}>Así repartiste tu tiempo de cuidado</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {slideGrossRows.map((row) => <CategoryTile key={row.key || row.label} row={row} />)}
        </div>
      </div>

      {/* comparación + solapamiento */}
      <div style={{ position: 'relative', background: 'rgba(255,255,255,0.62)', borderRadius: 24, padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 22, color: 'var(--ink-800)' }}>¿Cómo se distribuye tu tiempo de cuidado frente al de otras personas?</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {slideComparisonRows.map((row) => <BarRow key={row.label} row={row} />)}
        </div>
        <div style={{ height: 1, background: 'rgba(0,0,0,0.12)' }} />
        {hasAnyOverlap ? (
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 18, color: 'var(--ink-800)' }}><strong>{anyOverlapDisplay}</strong> de cuidado ocurrió al mismo tiempo que otra actividad</div>
          </div>
        ) : (
          <div style={{ fontSize: 16, color: 'var(--ink-600)' }}>Ninguna hora de cuidado se solapó con otra actividad.</div>
        )}
      </div>

      {/* valor del tiempo */}
      <div style={{ position: 'relative', background: 'var(--ink-800)', borderRadius: 24, padding: '30px 28px', display: 'flex', flexDirection: 'column', gap: 16, color: 'var(--lime-300)' }}>
        <div style={{ fontWeight: 700, fontSize: 16, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.85 }}>Lo que vale tu tiempo</div>
        <div style={{ display: 'flex', gap: 40 }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 15, opacity: 0.75, whiteSpace: 'nowrap' }}>Al mes</div>
            <div style={{ fontWeight: 700, fontSize: 32, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{monthlyDisplay}</div>
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 15, opacity: 0.75, whiteSpace: 'nowrap' }}>Al año</div>
            <div style={{ fontWeight: 700, fontSize: 32, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{annualDisplay}</div>
          </div>
        </div>
        <div style={{ height: 1, background: 'rgba(252,253,118,0.25)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ fontSize: 16, opacity: 0.75, whiteSpace: 'nowrap' }}>Si esto se repite, al mes</span>
          <span style={{ fontWeight: 600, fontSize: 19, whiteSpace: 'nowrap', flex: '0 0 auto' }}>{monthlyHoursDisplay}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ fontSize: 16, opacity: 0.75, whiteSpace: 'nowrap' }}>Si esto se repite, al año</span>
          <span style={{ fontWeight: 600, fontSize: 19, whiteSpace: 'nowrap', flex: '0 0 auto' }}>{annualHoursDisplay}</span>
        </div>
        <div style={{ fontSize: 15, lineHeight: 1.4, opacity: 0.85 }}>{simileText}</div>
      </div>

      {/* footer */}
      <p style={{ position: 'relative', margin: 0, fontSize: 14.5, color: 'var(--ink-600)', lineHeight: 1.4 }}>
        Ejercicio de reflexión personal, no una medición exacta. Proyección de valor a partir de horas netas × $10.714/hora. No representa un ingreso real ni un aporte reconocido.
      </p>
    </div>
  );
}
