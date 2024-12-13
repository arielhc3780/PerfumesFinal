//console.log("hola");
//dato nombre
//const nombreUsuario = document.getElementById("nombre").value
//console.log(nombreUsuario)
//dato email
//const eMailUsuario = document.getElementById("email").value
//console.log(eMailUsuario)
//dato edad
//const edadUsuario = document.getElementById("edad").value
//console.log(edadUsuario)

document.querySelector(".fboton button[type='submit']").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

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

    // Mostrar errores o enviar el formulario
    if (errores.length > 0) {
        alert("Errores:\n" + errores.join("\n"));
    } else {
        alert("Formulario enviado correctamente.");
    }
});
