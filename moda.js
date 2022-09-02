const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

function findMode(lista) {
    const listaCount = {};

    lista.map(
        function (element) {
            if (listaCount[element]) {
                listaCount[element] += 1;
            } else {
                listaCount[element] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function (elementA, elementB) {
            return elementA[1] - elementB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];
    return moda;
}

