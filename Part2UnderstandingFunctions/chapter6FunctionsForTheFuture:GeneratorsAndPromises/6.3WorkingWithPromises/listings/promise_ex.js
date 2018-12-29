console.log("EL codigo inicio");
var ninjaDelayedPromise = new Promise((resolve, reject) => {
   console.log("Ninja Delayed promise executor");
   setTimeout(()=>{
       console.log("resolviendo ninjaDelayedPromise");
       resolve("Hatori");
   }, 3000)
});

console.log(ninjaDelayedPromise);

ninjaDelayedPromise.then(ninja => {
   console.log(ninja); // should return hattori
});