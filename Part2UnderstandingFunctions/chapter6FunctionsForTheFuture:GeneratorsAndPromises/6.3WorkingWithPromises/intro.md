## 6.3 Working with Promises.

En Javascript, confiamos mucho en codigo asyncronico, calculos cuyos resultados aun no tenemos, pero los tendremos 
posteriormente. En ES6 se introduce un nuevo concepto que hace que el codigo asyncronico mas facil por medio de 
promesas.

Una promesa es un marcador de posicion para un valor que no tenemos ahora pero los vamos a tener despues; es una 
garantía de que finalmente sabremos el resultado de un cálculo asincrónico. Si hacemos una buena promesa nuestro 
resultado va a ser un valor. Si un problema ocurre, nuestro resultado sera un error, una excusa por la cual no pudimos 
entregar. Un gran ejemplo de usar promesas es buscando data desde el servidor, prometemos que eventualmente vamos a 
tener la data, pero hay una oportunidad de que un problema ocurra.

Creando una promesa es facil, como puede ver en el siguiente ejemplo.

### LISTING 6.10 CREATING A SIMPLE PROMISE

```
function assert(value, description) {
	var result = value ? "pass" : "fail";
	console.log(result + ' - ' +  description);
};

// Crea una promesa al llamnar un built-in constructor Promise y pasan dos parametros: resolve y reject
const ninjaPromise = new Promise( (resolve, reject) => {
	// Una promesa ha resuelto exitosamente all llamar el parametro resolve
	// function(rechazar al llamar el reject de una funcion)
	resolve("Hattori");
	// reject ("An error resolving a promise")
});

ninjaPromise.then(ninja => {
	// Al utilizar el metodo then() en una promesa, podemos pasarlo en dos callbacks
	// el primero es llamado si una promesa si es resuelto exitosamente.
	assert(ninja === "Hattori", "We were promised Hattori!");
}, err => {
	fail("The shouldn't be an error")
});
```

Al crear una promesa, usamos el constructor Promise, al cual le pasamos a una funcion, en este caso una funcion arrow,
(pero podriamos utilizar una funcion expresada si quisieramos), Esta funcion, llamada una funcion ejecutadora, tiene dos 
parametros: resolve y reject. El ejecutador es llamado inmediatamente cuando estemos construyendo el objeto Promesa con 
dos built-in argumentos: resolve el cual llamaremos manualmente si queremos que la Promesa resulva exitosamente, y reject 
el cual llamamos sin un error ocurre.

Este codigo usa la promesa al estar llamando el built-in metodo then() en el objeto Promise, un metodo el cual pasamos 
dos callbacks: un *success* callback y un *failure* callback. El primero se llama si la promesa es resuelta exitosamente 
(Si el *resolve* es llamado en la Promise), y la segunda es llamada si hay algun problema ( ya se que ocurra una execpcion 
no controlada o se invoque la funcion reject en una Promise).
En nuestro codigo ejemplo, creamos una promesa y inmediatamente resuelta al estar llamando a la funcion *resolve*, con el 
argumento *Hattori*. Por lo tanto, cuando llamamos el metodo then(), el primer, success, callback es ejecutado y el resto 
que hace un output *"We were promised Hattori" passes*.

Ahora que tenemos una idea general de lo que las promesas son y como funcionan, vamos a dar un paso atras para ver 
algunos de los problemas que las promesas abordan.



