// Función que se ejecuta al cargar la página
window.onload = function () {
    const outputImg = document.getElementById("output-img");
    const activityselect = document.getElementById("actividad");
    const outputTxt = document.getElementById("output-txt");

    outputImg.innerHTML = "<img src='imagenes/montaña.jpg' class='img-fluid rounded' alt='logo' />";

    activityselect.onchange = function (e) {
        let n = e.target.value;

        // Ruta de la imagen y texto informativo de las actividades
        const actividades = [
            { imagen: `imagenes/${n}.png`, info: "Desde caminatas suaves hasta aventuras más desafiantes, aquí hay una experiencia para cada tipo de explorador" },
            { imagen: `imagenes/${n}.png`, info: "Caminatas guiadas para descubrir aves, animales y plantas únicas" },
            { imagen: `imagenes/${n}.png`, info: "Rutas de ciclismo de montaña te esperan para que disfrutes de la adrenalina en plena naturaleza. ¿Te atreves?" },
            { imagen: `imagenes/${n}.png`, info: "Disfruta de una noche de observación astronómica con telescopios y déjate maravillar por las estrellas" },
        ];

        // Mostrar la imagen y el texto del actividad seleccionado
        outputImg.innerHTML = `<img src='${actividades[n - 1].imagen}' class='img-fluid img-thumbnail rounded'/>`;
        outputTxt.innerHTML = actividades[n - 1].info;
    };
};
