// pedimos el usuario que ingrese cuantos miembros son en la familia
let edadMiembros = []
let promedioEdades = []
let sumaEdades = []
let resultado = []

const cantMiembros = parseInt(prompt(`Ingrese la cantidad de miembros de la familia`));


// pedimos que ingrese las edades segun cuantos miembros de la familia son
for (let i = 0; i < cantMiembros; i++) {
    const edad = parseInt(prompt(`Edad de mayor a menor de los integrantes`));
    edadMiembros.push(edad);
}

// sumamos todas las edades y las dividimos por la cant de miembros de la familia
function sumar(edades) {
    let suma = 0;
    for (let i = 0; i < edades.length; i++) {
        suma += edades[i];
    }
    return suma;
}

function dividir(sumaEdades, cantMiembros) {
    resultado = sumaEdades / cantMiembros;
    return resultado;
}

const suma = sumar(edadMiembros);
const promedio = dividir(suma, cantMiembros);

alert (`La edad promedio de su familia es : ` + resultado);
console.log (`La edad promedio de su familia es : ` + resultado);