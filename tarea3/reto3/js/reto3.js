//URL
const sitios = [
    { nombre: "Ninguno", url: "" },
    { nombre: "Sitio 1", url: "https://www.novacinemas.cr/cartelera/" },
    { nombre: "Sitio 2", url: "https://www.google.com/" },
    { nombre: "Sitio 3", url: "https://www.wikipedia.org/" },
    { nombre: "Sitio 4", url: "https://www.github.com/" },
    { nombre: "Sitio 5", url: "https://www.youtube.com/" }
];

// Función para crear el combo box dinámicamente
function crearCombo() {

    const select = document.createElement("select");
    select.id = "sitios";

    sitios.forEach(sitio => {
        const option = document.createElement("option");
        option.textContent = sitio.nombre;
        option.value = sitio.url;
        select.appendChild(option);
    });


    select.addEventListener("change", function () {
        validarSeleccion();
    });


    const container = document.getElementById("combo-container");
    container.appendChild(select);
}

function validarSeleccion() {
    const select = document.getElementById("sitios");
    const sitioSeleccionado = select.value;
    const nombreSitio = select.options[select.selectedIndex].text;

    // Validación: Si no se selecciona un sitio válido
    if (sitioSeleccionado === "") {
        Swal.fire({
            icon: "error",
            title: "Debe seleccionar un sitio",
            showClass: {
                popup: "animate__animated animate__fadeIn"
            },
            hideClass: {
                popup: "animate__animated animate__fadeOut"
            },
            backdrop: `
                rgba(0, 0, 0, 0.2)  /* Fondo con transparencia del 20% */
                center
                no-repeat
            `,
            allowOutsideClick: false,
            heightAuto: false,
            scrollbarPadding: false,
        });
    } else {
        // Mostrar alerta de redirigiendo
        Swal.fire({
            icon: "info",
            title: `Redirigiendo a ${nombreSitio}`,
            text: "Por favor espera...",
            timer: 2000,
            showConfirmButton: false,
            backdrop: `
                rgba(0, 0, 0, 0.2)  /* Fondo con transparencia del 20% */
                center
                no-repeat
            `,
            willClose: () => {
                // Redirigir al sitio seleccionado cuando se cierre la alerta
                window.open(sitioSeleccionado, '_blank');
            },
            allowOutsideClick: false,
            stopKeydownPropagation: false,
            heightAuto: false,
            scrollbarPadding: false,
        });
    }
}

window.onload = crearCombo;
