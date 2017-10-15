function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};

// Un constructor que crea una propiedad skulk(escondite)
// el cualquier objeto como contexto de la funcion.
// El metodo una vez mas retorna el contexto de la funcion
// donde podamos probarla externamente

function Ninja() {
    this.skulk = function() {
        return this;
    };
}

// Crea dos objetos invocando al constructor con new
// Los objetos creados son referenciados como ninja1 y ninja2

var ninja1 = new Ninja();
var ninja2 = new Ninja();

// Prueba el metodo skulk de los objetos construidos. Cada uno
// deberia retornar su propio objeto construido.

assert(ninja1.skulk() === ninja1, "The first ninja is skulking");
assert(ninja2.skulk() === ninja2, "the second ninja is skulking");