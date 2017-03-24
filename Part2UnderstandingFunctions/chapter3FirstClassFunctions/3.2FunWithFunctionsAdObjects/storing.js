var store = {
	nextID: 1,
	cache: {}, // se crea un objeto que sirva como cache
			// (un lugar donde esconder), en donde se van
			// a almacenar las funciones
	add: function(fn) {
		if(!fn.id) {
			fn.id = this.nextId++;
			return true;
		}
	}
};

function ninja() {
	console.assert(store.add(ninja), 
	"La funcion fue agregada correctamente");
	console.assert(!store.add(ninja),
	"But it was only added once");
}
