function calcularFactura() {

    // Obtener los valores del formulario
    const cliente = document.getElementById('cliente').value;
    const articulo = document.getElementById('articulo').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precio = parseFloat(document.getElementById('precio').value);

    // Validación de campos vacíos o no numéricos
    if (cliente === '' || articulo === '' || isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio <= 0) {
        Swal.fire({
            icon: "error",
            title: "Debe llenar todos los campos correctamente",
            text: "Por favor, revise los datos ingresados.",
            showClass: {
                popup: "animate__animated animate__fadeIn"
            },
            hideClass: {
                popup: "animate__animated animate__fadeOut"
            }
        });
        return;
    }

    // Calcular subtotal
    const subtotal = cantidad * precio;

    // Calcular IVA (13%)
    const iva = subtotal * 0.13;

    // Calcular servicio (5%)
    const servicio = subtotal * 0.05;

    // Calcular total
    const total = subtotal + iva + servicio;

    // Mostrar los resultados en la tabla
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
    <h3>Factura</h3>
    <table>
        <tr>
            <th>Cliente</th>
            <td>${cliente}</td>
        </tr>
        <tr>
            <th>Artículo</th>
            <td>${articulo}</td>
        </tr>
        <tr>
            <th>Cantidad</th>
            <td>${cantidad}</td>
        </tr>
        <tr>
            <th>Precio</th>
            <td>₡${precio.toFixed(2)}</td>
        </tr>
        <tr>
            <th>Subtotal</th>
            <td>₡${subtotal.toFixed(2)}</td>
        </tr>
        <tr>
            <th>IVA 13%</</th>
            <td>₡${iva.toFixed(2)}</td>
        </tr>
        <tr>
            <th>Servicio 5%</th>
            <td>₡${servicio.toFixed(2)}</td>
        </tr>
        <tr>
            <th>Total a pagar</th>
            <td>₡${total.toFixed(2)}</td>
        </tr>
    </table>
    `;

    // Mostrar que la factura se generó correctamente
    Swal.fire({
        icon: "success",
        title: "Factura generada correctamente",
        showClass: {
            popup: 'animate__animated animate__fadeIn'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
    });
}

function limpiarCampos() {
    document.getElementById('cliente').value = '';
    document.getElementById('articulo').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('resultado').innerHTML = '';

    Swal.fire({
        icon: "info",
        title: "Campos limpiados",
        showClass: {
            popup: 'animate__animated animate__fadeIn'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
    });
}