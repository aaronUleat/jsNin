function assert(value, description) {
	var result = value ? "pass" : "fail";
	console.log(result + ' - ' +  description);
}

function* WarriorGenerator(){
	yield "Sun Tzu";
	yield* NinjaGenerator();
	yield "Genghis Khan";
}

function* NinjaGenerator(){
	yield "Hattori";
	yield "Yoshi";
}

for(let warrior of WarriorGenerator()){
	assert(warrior !== null, warrior);
}