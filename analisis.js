//Helpers o Utils
function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, newElement) {
            return valorAcumulado + newElement;
        }
    )

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de mediana
function medianaSalaries(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad];
        const personaMitad2 = lista[mitad - 1];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana Genaral
const salariesCol = mexico.map(
    function (persona) {
        return persona.salary;
    }
);

const salariesColSorted = salariesCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);
const medianaGeneralMex = medianaSalaries(salariesColSorted);


//Mediana del top 10%
const spliceStart = (salariesColSorted.length * 90) / 100;
const spliceCount = salariesColSorted.length - spliceStart;

const salariosMexTop10 = salariesColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Mex = medianaSalaries(salariosMexTop10);


console.log(
    medianaGeneralMex,
    medianaTop10Mex,
);