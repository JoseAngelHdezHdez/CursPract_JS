// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDes = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDes) / 100;

    return precioConDescuento;
}

function onCLickButtomPriceDis() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const DiscountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, DiscountValue);
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precion con descuento son $" + precioConDescuento
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDes,
//     precioConDescuento,
// });