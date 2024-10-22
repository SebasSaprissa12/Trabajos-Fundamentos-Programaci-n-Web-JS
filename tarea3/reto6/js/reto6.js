document.addEventListener('DOMContentLoaded', function () {
    const carImage = document.getElementById('carImage');
    const colorName = document.getElementById('colorName');
    const colorBoxes = document.querySelectorAll('.color-box');

    // Lista de imágenes y nombres de colores
    const carImages = [
        { color: 'red', image: 'img/F40 Red.png', name: 'Ferrari F40 Rojo' },
        { color: 'gray', image: 'img/F40-Grey.png', name: 'Ferrari F40 Gris' },
        { color: 'yellow', image: 'img/F40 Yellow.png', name: 'Ferrari F40 Amarillo' },
        { color: 'black', image: 'img/F40 Black.png', name: 'Ferrari F40 Negro' },
        { color: 'white', image: 'img/F40 White.png', name: 'Ferrari F40 Blanco' }
    ];

    let currentIndex = 0;

    function updateCar() {
        const selectedCar = carImages[currentIndex];
        carImage.style.opacity = 0;
        setTimeout(() => {
            carImage.src = selectedCar.image;
            colorName.textContent = selectedCar.name;
            carImage.style.opacity = 1;
        }, 500);

        colorBoxes.forEach(box => box.classList.remove('active'));
        document.querySelector(`[data-color="${selectedCar.color}"]`).classList.add('active');
    }

    // Botones de navegación
    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? carImages.length - 1 : currentIndex - 1;
        updateCar();
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex === carImages.length - 1) ? 0 : currentIndex + 1;
        updateCar();
    });
    updateCar();
});
