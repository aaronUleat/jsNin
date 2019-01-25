const promise = new Promise((resolve, reject) => {
   reject("Explicity reject promise");
});

promise.then(
    () => fail("Happy path, won't be called!"),
    error => pass("A promise was explicitly rejected!")
);