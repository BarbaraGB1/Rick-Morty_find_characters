enunciado.md 12/12/2022
1 / 6
Módulo 3: Ejercicio de evaluación final
Antes de empezar a realiazar el ejercicio, hay que crear un nuevo repositorio desde GitHub Classroom
usando este enlace. Una vez creado, hay que clonarlo en nuestro ordenador y en la carpeta creada
empezaremos a trabajar en el ejercicio.
El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que
podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.
Vamos de definir las distintas partes del ejercicio:

1. Listado de personajes
   En primer lugar, vamos a realizar una web con el listado de personajes de Rick and Morty. Para eso, vamos a
   utilizar el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve
   información sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar al menos:
   Foto
   Nombre
   Especie
   Nota: si hacemos muchísimas peticiones a la hora desde una misma IP a este servicio, es posible que
   nos prohiban el acceso durante un rato. Tenemos una copia del JSON que devuelve este API. Para
   usarla poned en vuestro fetch la dirección
   https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-ymorty.
   json. Pero esto es una solución temporal. Antes de entregar la evaluación debemos volver a
   poner en el fetch la dirección correcta del API.
   Para esta primera parte del ejercicio es suficiente pintar la información sin maquetar.
   enunciado.md 12/12/2022
   2 / 6
2. Filtrado de personajes
   Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos
   por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden
   en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al
   escribir 'Ric' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.
   Nota: en principio no es necesario tener en cuenta si las letras están en mayúscula / minúscula para
   la búsqueda, pero si queréis añadir esta mejora pues genial.
   3 Componentes del listado de personajes
   El listado debe tener los siguientes componentes como mínimo:
   Componente para el filtro de nombre.
   Componente para el listado.
   Componente para la tarjeta de cada personaje del listado.
   Componente para el detalle de cada personaje.
   Como en el ejemplo:
3. Detalle de personajes
   Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su
   información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la
   pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de
   episodios en los que aparece y si está vivo o muerto.
   enunciado.md 12/12/2022
   3 / 6
   Nota: no recomendamos mostrar el detalle del personaje con una ventana modal por encima del
   listado del personaje porque es más complejo. Es mejor quitar el componente CharacterList y
   mostrar el componente CharacterDetail usando React Router.
4. Detallitos de calidad
Como nos gusta cuidar la semántica, el campo de texto debe estar recubierto por una etiqueta
<form />.
Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o
cambie la ruta sin querer.
Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto
se debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".
El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o
minúsculas.
Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar
el texto que tenía anteriormente.
5. BONUS: Mejoras visuales
   Para terminar, podéis realizar algunas mejoras visuales del ejercicio. Por ejemplo:
   Mostrar la especie y si un personajes está muerto con un icono.
   Usar algún sistema de grid para pintar el listado de personajes.
   Que funcione bien el responsive en dispositivos pequeños.
6. BONUS: URL compartible
   Como ejercicio extra os proponemos que la URL del detalle de personaje sea compartible, es decir,
   que si visitamos esa URL directamente en el navegador se vea el detalle del personaje (puedes
   comprobarlo copiando y pegando la ruta de la página del detalle del personaje en otra pestaña del
   enunciado.md 12/12/2022
   4 / 6
   navegador o refescando el navegador en el detalle de un personaje debe volver a mostrar el detalle
   del personaje).
   Importante: en el caso de que el usuario navegue a una URL inexistente como por ejemplo
   http://localhost:3000/#/detail/SADFSAJ (el id SADFSAJ no existe) debemos mostrar un
   mensaje del tipo "El personaje que buscas no existe".
7. BONUS: Ordenación
   Un extra interesante sería que ordenáseis el listado de personajes alfabéticamente por nombre.
8. BONUS: Más filtros
   Un extra interesante sería que añadáis más filtros para filtrar por ejemplo por especie.
   Recursos
   Puedes descargar el logo desde la Wikipedia.
   Entrega
   Hemos pautado 12 horas de dedicación al ejercicio. Sin embargo, el límite de entrega es
   miércoles 14/12/2022 a las 23:59 horas
   Solo debéis hacer commits y merges en la rama master de vuestro repositorio hasta la fecha límite. Si
   después del ejercicio queréis seguir trabajando sobre el ejercicio, lo podéis hacer en otra rama y no debéis
   mergearla hasta después de la entrevista técnica.
   La evaluación solo se considerará terminada cuando:
   Esté publicada en GitHub Pages y esté funcionando, para lo cual tendréis que subir el código,
   también a la carpeta docs/ del repositorio.
   El enlace a GitHub Pages esté en la página página principal del repositorio, en la parte superior,
   al lado de la descripción.
   Normas
   Este ejercicio está pensado para que lo realices de forma individual en clase, pero podrás consultar tus
   dudas con la profesora y tus compañeras si lo consideras necesario. Ellas no te darán directamente la
   solución de tu duda, pero sí pistas para poder solucionarla. Aún facilitando la comunicación entre
   compañeras, durante la prueba no debes copiar código de otra persona ni acceder a su portátil. Confiamos
   en tu responsabilidad.
   La evaluación es una buena oportunidad para conocer cómo estás progresando, saber qué temas debes
   reforzar durante las siguientes semanas y cuáles dominas. Te recomendamos que te sientas cómoda con el
   ejercicio que entregues y no envíes cosas copiadas que no entiendas.
   Si detectamos que has entregado código que no es tuyo, no entiendes y no lo puedes defender, pasarás
   directamente a la re-evaluación del módulo. Tu objetivo no debería ser pasar la evaluación sino convertirte
   en programadora, y esto debes tenerlo claro en todo momento.
   enunciado.md 12/12/2022
   5 / 6
   Una vez entregado el ejercicio realizarás una revisión del mismo con la profesora (25 minutos), que se
   asemejará a una entrevista técnica: te pedirá que expliques las decisiones tomadas para realizarlo y te
   propondrá realizar cambios in situ sobre tu solución.
   Es una oportunidad para practicar la dinámica de una entrevista técnica donde te van a proponer cambios
   sobre tu código que no conoces a priori. Si evitas que otras compañeras te den pistas sobre la dinámica de
   feedback, podrás aprovecharlo como una práctica y pasar los nervios con la profesora en lugar de en tu
   primera entrevista de trabajo.
   Al final tendrás un feedback sobre aspectos a destacar y a mejorar en tu ejercicio, y sabrás qué objetivos de
   aprendizaje has superado de los listados a continuación.
   Criterios de evaluación
   Vamos a listar los criterios de evaluación de este ejercicio. Si no superas al menos el 80% de estos criterios
   o no has superado algún criterio clave (marcados con _) te pediremos que realices una re-evaluación con el
   fin de que termines el curso mejor preparada y enfrentes tu primera experiencia profesional con más
   seguridad. En caso contrario, estás aprendiendo al ritmo que hemos pautado para poder afrontar los
   conocimientos del siguiente módulo.
   React básico
   Crea componentes con sintaxis correcta_.
   Crea una estructura adecuada de componentes*.
   Usa las props para pasar datos a componentes hijos*.
   Sabe pintar listados*.
   Sabe usar métodos funcionales de array (map, filter, etc.)*.
   Usa el estado para gestionar información de la interfaz*.
   El componente principal App.js maneja el estado de la aplicación*.
   Usa eventos en React para atender a interacciones del usuario*.
   Hooks para las peticiones al servidor.
   Escribe un código sólido, sin errores en la consola*.
   Usa defaultProps en los componentes.
   Usa propTypes para evitar errores de tipado.
   Tiene soltura a la hora de realizar cambios en el ejercicio presencial.
   React router
   Crea rutas navegables dentro de una aplicación.
   Issues
   Haber resuelto las issues de la evaluación intermedia\*.
   Otros criterios a tener en cuenta
   Usar inglés para nombres de variables, funciones, clases, comentarios, mensajes de commit, nombres
   de ficheros.
   enunciado.md 12/12/2022
   6 / 6
   El repositorio de GitHub debe tener README.md.
   Wubba Lubba Dub Dub!!
