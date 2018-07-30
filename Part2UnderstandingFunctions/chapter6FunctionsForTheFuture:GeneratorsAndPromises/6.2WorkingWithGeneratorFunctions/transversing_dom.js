function assert(value, description) {
	var result = value ? "pass" : "fail";
	console.log(result + ' - ' +  description);
}


function transverseDOM(element, callback) {
	// Procesa el nodo al corriente con un callback
	callback(element);
	element = element.firstElementChild;
	// Atraveza el DOM a cada elemento
	while (element) {
		transverseDOM(element, callback);
		element = element.nextElementSibling;
	}
}
const subTree = document.querySelector("#subTree");
// Empieza el proceso al llamar a la funcion transverseDOM por medio de nuestro elemento raiz.
transverseDOM(subTree, function(element) {
	assert(element !== null, element.nodeName);
});