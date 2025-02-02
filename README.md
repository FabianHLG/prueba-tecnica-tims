# React + Vite

¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

 R/Para emepzar es la primera vez que utilizo react con vite, fue algo nuevo que aprendi, ya que vite nunca lo habia usado,
 asi que empece a ver videos de como instalar en visual studio code, para emepzar con esta prueba hice una base con las paginas, me di cuenta que no podia usar windown.location y otras formas para moverme
 en pagina a otra pagina, ya eso se usaba con html, asi que me puse investigar y encontre usar react router, es una libreria
 donde puedes pasar de pagina a otra pagina en react ya que como sabemos, react es una arquitectura de una sola pagina,
 asi que para moverse de una pagina diferente a otra seria esa opcion, otra cosa que lei y verifique es que no se recarga la pagina.
 Aqui esta el enlace donde hice react router: https://www.freecodecamp.org/espanol/news/tutorial-de-react-router-version-6-como-navegar-a-otros-componentes-y-configurar-un-enrutador/
 
Despues saber como trasladarme de una pagina a otra y lo demas basico que agregue, hice las series y peliculas, tulice usestate, es similar cuando usas bakent y quieres guardar un dato, o usar arreglos, en react se utilza usestate y lo tulice para guarar datos temporales, eso seria que me dijeron que utilizara react hooks, tambien me comentaron que utlizara axios, anteriormente lo he usado, pero esta fue por primera vez en leer un archivo .json para obtener los datos y mostrarlos, no fui complicado ya que lo he utilizado antes para apis de consumo, solo que vi videos de como utilizarlo con .json.

Utilice redux para datos globales, esto es algo que jamas lo he usado, lo que usaba era localstore, asi que he aprendido mucho cuando realice esta prueba tecnica, en este video aprendi como utilizarlo: https://youtu.be/fMiFnbufAP4 lo quise utilizar en un lugar pequeño y de prueba, ya que en backend he utilizado htpp.sesion para guardar la sesion del usuario, asi que hice algo similar con redux y guardar el nombre el usuario cuando inicia sesion y utilizarlo donde seam ejemplo en el inicio, me di cuenta que cuano recargas las pagina se piede el dato, asi que supongo que es mejor locastore ya que no sucede eso, pero ya que se usa react router y no se recarga funciona bien. Otra cosa que aprendi nuevo es hacer una paginacion, utilice este video para hacerlo, no fue complicado ya que se usaba usestate, pero si me llevo tiempoo ya que era la primera vez que lo hacia la verdad y tuve que aprender y usar de video, adaptalo para lo que estaba haciendo: https://m.youtube.com/watch?v=-uSe1Di7mbg 

La universidad UNED nos enseña mas bakend que frontend, pero siempre es la misma tactica, si no sabes algo empizas aprender viendo videos, buscando foros, ya que hay personas que explican y comparten su codigo, asi que gracias a la UNED que nos dejan solo y debemos aprender solo, realizar un reto como estos lo puedo hacer ya que nos prepara aprender rapido y hacer cosas nuevas investigando. Otra cosa es fue nuevo lo de estilos (MUI) o material ui es lo que encontre por internet: https://youtu.be/BS2hOxbXMgw lo utilice en login en la parte de input, que seria el textfield, esto fue algo nuevo y con el video lo hice, solo qye cambiar colores, y etc si fue una odisea, y solo hice lo basico mejor, pasa lo mismo con el filtrado, hice lo basico con usestade ya que como no tengo mucha practica, pero quiero aprender y seguir practicando en un lugar laboral.

Utilice una estructura limpia a lo que tengo conocimiento y eficiencia como me enseño la Universidad, bueno solo, es que siempre hay que acomodar todo en carpetas separadas, para que cuando se haya hacer un cambio, no se tenga que hcaer todo el codigo y despues no funciona, si no solo una parte que separaste y listo, por eso la estructura, quedo asi: carpeta Componentes, donde coloque los componentes que iba a reutlizar en cada pagina que sea el pie de pagina y encabezado, y asi en vez de copiar y pegar, es mas eficiente reutilizar. El Css me gusta y me enseñaron siempre separar la parte de informacion con la presentacion, asi que los stilos de la pgina esta en un lugar separado y tan solo importar, el css lo hice lo basico de mi conocimiento, colores, que se acomode la informacion, la posicion on magin botton y etc, ya tienes los stilos y adedmas es mas limpio el codigo. La carpeta la paginas, estan las paginas que solicitaban, donde esta la informacion y la carpeta redux, como comente es la primera vez que utilizo redux, asi que en el video y tenia razon tambien para buenas practicas u odern es separarlo, como cuando haces un servicio. Tambien coloque a lo que vi en el video e investiue es colocar el sample json en public para asi nada mas llamarlo y utlizarlo.

¿Hay alguna mejora que pueda hacer en su envío? 

R/Una mejora seria que fuera reponsivo, es algo que no pude lograr, y viendo videos tampoco lo logre, con edge podia colocar la pantalla de un ceular iphone 14 por ejemplo, pero no lograba como hacerlo en el css, a lo que veia en videos, y lo que investigaba usaban librerias que tenia react o utilizar @media, pero no lo pude enteder bien y colocarlo en practica con poco tiempo, ya que la universidad UNED como nos dejan solo y ademas solo se centran en bakend, aprender lo reponsivo lo dejaron de lado, pero no es escusa y quiero aprender mas, seguir aprendiendo y si logro tener este puesto me gutaria que el senior me enseñe, quiero aprender mas, y crecer como profesional, seguir investigando, yo aprendo rapido se lo puedo asegurar y poner en practica lo que tengo conocomiento y lo que estare aprendiendo.

Otra mejora que haria es que en vez de redux, usar quizas localstorage de javascrip para guardar los datos en la memoria po ejemplo guardar los datos del usuario, cuando por si el usuario le da recargar pagina no se borre por el redux ya que se borra cuando se recarga la pagina, otra mejora seria la parte de errores, ya tiene el manejo de errores pero seria bueno profunizarlo mas, por ejmplo cuando se haga una autenticacion en el login, otra mejora es terminar las demas paginas que deje como de prueba como el registro y las que estan en el pie de pagina, para que el sitio web se vea mas completo, mejoraria la parte del login, que cuando el usuario se registre el boton se desaparezca, es algo que aprenderia y lo implementaria.

¿Qué haría de manera diferente si se le asignara más tiempo?

R/Si tuviera mas tiempo, haria en la pagina principal colocar promociones si las peliculas y series estan en venta por ejemplo, cololcar donde el usuario pueda colcoar sus opiniones de la pagina para asi seguir mejorandola, agregar una card, input, boton, y estrellas que aprenderia como se hace eso, para que el usuario coloque sus opiniones en la pagina, otra cosa que haria es colocar las redes solciales, contacto en el pie de pagina para que el usuario siga a la pagina en otras redes solciales y el contacti si tienem un problema, agregaria un perfil en el encabezado, que cuando el usuario se registro, aprezca el perfil y donde pueda editar sus datos personales que registro, ademas si esta pagina se convierte de compra de peliculas o series, o un plan, que el usuario tenga un historial, donde pueda ver como una table, donde esta el dia de pago, si es un plan cuando se le vence y esa informacion.

Si tuviera tiempo haria que la parte del filtro no solo muestre peliculas de un año en adelante, ya que se perderia contenido que si el usuario quiere ver algo de un año mas bajo de lo que me dijeron que colocara, otra cosa es que en el imput del filtro haria que acepte buscar la pelicula o serie por nombre y año que seria mas favorable para el usuario, otra cosa que aprendi es que colocar un boton en el encabezado y sea como un select, donde el usuario pueda escoger su idioma para que toda la pagina este a su idioma, eso seri hacerlo com un api, consumir un api de traductor, donde traduzca la pagina, el texto y etc, otra cosa es que seria bueno en vez de json, un archivo, seria mejor una api de peliculas y series, donde va estar siempre actualizado la informacion y con axios se puede estraer toda esa informacion. 

Espero poder tener este puesto, todo esta pagina lo hice es investigado buscando videos y adaptandolo a lo que estaba haciendo, todo es basico a lo que tengo conociemiento y entiendo como funciona cada parte, espero tener la oportunidad de tener este puesto y seguir creciendo, espandiendome, ser un buen profesional, muchas gracias por esta oportunidad y espero formar parte, espero su eleccion, muchas gracias.










This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
