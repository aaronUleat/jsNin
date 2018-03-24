function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};
// Definimos un generador que va producir una secuencia de dos armas.
function* WeaponGenerator () {
    yield "Katana";
    yield "Wakizashi";
}
// Llamar a un generador crea un iterador a travez el cual podemos controlar la ejecucion del generador
const weaponsIterator = WeaponGenerator();
//Llamar el iterador por medio del metodo next() crea un nuevo valor del generador.
const result1 = weaponsIterator.next();

console.log(result1);
// El resultado es un objeto con un valor retornado y un idicador que nos dice a nosotros si el generador
//tiene mas valores.
assert(typeof result1 == "object" && result1.value == "Katana" && !result1.done, "Katana received");

const result2 = weaponsIterator.next();
assert(typeof result2 == "object" && result2.value == "Wakizashi" && !result2.done, "Wakizashi received");

const result3 = weaponsIterator.next();
console.log(result3);
assert(typeof result3 == "object" && result3.value == undefined && result3.done, "There as no more result");