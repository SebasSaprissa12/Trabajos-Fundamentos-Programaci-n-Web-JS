window.onload = function () {
  const inputBusqueda = document.getElementById('searchInput');
  inputBusqueda.addEventListener('keypress', validarEnter);
};

function validarEnter(event) {
  if (event.key === 'Enter') {
    searchActivities();
  }
}

function searchActivities() {
  const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
  const activities = {
    "senderismo": { img: "imagenes/1.png", time: "08:00 AM - 12:00 PM" },
    "observación de plantas y animales": { img: "imagenes/2.png", time: "09:00 AM - 01:00 PM" },
    "ciclismo": { img: "imagenes/3.png.jpg", time: "07:00 AM - 11:00 AM" },
    "kayak": { img: "imagenes/kayak.png", time: "02:00 PM - 06:00 PM" },
    "noche de estrellas": { img: "imagenes/4.png", time: "07:00 PM - 10:00 PM" }
  };

  // Buscar la actividad exacta
  const activityData = activities[searchInput];

  displayResults(activityData, searchInput);
}

function displayResults(activityData, searchInput) {
  const resultElement = document.getElementById("pResult");
  resultElement.innerHTML = ""; 

  if (!activityData) {
      resultElement.textContent = "No se encontraron actividades para su búsqueda.";
      resultElement.style.color = "black"; 
      return;
  }


  resultElement.innerHTML = `
      <div class="store-result">
          <img src="${activityData.img}" alt="Imagen de ${searchInput}" class="img-fluid">
          <h3 style="color: #ffb300;">${searchInput}</h3>
          <p>Horario: ${activityData.time}</p>
      </div>
  `;
}

