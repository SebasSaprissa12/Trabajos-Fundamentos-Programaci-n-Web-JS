// Función para calcular el costo de la habitación con tipos específicos
function calcularCosto(checkIn, checkOut, tipoHabitacion, habitaciones) {
    const noches = (new Date(checkOut) - new Date(checkIn)) / (1000 * 3600 * 24); // Cálculo de noches
    const costoPorNoche = parseFloat(tipoHabitacion); // Costo por noche según la selección
    const costoTotal = noches * costoPorNoche * habitaciones;
    return costoTotal > 0 ? costoTotal : 0; // Validación para evitar valores negativos
  }
  
  // Función para validar la fecha de salida
  function validarFechas() {
    const checkIn = document.querySelector('[name="check_in"]').value;
    const checkOut = document.querySelector('[name="check_out"]').value;
  
    if (!checkIn || !checkOut) {
      Swal.fire('Error', 'Por favor, selecciona las fechas de entrada y salida.', 'error');
      return false;
    }
  
    if (new Date(checkIn) >= new Date(checkOut)) {
      Swal.fire('Error', 'La fecha de salida debe ser posterior a la fecha de entrada.', 'error');
      return false;
    }
    return true;
  }
  
  // Evento para el formulario de reserva
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario para procesar los datos
  
    if (validarFechas()) {
      const checkIn = document.querySelector('[name="check_in"]').value;
      const checkOut = document.querySelector('[name="check_out"]').value;
      const adultos = document.querySelector('[name="adults"]').value || 0;
      const niños = document.querySelector('[name="childs"]').value || 0;
      const habitaciones = document.querySelector('[name="rooms"]').value || 1;
      const tipoHabitacion = document.querySelector('[name="room_type"]').value;
  
      const costo = calcularCosto(checkIn, checkOut, tipoHabitacion, habitaciones);
  
      if (costo > 0) {
        // Mostrar el costo total al usuario
        Swal.fire({
          title: 'Costo Total',
          text: `El costo total es: $${costo.toFixed(2)}`,
          icon: 'success',
          confirmButtonText: 'Continuar'
        }).then(() => {
          // Mostrar el botón de PayPal para proceder con el pago
          mostrarBotonPaypal(costo, checkIn, checkOut, adultos, niños, habitaciones, tipoHabitacion);
        });
      } else {
        Swal.fire('Error', 'Verifica los datos ingresados. El cálculo del costo no es válido.', 'error');
      }
    }
  });
  
  // Función para mostrar el botón de PayPal
  function mostrarBotonPaypal(costo, checkIn, checkOut, adultos, niños, habitaciones, tipoHabitacion) {
    // Limpia el contenedor del botón de PayPal antes de agregar uno nuevo
    const paypalContainer = document.querySelector('#paypal-button-container');
    paypalContainer.innerHTML = '';
  
    paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: costo.toFixed(2), // El costo total como monto a pagar
            },
            description: `Reserva de ${habitaciones} habitaciones tipo ${obtenerNombreHabitacion(tipoHabitacion)} para ${adultos} adultos y ${niños} niños del ${checkIn} al ${checkOut}.`,
          }],
        });
      },
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
          Swal.fire('Pago Exitoso', 'Pago realizado con éxito. ¡Gracias por tu reserva!', 'success');
          console.log('Pago completado:', details);
  
          //Se envia el correo al usuario
          enviarCorreo(checkIn, checkOut, adultos, niños, habitaciones, costo);
        });
      },
      onError: function (err) {
        console.error('Error al procesar el pago:', err);
        Swal.fire('Error', 'Hubo un error al procesar el pago. Intenta nuevamente.', 'error');
      }
    }).render('#paypal-button-container'); // El botón de PayPal se renderiza en un contenedor
  }
  
  
  // Función para obtener el nombre del tipo de habitación basado en su precio
  function obtenerNombreHabitacion(precio) {
    switch (precio) {
      case '150': return 'Basic Family ($150 per night)';
      case '180': return 'Premium Family ($180 per night)';
      case '330': return 'Classic Luxury ($330 per night)';
      case '375': return 'Superior Luxury ($375 per night)';
      case '525': return 'Penthouse ($525 per night)';
      default: return 'Desconocido';
    }
  }
  
  // Función para enviar el correo usando Formspree
  function enviarCorreo(checkIn, checkOut, adultos, niños, habitaciones, costo) {
    const template = `
      Confirmación de Reserva
  
      Hola,
  
      Gracias por realizar tu reserva con nosotros. A continuación, te proporcionamos los detalles:
  
      Check-in: ${checkIn}
      Check-out: ${checkOut}
      Adultos: ${adultos}
      Niños: ${niños}
      Habitaciones: ${habitaciones}
      Costo Total: $${costo}
  
      Nos alegra que hayas elegido nuestro hotel. Si tienes alguna pregunta, no dudes en contactarnos.
  
      - Cosmos Reservations
    `;
  
    const data = {
      to: "ssaprissaa@ucenfotec.ac.cr", // Correo destino
      subject: "Confirmación de Reserva",
      html: template
    };
  
    // URL de tu endpoint de Formspree
    const formspreeEndpoint = "https://formspree.io/f/xwpkakjz";
  
    // Enviar el correo
    fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          Swal.fire('Éxito', 'Correo de confirmación enviado con éxito.', 'success');
        } else {
          Swal.fire('Error', 'Hubo un problema al enviar el correo.', 'error');
        }
      })
      .catch(error => {
        console.error("Error al enviar el correo:", error);
        Swal.fire('Error', 'Hubo un error al enviar el correo.', 'error');
      });
  }


  // Función para validar los campos vacíos
function validarCamposVacios() {
    const checkIn = document.querySelector('[name="check_in"]').value;
    const checkOut = document.querySelector('[name="check_out"]').value;
    const adultos = document.querySelector('[name="adults"]').value;
    const niños = document.querySelector('[name="childs"]').value;
    const habitaciones = document.querySelector('[name="rooms"]').value;
    const tipoHabitacion = document.querySelector('[name="room_type"]').value;
  
    if (!checkIn || !checkOut || !adultos || !habitaciones || !tipoHabitacion) {
      Swal.fire(
        'Campos Incompletos',
        'Por favor, llena todos los campos obligatorios antes de continuar.',
        'warning'
      );
      return false;
    }
  
    return true;
  }
  
  // Evento para el formulario de reserva
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario para procesar los datos
  
    // Validar campos vacíos
    if (!validarCamposVacios()) {
      return; // Detener el flujo si faltan datos
    }
  
    // Validar fechas
    if (validarFechas()) {
      const checkIn = document.querySelector('[name="check_in"]').value;
      const checkOut = document.querySelector('[name="check_out"]').value;
      const adultos = document.querySelector('[name="adults"]').value || 0;
      const niños = document.querySelector('[name="childs"]').value || 0;
      const habitaciones = document.querySelector('[name="rooms"]').value || 1;
      const tipoHabitacion = document.querySelector('[name="room_type"]').value;
  
      const costo = calcularCosto(checkIn, checkOut, tipoHabitacion, habitaciones);
  
      if (costo > 0) {
        // Mostrar el costo total al usuario
        Swal.fire({
          title: 'Costo Total',
          text: `El costo total es: $${costo.toFixed(2)}`,
          icon: 'success',
          confirmButtonText: 'Continuar'
        }).then(() => {
          // Mostrar el botón de PayPal para proceder con el pago
          mostrarBotonPaypal(costo, checkIn, checkOut, adultos, niños, habitaciones, tipoHabitacion);
        });
      } else {
        Swal.fire('Error', 'Verifica los datos ingresados. El cálculo del costo no es válido.', 'error');
      }
    }
  });
  
  
  