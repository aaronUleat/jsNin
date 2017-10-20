function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};

// Se define un constructor Ninja
function Ninja() {
	// Se declara una variable dentro de la funcion constructora.
	// Por que el scope de la variable es limitado dentro del scope
	// del constructor, es una variable "privada" Que vamos a usar para contar
	// cuantas veces el ninja ha fingido.
	var feints = 0;
	// Se crea un metodo de acceso para el metodo que va a contar los fingimientos
	// por que la variable no se podria accesar del codigo fuera del constructor,
	// esta es una manera comun para que sea solo una variable para leerse al valor
	this.getFeints = function() {
		return feints;
	};
	// Declara un metodo de incremento para ese valor. Por que el valor
	// es privado, ahora cada vez que lo quiera arruinar nos podemos
	// cubrir las espaldas; Ellas estan limitadas, al acceso que le damos
	// via estos metodos
	this.feint = function() {
		feints++;
	};
}
// Ahora para testar creamos una instancia de ninja
var ninja1 = new Ninja();
// Se llama al metodo faint el cual incrementa la cuenta de los faints
// que el ninja haga
ninja1.feint();

assert(ninja1.feints === undefined, "Esta es una variable privada a la cual no tenemos acceso");
assert(ninja1.getFeints() === 1, "Podemos accesar a la cuenta de los feints");

var ninja2 = new Ninja();
assert(ninja2.getFeints() === 0, "El ninja dos tiene sus propios feints");








