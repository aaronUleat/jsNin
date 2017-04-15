function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};


// La funcion 'juggle' los argumentos y pone los resultados sobre
// cualquier objetoen el contexto de la funcikn
function juggle() {
    var result = 0;
    for(var n = 0; n < arguments.length; n++) {
        result += arguments[n];
    }
    this.result = result;
}
// Estos objetos estan incialmente vacios, y van a servir
// como nuestros sujetos de prueba
var ninja1 = {};
var ninja2 = {};

//  Usa el metodo apply, pasando el ninja1 y un array de argumentos
juggle.apply(ninja1, [1,2,3,4]);

// Usa el metodo call, pasando a ninja2 una lista de argumentos
juggle.call(ninja2, 5,6,7,8);

// Las pruebas muestran como el resultado de juggle es puesto en
// los objetos pasados a los metodos.

assert(ninja1.result === 10, "Jugle via apply");
assert(ninja2.result === 26, "Juggle via call");


