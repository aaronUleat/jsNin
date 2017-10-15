function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};

// Un constructor que crea objetos que retienen el estado con respecto
// a nuestro button. Con eso trackeamos si el boton fue cliqueado


// Declara el metodo que vamos a usar como click handler. Por que es un
// metodo del objeto, usamos esto dentro la funcion para obtener
// referencia al objeto
function Button() {
    this.clicked = false;
    this.click = function () {
        this.clicked = true;
        // Dentro del metodo, vamos a probar que el estado del button ha sido
        // coorrectamente cambiado despues de hacer click
        assert(button.clicked, "The button has been clicked");
    };
}

// Crea una instancia que va rastrear si el button ha sido
// cliqueado
var button = new Button();
// Establece el click hander en el button
var elem = document.getElementById('test');
elem.addEventListener('click', button.click);

