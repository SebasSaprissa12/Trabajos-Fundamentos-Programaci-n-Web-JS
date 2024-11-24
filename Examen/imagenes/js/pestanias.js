// Recibe el controlador de eventos y el ID de cada contenido
function opciones(evt, info) {
    // Declaración de variables
    // i controla el for
    // tabcontent controla el contenido de los TABS
    // tablinks controla los enlaces de los TABS
    var i, tabcontent, tablinks;
  
    // Obtener todos los elementos con class = "tabcontent" y ocultarlos
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Obtener todos los elementos con class = "tablinks" y eliminar la clase "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Mostrar la pestaña actual y agregar una clase "active" al botón que abrió la pestaña
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
  }
  