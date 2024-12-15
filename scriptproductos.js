const productos = [
    {
        nombre: "Armani",
        descripcion: "Tamaño",
        imagen: "IMG/armani.png",
        valor: 100000,
    },
    {
        nombre: "Savage",
        descripcion: "Tamaño",
        imagen: "IMG/savage.png",
        valor: 200000,
    },
    {
        nombre: "Good",
        descripcion: "Tamaño",
        imagen: "IMG/good.png",
        valor: 150000,
    },
    {
        nombre: "La Vie",
        descripcion: "Tamaño",
        imagen: "IMG/lavie.png",
        valor: 250000,
    },
    {
        nombre: "Armani",
        descripcion: "Tamaño",
        imagen: "IMG/armani.png",
        valor: 100000,
    },
    {
        nombre: "Savage",
        descripcion: "perfume Savage",
        imagen: "IMG/savage.png",
        valor: 200000,
    },
    {
        nombre: "Good",
        descripcion: "perfume good",
        imagen: "IMG/good.png",
        valor: 150000,
    },
    {
        nombre: "La Vie",
        descripcion: "perfume La vie",
        imagen: "IMG/lavie.png",
        valor: 250000,
    },
    {
        nombre: "Armani",
        descripcion: "perfume Armani",
        imagen: "IMG/armani.png",
        valor: 100000,
    },
    {
        nombre: "Savage",
        descripcion: "perfume Savage",
        imagen: "IMG/savage.png",
        valor: 200000,
    },
    {
        nombre: "Good",
        descripcion: "perfume good",
        imagen: "IMG/good.png",
        valor: 150000,
    },
    {
        nombre: "La Vie",
        descripcion: "perfume La vie",
        imagen: "IMG/lavie.png",
        valor: 250000,
    },
    {
        nombre: "Armani",
        descripcion: "perfume Armani",
        imagen: "IMG/armani.png",
        valor: 100000,
    },
    {
        nombre: "Savage",
        descripcion: "perfume Savage",
        imagen: "IMG/savage.png",
        valor: 200000,
    },
    {
        nombre: "Good",
        descripcion: "perfume good",
        imagen: "IMG/good.png",
        valor: 150000,
    },
    {
        nombre: "La Vie",
        descripcion: "perfume La vie",
        imagen: "IMG/lavie.png",
        valor: 250000,
    },
]
let productosHTML = "";
for(let indice = 0; indice < productos.length; indice++){
    productosHTML += `
        <div class="card-${indice + 1}">
            <div class="contenido-tarjeta">
                <h3>${productos[indice].nombre}</h3>
                <img src=${productos[indice].imagen} alt="savage">
                <p>${productos[indice].descripcion}</p>
            </div>
            <div class="pie-tarjeta">
                <p>Precio: $${productos[indice].valor}</p>
                <input id="btnAgregarCarrito" type="button" value="Agregar al carrito">
            </div>
        </div>
    `
}

const contenedorCursos = document.getElementById("productos");
contenedorCursos.innerHTML = productosHTML;