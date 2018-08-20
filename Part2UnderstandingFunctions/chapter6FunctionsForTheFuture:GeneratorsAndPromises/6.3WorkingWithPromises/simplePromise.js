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


