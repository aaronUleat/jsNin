 function assert(value, description) {
        var result = value ? "pass" : "fail";
        console.log(result + ' - ' +  description); 
};


function whatever(a,b,c) {
	assert(a === 1, 'The value of a is 1');
	assert(b === 2, 'The value of a is 2');
	assert(c === 3, 'The value of a is 3');

	assert(arguments.length === 5,
		"We've passed in 5 parameter");
	assert(arguments[0] === a,
		"The first argument is assigned to a");
	assert(arguments[1] === b,
		"The second argument is assigned to b");
	assert(arguments[2] === c,
		"The third argument is assigned to c");

	assert(arguments[3] === 4,
		"We can access the fourth argument");
	var thirdArgument = arguments[3];
	console.log(thirdArgument);
	assert(arguments[4] === 5,
		"We can access the fifth argument");
}

whatever(1,2,3,4,5);