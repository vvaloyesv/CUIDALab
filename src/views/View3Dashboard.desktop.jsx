import { useRef, useState } from 'react';
import Icon from '../components/ds/Icon';
import Button from '../components/ds/Button';
import Card from '../components/ds/Card';
import StatCard from '../components/ds/StatCard';
import HeroNumber from '../components/ds/HeroNumber';
import ReportSlide from '../components/ReportSlide';

function BarRow({ row }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-body)' }}>{row.label}</span>
        <span style={{ font: 'var(--type-label)', color: 'var(--ink-800)' }}>{row.display}</span>
      </div>
      <div style={{ height: 8, borderRadius: 999, background: 'var(--ink-150)', overflow: 'hidden' }}>
        <div style={{ height: '100%', borderRadius: 999, background: row.color, width: row.pctStyle }} />
      </div>
    </div>
  );
}

export default function View3DashboardDesktop({ cuido }) {
  const {
    state, grossRows, grossDisplay, netDisplay, pctCareDisplay, pctWorkDisplay,
    comparisonRows, hasOverlap, overlapDisplay, hasDoubleJornada, doubleJornadaDisplay,
    monthlyHoursDisplay, annualHoursDisplay, simileText, monthlyDisplay, annualDisplay,
    userName, todayDisplay, workHoursDisplay, slideGrossRows, slideComparisonRows, jornadaInsight,
    backToV1, reset,
  } = cuido;

  const reportRef = useRef(null);
  const [exportStatus, setExportStatus] = useState('idle');

  const handleDownload = async () => {
    if (!reportRef.current) return;
    setExportStatus('exporting');
    try {
      const { toPng } = await import('html-to-image');
      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Tiempo de espera agotado generando la imagen')), 15000));
      const dataUrl = await Promise.race([
        toPng(reportRef.current, { pixelRatio: 3, cacheBust: true, skipFonts: true }),
        timeout,
      ]);
      const link = document.createElement('a');
      const safeName = (state.name || 'resultado').trim().toLowerCase().replace(/\s+/g, '-');
      link.download = `cuido-${safeName}.png`;
      link.href = dataUrl;
      link.click();
      setExportStatus('idle');
    } catch (e) {
      console.error('No se pudo generar la imagen del reporte:', e);
      setExportStatus('error');
    }
  };

  return (
    <div style={{ padding: '40px 0 100px', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ position: 'fixed', top: 0, left: -100000, pointerEvents: 'none' }} aria-hidden="true">
        <div ref={reportRef}>
          <ReportSlide
            userName={userName}
            todayDisplay={todayDisplay}
            netDisplay={netDisplay}
            grossDisplay={grossDisplay}
            pctCareDisplay={pctCareDisplay}
            pctWorkDisplay={pctWorkDisplay}
            workHoursDisplay={workHoursDisplay}
            slideGrossRows={slideGrossRows}
            slideComparisonRows={slideComparisonRows}
            hasOverlap={hasOverlap}
            overlapDisplay={overlapDisplay}
            jornadaInsight={jornadaInsight}
            monthlyDisplay={monthlyDisplay}
            annualDisplay={annualDisplay}
            monthlyHoursDisplay={monthlyHoursDisplay}
            annualHoursDisplay={annualHoursDisplay}
            simileText={simileText}
          />
        </div>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-dusk)', borderRadius: 'var(--radius-xl)', padding: '44px 48px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 32 }}>
        <span style={{ position: 'absolute', top: -36, left: -30, width: 180, height: 180, borderRadius: '50%', background: 'var(--lime-300)', opacity: 0.35, filter: 'blur(10px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <span style={{ font: 'var(--type-eyebrow)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--ink-600)' }}>Resultados de {state.name}</span>
          <h1 style={{ font: 'var(--type-h1)', fontSize: 'var(--text-3xl)', letterSpacing: 'var(--tracking-tight)', color: 'var(--ink-800)', margin: '4px 0 0' }}>Hoy dedicaste</h1>
          <p style={{ font: 'var(--type-body)', color: 'var(--ink-700)', margin: '10px 0 0', maxWidth: 480 }}>
            a tu cuidado y al de otras personas. Un trabajo esencial que sostiene la vida, aunque pocas veces se reconoce.
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          <HeroNumber display={netDisplay} size={140} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 20, alignItems: 'stretch' }}>
        <Card padding="lg">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ font: 'var(--type-h4)', color: 'var(--ink-800)' }}>Así repartiste tu tiempo de cuidado, actividad por actividad.</div>
            {grossRows.map((row) => <BarRow key={row.key} row={row} />)}
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <StatCard title="Tiempo total en el que cuidas" value={grossDisplay} />
            <StatCard title="Tiempo neto en el que cuidas" value={netDisplay} tone="lime" />
            <StatCard title="Del día, dedicas al cuidado" value={pctCareDisplay} />
            <StatCard title="Del día, al trabajo remunerado" value={pctWorkDisplay} />
          </div>

          <Card tone="sunken" padding="md" style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {hasOverlap ? (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon n="GitMerge" s={17} />
                    <span style={{ font: 'var(--type-label)', color: 'var(--ink-800)' }}>{overlapDisplay} de cuidado ocurrió al mismo tiempo que otra actividad</span>
                  </div>
                  <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: 0 }}>Una misma hora puede contener más de una tarea de cuidado. Cocinar, acompañar o hacer compras suelen suceder al mismo tiempo. Por eso, algunas horas se cuentan más de una vez.</p>
                </>
              ) : (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon n="CheckCircle2" s={17} />
                    <span style={{ font: 'var(--type-label)', color: 'var(--ink-800)' }}>Ninguna de tus horas se solapó</span>
                  </div>
                  <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: 0 }}>Cada hora de cuidado tuvo tu atención completa, una por una — y aun así suman {netDisplay}.</p>
                </>
              )}
            </div>
          </Card>

          <Card padding="md" style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--ink-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
                <Icon n="Layers" s={20} />
              </span>
              {hasDoubleJornada ? (
                <div>
                  <div style={{ font: 'var(--type-label)', color: 'var(--ink-800)' }}>Doble jornada</div>
                  <div style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>{doubleJornadaDisplay} cuidaste y trabajaste al mismo tiempo. Dos jornadas, un solo cuerpo.</div>
                </div>
              ) : (
                <div>
                  <div style={{ font: 'var(--type-label)', color: 'var(--ink-800)' }}>Sin doble jornada hoy</div>
                  <div style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>Tu trabajo remunerado y tu cuidado no se cruzaron — pero {grossDisplay} de cuidado siguen sin estar en ninguna nómina.</div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>

      <Card padding="lg">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ font: 'var(--type-h4)', color: 'var(--ink-800)' }}>¿Cómo se distribuye tu tiempo de cuidado frente al de otras personas?</div>
          {comparisonRows.map((row) => <BarRow key={row.label} row={row} />)}
          <p style={{ font: 'var(--type-body-sm)', fontSize: 11, color: 'var(--text-muted)', margin: 0 }}>
            Promedios nacionales de horas de cuidado no remunerado por día, según encuesta de uso del tiempo (mujeres 7 h 35 min, hombres 3 h 14 min).
          </p>
        </div>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'stretch' }}>
        <Card padding="lg">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ font: 'var(--type-h4)', color: 'var(--ink-800)' }}>Si esto se repite cada día</div>
            <div style={{ display: 'flex', gap: 32 }}>
              <div>
                <div style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>Al mes</div>
                <div style={{ font: 'var(--type-h2)', fontSize: 'var(--text-2xl)', letterSpacing: 'var(--tracking-tight)', color: 'var(--ink-800)' }}>{monthlyHoursDisplay}</div>
              </div>
              <div>
                <div style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>Al año</div>
                <div style={{ font: 'var(--type-h2)', fontSize: 'var(--text-2xl)', letterSpacing: 'var(--tracking-tight)', color: 'var(--ink-800)' }}>{annualHoursDisplay}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)', padding: '12px 14px' }}>
              <Icon n="CalendarClock" s={16} />
              <span style={{ font: 'var(--type-body-sm)', color: 'var(--ink-700)' }}>{simileText}</span>
            </div>
          </div>
        </Card>

        <Card tone="lime" padding="lg">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Icon n="HandCoins" s={24} />
              <span style={{ font: 'var(--type-eyebrow)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', opacity: 0.65 }}>Lo que vale tu tiempo</span>
            </div>
            <div style={{ display: 'flex', gap: 32 }}>
              <div>
                <div style={{ font: 'var(--type-body-sm)', opacity: 0.7 }}>Al mes</div>
                <div style={{ font: 'var(--type-h2)', fontSize: 'var(--text-3xl)', letterSpacing: 'var(--tracking-tight)' }}>{monthlyDisplay}</div>
              </div>
              <div>
                <div style={{ font: 'var(--type-body-sm)', opacity: 0.7 }}>Al año</div>
                <div style={{ font: 'var(--type-h2)', fontSize: 'var(--text-3xl)', letterSpacing: 'var(--tracking-tight)' }}>{annualDisplay}</div>
              </div>
            </div>
            <p style={{ font: 'var(--type-body-sm)', fontSize: 11, opacity: 0.65, margin: 0 }}>
              Proyección condicional a partir de tus horas netas × $10.714/hora. No representa un ingreso real ni un aporte reconocido.
            </p>
          </div>
        </Card>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="outline" onClick={backToV1} style={{ height: 46 }}>Editar horas</Button>
          <Button variant="ghost" onClick={reset} style={{ height: 46 }}>Reiniciar ejercicio</Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
          <Button
            variant="secondary"
            iconLeft={<Icon n="Download" s={18} />}
            onClick={handleDownload}
            disabled={exportStatus === 'exporting'}
            style={{ height: 48, minWidth: 220 }}
          >
            {exportStatus === 'exporting' ? 'Generando imagen…' : 'Descargar reporte'}
          </Button>
          {exportStatus === 'error' && (
            <span style={{ font: 'var(--type-body-sm)', fontSize: 'var(--text-xs)', color: 'var(--danger)' }}>
              No pudimos generar la imagen. Inténtalo de nuevo.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
