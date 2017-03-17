// function assert(value, desc) {
//     var li = document.createElement("li");
//     li.className = value ? "pass" : "fail";
//     li.appendChild(document.createTextNode(desc));
//     document.getElementById("results").appendChild(body);
// }


function report(message) {
    console.log(message);
}

var text = "Domo arigato!";
report("Before defining functions");

function useless(ninjaCallback) {
    report("In useless function");
    return ninjaCallback();
}

function getText() {
    report("In getText function");
    return text;
}

report("Before making all the calls");

console.assert(useless(getText) === text,
        "The useless function works! " + text);

report("After the calls have been made");

var getTrue = text === getText();

// assert(useless(getText) === 'text',
//         "The useless function works! " + text);
