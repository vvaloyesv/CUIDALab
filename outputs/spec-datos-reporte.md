# Spec: Backend, registro de nombre/género y reporte descargable — Simulador de trabajo de cuidado no remunerado
Fecha: 13 de julio de 2026

## Overview
Extensión de la instancia pública del simulador (spec de Fase 1) para que los resultados del ejercicio se guarden en una base de datos, en vez de vivir solo en la sesión del navegador. Ya no hay login ni cuenta de Google, ni pantalla aparte antes de empezar: el nombre se pide como un campo más dentro de la vista 1, junto con el resto del registro de horas. No se captura género. El nombre, además de guardarse en la base de datos, aparece en el dashboard (vista 3), y también en el reporte descargable, que se puede guardar como una imagen en alta resolución con el mismo diseño que se ve en pantalla.

**Nota sobre gobernanza:** el documento de contexto original definía la instancia pública como anónima, "sin ningún campo identificador". Capturar el nombre cambia esa condición — deja de ser una instancia completamente anónima para quien lo escriba. Vale la pena tenerlo presente si más adelante se revisa la gobernanza de datos completa; por ahora este spec documenta la decisión tal como la pediste.

## Usuarios objetivo
Las mismas personas de la instancia pública: personas externas a la Fundación que usan el simulador para autorreflexión personal. Hoy pierden su resultado en cuanto cierran la pestaña; con este cambio, además, quedan registradas por nombre en la base de datos.

## Alcance

### La v1 SÍ hace
1. **Nombre dentro de la vista 1**: el registro de horas de la vista 1 incluye, como un campo más, el nombre de la persona (texto libre). No hay una pantalla separada antes de la vista 1 para esto. El campo es obligatorio para poder continuar.
2. **Captura y persistencia de datos**: al completar el ejercicio, se guarda en la base de datos el nombre, las horas declaradas por categoría (vista 1) y la matriz completa de solapamiento (vista 2).
3. **El nombre aparece en el dashboard**: en la vista 3, el resultado se presenta dirigido a la persona por su nombre (por ejemplo, como encabezado del dashboard).
4. **Descarga de reporte en alta calidad**: desde la vista 3, un botón permite descargar el dashboard —incluyendo el nombre— como una imagen, en una resolución suficientemente alta para conservarse, imprimirse o compartirse sin verse pixelada, y con exactamente el mismo diseño que la persona ve en pantalla (horas brutas, netas, puente de solapamiento, dato de doble jornada y monetización).
5. **Continuidad de sesión**: si la persona recarga por accidente antes de terminar, no pierde su progreso — incluyendo el nombre ya ingresado.

### La v1 NO hace
- No incluye ningún tipo de login ni autenticación.
- No captura género ni ningún otro dato demográfico.
- No ofrece un modo "anónimo" alternativo: el nombre se pide siempre, a todas las personas que usan la herramienta.
- No muestra historial de ejercicios anteriores de la misma persona, aunque queden varios registros suyos guardados en la base de datos por coincidencia de nombre.
- No conecta estos datos con el backend institucional de la Fundación ni con las beneficiarias identificadas por documento o celular. Esa instancia institucional sigue pendiente de definición y es un flujo completamente separado.
- No valida que el nombre ingresado sea real ni intenta verificarlo de ninguna forma.
- No ofrece el reporte en otros formatos (por ejemplo PDF) en esta fase.

## Comportamiento esperado
1. La persona entra a la vista 1 y, junto con el registro de horas por categoría, encuentra el campo para escribir su nombre. No puede avanzar a la vista 2 sin haberlo completado (además de la condición ya existente de marcar al menos una actividad).
2. Continúa con el flujo ya definido en el spec de Fase 1: vista 1 (registro de horas y nombre) → vista 2 (matriz de solapamiento) → vista 3 (dashboard).
3. Al completar el ejercicio, el nombre, las horas por categoría y la matriz de solapamiento quedan guardados en la base de datos.
4. En la vista 3, el dashboard se presenta con el nombre de la persona, y tiene un botón para descargar una imagen en alta resolución de ese mismo resultado, con el nombre incluido.
5. Si recarga la página por accidente en cualquier punto, retoma donde iba —incluyendo el nombre ya ingresado— sin tener que volver a escribirlo.

## Errores y seguridad
- **Nombre en blanco**: no puede avanzar a la vista 2 hasta completarlo. Se le muestra un mensaje pidiéndole que lo complete, igual que ya pasa si no marca ninguna actividad.
- **Falla la generación de la imagen del reporte**: la persona puede reintentar la descarga sin que eso afecte ni recalcule su resultado, que ya quedó calculado en pantalla.
- **Datos personales**: el nombre queda guardado en la base de datos asociado al resultado de ese ejercicio. No se cruza con el backend institucional de la Fundación ni con los diagnósticos de las beneficiarias — sigue siendo un flujo aparte. No se les pide a las personas ningún otro dato personal (género, documento, celular, correo, ubicación).

## Éxito
Se mide igual que en la Fase 1 — la persona completa las tres vistas y llega a su dashboard —, y se agrega como señal adicional cuántas personas descargan el reporte al terminar.

## V2 (opcional)
- Historial de ejercicios de una misma persona (requeriría algún identificador más confiable que el nombre, como correo).
- Reporte descargable en otros formatos (por ejemplo PDF).
- Captura de género u otros datos demográficos, si se decide que aportan valor al análisis.
- Revisión de la gobernanza de datos ahora que la instancia pública deja de ser completamente anónima.
