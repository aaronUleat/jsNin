## Combining generators and promises

En esta sección, combinaremos generadores (y su capacidad para pausar y reanudar
su ejecución) con promesas, para lograr un código asíncrono más elegante.
Usaremos el ejemplo de una funcionalidad que permite a los usuarios obtener detalles de los más altos
Misión clasificada realizada por el ninja más popular. Los datos que representan a los ninjas, los
Los resúmenes de sus misiones, así como los detalles de las misiones se almacenan en un
Servidor remoto, codificado en JSON.

Todas estas subtareas son de larga duración y mutuamente dependientes. Si fuéramos a
implementarlos de manera sincrónica, obtendríamos lo siguiente directamente
código:

```
try {
    const ninjas = syncGetJSON("data/ninjas.json");
    const missions = syncGetJSON(ninjas[0].missionsUrl);
    const missionDetails = syncGetJSON(missions[0].detailsUrl);
//Study the mission description
} catch(e){
    //Oh no, we weren't able to get the mission details
}
```

Aunque este código es excelente por su simplicidad y manejo de errores, bloquea la interfaz de usuario,
lo que resulta en usuarios infelices. Idealmente, nos gustaría cambiar este código para que no 
se produzca ningún bloqueo durante una tarea de larga ejecución. Una forma de hacerlo es mediante la combinación de
Generators y promesas.

Como sabemos, el rendimiento de un generador suspende la ejecución del generador.
sin bloqueo Para activar el generador y continuar su ejecución, tenemos que
llamar al siguiente método en el iterador del generador. Las promesas, por otro lado, permiten
para especificar una devolución de llamada que se activará en caso de que seamos capaces de obtener el valor prometido, 
y una devolución de llamada que se activará en caso de que se haya producido un error.

La idea, entonces, es combinar generadores y promesas de la siguiente manera: Nosotros
ponemos el código que usa tareas asíncronas en un generador, y ejecutamos esa función del generador. 
Cuando llegamos a un punto en la ejecución del generador que llama a un asíncrono
tarea nous, creamos una promesa que representa el valor de esa tarea asíncrona.

Porque no tenemos idea de cuándo se resolverá esa promesa (o incluso si será
resuelto), en este punto de ejecución del generador, cedemos desde el generador, para que podamos
no causar bloqueo Después de un tiempo, cuando la promesa se establece, continuamos la
ejecución de nuestro generador llamando al siguiente método del iterador. Hacemos esto como muchos
veces que sea necesario. Vea el siguiente listado para un ejemplo práctico.