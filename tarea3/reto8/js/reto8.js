let estudiantes = [];

function agregarEstudiante() {

    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    // Validar que los campos no estén vacíos y que las notas sean válidas
    if (!nombre || !apellidos || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {

        Swal.fire({
            icon: 'error',
            title: 'Campos incompletos',
            text: 'Por favor, complete todos los campos con datos válidos.',
        });
        return;
    }

    // Objeto estudiante con los datos ingresados
    const estudiante = {
        nombre: nombre,
        apellidos: apellidos,
        notas: [nota1, nota2, nota3]
    };

    // Agregar el estudiante al array de estudiantes
    estudiantes.push(estudiante);

    // Actualizar la lista desplegable con los estudiantes registrados
    actualizarListaEstudiantes();


    Swal.fire({
        icon: 'success',
        title: 'Estudiante agregado',
        text: `${nombre} ${apellidos} ha sido agregado correctamente.`,
        timer: 1500,
        showConfirmButton: false
    });


    document.getElementById("form").reset();
}

function actualizarListaEstudiantes() {
    const select = document.getElementById("listaEstudiantes");
    select.innerHTML = "<option value=''>Seleccione un estudiante</option>";

    // Se agrega los estudiantes a la lista desplegable
    estudiantes.forEach((estudiante, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.text = `${estudiante.nombre} ${estudiante.apellidos}`;
        select.appendChild(option);
    });
}

function calcularPromedio() {
    const select = document.getElementById("listaEstudiantes");
    const index = select.value;

    if (index === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Selecciona un estudiante',
            text: 'Por favor, seleccione un estudiante de la lista para calcular el promedio.',
        });
        return;
    }

    const estudiante = estudiantes[index];
    const promedio = estudiante.notas.reduce((a, b) => a + b, 0) / estudiante.notas.length;

    Swal.fire({
        icon: 'info',
        title: `Promedio de ${estudiante.nombre}`,
        text: `El promedio de ${estudiante.nombre} ${estudiante.apellidos} es: ${promedio.toFixed(2)}`,
    });

    document.getElementById("resultado").innerText =
        `El promedio de ${estudiante.nombre} ${estudiante.apellidos} es: ${promedio.toFixed(2)}`;
}
