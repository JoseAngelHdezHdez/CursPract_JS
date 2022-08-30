//Codigo Cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado
}


//Codigo Triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}



//Codigo Circulo
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}


//Aqui se interactua cn el html
//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("lado1")
    const lado1 = input1.value;

    const input2 = document.getElementById("lado2")
    const lado2 = input2.value;

    const input3 = document.getElementById("base")
    const baseTri = input3.value;

    const perimetro = perimetroTriangulo(lado1, lado2, baseTri);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("altura")
    const altura = input1.value;

    const input2 = document.getElementById("base")
    const baseTri = input2.value;

    const area = areaTriangulo(altura, baseTri);
    alert(area);
}

//Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("radio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("radio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}
