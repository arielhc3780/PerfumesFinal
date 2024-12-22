//creamos un array de objetos con los productos que se van a mostrar en la página
const productos = [
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
    {
        nombre: "Armani",
        descripcion: "perfume Armani",
        imagen: "IMG/armani.png",
        valor: 100000,
    },
]
//creamos un string vacío para almacenar el HTML que se va a generar
let productosHTML = "";
for(let indice = 0; indice < productos.length; indice++){
    productosHTML += `
        <div class="card-${indice + 1}">
            <div class="contenido-tarjeta">
                <h3>${productos[indice].nombre}</h3>
                <img src=${productos[indice].imagen} alt="${productos[indice].nombre}">
                <p>${productos[indice].descripcion}</p>
            </div>
            <div class="pie-tarjeta">
                <div>    
                    <p>Precio: $${productos[indice].valor}</p>
                </div>
                <div>
                    <input class="btnAgregarCarrito" type="button" value="Agregar al carrito">
                </div>
            </div>
        </div>
    `
}
//seleccionamos el contenedor de los cursos y le asignamos el HTML generado
const contenedorCursos = document.getElementById("productos");
contenedorCursos.innerHTML = productosHTML;