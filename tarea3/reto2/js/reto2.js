// Función para convertir dólares a colones
function convertirDolares() {
    const montoDolares = parseFloat(document.getElementById('montoDolares').value);
    const tipoCambio = parseFloat(document.getElementById('tipoCambioDolares').value);

    // Validación de campos vacíos o inválidos
    if (isNaN(montoDolares) || isNaN(tipoCambio) || montoDolares <= 0 || tipoCambio <= 0) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Debe ingresar un monto y un tipo de cambio válidos para convertir a colones.",
            showClass: {
                popup: "animate__animated animate__fadeIn"
            },
            hideClass: {
                popup: "animate__animated animate__fadeOut"
            }
        });
    } else {
        const colones = montoDolares * tipoCambio;
        document.getElementById('resultadoDolares').innerHTML = `Monto en colones: ₡${colones.toFixed(2)}`;

        Swal.fire({
            icon: "success",
            title: "Conversión exitosa",
            text: `El monto en colones es ₡${colones.toFixed(2)}.`,
            showClass: {
                popup: "animate__animated animate__fadeIn"
            },
            hideClass: {
                popup: "animate__animated animate__fadeOut"
            }
        });
    }
}

// Función para convertir colones a dólares 
function convertirColones() {
    const montoColones = parseFloat(document.getElementById('montoColones').value);
    const tipoCambio = parseFloat(document.getElementById('tipoCambioColones').value); // Se espera el valor 0.0020

    // Validación de campos vacíos o inválidos
    if (isNaN(montoColones) || isNaN(tipoCambio) || montoColones <= 0 || tipoCambio <= 0) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Debe ingresar un monto y un tipo de cambio válidos para convertir a dólares.",
            showClass: {
                popup: "animate__animated animate__fadeIn"
            },
            hideClass: {
                popup: "animate__animated animate__fadeOut"
            }
        });
    } else {
        const dolares = montoColones / tipoCambio;
        document.getElementById('resultadoColones').innerHTML = `Monto en dólares: $${dolares.toFixed(2)}`;

        Swal.fire({
            icon: "success",
            title: "Conversión exitosa",
            text: `El monto en dólares es $${dolares.toFixed(2)}.`,
            showClass: {
                popup: "animate__animated animate__fadeIn"
            },
            hideClass: {
                popup: "animate__animated animate__fadeOut"
            }
        });
    }
}


// Funciones para limpiar los campos de entrada y resultados
function limpiarDolares() {
    document.getElementById('montoDolares').value = '';
    document.getElementById('tipoCambioDolares').value = '';
    document.getElementById('resultadoDolares').innerHTML = '';
}

function limpiarColones() {
    document.getElementById('montoColones').value = '';
    document.getElementById('tipoCambioColones').value = '';
    document.getElementById('resultadoColones').innerHTML = '';
}