function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};


var globalNinja = "Joshi";

function reportActivity() {
    var functionActivity = "jumping";

    for(var i = 1; i < 3; i++) {
        var forMessage = globalNinja + " " + functionActivity;
        assert(forMessage === "Joshi jumping", "Joshi is jumping within the for block");
        assert(i, "Current loop counter: " + i);
    }

    assert(i === 3 && forMessage === "Joshi jumping", "Loop variables accesible outsite of the loop");
}
reportActivity();

assert(typeof functionActivity === "undefined"
    && typeof i === "undefined" && typeof forMessage === "undefined",
    "We cannot see function variables outside of a function");