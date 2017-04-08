function assert(value, description) {
	var result = value ? "pass" : "fail";
	console.log(result + ' - ' +  description);
};
var store = {
	nextId:  1,
	cache: {},
	add: function (fn) {
		if(!fn.id) {
			fn.id = this.nextId++;
			this.cache[fn.id] = fn;
			return true;
		}
	}
};

function ninja() {};
function karate() {};
assert(store.add(ninja),
	"Function was safely added. ");
assert(store.add(karate),
	"Function was safely added. ");
assert(store.add(ninja),
	"Function was safely added");
console.log(store);