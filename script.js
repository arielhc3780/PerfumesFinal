
    // Función para verificar el tamaño de la ventana y cambiar el texto
    
    function ajustarTextoH2() {
        const h2 = document.querySelector('.novedades-y-consultas h2');
        
        // Verificar si el ancho de la ventana es menor a 800px
        if (window.innerWidth < 800) {
            h2.textContent = 'Consultas';
        } else {
            h2.textContent = 'Novedades y Consultas';
        }
    }

    // Ejecutar la función cuando se carga la página
    
    ajustarTextoH2();

    // Ejecutar la función cada vez que se redimensiona la ventana
    
    window.addEventListener('resize', ajustarTextoH2);

