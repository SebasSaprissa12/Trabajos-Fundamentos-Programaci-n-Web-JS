// Inicializa Email.js con tu API Key
(function () {
  emailjs.init("aO3WuNU6F9fLpJ3e_"); // Reemplaza "YOUR_API_KEY" con tu propia API Key
})();

// Enviar el formulario usando EmailJS
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar recargar la página

    // Enviar el formulario usando EmailJS
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

document
  .getElementById("subscriptionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_i8r7ieb", "template_ww40gc6", this).then(
      function () {
        Swal.fire({
          icon: "success",
          title: "¡Suscripción exitosa!",
          text: "Gracias por suscribirte.",
          confirmButtonText: "Aceptar",
        });
      },
      function (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema con la suscripción. Por favor, intenta de nuevo más tarde.",
          confirmButtonText: "Aceptar",
        });
      }
    );
  });
