// script.js

function mostrarDescripcion(personaje) {
    // Ocultar todas las descripciones activas excepto la seleccionada
    const descripciones = document.querySelectorAll('.descripcion');
    descripciones.forEach(desc => {
      if (desc.parentElement.id !== personaje) {
        desc.classList.remove('descripcion-activa');
        setTimeout(() => (desc.style.height = '0'), 300); // Asegura el cierre
      }
    });
  
    // Mostrar la descripción del personaje seleccionado
    const li = document.getElementById(personaje);
    let descripcion = li.querySelector('.descripcion');
  
    if (descripcion) {
      // Si ya existe, alternamos su visibilidad
      const activa = descripcion.classList.toggle('descripcion-activa');
      descripcion.style.height = activa ? '69px' : '0'; // Ajustar según el contenido
    } else {
      // Crear la descripción si no existe
      descripcion = document.createElement('div');
      descripcion.className = 'descripcion descripcion-activa';
      descripcion.textContent = obtenerDescripcion(personaje);
      li.appendChild(descripcion);
      descripcion.style.height = '50px'; // Desplegar con animación
    }
  }
  
  // Función para obtener la descripción de cada personaje
  function obtenerDescripcion(personaje) {
    const datos = {
      denji: 'Denji: Protagonista con el corazón de pochita, su mascota',
      power: 'Power: Demonio de sangre, conocida por su comportamiento impredecible.',
      kobeni: 'Kobeni Higashiyawa: Ella no es muy valiente y se asusta fácilmente por los Demonios',
      quan: 'Quanxi: Tranquila y estoica',
      makima: 'Makima: Una mujer enigmática con poder sobre los demonios.',
      reze: 'Reze: Demonio explosivo, peligrosa y calculadora.'
    };
    return datos[personaje];
  }
  