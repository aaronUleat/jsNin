 function assert(value, description) {
        var result = value ? "pass" : "fail";
        console.log(result + ' - ' +  description); 
};
// Una funcion si ninguna parametro
function sum() {
	var sum = 0;
	// Hace iteraciones para todos los argumentos
	// pasados, y accesa a cada uno de ellos atravez
	// de array notation
	for( var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}
// Lla la funcion con cualquier numero de argumentos
assert(sum(1,2) === 3, "We can add two numbers");
assert(sum(1,2,3) === 6, "We can add three numbers");
assert(sum(1,2,3,4) === 10, "We ca add four numbers");