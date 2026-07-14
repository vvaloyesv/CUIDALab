# Simulador de trabajo de cuidado no remunerado — resumen de proyecto

## Contexto y propósito

Herramienta digital para beneficiarias de una capacitación de la Fundación WWB Colombia, orientada a la autorreflexión sobre su carga de trabajo de cuidado no remunerado. El contenido se conecta con una competencia que la Fundación busca movilizar en su formación: la conciliación con las labores del cuidado.

El uso inmediato es individual y pedagógico, sin fines de medición institucional. Sin embargo, se diseña pensando en un uso futuro donde la herramienta se incorpore de forma recurrente en las sesiones de capacitación y sus datos se unan con los diagnósticos de la Fundación, sustituyendo preguntas que hoy están en los instrumentos de medición. Por esa razón, la lógica de captura y cálculo se construye con rigor metodológico desde el inicio, aunque el lanzamiento inicial sea solo para reflexión individual.

Existe además una instancia pública, separada, para personas externas a la Fundación que quieran usar la herramienta solo con fines de autorreflexión personal.

## Marco de referencia

Valoración económica: una hora de trabajo de cuidado equivale a lo que cuesta una hora laborada con liquidación de prestaciones sociales en Colombia, $10.714 (valor fijo, no ajustado dinámicamente).

Categorías de actividad, tomadas de la clasificación del DANE sobre trabajo de cuidado no remunerado:

1. Oficios del hogar
2. Alimentación
3. Ropa y calzado
4. Compras y traslados
5. Cuidado de menores de 5 años
6. Cuidado a personas enfermas o con discapacidad
7. Voluntariado

Se agrega una octava categoría, **dedicación al trabajo, negocio u otro**, que no pertenece a la clasificación DANE de cuidado no remunerado. Su función es distinta a la de las otras siete: entra a la matriz de la vista 2 para visualizar la doble jornada (cuánto tiempo de cuidado ocurre mientras la persona también trabaja o atiende su negocio), pero no participa en ningún cálculo de horas netas ni en la monetización, que se reservan exclusivamente para las 7 categorías de cuidado no remunerado.

## Decisión metodológica central: cómo se resuelve el solapamiento

El estándar de referencia (ENUT/DANE) resuelve la simultaneidad de actividades con un diario de tiempo por franjas horarias, donde el reloj de 24 horas impide el doble conteo por diseño. Este proyecto adapta esa lógica sin llegar a un diario completo de 24 horas con actividad principal y secundaria, para no sobrecargar la experiencia de una sesión de capacitación.

La solución adoptada: las horas se declaran primero por categoría (vista 1), y luego se ubican en una matriz de horas del día (vista 2), donde el solapamiento se detecta automáticamente cuando dos actividades quedan marcadas en la misma hora. No se le pregunta a la beneficiaria cuánto se solapan sus actividades; la matriz lo calcula a partir de dónde las ubica.

El periodo de referencia es un día típico, no una semana completa. Se decidió así de forma deliberada para no complicar la vista 1 con preguntas de frecuencia semanal. Esto implica aceptar que actividades que no ocurren en el día elegido como típico queden en cero, incluso si la persona sí las realiza en otros días de la semana. Esta limitación se comunica con un disclaimer de que el ejercicio es un punto de referencia para la reflexión, no una medición exacta.

## Vista 1 — Bienvenida y registro inicial

Página pedagógica que explica el propósito de la herramienta como insumo para el reconocimiento y la redistribución del trabajo de cuidado. Incluye el primer registro de horas por actividad, con diseño armónico en web y móvil.

Mecánica de la pregunta según el tipo de actividad:

- Las 6 categorías de ocurrencia diaria (oficios, alimentación, ropa y calzado, compras, cuidado de menores, cuidado a enfermos o con discapacidad): "en tu día típico, ¿cuántas horas diarias dedicas a X actividad?"
- Voluntariado, por no ser de ocurrencia diaria en la mayoría de los casos: se pregunta en horas semanales, y se convierte a un equivalente diario para los cálculos posteriores.

Solo las actividades que la persona marca como realizadas en su día típico pasan a la vista 2. Las que no marca no entran a la matriz de solapamiento; su cero es real, no un artefacto del instrumento.

La octava categoría, trabajo/negocio, sigue la misma lógica de registro de horas diarias y también pasa a la matriz si se marca, pero únicamente con el fin de visualizar solapamiento con las actividades de cuidado; no participa en ningún cálculo posterior de horas netas ni de monetización.

Debe incluirse aquí el disclaimer de que el ejercicio busca reflexión, no exactitud estadística.

## Vista 2 — Matriz de solapamiento

Matriz con 24 filas, una por cada hora del día, y una columna por cada actividad marcada en la vista 1. La beneficiaria diligencia una actividad a la vez, no todas las columnas simultáneamente.

Reglas de la mecánica:

- El número de horas que puede marcar en cada columna está restringido a la cantidad exacta que declaró para esa actividad en la vista 1. Esto obliga a que los dos números sean siempre consistentes entre vistas.
- Al pasar a la segunda actividad y las siguientes, la grilla muestra las horas ya ocupadas por las actividades previas, para que marcar una hora ya ocupada sea una decisión consciente de reconocer simultaneidad, no un accidente de interfaz ni un cálculo silencioso.
- No existe jerarquía ni prioridad entre categorías. Cuando dos actividades coinciden en la misma hora, ambas cuentan su hora completa en el desglose bruto; ninguna le "gana" la hora a la otra.
- Si al diligenciar la matriz la persona nota que la cantidad de horas que declaró en la vista 1 no correspondía con la realidad, puede regresar a esa vista, ajustar el número, y la matriz se recalibra sin perder lo ya marcado en las demás columnas. Esto evita que quede en un callejón sin salida por una restricción demasiado rígida.

## Vista 3 — Dashboard de resumen

Presenta dos capas de información, deliberadamente separadas para no generar la impresión de que hay un error cuando la suma de categorías no coincide con el total:

- **Horas brutas por categoría**: cada actividad marcada cuenta su hora completa, sin descontar el solapamiento. Sirve para que la persona vea con transparencia cuánto tiempo dedicó a cada cosa, incluyendo las horas donde hizo más de una cosa a la vez.
- **Horas netas**: un total único agregado de horas-reloj sin duplicar, que resulta de contar cada hora del día una sola vez sin importar cuántas actividades se marcaron en ella. No se desglosa por categoría, porque no existe una forma no arbitraria de partir una hora solapada entre dos actividades.
- El solapamiento se muestra como el puente visual entre ambos números, para que la diferencia entre bruto y neto se entienda como consecuencia de la simultaneidad y no como un error de cálculo.

La categoría de trabajo/negocio no aparece como una barra más dentro del bloque de las 7 categorías de cuidado, ni en brutas ni en netas. Se muestra separada, como un dato de contexto sobre doble jornada (por ejemplo, "de tus horas de cuidado, X ocurrieron mientras también trabajabas"), dejando claro que no es una categoría de cuidado y que no entra a la suma que se monetiza.

La monetización mensual y anual se calcula multiplicando las horas netas del día típico por $10.714, y luego por 30 y por 360 respectivamente. Se presenta como una proyección condicional ("si tu día típico se repitiera de manera constante, esto equivaldría a...") y no como una cifra de aporte real, acompañada de un disclaimer explícito. Se acepta el riesgo de que esta cifra circule sin su disclaimer fuera de la sesión de capacitación; es una decisión tomada de forma consciente, no un punto ciego.

Las horas de voluntariado, capturadas en base semanal en la vista 1, se convierten a un equivalente diario antes de sumarse al total que se monetiza, para no tratarlas como si ocurrieran todos los días.

Quedan abiertos a definición posterior otros indicadores del dashboard más allá de horas y monetización.

## Gobernanza de datos

- **Beneficiarias de la Fundación**: ya cuentan con consentimiento informado firmado al ingresar a la Fundación, lo que cubre el uso de sus datos en esta herramienta.
- **Personas externas a la Fundación**: instancia pública separada, con datos anónimos que persisten en un backend sin ningún campo identificador. Estos datos nunca se unen con los diagnósticos institucionales ni con el backend de las beneficiarias.
- La identificación de las beneficiarias en el backend institucional se plantea por tipo y número de documento, o por verificación de celular, con posibilidad de enviar los resultados a ese número. Este mecanismo queda pendiente de definición técnica más detallada.

## Puntos pendientes de definición

- Diseño visual y de interacción específico de las tres pantallas.
- Estructura de datos del backend, incluyendo el mecanismo exacto de identificación seudonimizada de las beneficiarias.
- Validación empírica de la carga de diligenciamiento de la matriz de 24 filas en móvil con población real, antes de construir la lógica completa.
- Indicadores adicionales del dashboard más allá de horas y monetización mensual/anual.
