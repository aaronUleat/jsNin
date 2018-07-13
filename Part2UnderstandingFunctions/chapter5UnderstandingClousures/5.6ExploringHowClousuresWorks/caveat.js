function Ninja() {
    var feints = 0;
    this.getFeints = function() {
        return feints;
    };
    this.feint = function() {
        feints++;
    }
}

var ninja1 = new Ninja;
ninja1.feint();

var imposter = {};
// Hace la funcion getFeints de ninja1 accesible a travez de imposter.
imposter.getFeints = ninja1.getFeints();

assert( imposter.getFeints() === 1, "The imposter has access to the feint variable");