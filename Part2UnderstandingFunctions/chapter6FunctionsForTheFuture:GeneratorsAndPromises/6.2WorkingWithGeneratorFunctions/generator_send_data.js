function assert(value, description) {
	var result = value ? "pass" : "fail";
	console.log(result + ' - ' +  description);
}
// Un generador puede recivir argumentos estandares, como cualquier otra funcion

function* NinjaGenerator (action) {
	// La magia ocurre. Al hacer el yield al valor, el generador retorna
	// un calculo intermediario. Al llamar al iterador de el siguiente metodo
	// con un argument, enviamos de vuelta al generador
	const imposter = yield ("Hattori " + action);

	// El valor que se envia sobre el siguiente valor de la expresion yielded
	// entonces nuestro impostor es Hanzo.
	assert(imposter === "Hanzo", "El generador ha sido infiltrado");

	yield ("Yoshi ( " + imposter + ") " + action);
}

const ninjaIterator = NinjaGenerator("skulk");
const result1 = ninjaIterator.next();
// Hace trigger de la ejecionn de un generador y chequea que podamos obtener el valor correcto.
assert(result1.value === "Hattori skulk", "Hattori is skulking");

// Envia los datos a un generador como un argumento al sigiuente metodo y chequea
// si el valor es correctamente transferido.
const result2 = ninjaIterator.next("Hanzo");
assert(result2.value === "Yoshi (Hanzo) skulk", "We have an imposter!");
