const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Ajuste en el evento click del navLinks para evitar que se cierre en móviles
navLinks.addEventListener("click", (e) => {
  // Solo cerramos el menú si no se hizo clic en el dropdown o elementos internos
  if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-item')) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// Evitar que el clic en los elementos del dropdown cierre el menú
const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach(item => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();  
  });
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

function menu() {
  let seleccion = document.getElementById('opciones').value;

  switch (seleccion) {
    case 'A':
      Swal.fire({
        html: '<iframe width="320" height="240" src="https://lottie.host/embed/c86d7690-d958-4ec6-9cb0-6c897f969799/6Suy7K4BFm.json"></iframe><br><br><p>',
        title: "Suites de Lujo",
        text: "Un momento por favor...",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.location.href = "Galeria lightbox/deluxe.html";
      });
      return;
    case 'B':
      Swal.fire({
        html: '<iframe width="320" height="240" src="https://lottie.host/embed/c86d7690-d958-4ec6-9cb0-6c897f969799/6Suy7K4BFm.json"></iframe><br><br><p>',
        title: "Suites Familiares",
        text: "Un momento por favor...",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.location.href = "Galeria lightbox/familiar.html";
      });
      return;
    case 'C':
      Swal.fire({
        html: '<iframe width="320" height="240" src="https://lottie.host/embed/c86d7690-d958-4ec6-9cb0-6c897f969799/6Suy7K4BFm.json"></iframe><br><br><p>',
        title: "Penthouse de Lujo",
        text: "Un momento por favor...",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.location.href = "Galeria lightbox/luxury.html";
      });
      return;
    case 'D':
      Swal.fire({
        html: '<iframe width="320" height="240" src="https://lottie.host/embed/c86d7690-d958-4ec6-9cb0-6c897f969799/6Suy7K4BFm.json"></iframe><br><br><p>',
        title: "Demostración de Habitaciones",
        text: "Un momento por favor...",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.location.href = "Galeria lightbox/showcase.html";
      });
      return;
  }
}
