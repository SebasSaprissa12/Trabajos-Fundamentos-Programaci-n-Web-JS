const empleados = {
    "109110338": {
        nombre: "Marcos",
        apellidos: "Pérez González",
        lugar: "San José, Costa Rica",
        regimen: "Contributivo",
        anioIngreso: "2015",
        departamento: "Finanzas",
        foto: "img/empleado.png"
    },
    "209110338": {
        nombre: "Antonio",
        apellidos: "López Ramírez",
        lugar: "Alajuela, Costa Rica",
        regimen: "No Contributivo",
        anioIngreso: "2017",
        departamento: "Recursos Humanos",
        foto: "img/empleado2.png"
    },
    "309110338": {
        nombre: "Isabela",
        apellidos: "Vargas Soto",
        lugar: "Heredia, Costa Rica",
        regimen: "Contributivo",
        anioIngreso: "2018",
        departamento: "IT",
        foto: "img/empleada2.png"
    },
    "409110338": {
        nombre: "Ariana",
        apellidos: "Martínez Castro",
        lugar: "Cartago, Costa Rica",
        regimen: "No Contributivo",
        anioIngreso: "2016",
        departamento: "Marketing",
        foto: "img/empleada.png"
    },
    "509110338": {
        nombre: "Jhon",
        apellidos: "Rodríguez Fernández",
        lugar: "Guanacaste, Costa Rica",
        regimen: "Contributivo",
        anioIngreso: "2019",
        departamento: "Ventas",
        foto: "img/empleado3.png"
    }
};

function buscarEmpleado() {
    const id = document.getElementById("empleado-id").value;
    const empleado = empleados[id];

    if (empleado) {
        Swal.fire({
            title: 'Información del Empleado',
            html: `
                <strong>Nombre:</strong> ${empleado.nombre}<br>
                <strong>Apellidos:</strong> ${empleado.apellidos}<br>
                <strong>Lugar:</strong> ${empleado.lugar}<br>
                <strong>Régimen:</strong> ${empleado.regimen}<br>
                <strong>Año de Ingreso:</strong> ${empleado.anioIngreso}<br>
                <strong>Departamento:</strong> ${empleado.departamento}<br>
                <img src="${empleado.foto}" alt="Foto de ${empleado.nombre}" style="width:150px; margin-top:10px;">
            `,
            confirmButtonText: 'Cerrar',
            heightAuto: false
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El usuario NO existe',
            confirmButtonText: 'Cerrar',
            heightAuto: false
        });
    }
}