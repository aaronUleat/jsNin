function assert(condition, message) {
	if (!condition) {
		message = message || "Assertion failed";
		if (typeof Error !== "undefined") {
			console.log(message)
		}
		console.log(message) // Fallback
	}
}


function isPrime(value) { // creates the cache
	if(!isPrime.answers) {
		isPrime.answers = {};
	} // if

	if(isPrime.answers[value] !== undefined) { // check fo cache values
		return isPrime.answers[value];
	} // if

	var prime = value !== 1; //1 is not prime

	for(var i = 2; i < value; i++) {
		if(value % i === 0) {
			prime = false;
			break;
		}
	}
	return isPrime.answers[value] = prime; // stores the computed value
}

assert(isPrime(5), "5 is prime !");
assert(isPrime(11), "5 is prime !");
assert(isPrime(6), "5 is prime !");
assert(isPrime.answers[5], "The answer was cached");
console.log(isPrime.prototype);