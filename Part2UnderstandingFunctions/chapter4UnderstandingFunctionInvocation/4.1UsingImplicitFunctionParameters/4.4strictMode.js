"use strict";

function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};


function infiltrate(person) {
    assert(person === 'gardener', 'The person is a gardener');
    assert(arguments[0] === 'gardener', 'The first argument is a gardener');

    arguments[0] = 'ninja';

    assert(arguments[0] === 'ninja', 'The first argument is now a ninja');
    assert(person === 'ninja', 'The person is still a gardener');
}

infiltrate('gardener');