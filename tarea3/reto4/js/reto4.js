// Función que se ejecuta al cargar la página
window.onload = function () {
    const outputImg = document.getElementById("output-img");
    const characterselect = document.getElementById("personaje");
    const outputTxt = document.getElementById("output-txt");

    outputImg.innerHTML = "<img src='img/combo/chainsawman.png' class='img-fluid rounded' alt='logo' />";

    characterselect.onchange = function (e) {
        let n = e.target.value;

        // Ruta de la imagen y texto informativo de los personajes
        const personajes = [
            { imagen: `img/combo/${n}.png`, info: "Denji, Edad: 17" },
            { imagen: `img/combo/${n}.png`, info: "Makima, Edad: Desconocida" },
            { imagen: `img/combo/${n}.png`, info: "Aki Hayakawa, Edad: 22" },
            { imagen: `img/combo/${n}.png`, info: "Power, Edad: 16" },
            { imagen: `img/combo/${n}.png`, info: "Himeno, Edad: 26" },
            { imagen: `img/combo/${n}.png`, info: "Reze, Edad: 18" }
        ];

        // Mostrar la imagen y el texto del personaje seleccionado
        outputImg.innerHTML = `<img src='${personajes[n - 1].imagen}' class='img-fluid img-thumbnail rounded'/>`;
        outputTxt.innerHTML = personajes[n - 1].info;
    };
};
