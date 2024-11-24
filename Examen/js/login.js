// Función login
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();  // Evita que el formulario se envíe automáticamente
    login();
});

function validation_alert(ptext) {
    Swal.fire({
        title: "Error",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#e0a500",
        html: '<iframe width="320" height="240" src="https://lottie.host/embed/d8e2b5cb-08b6-4889-aa57-9045d89d0f57/kZufuIpcGR.json"></iframe><br><p>' + ptext + '</p>',
    });
}

function login() {
    let user_input = document.getElementById("usuario").value;
    let pass_input = document.getElementById("clave").value;

    // Declaración de los datos de usuario y contraseña respectivamente
    let username = "cenfo";
    let password = "123";

    let input = [user_input, pass_input];
    let input_id = ["usuario", "clave"];
    let error_count = 0;
    let text = "";

    // Validación de campos vacíos
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "Los campos requeridos NO pueden estar vacíos.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    // Validación de credenciales correctas
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                title: "¡Bienvenido!",
                showConfirmButton: false,
                timer: 5000,
                html: '<iframe width="320" height="240" src="https://lottie.host/embed/c86d7690-d958-4ec6-9cb0-6c897f969799/6Suy7K4BFm.json"></iframe><br><br><p>Ingresando...</p>',
            }).then(() => {
                window.location.href = "landing.html";
            });
        } else {
            text = "Su usuario o contraseña son inválidos.";
            validation_alert(text);
        }
    }
}