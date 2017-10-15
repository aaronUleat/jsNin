"use strict";

function whaterver() {
    console.log(arguments);
    arguments[0] = "New argument";
    console.log(arguments[0]);
}


// CON EL MODO ESTRICTO NO SE PUEDE SOBRESCRIBIR LA VARIABLE.
function otherFunction() {
    "use strict";
    console.log(arguments[0]);
    arguments[0] = "New argument";
    console.log(arguments[0]);
}

function functionArray() {
    console.log("Lo hize");
    console.log( arguments );
}

functionArray([1,2,3,4,5], [4,5,6,7,8,9])


whaterver(4,8,9,5,1,3,5,7,9);
otherFunction(8,4,5,4,6,8,5);
