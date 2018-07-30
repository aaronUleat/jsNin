function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
}

function* WeaponGenerator(){
	yield "Katana";
	yield "Wakizashi";
}
// Se crea un iterador
const weaponsIterator = WeaponGenerator();
// Se crea una variable donde vamos a guardar los items de la secuencia generada.
let item;
// En cada loop de la iteracion se trae un valor del generador y hace output del valor.
// Se detiene el iterador cuando el generador no tenga mas valores ha producir.
while(!(item = weaponsIterator.next()).done) {
	assert(item !== null, item.value);
}




