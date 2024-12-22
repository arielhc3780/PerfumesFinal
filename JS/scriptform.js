// Evita que el formulario se envíe automáticamente y valida los campos del formulario antes de enviarlo.
document.querySelector(".fboton button[type='submit']").addEventListener("click", function (event) {
    event.preventDefault(); 

// Limpiar mensajes de error previos
document.getElementById('errorMessages').innerHTML = '';

const nombre = document.getElementById("nombre").value.trim();
const email = document.getElementById("email").value.trim();
const mensaje = document.getElementById("mensaje").value.trim();
const edad = document.getElementById("edad").value.trim();
const genero = document.querySelector("input[name='gender']:checked");

let errores = [];

const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (nombre === "") {
        errores.push("El campo 'Nombre' es obligatorio.");
    } else if (!nombreRegex.test(nombre)) {
        errores.push("El campo 'Nombre' solo puede contener letras y espacios.");
    }

// Validar email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errores.push("El campo 'Email' debe contener una dirección válida.");
    }

// Validar mensaje
    if (mensaje === "") {
        errores.push("El campo 'Mensaje' es obligatorio.");
    }

// Validar edad
const edadNumero = parseInt(edad, 10);
    if (isNaN(edadNumero)) {
        errores.push("El campo 'Edad' debe contener un número válido.");
    } else if (edadNumero < 18) {
        errores.push("Solo para mayores de 18 años.");
    }

// Validar género
    if (!genero) {
        errores.push("Debe seleccionar un género.");
    }

// Mostrar errores dentro del formulario
    if (errores.length > 0) {
// Mostrar los errores dentro del contenedor de mensajes
        const errorContainer = document.getElementById('errorMessages');
        errorContainer.innerHTML = '<ul>' + errores.map(error => `<li>${error}</li>`).join('') + '</ul>';
    } else {
// Si no hay errores, mostrar mensaje de éxito
const successMessage = document.createElement('div');
    successMessage.style.color = 'green';
    successMessage.innerHTML = "Formulario enviado correctamente.";
    document.getElementById('errorMessages').appendChild(successMessage);

// Limpiar los campos manualmente
document.getElementById("nombre").value = '';
document.getElementById("email").value = '';
document.getElementById("mensaje").value = '';
document.getElementById("edad").value = '';
        
// Limpiar los radios seleccionados
const radios = document.querySelectorAll('input[name="gender"]');
    radios.forEach(radio => radio.checked = false);
}
});
