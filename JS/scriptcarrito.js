// Selección de elementos del DOM
const botonesAgregar = document.querySelectorAll('.btnAgregarCarrito');
const listaCarrito = document.querySelector("#carrito ul");
const totalCarrito = document.querySelector("#total");
const mensajePagarCarrito = document.getElementById("mensaje");
const botonBorrar = document.querySelector("#btn-borrar");
const botonPagar = document.querySelector("#btn-ir-a-pagar");

// Variables
let totalAPagar = 0;
const carrito = {}; // Objeto para almacenar productos y sus cantidades

// Función para actualizar el total del carrito
function actualizarTotalCarrito() {
    totalCarrito.textContent = `Total a pagar: $${totalAPagar.toFixed(2)}`;
}

// Función para mostrar mensaje si el carrito está vacío
function verificarCarritoVacio() {
    mensajePagarCarrito.textContent = Object.keys(carrito).length === 0
        ? "El carrito está vacío."
        : "";
}

// Función para actualizar la vista del carrito
function actualizarVistaCarrito() {
    const fragment = document.createDocumentFragment();
    listaCarrito.innerHTML = ""; // Limpiar lista antes de volver a mostrarla

    for (const [indice, { nombre, valor, cantidad }] of Object.entries(carrito)) {
        const elementoLi = document.createElement("li");
        elementoLi.textContent = `Perfume ${nombre}: $${valor} x ${cantidad} (Total: $${(valor * cantidad).toFixed(2)})`;

        // Crear botón de eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar"; // Botón para eliminar una unidad
        botonEliminar.style.marginLeft = "10px";
        botonEliminar.style.padding = "5px 10px";
        botonEliminar.style.backgroundColor = "#f39c12";
        botonEliminar.style.color = "white";
        botonEliminar.style.border = "none";
        botonEliminar.style.borderRadius = "5px";
        botonEliminar.style.cursor = "pointer";
        botonEliminar.style.fontSize = "16px";
        botonEliminar.addEventListener("click", () => {
            if (carrito[indice].cantidad > 1) {
                carrito[indice].cantidad--; // Restar la cantidad
                totalAPagar -= valor; // Restar el valor del total
                actualizarVistaCarrito(); // Actualizar la vista
                actualizarTotalCarrito(); // Actualizar el total
            } else {
                delete carrito[indice]; // Eliminar el producto si la cantidad llega a 0
                totalAPagar -= valor; // Restar el valor del total
                actualizarVistaCarrito(); // Actualizar la vista
                actualizarTotalCarrito(); // Actualizar el total
                verificarCarritoVacio(); // Verificar si el carrito está vacío
            }
        });

        // Agregar botón de eliminar
        elementoLi.appendChild(botonEliminar);

        fragment.appendChild(elementoLi);
    }

    listaCarrito.appendChild(fragment);
    actualizarTotalCarrito();
}

// Función para agregar productos al carrito
function agregarProductoAlCarrito(indice) {
    const producto = productos[indice];

    if (!producto) {
        console.error('Producto no encontrado');
        return;
    }

    if (carrito[indice]) {
        carrito[indice].cantidad++;
    } else {
        carrito[indice] = {
            nombre: producto.nombre,
            valor: producto.valor,
            cantidad: 1,
        };
    }

    totalAPagar += producto.valor;
    actualizarVistaCarrito();
    verificarCarritoVacio();
}

// Asignar eventos a los botones de agregar
botonesAgregar.forEach((boton, indice) => {
    boton.addEventListener("click", () => agregarProductoAlCarrito(indice));
});

// Función para borrar todo el carrito
function borrarCarrito() {
    Object.keys(carrito).forEach(key => delete carrito[key]);
    totalAPagar = 0;
    listaCarrito.innerHTML = "";
    totalCarrito.textContent = "Total a pagar: $0";
    verificarCarritoVacio();
}

// Asignar evento al botón de borrar todo el carrito
botonBorrar.addEventListener("click", borrarCarrito);

// Función para ir a la página de pago
function irAPagar() {
    if (Object.keys(carrito).length === 0) {
        mensajePagarCarrito.textContent = "No hay productos en el carrito";
        alert('No puedes proceder con el pago sin productos en el carrito.');
    } else {
        window.location.href = "\.pagos.html";
    }
}

// Asignar evento al botón de pagar
botonPagar.addEventListener("click", irAPagar);
