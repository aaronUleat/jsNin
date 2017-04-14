function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};


// Define a un constructor llamado ninja
function Ninja() {
    this.skulk = function () {
        return true;
    };
    // El constructor retorna un valor primitivo especifico
    // el valor numero 1
    return 1;
}

// Esta funcion es llamada como una funcion y es retornada
// el valor 1, como esperabamos.

assert ( Ninja() === 1, "Return the value honored when not called as a constructor");

// La funcion es llamada como un constructor via el operador nuevo.

var ninja = new Ninja();

// La prueba verifica que el valor retornado of 1 is ignored, y eso
// un nuevo, inicializa el objeto ha sido retornado del 'new'

assert(typeof ninja === 'object', 'Object returned cuando es llamado el constructor');
assert(typeof ninja.skulk() === "function", "Ninja object has a skulk method");

console.log(typeof ninja);
console.log(typeof ninja.skulk);


