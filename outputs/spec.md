# Spec: Simulador de trabajo de cuidado no remunerado — Fase 1
Fecha: 12 de julio de 2026

## Overview
Herramienta web/móvil, de instancia pública y anónima, que permite a cualquier persona reflexionar sobre su carga de trabajo de cuidado no remunerado en un día típico. La persona declara cuántas horas dedica a cada actividad de cuidado, las ubica en una matriz horaria que detecta automáticamente cuándo dos actividades ocurren al mismo tiempo, y al final ve un resumen de sus horas y su equivalente monetario. No requiere registro ni login: se completa de principio a fin en una sola sesión.

## Usuarios objetivo
Personas externas a la Fundación WWB Colombia (o beneficiarias, usando la misma instancia pública) que quieren entender mejor cuánto tiempo dedican al cuidado no remunerado. Hoy este trabajo es invisible: no lo cuentan en horas, no lo comparan con otras actividades, y no tienen forma de ver cuánto de ese tiempo se solapa con otras tareas (por ejemplo, cuidar mientras se trabaja). La herramienta no reemplaza ninguna medición institucional en esta fase; es un ejercicio de autorreflexión personal.

## Alcance

### La v1 SÍ hace
1. **Vista 1 — registro de horas por actividad**: la persona indica cuántas horas dedica en su día típico a cada una de las 7 categorías de cuidado no remunerado (oficios del hogar, alimentación, ropa y calzado, compras y traslados, cuidado de menores de 5 años, cuidado a personas enfermas o con discapacidad, voluntariado) y, aparte, a la categoría de trabajo/negocio. Todas se preguntan en horas diarias, excepto voluntariado, que se pregunta en horas semanales y se convierte internamente a un equivalente diario. Incluye una explicación breve del propósito de la herramienta y un aviso de que el ejercicio es un punto de referencia para la reflexión, no una medición exacta.
2. **Vista 2 — matriz de solapamiento**: por cada actividad que la persona marcó como realizada (una a la vez, no todas juntas), ubica exactamente esa cantidad de horas en una cuadrícula de 24 horas del día. Al pasar a la siguiente actividad, la cuadrícula muestra qué horas ya están ocupadas por actividades anteriores, para que marcar una hora ya ocupada sea una decisión consciente. La persona puede regresar a la vista 1 a ajustar el número de horas de cualquier actividad sin perder lo que ya marcó en las demás.
3. **Vista 3 — dashboard de resultados**: muestra las horas brutas por categoría (cada actividad cuenta su hora completa, sin descontar solapamiento), las horas netas (el total de horas-reloj distintas del día, contadas una sola vez), y el puente visual entre ambos números para que la diferencia se entienda como solapamiento y no como un error. Muestra aparte, como dato de contexto y no como una categoría más, cuánto de las horas de cuidado ocurrieron al mismo tiempo que trabajo o negocio (doble jornada). Calcula y muestra la monetización mensual y anual de las horas netas ($10.714 por hora × 30 y × 360), presentada como una proyección condicional con un disclaimer explícito de que no es una cifra de aporte real.
4. **Continuidad dentro de una misma sesión**: si la persona recarga la página o cierra y vuelve a abrir la pestaña por accidente antes de terminar, no debe perder el progreso que ya llevaba (horas declaradas y horas ya ubicadas en la matriz), siempre dentro de la misma sesión de uso.

### La v1 NO hace
- No requiere login ni ningún tipo de identificación de la persona.
- No persiste resultados en ningún backend más allá de lo necesario para no perder el progreso dentro de la misma sesión (ver punto 4 de la sección anterior). No hay guardado histórico, ni la posibilidad de recuperar el ejercicio desde otro dispositivo o en otra sesión.
- No valida que la suma de horas de las 8 categorías en la vista 1 sea menor o igual a 24; esa restricción la impone indirectamente la vista 2, al permitir ubicar como máximo las horas que la persona ya declaró por columna dentro de una cuadrícula de 24 horas.
- No se conecta con el backend institucional de la Fundación ni con sus diagnósticos.
- No incluye indicadores adicionales del dashboard más allá de horas (brutas/netas) y monetización mensual/anual.
- No incluye el mecanismo de identificación seudonimizada de beneficiarias (documento o celular): eso pertenece a la instancia institucional, fuera de esta fase.

## Comportamiento esperado
1. La persona entra a la herramienta y ve la vista 1: una pantalla que explica brevemente el propósito del ejercicio y el disclaimer de reflexión, no exactitud.
2. Para cada una de las 8 categorías, indica cuántas horas le dedica en su día típico (semanales en el caso de voluntariado). Puede dejar en cero las que no realiza ese día — ese cero es real y esas categorías no pasan a la vista 2.
3. Debe marcar al menos una actividad con horas mayores a cero para poder avanzar; si intenta continuar sin haber marcado ninguna, la herramienta se lo impide y le pide que registre al menos una.
4. Al terminar la vista 1, pasa a la vista 2. Ve una cuadrícula de 24 horas para la primera actividad que marcó, y debe ubicar en ella exactamente la cantidad de horas que declaró.
5. Pasa a la siguiente actividad marcada, y así sucesivamente. En cada nueva actividad, ve qué horas ya quedaron ocupadas por las actividades anteriores, y decide conscientemente si repite alguna de esas horas (solapamiento) o no.
6. Si en algún punto nota que el número de horas que declaró en la vista 1 no era el correcto, puede volver a esa vista, ajustarlo, y regresar a la vista 2 sin perder lo que ya había marcado en las demás columnas.
7. Al terminar de ubicar todas las actividades en la matriz, pasa a la vista 3: ve sus horas brutas por categoría, sus horas netas totales, el puente visual que explica la diferencia entre ambas, el dato aparte de doble jornada (si marcó trabajo/negocio), y la proyección de monetización mensual y anual con su disclaimer.
8. Si en cualquier momento recarga la página por accidente, retoma exactamente donde iba, sin tener que empezar de nuevo.

## Errores y seguridad
- **Ninguna actividad marcada en la vista 1**: no puede avanzar a la vista 2. La herramienta le muestra un mensaje pidiéndole que registre al menos una actividad con horas mayores a cero antes de continuar.
- **Horas totales de la vista 1 superan las 24 horas del día**: no se valida ni se bloquea en esta vista. La inconsistencia se resuelve naturalmente en la vista 2, porque la persona no tiene forma de ubicar más horas de las que caben en un reloj de 24 horas por columna.
- **Ajuste de horas después de empezar la vista 2**: al regresar a la vista 1 y cambiar un número, la vista 2 debe recalibrarse (ampliar o reducir las horas disponibles para esa columna) sin borrar lo que la persona ya marcó en las demás columnas.
- **Recarga o cierre accidental de la pestaña**: el progreso debe conservarse dentro de la misma sesión (ver punto 4 del alcance). Fuera de esa sesión (por ejemplo, si vuelve al día siguiente desde el mismo dispositivo), no hay obligación de recuperar nada.
- **Datos personales**: la v1 no captura ningún dato identificable de la persona (nombre, documento, celular, ubicación). No hay nada que proteger más allá de lo que la persona ya ve en su propia pantalla.

## Éxito
La Fase 1 se considera exitosa si la persona logra completar las tres vistas de principio a fin y llega a ver su dashboard de resultados (tasa de finalización). Como la vista 1 exige marcar al menos una actividad para avanzar, nadie llega a la vista 2 sin datos que ubicar, ni a la vista 3 con un dashboard vacío — la métrica de finalización pasa a medir cuántas personas completan el ejercicio, no si evitaron un dashboard en cero. No se mide en esta fase si comprendió correctamente la diferencia entre horas brutas y netas, ni se recoge ningún otro indicador de comprensión — eso queda abierto para una fase posterior, una vez haya uso real que observar.

## V2 (opcional)
- Persistencia anónima de resultados en un backend sin campos identificadores, para no depender de la sesión del navegador.
- Ajustes a la interacción de la matriz de 24 filas en móvil, basados en el uso real de la Fase 1.
- Indicadores adicionales del dashboard más allá de horas y monetización.
- Medición de comprensión (por ejemplo, si la persona entendió la diferencia entre horas brutas y netas), si se decide que vale la pena medirlo.
