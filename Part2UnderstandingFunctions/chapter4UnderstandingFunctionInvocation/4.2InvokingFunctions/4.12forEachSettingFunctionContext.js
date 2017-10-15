function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};

// Nuestra funcion para iterar acepta la coleccion  a ser iterada
// sobre y un callback function
function forEach(list, callback) {
    for (var n = 0; n < list.length; n++) {
        // El callback es invocado tal como la iteracion al item
        // al corriente es el contexto de la funcion
        callback.call(list[n], n);

    }
}
// Nuestro sujeto de prueba
var weapons = [
    {type: 'shuriken'},
    {type: 'katana'},
    {type: 'nunchucks'},
];

// Llama la funcion para iterar y asegurarse que el contexto de la funcion
// sea correcto para cada invocacion

forEach(weapons, function(index) {
    assert(this === weapons[index], "Got the expected value of " + weapons[index].type);
});