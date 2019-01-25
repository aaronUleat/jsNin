const promise = new Promise((resolve, reject) => {
    undeclaredVariable++;
});

promise.then(() => fail("Happy path, won't be called!"))
    .catch(error => console.log(error) );


var promise2 = new Promise((resolve, reject) => {
    reject("Explicitly reject a promise!");
});
promise2.then(()=> fail("Happy path, won't be called!"))
    .catch(error => console.log(error));