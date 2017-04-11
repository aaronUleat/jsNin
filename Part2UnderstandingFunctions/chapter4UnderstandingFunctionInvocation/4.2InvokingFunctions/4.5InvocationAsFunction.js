function assert(value, description) {
	var result = value ? "pass" : "fail";
	console.log(result + ' - ' +  description);
};
function ninja() {
	return this;
}

function samurai() {
	"use strict";
	return this;
}

assert(ninja() === window,
"In a nonstrict ninja function, " +
"The context is the global window objet");

assert(samurai() === undefined,
"In a strict samurai function" +
"the context is undefined");