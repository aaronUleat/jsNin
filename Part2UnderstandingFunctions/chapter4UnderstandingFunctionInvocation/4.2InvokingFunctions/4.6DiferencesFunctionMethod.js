function assert(value, description) {
	var result = value ? "pass" : "fail";
	console.log(result + ' - ' +  description);
};

// Retorna el contexto de la funcion que va a permitir
// examinar el contexto desde afuera
function whatsMyContext() {
	return this;
}
// Invocando como una funcion aplica el contexto
// al objeto window
assert(whatsMyContext() === window,
"Function call on window");
console.log(whatsMyContext())

// getMyThis obtiene una referencia al contexto
// de la funcion whatsMyContext funcion.

var getMyThis = whatsMyContext;

// Invoca a la funcion, usando la variable getMyThis,
// inclusive si usamos una variable, la funcion sigue siendo
// invocada como una funcion, y el contexto de la funcion
// es el objeto window.

assert(getMyThis() === window,
"Another function call in window");
console.log(whatsMyContext())

// Un objeto ninja1 es creado con una propiedad getMyThis
// que referencia la funcion whatsMyContext
var ninja1 = {
	getMyThis: whatsMyContext
};

// Invocando la funcion  a travez de getMyThis hace una llamada como un metodo
// del objeto ninja1. El contexto de la funcion es ahora ninja1. Eso es Orientacion
// a objetos

assert(ninja1.getMyThis() === ninja1,
"Trabajando con ninja1");
console.log(getMyThis());

// Otro objeto ninja2, que tambien tiene una propiedad getMyThis
// referenciando whatsMyContext

var ninja2 = {
	getMyThis: whatsMyContext
};

// Invocando la funcion como un metodo de ninja2
// muestra que el contexto de la funcion ahora es
// ninja 2

assert(ninja2.getMyThis() === ninja2,
"Working with ninja2")
console.log(getMyThis());
