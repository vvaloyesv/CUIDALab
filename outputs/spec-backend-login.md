# Spec: Backend, login opcional y reporte descargable — Simulador de trabajo de cuidado no remunerado
Fecha: 13 de julio de 2026

## Overview
Extensión de la instancia pública del simulador (spec de Fase 1) para que los resultados del ejercicio se guarden en una base de datos, en vez de vivir solo en la sesión del navegador. La persona elige, antes de empezar, si quiere hacer el ejercicio de forma anónima (como hoy) o iniciando sesión con su cuenta de Google para asociar el resultado a su cuenta. Además, desde el dashboard (vista 3) puede descargar una imagen PNG de su resultado, con el mismo diseño que ve en pantalla.

Esto amplía lo que el roadmap había dejado para una Fase 2 como "persistencia anónima sin campos identificadores" — aquí se agrega, además, la opción de una identidad (Google) para quien la quiera, sin quitarle a nadie la opción de seguir siendo anónimo.

## Usuarios objetivo
Las mismas personas de la instancia pública del spec de Fase 1: personas externas a la Fundación que usan el simulador para autorreflexión personal. Hoy pierden su resultado en cuanto cierran la pestaña y no tienen forma de conservarlo ni de mostrarlo a alguien más (por ejemplo, guardarlo para releerlo o compartirlo).

## Alcance

### La v1 SÍ hace
1. **Pantalla de elección antes de empezar**: al entrar a la herramienta, antes de la vista 1, la persona elige entre "continuar sin cuenta" (anónimo, como en la Fase 1) o "iniciar sesión con Google". Esta elección se hace una sola vez, al inicio.
2. **Login con Google**: si elige iniciar sesión, se autentica con su cuenta de Google. A partir de ahí, su resultado queda asociado a esa cuenta en la base de datos.
3. **Captura y persistencia de datos**: al completar el ejercicio, se guarda en la base de datos el detalle completo — las horas declaradas por categoría (vista 1) y la matriz completa de solapamiento (vista 2) —, asociado a la cuenta si inició sesión, o sin ningún campo identificador si eligió continuar como anónimo.
4. **Descarga de reporte en PNG**: desde la vista 3, un botón permite descargar una imagen PNG del dashboard, visualmente igual a como se ve en pantalla (mismas horas brutas, netas, puente de solapamiento, dato de doble jornada y monetización).
5. **Continuidad de sesión**: se mantiene el mismo requisito del spec de Fase 1 — si la persona recarga por accidente antes de terminar, no pierde su progreso, sin importar si eligió el modo anónimo o el modo con cuenta.

### La v1 NO hace
- No permite cambiar de modo a mitad del ejercicio: la elección de anónimo o con cuenta se hace una sola vez, al principio. Si alguien quiere cambiar de modo, debe empezar el ejercicio de nuevo.
- No muestra historial de ejercicios anteriores, aunque la cuenta tenga varios resultados guardados en la base de datos. Cada sesión solo muestra el resultado que la persona acaba de completar.
- No conecta estos datos, ni los de las cuentas con Google, con el backend institucional de la Fundación ni con las beneficiarias identificadas por documento o celular. Esa instancia institucional sigue pendiente de definición y es un flujo completamente separado.
- No ofrece el reporte en otros formatos (por ejemplo PDF) en esta fase.
- No incluye ninguna forma de que la persona borre o exporte sus datos desde la propia herramienta (gestión de cuenta más allá del login).

## Comportamiento esperado
1. La persona entra a la herramienta y, antes de ver la vista 1, se le presentan dos opciones: "continuar sin cuenta" o "iniciar sesión con Google".
2. Si elige continuar sin cuenta, sigue exactamente el flujo del spec de Fase 1 (vista 1 → vista 2 → vista 3), y su resultado se guarda en la base de datos sin ningún dato identificador.
3. Si elige iniciar sesión, se autentica con Google. Si el login es exitoso, continúa con el mismo flujo (vista 1 → vista 2 → vista 3), y su resultado queda asociado a su cuenta.
4. Al llegar a la vista 3, además de ver su dashboard, tiene un botón para descargar un PNG con ese mismo resultado.
5. Si recarga la página por accidente en cualquier punto del ejercicio, retoma donde iba, sin perder lo ya avanzado, sin importar el modo elegido.

## Errores y seguridad
- **Falla el login con Google** (la persona rechaza el permiso, hay un error de conexión, etc.): se le muestra un mensaje claro y puede reintentar el login o cambiar a la opción de continuar sin cuenta.
- **La sesión de Google se vence o se pierde a mitad del ejercicio**: la persona no debe perder su progreso; se le puede pedir que reautentique sin que eso borre lo que ya llevaba avanzado en la sesión.
- **Falla la generación del PNG**: la persona puede reintentar la descarga sin que eso afecte ni recalcule su resultado, que ya quedó calculado en pantalla.
- **Datos personales**: para quienes inician sesión con Google, se captura al menos el correo (u otro identificador que Google provea) para asociar el resultado a la cuenta. Este dato nunca se une con el backend institucional de la Fundación ni con los diagnósticos de las beneficiarias — sigue siendo un flujo aparte.
- **Modo anónimo**: se mantiene la misma garantía del spec de Fase 1 — ningún campo identificador se captura ni se guarda para quienes eligen este modo.

## Éxito
Se mide igual que en la Fase 1 — la persona completa las tres vistas y llega a su dashboard —, y se agrega como señal adicional cuántas personas descargan el reporte en PNG al terminar. No se prioriza en esta fase medir cuántas personas eligen el modo con cuenta frente al anónimo, aunque ese dato queda disponible en la base para revisarlo más adelante.

## V2 (opcional)
- Historial de ejercicios anteriores para quienes tienen cuenta.
- Posibilidad de vincular el progreso anónimo a una cuenta si la persona decide iniciar sesión después de haber empezado.
- Reporte descargable en otros formatos (por ejemplo PDF).
- Gestión de cuenta: ver, exportar o borrar los propios datos.
