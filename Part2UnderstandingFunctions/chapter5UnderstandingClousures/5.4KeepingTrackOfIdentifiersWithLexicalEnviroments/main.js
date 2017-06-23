

function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};

var ninja = "Muneyoshi";
function skulk() {
    var action = "Skulking";
    function report() {
        var intro = "Aha!";
        assert(intro === "Aha!", "Local");
        assert(action === "Skulking", "Outer");
        assert(ninja === "Muneyoshi", "Global");
    }
    report();
}
skulk();
console.log(ninja);