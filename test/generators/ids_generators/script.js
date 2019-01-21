function* IdGenerator() {
    let id = 0;
    while (true) {
        yield ++id;
    }
}

// Un iterador a travez el cual vamos a pedir un nuevo ID desde el generador
const idIterator = IdGenerator();
// Se pide tres nuevos ID's
const ninja1 = {id: idIterator.next().value};
const ninja2 = {id: idIterator.next().value};
const ninja3 = {id: idIterator.next().value};

console.log(ninja1, ninja2, ninja3);