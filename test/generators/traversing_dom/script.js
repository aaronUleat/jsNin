function* DomTranversal(element) {
    yield element;
    element = element.firstChild;
    while (element) {
        yield *DomTranversal(element);
        element = element.nextElementSibling;
    }
}

const subTree = document.getElementById("subTree");

for (let element of DomTranversal(subTree)) {
    console.log(element);
}