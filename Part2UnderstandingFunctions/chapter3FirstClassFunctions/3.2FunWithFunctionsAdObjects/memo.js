function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}

function isPrime(value) {
	if( !isPrime.answers ) {
		isPrime.answers = {};
	} // if
	if (isPrime.answers[value] !== undefined ) {
		return isPrime.answers[value];
	} // if
	var prime = value !== 1; // 1 is not a prime
	for (var i = 2; i < value; i++) {
		if( value % i === 0) {
			prime = false;
			break;
		}
	}
	return isPrime.answers[value] = prime;
} // isPrime

assert( isPrime(5), "5 is prime !" );
assert( isPrime.answers[5], "The answer was cashed!" );