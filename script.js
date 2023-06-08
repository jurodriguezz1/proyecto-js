

//obtener referencias a los elementos del dom
const items = document.querySelectorAll('.item');
const carrito = document.getElementById('carrito');
const total = document.getElementById('total');
const btnVaciar = document.getElementById('btnVaciar');

// agregar eventos a los botones agregar
items.forEach(item =>{
    const btn = item.querySelector('.btn');
    btn.addEventListener('click', agregaAlCarrito);
});

//funcion para agregar un producto al carrito+
function agregaAlCarrito(event){
    const producto = event.target.parentNode.querySelector('span').innerText;
    const imagen = event.target.parentNode.querySelector('img').scr;
    const precio = obtenerPrecio(producto);
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = imagen;
    img.alt = producto;
    li.appendChild(img);
    li.appendChild(document.createTextNode(producto + '-$' + precio));
    carrito.appendChild(li);
    total.innerText = calcularTotal();
}

//funcion para obtener precio del prodcto
function obtenerPrecio(producto) {
    let precio = 0;
    switch (producto) {
        case 'Puffer Alaska':
        precio = 19800;
        break;

        case 'Pijamanta Corderito':
        precio = 22000;
        break;

        case 'Puffer Metalizada':
        precio = 31000;
        break;

        case 'Puffer Mia':
        precio = 30000;
        break;

        case 'Pijama Polarsoft':
        precio = 22000;
        break;

        case 'Vegan Leather Jacket':
        precio = 32000;
        break;

        default:
            precio = 0;
    }
return precio;
}

//funcion para calcular total
function calcularTotal(){
    let total = 0;
    const productos = carrito.querySelectorAll('li');
    productos.forEach(producto => {
        const textoProducto = producto.innerText;
        const precio = parseFloat(textoProducto.substring(textoProducto.lastIndexOf('$') + 1));
        total += precio;
        });
        return total;
}

//evento para vaciar el carrito
btnVaciar.addEventListener('click', vaciarCarrito);

//funcion para vaciatlo
function vaciarCarrito() {
    carrito.innerHTML = '';
    total.innerText = '0';
} 

//formulario
document.addEventListener('DOMContentLoaded' , function() {
    var form = document.getElementById('formulario');

    form.addEventListener('submit' , function(e) {
        e.preventDefault();

        //obtener vlores del form
var nombre = form.elements['nombre'].value; 
var email = form.elements['email'].value; 
var telefono = form.elements['telefono'].value; 
var comentario = form.elements['comentario'].value; 

// objeto para guardar la info
var informacion = {
    nombre : nombre,
    email : email,
    telefono : telefono,
    comentario : comentario,
};

// objeto a cadena json
var informacionJSON = JSON.stringify(informacion);

//guardar info de manera local
localStorage.setItem('formularioData' , informacionJSON);

//limpiar form
form.reset();

    });

});

document.addEventListener('DOMContentLoaded' , function(){
    var storedData = localStorage.getItem('formularioData');
    
    if (storedData){
        var informacion = JSON.parse(storedData);

        console.log(informacion);
    }
});


Swal.fire({
    title: 'Bienvenido a Hanover',
    text: 'queres continuar?',
    icon: 'success',
    confirmButtonText: 'Si',
})