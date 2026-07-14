# Roadmap: Simulador de trabajo de cuidado no remunerado
Fecha: 12 de julio de 2026

## La idea en una frase
Herramienta web/móvil que permite a una persona declarar sus horas de cuidado no remunerado en un día típico, ubicarlas en una matriz horaria que detecta el solapamiento automáticamente, y ver un dashboard con horas brutas, horas netas y su equivalente monetario — lanzada primero como instancia pública de autorreflexión, con miras a integrarse después al backend institucional de la Fundación WWB Colombia.

## La acción core
Declarar horas por categoría (vista 1) y ubicarlas en la matriz horaria (vista 2), para que el sistema calcule el solapamiento sin que la persona tenga que estimarlo. Sin esta acción no hay horas brutas, netas ni monetización — todo el resto de la herramienta existe para sostener o comunicar el resultado de este paso.

## Fase 1 — Lanzamiento (instancia pública, sin backend institucional)

| # | Feature | Por qué va primero | Depende de |
|---|---------|--------------------|------------|
| 1 | Vista 1 — registro de horas por las 7 categorías DANE + categoría 8 (trabajo/negocio), con la mecánica diferenciada (diario vs. semanal para voluntariado, conversión a equivalente diario) y el disclaimer de reflexión, no exactitud estadística | Es el punto de entrada de la acción core: sin estas horas declaradas no hay nada que ubicar en la matriz | — |
| 2 | Vista 2 — matriz de 24 horas × actividades marcadas, con la restricción de horas exactas por columna, visibilidad de horas ya ocupadas por actividades previas, y posibilidad de regresar a la vista 1 a recalibrar sin perder lo ya marcado | Es la acción core en sí misma: donde se resuelve el solapamiento sin preguntárselo directamente a la persona | #1 |
| 3 | Vista 3 — dashboard con horas brutas por categoría, horas netas únicas, el puente visual de solapamiento, el bloque separado de doble jornada (trabajo/negocio) y la monetización mensual/anual con su disclaimer explícito | Es donde la persona recibe el valor de haber declarado y ubicado sus horas — cierra el ciclo de reflexión | #2 |

**Nota sobre alcance:** esta Fase 1 corresponde a la instancia pública y anónima, tal como se decidió — no incluye login, identificación ni persistencia en un backend institucional. El resultado se calcula y se muestra en la sesión; no se pierde nada porque no hay nada que persistir todavía en esta fase.

## Fase 2 — Mejora

- **Persistencia anónima de resultados en la instancia pública** (backend sin ningún campo identificador), para que los datos no se pierdan al cerrar la sesión y quede sentada la base técnica para una eventual agregación de datos con fines de investigación — sin mezclarse nunca con el backend institucional.
- **Ajustes de interacción de la matriz de 24 filas en móvil**, basados en el uso real de la Fase 1 (se decidió no bloquear el lanzamiento con esta validación, sino observar el comportamiento real y ajustar después).
- **Indicadores adicionales del dashboard** más allá de horas y monetización, a definir con base en lo que las primeras usuarias encuentren útil o insuficiente.

## Backlog

- **Instancia institucional completa** (con identificación de beneficiarias por tipo y número de documento o verificación de celular, y envío de resultados a ese número). Se decidió explícitamente esperar a que el mecanismo de identificación quede definido a nivel técnico antes de tocar cualquier parte de este backend — no es una omisión, es una dependencia real que aún no existe.
- **Unión de los datos de la instancia institucional con los diagnósticos de la Fundación**, sustituyendo preguntas de los instrumentos de medición actuales. Depende de que la instancia institucional exista primero.
- **Diseño visual y de interacción definitivo de las tres pantallas.** No es una feature nueva sino una capa de pulido transversal a las Fases 1 y 2; se recomienda no tratarlo como bloqueante del lanzamiento de la Fase 1.

## Siguiente paso
Convertir la Fase 1 en spec con /crear-specs, usando este roadmap como contexto.
