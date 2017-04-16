
function assert(value, description) {
	var result = value ? "pass" : "fail";
	console.log(result + ' - ' +  description);
};

// El valor del parametro 'this' en codigo global es el
// objeto window

assert(this === window, "This === window");

var button = {
	clicked: false,
	click: () => {
		this.clicked = true,
		assert(button.clicked, "The button has been clicked");
		assert(this === window, "En las function arrows this === window");
		assert(window.clicked, "Clicked is stored in window");
	}
}

var elem = document.getElementById('test');
elem.addEventListener('click', button.click);


