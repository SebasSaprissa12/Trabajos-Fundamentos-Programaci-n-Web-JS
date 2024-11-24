// Variable de arreglo
let micarrusel = {};
let foto = 0;
let total = 0;

// Arreglo para cargar las imágenes y el título de cada foto
micarrusel = [
    { imageurl: "imagenes/Spa2.jpg", titulo: "Imagen Spa 2" },
    { imageurl: "imagenes/Spa3.jpg", titulo: "Imagen Spa 3" },
    { imageurl: "imagenes/Spa4.jpg", titulo: "Imagen Spa 4" },
    { imageurl: "imagenes/Spa5.jpg", titulo: "Imagen Spa 5" },
    { imageurl: "imagenes/Spa6.jpg", titulo: "Imagen Spa 6" }
];

// Función que permite cambiar las imágenes (anterior y siguiente)
let cambiar = function (mas) {
    // Almacena la cantidad total de imágenes
    total = micarrusel.length;
    
    // Almacena la próxima foto
    foto = foto + mas;
    
    // Condicionales para determinar la imagen a presentar
    if (foto > total) {
        foto = 1; // Si se pasa del último, regresa al primero
    }
    if (foto < 1) {
        foto = total; // Si está antes del primero, va al último
    }
    
    // Instrucciones que apuntan a cada imagen y título que brinda cada logotipo
    // Permite apuntar al arreglo de las fotos con la ruta de cada una
    document.thumb.src = micarrusel[foto - 1].imageurl;

    // Asignación del ID título
    let titulo = document.getElementById('titulo');
    
    // Asignación del arreglo para referenciar la foto con el título
    titulo.innerText = micarrusel[foto - 1].titulo;
};
