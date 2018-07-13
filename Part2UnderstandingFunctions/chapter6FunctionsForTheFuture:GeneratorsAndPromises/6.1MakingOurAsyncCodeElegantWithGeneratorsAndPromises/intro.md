## 6.1 Making our async code elegant with generators and promises.

Imagine que usted es un desarrollador  que trabaja en freelanceninja.com, un sitio popular de reclutamiento que le 
permite a los clientes contratar ninjas para misiones. Su tarea es implementar una funcionalidad que permita a los 
usuarios tener detalles acerca de los puntajes mas altos alcanzados por los ninjas mas populares. La data que 
representa alos ninjas, los resumenes codificados en un JSON. Uste deberia escribir algo como esto:

```
try {
    var ninjas          = syncGetJSON("ninjas.json");
    var missions        = syncGetJSON(ninjas[0].missionsUrl);
    var misionDetails   = syncGetJSON(misions[0].detailsUrl);
}
catch(e){
    // Oh no, we weren't able to get the mission details.
}
```

Este codigo es relativamente facil de entender, y si un error ocurrre en alguno de los pasos, podemos facilmente catch 
en el bloque de catch. Pero desafortunadamente este codigo tiene un gran problema. Obtener data de un servidor es una 
operacion que conuse muchos recursos, y por el motivo de que Javascript se basa en el modelo de ejecucion 
single-threaded, con este proceso hemos bloqueado todo el UI hasta que la operacion alla terminado. Esto nos lleva a 
hacer aplicaciones que no responden en un tiempo deseado y desalienta a los usuarios. Para resolver este problema, 
podemos reescrbirlo con callbacks, en cual va a invocar cuando un task termine sin bloquear la UI.

```
getJSON("ninjas.json", function(err, ninjas){
    if(err) {
        console.log("Error fetching list of ninjas", err);
        return;
    }
    getJSON(ninjas[0].missionsUrl, function(err, missions) {
        if(err) {
            console.log("Error locating ninja missions", err);
            return;
        }
        getJSON(missions[0].detailsUrl, function(err, missionDetails){
            if(err) {
                console.log("Error locating mission details", err);
                return;
            }
//Study the intel plan
        });
    });
});
```

Aunque este codigo va a ser un poco mejor recivido por los usuarios, usted probablemente este de acuerdo que es un poco 
confuso, agrega mucho codigo repetido, y es bastante feo. Aqui es donde los generators y las promesas entran. Al 
combinarlas podemos volver el non-blocking pero raramente el codigo del callback en algo mucho mas elegante:

```
// Una funcion generator es definida al poner un asterisco despues de la palabra funcion
async (function () {
    try {
        const ninjas                = yield getJSON("ninjas.json");
        const missions              = yield getJSON(ninjas[0].missionUrl);
        const missionDescription    = yield getJSON(missions[0].detailsUrl);
        // Study the mission details
    }
    catch(e) {
        // Oh no, we weren't able to get the mission details.
    }
});
```

No se preocupe en este ejemplo no tiene mucho sentido o si usted ve la sintaxis (tal como function* o yield) no familiar.
Para el termino de este capitulo, usted va a conocer todos los ingredientes necesarios. Por ahora, es suficiente que 
usted compare la elegancia (o la falta de conocimiento en esto ) de el del codigo nonblocking generadores y promesas.
Vamos a empezar despacio al explorar las funciones generadoras, el primer paso para realizar codigo asyncronico elegante.



