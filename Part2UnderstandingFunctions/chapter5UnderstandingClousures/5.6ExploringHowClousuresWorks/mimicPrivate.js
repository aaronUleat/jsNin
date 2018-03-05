function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
}

// Declara una variable dentro de un constructor. Por que el scope de las variables es limitado dentro del constructor,
// y dentro de ese scope son privadas.

function Ninja() {
    var feints = 0;
    //Un metodo que retorna el contador de feints
    this.getFeints = function() {
        return feints;
    };
    // El metodo que va incrementando el valor. Por que el valor es privado, nadie puede tocarlo de alguna manera
    //
    this.feint = function() {
        feints++;
    }
}

var ninja1 = new Ninja();
// verify that we cannot access to variables
assert(ninja1.feints === undefined, "And the private date is not accesible to us");

// Llama al metodo feint, wel cual incrementa la cuenta del numero de veces que el ninja a feinted.
ninja1.feint();

// Prueba que el incremento se ha hecho.
assert(ninja1.getFeints() === 1, "Ahora estamos avilitidaos a tener el count tde fetins");

// Cuando creamos un nuevo objeto con ninja2, con el constructor Ninja, el objeto ninja2 tiene su propia variable
// feints
var ninja2 = new Ninja();
assert(ninja2.getFeints() === 0, "El ninja2 tiene su propia variable feints");



function Samurai() {}

Samurai.prototype.feints = 0;
Samurai.prototype.getFeints = function() {
    return this.feints;
};
Samurai.prototype.feint = function () {
    this.feints++;
};

samurai1 = new Samurai;
samurai2 = new Samurai;


