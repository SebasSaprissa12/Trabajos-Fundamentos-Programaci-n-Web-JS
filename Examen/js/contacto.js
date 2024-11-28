(function () {
  emailjs.init("aO3WuNU6F9fLpJ3e_"); // Reemplaza "YOUR_API_KEY" con tu propia API Key
})();

// Validación y envío del formulario de contacto
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar recargar la página

    // Obtener los campos del formulario
    const name = document.querySelector('input[name="name"]');
    const email2 = document.querySelector('input[name="email2"]');
    const subject = document.querySelector('input[name="subject"]');
    const message = document.querySelector('textarea[name="message"]');

    // Verificar si algún campo está vacío
    if (!name.value || !email2.value || !subject.value || !message.value) {
      Swal.fire({
        icon: "error",
        title: "Campos Vacíos",
        text: "Por favor, completa todos los campos del formulario.",
        confirmButtonText: "Aceptar",
      });
      return; // Detener el envío si hay campos vacíos
    }

    // Enviar el formulario usando EmailJS si todos los campos son válidos
    emailjs.sendForm("service_i8r7ieb", "template_ww40gc6", this).then(
      function (response) {
        console.log("Mensaje enviado exitosamente:", response);
        Swal.fire({
          icon: "success",
          title: "¡Gracias por tus comentarios!",
          text: "Tu mensaje ha sido enviado con éxito.",
          confirmButtonText: "Aceptar",
        });
      },
      function (error) {
        console.log("Error al enviar el mensaje:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el mensaje. Intenta de nuevo más tarde.",
          confirmButtonText: "Aceptar",
        });
      }
    );
  });

// Validación y envío del formulario de suscripción
document
  .getElementById("subscriptionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar recargar la página

    // Obtener el campo de correo electrónico
    const email = document.querySelector('input[name="email"]');

    // Verificar si el campo de correo está vacío
    if (!email.value) {
      Swal.fire({
        icon: "error",
        title: "Correo Requerido",
        text: "Por favor, ingresa tu correo electrónico para suscribirte.",
        confirmButtonText: "Aceptar",
      });
      return; // Detener el envío si el campo de correo está vacío
    }

    // Enviar el formulario usando EmailJS si el campo de correo no está vacío
    emailjs.sendForm("service_i8r7ieb", "template_ww40gc6", this).then(
      function (response) {
        console.log("Suscripción exitosa:", response);
        Swal.fire({
          icon: "success",
          title: "¡Suscripción exitosa!",
          text: "Gracias por suscribirte a nuestras novedades.",
          confirmButtonText: "Aceptar",
        });
      },
      function (error) {
        console.log("Error al suscribir:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema con la suscripción. Por favor, intenta de nuevo más tarde.",
          confirmButtonText: "Aceptar",
        });
      }
    );
  });
