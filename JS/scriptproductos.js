const productos = [
    { nombre: "Savage", descripcion: "150ML", imagen: "IMG/savage.png", valor: 200000, disponible: true },
    { nombre: "Good", descripcion: "100ML", imagen: "IMG/good.png", valor: 150000, disponible: true },
    { nombre: "La Vie", descripcion: "125ML", imagen: "IMG/lavie.png", valor: 130000, disponible: true },
    { nombre: "Armani", descripcion: "100ML", imagen: "IMG/armani.png", valor: 100000, disponible: true },
    { nombre: "Very irresitible", descripcion: "125ML", imagen: "IMG/very-irresistible.jpg", valor: 50000, disponible: true },
    { nombre: "cheekyl", descripcion: "100ML", imagen: "IMG/cheeky.webp", valor: 50000, disponible: false },
    { nombre: "Allure", descripcion: "125ML", imagen: "IMG/allure-homme-sport.jpg", valor: 80000, disponible: true },
    { nombre: "Scandal", descripcion: "100ML", imagen: "IMG/scandal-pour-homme.jpg", valor: 180000, disponible: true },
    { nombre: "Coco", descripcion: "125ML", imagen: "IMG/coco-mademoiselle.jpg", valor: 230000, disponible: true },

];

function generarHTMLProductos(productos) {
    return productos.map((producto) => `
        <div class="card ${producto.disponible ? '' : 'agotado'}">
            <div class="contenido-tarjeta">
                <h3>${producto.nombre}</h3>
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.descripcion}</p>
            </div>
            <div class="pie-tarjeta">
                <div>    
                    <p>Precio: $${producto.valor.toLocaleString()}</p>
                </div>
                </div>
                <div>
                    <input 
                        class="btnAgregarCarrito" 
                        type="button" 
                        value="${producto.disponible ? 'Agregar al carrito' : 'Agotado'}" 
                        ${producto.disponible ? '' : 'disabled'}
                    >
                </div>
        </div>
    `).join('');
}

// Seleccionar contenedor y asignar HTML generado
const contenedorCursos = document.getElementById("productos");
if (contenedorCursos) {
    contenedorCursos.innerHTML = generarHTMLProductos(productos);
} else {
    console.error('El contenedor "productos" no fue encontrado en el DOM.');
}
