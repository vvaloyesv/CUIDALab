// Handjet es una fuente de ancho fijo (tipo LED): un espacio " " ocupa una celda
// completa, así que "2 h" en Handjet deja un salto enorme entre el número y la
// unidad. Se separan en dos <span> con su propio tipo de letra y gap controlado.
export default function HeroNumber({ display, size, style = {} }) {
  const idx = display.lastIndexOf(' ');
  const num = idx === -1 ? display : display.slice(0, idx);
  const unit = idx === -1 ? '' : display.slice(idx + 1);
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: size * 0.09, ...style }}>
      <span style={{ fontFamily: "'Handjet', monospace", fontWeight: 700, fontSize: size, lineHeight: 1, color: 'var(--ink-800)' }}>{num}</span>
      {unit && (
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: size * 0.26, opacity: 0.75, color: 'var(--ink-800)' }}>{unit}</span>
      )}
    </div>
  );
}
