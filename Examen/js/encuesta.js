(function () {
    emailjs.init("aO3WuNU6F9fLpJ3e_"); // Reemplaza con tu propia API Key
})();

// Función para incrementar el contador
function incrementarContador() {
    var contadorInput = document.getElementById("contador");
    var contadorValor = parseInt(contadorInput.value);  // Obtener el valor actual del contador
    contadorInput.value = contadorValor + 1;  // Incrementar el valor del contador
}

// Función para decrementar el contador
function decrementarContador() {
    var contadorInput = document.getElementById("contador");
    var contadorValor = parseInt(contadorInput.value);  // Obtener el valor actual del contador
    if (contadorValor > 0) {  // Asegurarse de que no se pueda ir por debajo de 0
        contadorInput.value = contadorValor - 1;  // Decrementar el valor del contador
    }
}

function evaluarEncuesta() {
    // Obtener respuestas de las preguntas
    var respuesta1 = document.getElementById("r1").value;
    var respuesta2 = document.getElementById("r2").value;
    var respuesta3 = document.querySelector('input[name="opinion"]:checked') ? document.querySelector('input[name="opinion"]:checked').value : "";
    var respuesta4 = document.querySelector('input[name="opinion2"]:checked') ? document.querySelector('input[name="opinion2"]:checked').value : "";

    // Respuestas de las opciones destacadas
    var calidad = document.getElementById("calidad").checked ? "Calidad" : "";
    var atencion = document.getElementById("atencion").checked ? "Atención" : "";
    var servicio = document.getElementById("servicio").checked ? "Servicio" : "";

    // Respuestas de cómo se enteró del hotel
    var wifi = document.getElementById("wifi").checked ? "WiFi" : "";
    var piscina = document.getElementById("piscina").checked ? "Piscina" : "";
    var actividades = document.getElementById("actividades").checked ? "Actividades" : "";
    var spa = document.getElementById("spa").checked ? "Spa" : "";
    var otro = document.getElementById("otro").checked ? "Otro" : "";

    // Contador de visitas
    var contadorVisitas = document.getElementById("contador").value;

    // Validar que los campos necesarios no estén vacíos
    if (respuesta1 === "" || respuesta2 === "" || respuesta3 === "" || respuesta4 === "" || contadorVisitas === "") {
        Swal.fire("¡Error!", "Por favor, complete todos los campos del formulario.", "error");
        return; // Detener la ejecución si falta algún campo
    }

    // Muestra las respuestas en la página
    document.getElementById("res0").innerHTML = "¡Gracias por completar la encuesta!";
    document.getElementById("res1").innerHTML = "1. Lo que más destacaría: " + respuesta1;
    document.getElementById("res2").innerHTML = "2. Lo primero que recomendaría: " + respuesta2;
    document.getElementById("res3").innerHTML = "3. ¿Recibió la atención de manera rápida? " + respuesta3;
    document.getElementById("res4").innerHTML = "4. ¿Cómo califica la atención? " + respuesta4;
    document.getElementById("res5").innerHTML = "5. Opciones destacadas: " + calidad + " " + atencion + " " + servicio;
    document.getElementById("res6").innerHTML = "6. ¿Cómo se enteró del hotel? " + wifi + " " + piscina + " " + actividades + " " + spa + " " + otro;
    document.getElementById("res7").innerHTML = "7. Relación calidad-precio: " + respuesta2;
    document.getElementById("res8").innerHTML = "8. ¿Satisfecho con la limpieza? " + respuesta4; 
    document.getElementById("res9").innerHTML = "9. ¿Qué mejorarías? " + respuesta1;  
    document.getElementById("res10").innerHTML = "10. Número de visitas a nuestro hotel: " + contadorVisitas;

    // Enviar la encuesta por Email usando EmailJS
    emailjs.send("service_i8r7ieb", "template_0xm5fqs", {
        respuesta1: respuesta1,
        respuesta2: respuesta2,
        respuesta3: respuesta3,
        respuesta4: respuesta4,
        calidad: calidad,
        atencion: atencion,
        servicio: servicio,
        wifi: wifi,
        piscina: piscina,
        actividades: actividades,
        spa: spa,
        otro: otro,
        contadorVisitas: contadorVisitas
    }).then(function(response) {
        console.log("Éxito", response);
        Swal.fire("¡Gracias por tu feedback!", "Hemos recibido tu encuesta.", "success");
    }, function(error) {
        console.log("Error", error);
        Swal.fire("Oops", "Hubo un problema al enviar la encuesta. Intenta nuevamente.", "error");
    });
}

