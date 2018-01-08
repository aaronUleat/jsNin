### TRACKING CODE EXECUTION WITH EXECUTION CONTEXT
En Javascript la unidad fundamental de ejecucion es una funcion. Usamos
funciones todo el tiempo, para calcular algo, para hacer ejecucion de
efectos como hacer cambios en la UI, para utilizar codigo reutilizable
o para hacer nuestro codigo mas entendible. Para poder lograr este 
proposito, una funcion, puede llamar a otra funcion, que podria llamar a
otra funcion, etc. Y cuando una funcion haga lo que tenga que hacer, la
ejecucion de nuestro programa tiene que devolverse a la posicion de donde
la funcion fue llamada. Pero usted alguna vez se pregunto como el Engine
de Javascript le da seguimiento a todas estas funciones de ejecucion y 
retorna posiciones?

Como se menciono en el capitulo 2, hay dos tipos de codigo Javascript, el
global, el codigo que esta fuera de las funciones y el codigo de funciones,
que seria el codigo contenido en una funcion. Cuando nuestro codigo ha sido
ejecutado por el Engine de Javascript, cada statement es ejecutado en cierto
contexto de ejecucion.

Y tal como tenemos dos tipos de codigo en Javascript, el global y el de 
funciones, tenemos dos tipos de contextos de ejecucion: El contexto global
de ejecucion y el contexto de ejecucion de una funcion. Aqui esta la diferencia
significativa: 

Solo hay un contexto de ejecucion global, creado cuando nuestro programa en 
Javascript Inicia, sin importar que una nuevo contexto de ejecucion de funcion
sea creado en cada invocacion de una funcion.

NOTA: Usted talvez recuerde esto del capitulo 4 donde el contexto de la 
funcion es el objeto en el cual nuestra funcion es invocada, la cual puede
ser accesada atravez de la palabra clave "this". Un contexto de ejecucion,
aunque con nombre similar, es una cosa completamente diferente. Es un 
concepto que el engine de Javascript que el motor de Javascript usa para
rastrear la ejecucion de las funciones.

Como se menciono en el capitulo 2 Javascript esta basado en single-threaded execution
model: Solo una pieza de codigo puede ser ejecutada al momento Cada momento que una
funcion es invocada, la invocacion del contexto al corriente tiene que ser detenida,
y un nuevo contexto de ejecucion, en la cual el codigo de la funcion va ser evaluado,
tiene que ser creado. Despues de que la funcion ejecute sus tareas, el contexto de
ejecucion es usualmente descartado, y la ejecucion del contexto del llamado es
restaurado. Asi que se necesita mantener rastreado todos estos contextos de ejecucion,
ambos, el que se esta ejecutando y los que estan esperando pacientemente ser ejecutados.
La manera mas facil de hacer esto es por medio de un stack, llamado el contexto de ejecucion
stack (o muchas veces llamado call stack);

```
// Una funcion que llama a otra funcion
function skulk(ninja) {
	report(ninja + " skulking");
}
// Una funcion que reporta un mensaje a travez del built in console.log
function report(message) {
	console.log(message);
}
// dos llamadosde funciones del codigo global
skulk("Kuma");
skulk("Yoshi");
```
Este codigo es sin perder tiempo, definimos una funcion "skulk", la cual llama
a la funcion "report", La cual devuelve un mensaje. Despues, por medio del codigo
global, hacemos dos llamados diferentes a la funcion skulk: skulk("Kuma") y
skulk("Yoshi"). Al usar este codigo como base, exploramos la creacion del contexto
de ejecucion, como se muestra en el figure 5.6.

Cuando ejecutamos el codigo en el ejemplo, el contexto de ejecucion se comparte de la
siguiente manera:

1.  El Contexto de ejecucion stack empieza con el contexto global que es solo creado
    por el Programa de javascript (uno por pagina en el caso de las paginas web). El
    contexto global de ejecucion es el contexto activo de ejecucion cuando se ejecuta
    codigo global.
2.  En el codigo global, el programa primero define dos funciones: skulk y report, y
    despues llama el skulk function con skulk("Kuma"). Por que solo una pieza de
    codigo puede ser ejecutada a la vez, El motor de Javascript pausa la ejecucion
    del codigo global, y va y ejecuta la funcion skulk() con "Kuma" como argumento.
    Esto es hecho al crear un nuevo contexto de ejecucion y empujandolo hacia arriba
    del stack.
3.  El skulk function, llama a la funcion report con el argumento de "Kuma skulking".
    De nuevo, por el motivo de que solo una pieza de codigo puede ser ejecutada, el
    contexto de la funcion skulk es pausado, y un nuevo contexto de ejecucion de la
    funcion report es creado, con el argumento "Kuma skulking", es creada y lo pone
    arriba en el stack.
4.  Despues de que la funcion report genere el mensaje al usar la funcion built-in
    console.log y termina la ejecucion, tenemos que irnos atras a la funcion skulk(),
    saltando el contexto de la funcion "report" del stack. El contexto de la funcion
    skulk es reactivado y la ejecucion del la funcion skulk continua.
5.  Una cosa similar pasa cuando la funcion skulk finaliza su ejecucion: el contexto
    de ejecucion de la funcion skulk es removida del stack, y el contexto global de
    ejecucion, que ha estado esperando todo este tiempo, es restaurado como el contexto
    activo de ejecucion. La ejecucion del codigo global de Javascript ha sido restaurado.
