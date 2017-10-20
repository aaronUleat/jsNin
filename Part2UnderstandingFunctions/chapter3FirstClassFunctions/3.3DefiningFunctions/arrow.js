function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};
var greet = name => "Greetings " + name;

var anotherGreet = function(name) {
    return "Greetings " + name;
}

assert(anotherGreet("Oichi") === "Greeting Oishi", "Again oishi is property greeted");
assert(anotherGreet("Oichi") === "Greeting Oishi", "Again oishi is property greeted");