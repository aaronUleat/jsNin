function assert(value, description) {
	var result = value ? "pass" : "fail";
	console.log(result + ' - ' +  description);
}
function* NinjaGenerator() {
	try{
		yield "Hattori";
		fail("The expected execption didnt occur");
	} catch (e) {
		assert(e === "Catch this !", "Aha ! we caought an exeption");
	}
}

const ninjaIterator = NinjaGenerator();
const result1 = ninjaIterator.next();
assert(result1.value === "Hattori", "We got Hattori");
ninjaIterator.throw("Catch this");
