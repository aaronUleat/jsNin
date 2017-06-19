
// Una funcion que llama a otra funcion
function skulk(ninja) {
	report(ninja + " skulking");
}
// Una funcion que reporta un mensaje a travez del built in console.log
function report(message) {
	console.log(message);
}
// dos llamadosde funciones del codigo global
skulk("Kuma");
skulk("Yoshi");