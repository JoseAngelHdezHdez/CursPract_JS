const lista1 = [
    100,
    200,
    300,
    500,
];


function calcularMediaAritmetica(lista) {
    // let sumaLsita = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLsita += lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, newElement) {
            return valorAcumulado + newElement;
        }
    )

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}