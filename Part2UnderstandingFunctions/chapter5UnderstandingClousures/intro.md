### UNDERSTANDING CLOUSURES

Un clousure permite accesar y manipular variables que son externas a 
esa funcion. Los clousures permite a las funciones accesar a todas las
variables tambien a otras funciones, que estan en el scope cuando la
funcion es definida.

NOTA: Usted probablemente es familiarizado con el concepto de scopes,
pero solo por si acaso, un scope se refiere a la visibilidad de 
indentificadores en ciertas partes del programa. Un scope es un aparte
del programa en el cual cierto nombre es bound a alguna variable en 
especifico.

Esto talvez sea intituitivo hasta que usted recuerde que una funcion 
declarada puede ser llamada en cualquier momento despues, incluso despues
del scope en el cual fue declarado se ha ido lejos. Este concepto 
probablemente sera mejor explicado con codigo. Pero antes de llegar un 
ejemplo concreto que nos va a ayudar a desarrollar animaciones mas
elegantes en codigo o para definir propiedades privadas en un objeto,
vamos a empezar por algo pequeno, con el siguiente listing.

### LISTING 5.1 A simple closure
```
var outerValue = "ninja";
function outerFunction() {
    assert(outerValue === "ninja", "I can see the ninja.");
}

outerFunction();

```
En este ejemplo de codigo, declaramos una variable outerValue y 
una funcion outerFunction en el mismo scope, en este caso, el
scope global. Despues de todo, llamamos a la funcion outer function.
Como usted puede ver en el figure 5.1 la funcion permite, ver y accesar
la varible outerValue. Esto es algo que se ve comunmente miles de veces
sin darse cuenta que se esta creando un clousure.

Talvez esto no lo sorprenda. Esto no es sorprendente. Por que los dos
outerValue y outerFunction estan declaradas en el scope global, ese
scope (en cual es un clousure) nunca se va a ir siempre va a estar ahi
(siempre y cuando su aplicacion este corriendo). No es sorprendente que
la funcion que la funcion pueda accesar esa variable, por que continua 
en el mismo scope.

