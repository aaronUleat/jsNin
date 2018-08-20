function report(message) {
    console.log(message);
}
function assert(value, description) {
    var result = value ? "pass" : "fail";
    console.log(result + ' - ' +  description);
};

var ninjaDelayedPromise = new Promise((resolve, reject) => {
   report("NinjaDelayedPromise executor");
   setTimeout(() => {
       report("Resolving ninjaDelayedPromise");
       resolve("Hatori");
   }, 500)
});

assert(ninjaDelayedPromise !== null, "After creating ninjaDelayedPromise");

ninjaDelayedPromise.then(ninja=>{
   assert(ninja === "Hattori", "ninjaDelayedPromise resolve handled with Hattori");
});