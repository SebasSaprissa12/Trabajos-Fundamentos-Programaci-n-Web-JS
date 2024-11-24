// Función para redirigir con SweetAlert para el botón "Sitio Web"
document.getElementById("btn-sitio").addEventListener("click", function () {
    Swal.fire({
        title: "Redirigiendo al Sitio Web...",
        showConfirmButton: false,
        timer: 3000, 
        html: '<iframe width="320" height="240" src="https://lottie.host/embed/c86d7690-d958-4ec6-9cb0-6c897f969799/6Suy7K4BFm.json"></iframe><br><br><p>',
    }).then(() => {
        window.location.href = "./inicio.html"; // URL del sitio web
    });
});

// Función para redirigir con SweetAlert para el botón "Aplicación Web"
document.getElementById("btn-aplicacion").addEventListener("click", function () {
    Swal.fire({
        title: "Redirigiendo a la Aplicación Web...",
        showConfirmButton: false,
        timer: 3000, 
        html: '<iframe width="320" height="240" src="https://lottie.host/embed/c86d7690-d958-4ec6-9cb0-6c897f969799/6Suy7K4BFm.json"></iframe><br><br><p>',
    }).then(() => {
        window.location.href = "#";
    });
});
