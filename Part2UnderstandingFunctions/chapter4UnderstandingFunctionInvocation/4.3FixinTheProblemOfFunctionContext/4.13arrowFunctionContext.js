// Un elemento button para asignar un event hadler

function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};

// Una funcion constructora que crea objetos que retienen su estado
// sin importar el button. Con esto, rastreamos si el button ha sido
// cliqueado o no.
function Button() {
    this.clicked = false;
    // Se declara una funcion arrow, que vamos a usar como un click
    // handler. Por que es un metodo del objeto, usamos esto dentro,
    // la funcion para referenciar el objeto
    this.click = () => {
        this.clicked = true;
        // Dentro del metodo, probamos que el estado del button sea
        // correctamente cambiado despues del click.
        assert(button.clicked, "The button has been clicked");
    }
    console.log(this.clicked);
}

var button = new Button();
var elem = document.getElementById('test');
elem.addEventListener('click', button.click);