function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};


function animateIt(elementId) {
	// Dentro de la funcion animatedIt, obtenemos una referencia
	// de ese elemento.
	var elem = document.getElementById(elementId);
	// Tick establece un contador para mantener trackeado los ticks de la animacion
	var tick = 0;
	// Una builtin function que crea y empieza un intervalo de tiempo, del callback que obtenga
	var timer = setInterval(function() {
		// El timer es invocado cada 10 milisegundos, Para 100 ticks, y ajusta la poscion del
		// elemento
		if(tick < 100){
			elem.style.left = elem.style.top = tick + 'px';
			tick++;
		}
		else {
			clearInterval(timer);
			assert(tick = 100, "Tick accesado via un clousures");
			assert(elem, 'Elemento tambien accesado por medio de un cloures');
			assert(timer, 'El timer tambien referencia a algo obtenido por medio de un cloure');
		}
	}, 10);
}

animateIt("box1");