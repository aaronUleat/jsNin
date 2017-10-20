function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};

// Crea nuestro objeto con una propiedad especificada
var pupet = {
    rules: false
};

// Retorna ese objeto a pesar inicializar el objeto
// pasado como 'this'
function Emperor() {
    this.rules = true;
    return pupet;
}

// Invoca a la funcion como un constructor
var emperor = new Emperor();

// La prueba que retorna el objeto por el constructor asignado a
// la variable emperador  (y no al objeto creada por la nueva
// expression)

assert(emperor === pupet, "The emperor is merely a pupet");
assert(emperor.rules === false, "The pupet no sabe como gobernar");
