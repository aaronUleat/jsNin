function getJSON(url) {
    // Crea una promesa para retornar
    return new Promise((resolve, reject) => {
        // Crea un objeto XMLHttpRequest
       const request = new XMLHttpRequest();
       // inicializa el request
       request.open("GET", url);
       // Registra un evento handler que va ser llamado
        // para obtener la respuesta del servidor
       request.onload = function() {
           try {
               // Inclusive si el servidor a respondido, no significa
               // que nos va a devolver lo que esperabamos. Usamos el resultado
               // solo si el servidor reponde 200 (everything OK)
               if (this.status === 200) {
                   //En el Try parsea la respuesta como JSON string; si es success
                   // y se resuelve la promemsa con un objeto parseado
                   resolve(JSON.parse(this.response));
               }
               //Si el servidor responde con un código
               //de estado diferente, o si hay una excepción
               //al analizar la cadena JSON, rechace la promesa.
               else {
                   reject(this.status + " " + this.statusText );
               }
           }catch (e) {
               reject(e.message);
           }
           request.onerror = function () {
               reject(this.status + " " + this.statusText);
           }
           request.send();
       }
    });
}

getJSON("data/ninjas.json").then(ninjas => {
    console.log(ninjas);
}).catch(e => console.log(e));