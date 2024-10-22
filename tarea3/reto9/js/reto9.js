        // Función para procesar el pago
        function procesarPago() {
            const metodoPago = document.querySelector('input[name="metodoPago"]:checked');
            const terminos = document.getElementById("terminos").checked;
            
            if (!metodoPago) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Seleccione un método de pago.'
                });
                return;
            }
            
            if (!terminos) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Debe aceptar los términos y condiciones.'
                });
                return;
            }

            Swal.fire({
                icon: 'success',
                title: 'Pago procesado',
                text: `Método de pago seleccionado: ${metodoPago.value}`
            });

            document.getElementById("resultadoPago").innerText = 
                `Método de pago seleccionado: ${metodoPago.value}`;
        }

        // Función para mostrar el resultado del curso seleccionado
        function mostrarResultado() {
            const curso = document.querySelector('input[name="curso"]:checked');
            const opciones = document.querySelectorAll('input[type="checkbox"].opcion:checked');
            
            if (!curso) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Seleccione un curso.'
                });
                return;
            }

            let opcionesSeleccionadas = [];
            opciones.forEach(opcion => {
                opcionesSeleccionadas.push(opcion.value);
            });

            let resultado = `Curso seleccionado: ${curso.value}`;
            
            if (opcionesSeleccionadas.length > 0) {
                resultado += `\nIntereses: ${opcionesSeleccionadas.join(', ')}`;
            } else {
                resultado += `\nNo seleccionó ninguna opción de interés.`;
            }

            Swal.fire({
                icon: 'info',
                title: 'Resultado',
                text: resultado.replace(/\n/g, ' ')
            });

            document.getElementById("resultadoCurso").innerText = resultado;
        }