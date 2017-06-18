
// Se define un constructor Ninja
function Ninja() {
	var feints = 0;
	this.getFeints = function() {
		return feints;
	};
	this.feint = function() {
		feint++;
	};
}