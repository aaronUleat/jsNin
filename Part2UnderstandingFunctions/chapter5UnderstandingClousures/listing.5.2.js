function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};

var outerValue = "samurai";
// Esta es una variable vacia que vamos a usar mas tarde
var later;
var outerInner;

function outerFunction() {
	// Declara un value dentro de la funcion. El scope de la variable esta limitado a
	// la funcion y no puede ser accesado desde fuera de la funcion. 
	var innerValue = "ninja";
	// Se declara una funcion interna dentro del scope de outerFunction. El value
	// innerValue es en el scope cuando se crea esta funcion  
	function innerFunction() {
		assert(outerValue === "samurai", "I can see the samurai");
		assert(innerValue === "ninja", "I can see the ninja");
	}
	// Guarda una referencia del innerFunction en la variable global later.
	// Por que despues la variable later en el scope global
	later = innerFunction;
	outerInner = innerValue;
}
// Invoca al outerFunction, lo que causa la la funcion innerFunction sea creada
// y es referenciada es asignada a la variable later.
outerFunction();
// Invoca a la funcion innerFunction a travez de la variable later. No la podemos
// invocar directamente por que su scope(a lo largo con el valor innerValue)
// esta limitado dentro de la funcion outerFunction
later();
console.log(outerInner);







