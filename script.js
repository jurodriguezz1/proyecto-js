const IVA = 0.21;

let opcion = null;

while (opcion !== 0) {opcion = parseInt(
    prompt("¿Qué desea comprar? Opcion 1: indumentaria, Opcion 2: calzado. Presione 0 para salir"));

if (opcion === 1) {
    //prendas de indumentaria
    const prendas = [
    { nombre: "pijamanta", precio: 14000 },
    { nombre: "pijama polarsoft", precio: 11000 },
    { nombre: "parka corderito", precio: 18500 },
    { nombre: "parka premium", precio: 19000 },
    { nombre: "puffer alaska", precio: 11800 },
    { nombre: "puffer vegan", precio: 19000 },
    ];

    let mensaje = "seleccione una prenda:\n";
    for (let i = 0; i < prendas.length; i++) {
    mensaje += `${i + 1}.${prendas[i].nombre}($${prendas[i].precio})\n`;
    }
    //que el usuario elija una prenda
    const seleccion = parseInt(prompt(mensaje));
    //calcular el precio final
    if (seleccion >= 1 && seleccion <= prendas.length) {
    const prendaSeleccionada = prendas[seleccion - 1];
    const cantidad = parseInt(
        prompt(`¿cuantas unidades de ${prendaSeleccionada.nombre} desea comprar?`)
    );
    const precioConIva = calcularPrecio(prendaSeleccionada, cantidad);
    alert(
        `El precio final a pagar por ${cantidad} unidades de ${prendaSeleccionada.nombre} es: $${precioConIva.toFixed(2)}`);
    } else {
    alert("Opcion invalida");
    }

    function calcularPrecio(producto, cantidad) {
    const precioSinIva = cantidad * producto.precio;
    const precioConIva = precioSinIva * (1 + IVA);
    return precioConIva;
}   
} else if (opcion === 2) {
    //prendas calzado

    const calzado = [
        {nombre:"Qatar", precio: 9000},
        {nombre:"texanas", precio: 18000},
        {nombre:"Zayara", precio: 14000},
    ];

    //mostrar al usuario
    let mensaje = "seleccione un calzado:\n";

    for(let i = 0; i < calzado.length; i++){
        mensaje +=`${i + 1}.${calzado[i].nombre}($${calzado[i].precio})\n`;
    }

    //que el usuario seleccione
    const seleccion = parseInt(prompt(mensaje));

    //Calcular precio final
    if (seleccion >= 1 && seleccion <= calzado.length) {
        const calzadoSeleccionado = calzado[seleccion - 1];
        const cantidad = parseInt(prompt(`¿cuantas unidades de ${calzadoSeleccionado.nombre} desea comprar?`));
        const precioConIva = calcularPrecio(calzadoSeleccionado, cantidad)
        alert(`El precio final a pagar por ${cantidad} unidades de ${calzadoSeleccionado.nombre} es: $${precioConIva.toFixed(2)}`);
    } else {
        alert("Opcion invalida");
    }
} else if (opcion === 0){
    alert("Gracias por tu compra!");
} else {
    alert("opcion invalida;");
}
}

function calcularPrecio(producto, cantidad) {
    const precioSinIva = cantidad * producto.precio;
    const precioConIva = precioSinIva * (1 + IVA);
    return precioConIva;
}   