import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  CARE_CATEGORIES, TRABAJO, RATE_HOUR, STORAGE_KEY, NATIONAL_AVG_DAILY,
  defaultHours, dailyHoursFor, fmtHours, fmtCOP, pad2, fmt12,
} from '../lib/cuido';
import { supabase } from '../lib/supabaseClient';

function loadInitialState() {
  const base = { view: 'v1', name: '', hours: defaultHours(), matrix: {}, activeIndex: 0 };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const parsed = JSON.parse(raw);
    return {
      name: parsed.name || '',
      hours: { ...defaultHours(), ...(parsed.hours || {}) },
      matrix: parsed.matrix || {},
      view: parsed.view || 'v1',
      activeIndex: parsed.activeIndex || 0,
    };
  } catch (e) {
    return base;
  }
}

export function useCuido() {
  const [state, setState] = useState(loadInitialState);
  const [limitMsg, setLimitMsg] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }, [state]);

  const sequence = useCallback(
    () => [...CARE_CATEGORIES, TRABAJO].filter((c) => (state.hours[c.key] || 0) > 0),
    [state.hours],
  );

  const targetFor = useCallback((cat) => {
    const raw = state.hours[cat.key] || 0;
    const daily = dailyHoursFor(cat, raw);
    return Math.max(0, Math.min(24, Math.round(daily)));
  }, [state.hours]);

  const setName = (name) => {
    setState((s) => ({ ...s, name }));
  };

  const setHour = (key, val) => {
    setState((s) => ({ ...s, hours: { ...s.hours, [key]: val } }));
  };

  const stepHour = (key, max, delta) => {
    setState((s) => {
      const next = Math.max(0, Math.min(max, (s.hours[key] || 0) + delta));
      return { ...s, hours: { ...s.hours, [key]: next } };
    });
  };

  const toggleHour = (h) => {
    const seq = sequence();
    const current = seq[state.activeIndex];
    if (!current) return;
    const target = targetFor(current);
    let message = null;
    setState((s) => {
      const arr = new Set(s.matrix[current.key] || []);
      if (arr.has(h)) {
        arr.delete(h);
        return { ...s, matrix: { ...s.matrix, [current.key]: Array.from(arr).sort((a, b) => a - b) } };
      }
      if (arr.size >= target) {
        message = `Ya ubicaste tus ${target} horas de ${current.label}. Quita una para mover otra.`;
        return s;
      }
      arr.add(h);
      return { ...s, matrix: { ...s.matrix, [current.key]: Array.from(arr).sort((a, b) => a - b) } };
    });
    setLimitMsg(message);
  };

  const startMatrix = () => {
    const seq = sequence();
    setState((s) => ({ ...s, view: seq.length ? 'v2' : 'v3', activeIndex: 0 }));
    setLimitMsg(null);
  };

  const backToV1 = () => {
    setState((s) => ({ ...s, view: 'v1' }));
  };

  const goPrev = () => {
    if (state.activeIndex > 0) {
      setState((s) => ({ ...s, activeIndex: s.activeIndex - 1 }));
    }
    setLimitMsg(null);
  };

  const goNext = () => {
    const seq = sequence();
    const current = seq[state.activeIndex];
    if (!current) return;
    const target = targetFor(current);
    const placed = (state.matrix[current.key] || []).length;
    if (placed < target) return;
    const nextIdx = state.activeIndex + 1;
    if (nextIdx >= seq.length) {
      setState((s) => ({ ...s, view: 'v3' }));
    } else {
      setState((s) => ({ ...s, activeIndex: nextIdx }));
      setLimitMsg(null);
    }
  };

  const reset = () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    setState({ view: 'v1', name: '', hours: defaultHours(), matrix: {}, activeIndex: 0 });
    setLimitMsg(null);
    savedRef.current = false;
  };

  const buildHourCells = (current, target) => {
    const seq = sequence();
    const selected = new Set(state.matrix[current.key] || []);
    const limitReached = selected.size >= target;
    const cells = [];
    for (let h = 0; h < 24; h++) {
      let occupiedBy = null;
      for (const c of seq) {
        if (c.key === current.key) continue;
        if ((state.matrix[c.key] || []).includes(h)) { occupiedBy = c; break; }
      }
      const isSelected = selected.has(h);
      let background, border, color, statusLabel;
      if (isSelected && occupiedBy) {
        background = `repeating-linear-gradient(45deg, ${current.color} 0 6px, ${occupiedBy.color} 6px 12px)`;
        border = '2px solid var(--warning)';
        color = 'var(--ink-800)';
        statusLabel = 'Se solapa';
      } else if (isSelected) {
        background = current.color;
        border = '2px solid var(--ink-800)';
        color = 'var(--ink-800)';
        statusLabel = 'Seleccionada';
      } else if (occupiedBy) {
        background = 'var(--ink-200)';
        border = '1px solid var(--border-subtle)';
        color = 'var(--ink-600)';
        statusLabel = 'Ocupada';
      } else {
        background = 'var(--surface-card)';
        border = '1px solid var(--border-subtle)';
        color = 'var(--ink-600)';
        statusLabel = 'Disponible';
      }
      const dimmed = limitReached && !isSelected;
      const start = fmt12(h);
      const end = fmt12((h + 1) % 24);
      cells.push({
        hour: h,
        hourShort: `${start.hr}-${end.hr}${end.period}`,
        fullRangeLabel: `${start.hr}:00 ${start.period}–${end.hr}:00 ${end.period}`,
        statusLabel,
        background, border, color,
        opacity: dimmed ? 0.38 : 1,
        dimmed,
        onClick: () => toggleHour(h),
      });
    }
    return cells;
  };

  const derived = useMemo(() => {
    const seq = sequence();
    const current = seq[state.activeIndex] || null;
    const nameMissing = !state.name || !state.name.trim();
    const v1Disabled = nameMissing || Object.values(state.hours).every((v) => !v);

    let target = 0, placed = 0;
    if (current) {
      target = targetFor(current);
      placed = (state.matrix[current.key] || []).length;
    }

    const grossRows = CARE_CATEGORIES.map((c) => {
      const g = dailyHoursFor(c, state.hours[c.key] || 0);
      return { key: c.key, label: c.label, color: c.color, hours: g };
    });
    const grossTotal = grossRows.reduce((sum, r) => sum + r.hours, 0);
    grossRows.forEach((r) => {
      r.display = fmtHours(r.hours);
      r.pctStyle = (grossTotal ? (r.hours / grossTotal) * 100 : 0) + '%';
    });

    const unionSet = new Set();
    CARE_CATEGORIES.forEach((c) => (state.matrix[c.key] || []).forEach((h) => unionSet.add(h)));
    const netHours = unionSet.size;
    const overlapHours = Math.max(0, grossTotal - netHours);
    const trabajoSet = new Set(state.matrix[TRABAJO.key] || []);
    const doubleJornada = [...unionSet].filter((h) => trabajoSet.has(h)).length;

    // Horas donde 2+ actividades marcadas (incluye trabajo) coinciden — el total
    // que respalda el mensaje de solapamiento, sin desglose por par de actividad.
    let anyOverlapHours = 0;
    for (let h = 0; h < 24; h++) {
      const activeAtHour = seq.filter((c) => (state.matrix[c.key] || []).includes(h));
      if (activeAtHour.length >= 2) anyOverlapHours++;
    }

    const monthly = netHours * RATE_HOUR * 30;
    const annual = netHours * RATE_HOUR * 360;

    const monthlyHours = netHours * 30;
    const annualHours = netHours * 360;
    const annualDays24h = annualHours / 24;
    const workdays8h = annualHours / 8;
    let simileText;
    if (netHours <= 0) {
      simileText = 'Todavía no registraste horas de cuidado sin cruces — vuelve a la matriz para ubicarlas.';
    } else if (annualDays24h >= 1) {
      simileText = `Eso equivale a ${Math.round(annualDays24h)} días completos, sin parar, dedicados solo a cuidar — o a ${Math.round(workdays8h)} jornadas laborales de 8 horas en un año.`;
    } else {
      simileText = `Eso equivale a ${Math.round(workdays8h)} jornadas laborales de 8 horas en un año.`;
    }

    const workDailyHours = dailyHoursFor(TRABAJO, state.hours[TRABAJO.key] || 0);
    const pctCare = Math.round(Math.min(100, (grossTotal / 24) * 100));
    const pctWork = Math.round(Math.min(100, (workDailyHours / 24) * 100));

    const comparisonRows = [
      { label: 'Tú', hours: grossTotal, color: 'var(--lime-300)' },
      { label: 'Mujeres (promedio nacional)', hours: NATIONAL_AVG_DAILY.mujeres, color: 'var(--lavender-strong)' },
      { label: 'Hombres (promedio nacional)', hours: NATIONAL_AVG_DAILY.hombres, color: 'var(--sky)' },
    ];
    const comparisonMax = Math.max(...comparisonRows.map((r) => r.hours), 1);
    comparisonRows.forEach((r) => {
      r.display = fmtHours(r.hours);
      r.pctStyle = (r.hours / comparisonMax) * 100 + '%';
    });

    // Derivados exclusivos para el reporte descargable (no los usan las vistas en pantalla).
    const userName = state.name && state.name.trim() ? state.name.trim() : 'ti';
    const todayDisplay = new Date().toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' });
    const workHoursDisplay = fmtHours(workDailyHours);
    const slideGrossRows = grossRows
      .filter((r) => r.hours > 0)
      .slice()
      .sort((a, b) => b.hours - a.hours)
      .slice(0, 6);
    const slideComparisonRows = comparisonRows.map((r, i) => (i === 0 ? { ...r, label: `Tú (${userName})` } : r));
    const overlapInsight = overlapHours > 0
      ? `${fmtHours(overlapHours)} de cuidado ocurrieron al mismo tiempo que otra actividad.`
      : 'Ninguna hora de cuidado se solapó con otra actividad.';
    return {
      seq, current, v1Disabled, nameMissing, target, placed,
      grossRows, grossTotal,
      netHours, overlapHours, doubleJornada, monthly, annual,
      grossDisplay: fmtHours(grossTotal),
      netDisplay: fmtHours(netHours),
      overlapDisplay: fmtHours(overlapHours),
      doubleJornadaDisplay: fmtHours(doubleJornada),
      monthlyDisplay: fmtCOP(monthly),
      annualDisplay: fmtCOP(annual),
      pctCareDisplay: pctCare + '%',
      pctWorkDisplay: pctWork + '%',
      comparisonRows,
      hasOverlap: overlapHours > 0,
      hasDoubleJornada: doubleJornada > 0,
      anyOverlapHours,
      anyOverlapDisplay: fmtHours(anyOverlapHours),
      hasAnyOverlap: anyOverlapHours > 0,
      monthlyHoursDisplay: fmtHours(monthlyHours),
      annualHoursDisplay: fmtHours(annualHours),
      simileText,
      userName, todayDisplay, workHoursDisplay, slideGrossRows, slideComparisonRows, overlapInsight,
    };
  }, [state, sequence, targetFor]);

  const savedRef = useRef(false);

  useEffect(() => {
    if (state.view !== 'v3') {
      savedRef.current = false;
      return;
    }
    if (savedRef.current) return;
    savedRef.current = true;
    if (!supabase) return;
    supabase.from('results').insert({
      name: state.name.trim(),
      hours: state.hours,
      matrix: state.matrix,
      gross_hours: derived.grossTotal,
      net_hours: derived.netHours,
      overlap_hours: derived.overlapHours,
      double_jornada_hours: derived.doubleJornada,
      monthly_value: derived.monthly,
      annual_value: derived.annual,
    }).then(({ error }) => {
      if (error) console.error('No se pudo guardar el resultado en Supabase:', error.message);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.view]);

  return {
    state,
    limitMsg,
    ...derived,
    setName,
    setHour,
    stepHour,
    toggleHour,
    startMatrix,
    backToV1,
    goPrev,
    goNext,
    reset,
    buildHourCells,
  };
}
