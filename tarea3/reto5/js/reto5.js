document.addEventListener('DOMContentLoaded', function() {
    const modeloSelect = document.getElementById('modelo');
    const versionSelect = document.getElementById('version');
    const carImage = document.getElementById('carImage');
    const resultText = document.getElementById('result');
    const calculateBtn = document.getElementById('calculateBtn');

    const versions = {
        navara: ['XE', 'LE', 'PRO-4X'],
        qashqai: ['Advance', 'Exclusive'],
        xtrail: ['Sense', 'Advance', 'Exclusive']
    };

    const carImages = {
        navara: 'img/navara.png',
        qashqai: 'img/qashqai.png',
        xtrail: 'img/xtrail.png'
    };

    // Imagen por defecto al cargar la página
    carImage.src = 'img/Nissan.png';

    // Habilitar las versiones según el modelo seleccionado
    modeloSelect.addEventListener('change', function() {
        const selectedModel = modeloSelect.value;
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
        const selectedModel = modeloSelect.value;
        const selectedVersion = versionSelect.value;

        if (!selectedModel) {
            Swal.fire({
                icon: 'warning',
                title: 'Error',
                text: 'Por favor, seleccione un modelo.'
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
        resultText.textContent = `El precio aproximado para el modelo ${selectedModel.toUpperCase()} versión ${selectedVersion.toUpperCase()} es $${price.toLocaleString()}.`;

        carImage.src = carImages[selectedModel];
        carImage.style.display = 'block';
    });

    // Función para calcular el precio 
    function calculatePrice(model, version) {
        const basePrices = {
            navara: 30000,
            qashqai: 25000,
            xtrail: 28000
        };
        
        const versionMultipliers = {
            xe: 1.0,
            le: 1.2,
            'pro-4x': 1.3,
            advance: 1.1,
            exclusive: 1.25,
            sense: 1.05
        };

        return basePrices[model] * versionMultipliers[version];
    }
});
