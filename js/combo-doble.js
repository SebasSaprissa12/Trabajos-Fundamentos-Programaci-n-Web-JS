document.addEventListener('DOMContentLoaded', function() {
    const roomSelect = document.getElementById('tipo');
    const versionSelect = document.getElementById('version');
    const roomImage = document.getElementById('roomImage');
    const resultText = document.getElementById('result');
    const calculateBtn = document.getElementById('calculateBtn');

    const versions = {
        familiar: ['Basica', 'Premium'],
        lujo: ['Clasica', 'Superior'],
        penthouse: ['Estandar']
    };

    const roomImages = {
        familiar: 'imagenes/family4.jpg',
        lujo: 'imagenes/deluxe4.jpg',
        penthouse: 'imagenes/pent4.jpg'
    };

    // Imagen por defecto al cargar la página
    roomImage.src = 'imagenes/family4.jpg';

    // Habilitar las versiones según el tipo seleccionado
    roomSelect.addEventListener('change', function() {
        const selectedModel = roomSelect.value;
        versionSelect.innerHTML = '<option value="" selected disabled>-- Seleccionar Versión --</option>';
        
        if (versions[selectedModel]) {
            versionSelect.disabled = false;
            versions[selectedModel].forEach(function(version) {
                const option = document.createElement('option');
                option.value = version.toLowerCase();
                option.textContent = version;
                versionSelect.appendChild(option);
            });
        } else {
            versionSelect.disabled = true;
        }
    });

    calculateBtn.addEventListener('click', function() {
        const selectedModel = roomSelect.value;
        const selectedVersion = versionSelect.value;

        if (!selectedModel) {
            Swal.fire({
                icon: 'warning',
                title: 'Error',
                text: 'Por favor, seleccione un tipo de habitación.'
            });
            return;
        }

        if (!selectedVersion) {
            Swal.fire({
                icon: 'warning',
                title: 'Error',
                text: 'Por favor, seleccione una versión.'
            });
            return;
        }

        const price = calculatePrice(selectedModel, selectedVersion);
        resultText.textContent = `El precio por noche aproximado para la habitación ${selectedModel.toUpperCase()} versión ${selectedVersion.toUpperCase()} es $${price.toLocaleString()}.`;

        roomImage.src = roomImages[selectedModel];
        roomImage.style.display = 'block';
    });

    // Función para calcular el precio 
    function calculatePrice(model, version) {
        const basePrices = {
            familiar: 150,
            lujo: 300,
            penthouse: 500
        };
        
        const versionMultipliers = {
            basica: 1.0,
            premium: 1.2,
            clasica: 1.1,
            superior: 1.25,
            estandar: 1.05
        };

        return basePrices[model] * versionMultipliers[version];
    }
});
