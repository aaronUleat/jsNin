function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};
//Define una funcion generator al poner *  despues de la palabra function.
function* WeaponGenerator () {
    // Estos Yields Generan valores individuales al usar la nueva palabra yield.
    yield "Katana";
    yield "Wakizashi";
    yield "Kurasigama";
}

for (let weapon of WeaponGenerator())
{
    assert(weapon !== undefined, weapon);
}


