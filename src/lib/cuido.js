export const CARE_CATEGORIES = [
  { key: 'oficios_hogar', label: 'Oficios del hogar', icon: 'House', color: 'var(--cyan)', unit: 'daily', max: 16 },
  { key: 'alimentacion', label: 'Alimentación', icon: 'CookingPot', color: 'var(--peach)', unit: 'daily', max: 16 },
  { key: 'ropa_calzado', label: 'Ropa y calzado', icon: 'Shirt', color: 'var(--sky)', unit: 'daily', max: 12 },
  { key: 'compras_traslados', label: 'Compras y traslados', icon: 'ShoppingBag', color: 'var(--mint)', unit: 'daily', max: 12 },
  { key: 'cuidado_menores', label: 'Cuidado de menores de 5 años', icon: 'Baby', color: 'var(--lavender)', unit: 'daily', max: 20 },
  { key: 'cuidado_enfermos', label: 'Cuidado a personas enfermas o con discapacidad', icon: 'HeartHandshake', color: 'var(--lavender-strong)', unit: 'daily', max: 20 },
  { key: 'voluntariado', label: 'Voluntariado', icon: 'HandHeart', color: 'var(--lime-200)', unit: 'weekly', max: 40 },
];

export const TRABAJO = { key: 'trabajo', label: 'Trabajo o negocio', icon: 'Briefcase', color: 'var(--ink-300)', unit: 'daily', max: 16 };

export const RATE_HOUR = 10714;
export const STORAGE_KEY = 'cuido-reflexion-v1';
export const NATIONAL_AVG_DAILY = { mujeres: 7 + 35 / 60, hombres: 3 + 14 / 60 };

export function defaultHours() {
  const o = {};
  CARE_CATEGORIES.forEach((c) => { o[c.key] = 0; });
  o[TRABAJO.key] = 0;
  return o;
}

export function dailyHoursFor(cat, raw) {
  return cat.unit === 'weekly' ? raw / 7 : raw;
}

export function fmtHours(n) {
  const r = Math.round(n * 10) / 10;
  return r.toString().replace('.', ',') + ' h';
}

export function fmtCOP(n) {
  return '$' + Math.round(n).toLocaleString('es-CO');
}

export function pad2(n) {
  return String(n).padStart(2, '0');
}

export function fmt12(h) {
  const period = h < 12 ? 'am' : 'pm';
  let hr = h % 12;
  if (hr === 0) hr = 12;
  return { hr, period };
}
