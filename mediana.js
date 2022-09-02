function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, newElement) {
            return valorAcumulado + newElement;
        }
    )

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) {
    
    const listaAco = lista.sort();
    const mitadLista = parseInt(listaAco.length / 2);

    let mediana;

    if (esPar(listaAco.length)) {
        const element1 = listaAco[mitadLista];
        const element2 = listaAco[mitadLista - 1];

        const promedioElements = calcularMediaAritmetica([element1, element2]);
        return mediana = promedioElements;
    } else {
        return mediana = listaAco[mitadLista];
    }
}