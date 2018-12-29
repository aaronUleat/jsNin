function assert(value, description) {
	var result = value ? "pass" : "fail";
	console.log(result + ' - ' +  description);
}


function* DomTranversal (element) {
	yield element;
	element = element.firstElementChild;
	while (element) {
		yield* DomTranversal(element);
		element = element.nextElementSibling;
	}
}

const subTree = document.getElementById('subTree');

for(let element of DomTranversal(subTree)) {
	assert(element !== null, element.nodeName);
}