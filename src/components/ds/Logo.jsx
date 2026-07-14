// Marca de Cuida: espiral que remata en una copa con raíces abajo —
// cuidado continuo que también sostiene y da estabilidad.
export default function Logo({ size = 20, color = 'var(--lime-300)', strokeWidth = 8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M50 30 m 0 -14 a 14 14 0 0 1 0 28 a 9 9 0 0 1 0 -18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
      <path d="M50 40 L50 58 M50 58 L32 84 M50 58 L50 88 M50 58 L68 84" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
    </svg>
  );
}
