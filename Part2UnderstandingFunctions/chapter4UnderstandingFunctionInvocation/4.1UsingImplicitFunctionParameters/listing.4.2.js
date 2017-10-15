
// El parametro person tiene el valor de gardener
// enviando como el primer argumento
function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};

function infiltrate(person) {

    assert(person === 'gardener',
        'The person is a gardener');

    assert(arguments[0] === 'gardener',
        'The first argument is a gardener');

    // Cambiando el objeto arguments tambien cambia
    // el pareo del parametro

    arguments[0] = 'ninja';

    assert(person === 'ninja',
    "The person is a ninja now");

    assert(arguments[0] === 'ninja',
        "The first argument is a ninja");

    // El alias funciona en ambas formas
    person = 'gardener';

    assert(person === 'gardener',
    "The person is a gardener once more");

    assert(arguments[0] === 'gardener',
    "The first argument is a gardener again");
}

infiltrate('gardener');