function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
}

const GLOBAL_NINJA  = 'Yoshi';

function reportActivity() {
    const functionActivity = 'jumping';

    for(let i = 1; i < 3; i++) {
        let forMessage = GLOBAL_NINJA + " " + functionActivity;
        assert(forMessage === "Yoshi jumping",
            "Yoshi is jumping within the for block");
        assert(i, "Current loop counter:" + i);
    }

    assert(typeof i === "undefined" && typeof forMessage === "undefined",
        "Loop variables not accessible outside the loop");
}

reportActivity();

assert(typeof functionActivity === "undefined"
    && typeof i === "undefined" && typeof forMessage === "undefined",
    "We cannot see function variables outside of a function");