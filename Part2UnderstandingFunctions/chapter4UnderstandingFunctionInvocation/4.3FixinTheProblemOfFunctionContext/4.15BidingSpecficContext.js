
function assert(value, description) {
	var result = value ? "pass" : "fail";
	console.log(result + ' - ' +  description);
};

var button = {
	clicked: false,
	other: true,
	click: function () {
		this.clicked = true;
		assert(button.clicked, "The button has been clicked");
	},
	other: function() {
		this.other = false
	}
};

var elem = document.getElementById('test');
// Usa el bind function para crear una nueva funcion bound para
// el objeto button
elem.addEventListener('click', button.click.bind(button) );

var boundFunction = button.click.bind(button);
var otherFunction = button.other.bind(button);
assert(boundFunction != button.click, "Calling bind creates a completly new function");