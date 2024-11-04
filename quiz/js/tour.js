// Evento que se ejecuta cuando el DOM se ha cargado completamente
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el contenedor donde se mostrará el tour
  const container = document.querySelector("#tour-container");

  // Crea una panorámica con la imagen proporcionada
  const panorama = new PANOLENS.ImagePanorama("imagenes/1.jpg");

  // Inicializa el visor PANOLENS y lo asocia al contenedor del tour
  const viewer = new PANOLENS.Viewer({ container: container });

  // Configuración del audio de fondo
  const audio = new Audio("audios/ciudad.mp3"); // Ruta del archivo de audio
  audio.loop = true; // Repite el audio en bucle
  audio.volume = 0.5; // Establece el volumen a la mitad

  // Retrasa la reproducción del audio por 3 segundos
  setTimeout(() => {
    audio.play().catch((error) => {
      console.log("Audio no se pudo reproducir automáticamente:", error);
    });
  }, 3000);

  // Crear botón para mutear y personalizar su estilo
  const muteButton = document.createElement("button");
  muteButton.innerText = "🔈 Silenciar"; // Texto inicial del botón
  muteButton.style.position = "absolute";
  muteButton.style.top = "883px";
  muteButton.style.right = "3px";
  muteButton.style.padding = "4px";
  muteButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  muteButton.style.color = "white";
  muteButton.style.border = "none";
  muteButton.style.borderRadius = "5px";
  muteButton.style.cursor = "pointer";
  muteButton.style.zIndex = "2"; // Asegura que el botón esté encima del contenido
  document.body.appendChild(muteButton); // Agrega el botón al DOM

  // Variable para rastrear el estado de mute (silenciado)
  let isMuted = false;

  // Evento de clic para alternar mute/unmute
  muteButton.addEventListener("click", function () {
    isMuted = !isMuted; // Cambia el estado de mute
    audio.muted = isMuted; // Aplica el estado de mute al audio
    muteButton.innerText = isMuted ? "🔇 Activar audio" : "🔈 Silenciar"; // Cambia el texto del botón según el estado

    // Reproduce el audio nuevamente si se desmutea
    if (!isMuted) {
      audio.play().catch((error) => {
        console.log("Error al reproducir audio tras desmutear:", error);
      });
    }
  });

  // Crear botón de invitación para entrar al tour en pantalla completa y personalizar su estilo
  const inviteButton = document.createElement("button");
  inviteButton.innerText = "Haga clic para ingresar al tour"; // Texto del botón
  inviteButton.style.position = "absolute";
  inviteButton.style.top = "80px";
  inviteButton.style.left = "0";
  inviteButton.style.width = "1903px";
  inviteButton.style.height = "850px";
  inviteButton.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  inviteButton.style.color = "white";
  inviteButton.style.border = "none";
  inviteButton.style.fontSize = "24px";
  inviteButton.style.cursor = "pointer";
  inviteButton.style.display = "none"; // Oculto inicialmente
  inviteButton.style.zIndex = "1"; // Se sitúa detrás del botón de mute

  document.body.appendChild(inviteButton); // Agrega el botón al DOM

  // Función para aplicar desenfoque al contenedor del tour y mostrar el botón de invitación
  const applyBlur = () => {
    container.style.filter = "blur(5px)"; // Aplica un desenfoque de 5px al contenedor
    inviteButton.style.display = "block"; // Muestra el botón de invitación
  };

  // Función para eliminar el desenfoque del contenedor del tour y ocultar el botón de invitación
  const removeBlur = () => {
    container.style.filter = "none"; // Quita el desenfoque del contenedor
    inviteButton.style.display = "none"; // Oculta el botón de invitación
  };

  // Función para verificar si el tour está en pantalla completa
  const checkFullScreen = () => {
    if (!document.fullscreenElement) {
      // Si no está en pantalla completa
      applyBlur(); // Aplica desenfoque y muestra invitación
      viewer.enableMouse = false; // Deshabilita interacción con el mouse en el visor
      viewer.enableKeyboard = false; // Deshabilita interacción con el teclado en el visor
    } else {
      removeBlur(); // Quita el desenfoque y oculta invitación
      viewer.enableMouse = true; // Habilita interacción con el mouse en el visor
      viewer.enableKeyboard = true; // Habilita interacción con el teclado en el visor
    }
  };

  // Evento que se activa cuando cambia el estado de pantalla completa
  document.addEventListener("fullscreenchange", checkFullScreen);

  // Evento de clic en el botón de invitación para ingresar en pantalla completa
  inviteButton.addEventListener("click", function () {
    if (container.requestFullscreen) {
      // Verifica si el contenedor soporta pantalla completa
      container.requestFullscreen(); // Solicita pantalla completa para el contenedor
    }
  });

  // Información adicional (Infospots)
  const textureLoader = new THREE.TextureLoader();
  const iconPath = "imagenes/info.png";

  // Carga la textura del ícono y ejecuta la función de callback cuando se complete
  textureLoader.load(iconPath, function () {
    // Crea un infospot (punto de información) con tamaño 50 y la imagen del ícono
    const infospot1 = new PANOLENS.Infospot(50, iconPath);
    infospot1.position.set(-600, 100, -500); // Establece la posición del infospot en el espacio 3D
    infospot1.addHoverText("Información sobre la cultura Mottainai", -1); // Agrega un texto de hover (pasar el mouse)

    // Configuración del contenido HTML que aparecerá al interactuar con el infospot
    infospot1.element.innerHTML = `
    <div style="background-color: rgba(0, 0, 0, 0.8); color: white; padding: 10px; border-radius: 5px; width: 500px;">
      <p style="font-size: 14px;">Cultura de Mottainai: Este término japonés expresa la idea de evitar el desperdicio y valorar los recursos al máximo. Es una expresión cultural que refleja una actitud de respeto hacia los objetos y recursos, promoviendo su reutilización siempre que sea posible.</p>
      <img src="imagenes/mottainai.jpg" style="width: 100%; border-radius: 5px; margin-top: 10px;">
    </div>`;
    panorama.add(infospot1); // Agrega el infospot al panorama
  });

  // Repite el proceso de cargar textura, crear y configurar otro infospot
  textureLoader.load(iconPath, function (texture) {
    const infospot2 = new PANOLENS.Infospot(50, iconPath);
    infospot2.position.set(-50, -100, 500); // Posición en el espacio 3D

    // Crea un contenedor para el video de YouTube
    const youtubeContent = document.createElement("div");
    youtubeContent.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    youtubeContent.style.color = "white";
    youtubeContent.style.padding = "10px";
    youtubeContent.style.borderRadius = "5px";
    youtubeContent.style.width = "800px";
    youtubeContent.innerHTML = `<iframe width="785" height="500" src="https://www.youtube.com/embed/OSXXSdpoR2w" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              ></iframe>`;

    infospot2.addHoverElement(youtubeContent, 50); // Agrega el contenido al infospot para que se muestre al pasar el mouse
    panorama.add(infospot2); // Agrega el infospot al panorama
  });

  // Carga y configura el infospot3 con información sobre el uso de bicicletas
  textureLoader.load(iconPath, function (texture) {
    const infospot3 = new PANOLENS.Infospot(50, iconPath);
    infospot3.position.set(-500, 0, 500);
    infospot3.addHoverText("Información sobre el uso de bicicletas", -1);

    infospot3.element.innerHTML = `<div style="background-color: rgba(0, 0, 0, 0.8); color: white; padding: 10px; border-radius: 5px; width: 500px;">
              <p style="font-size: 14px;">Las bicicletas son un medio de transporte muy común en Japón. Se utilizan para desplazamientos diarios, ir a trabajar, hacer compras y disfrutar del tiempo libre. Muchas ciudades, especialmente en áreas suburbanas, tienen infraestructuras adecuadas para ciclistas, como carriles bici y estacionamientos.</p>
              <img src="imagenes/bicicletas.jpg" alt="Descripción de la imagen" style="width: 100%; border-radius: 5px; margin-top: 10px;">
          </div>`;

    // Agrega un evento para evitar propagación de clics en este infospot
    infospot3.element.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    panorama.add(infospot3); // Agrega el infospot al panorama
  });

  // Carga y configura el infospot4 con información sobre las máquinas expendedoras
  textureLoader.load(iconPath, function (texture) {
    const infospot4 = new PANOLENS.Infospot(100, iconPath);
    infospot4.position.set(1000, 30, 240);
    infospot4.addHoverText("Información sobre las máquinas expendedoras", -1);

    infospot4.element.innerHTML = `<div style="background-color: rgba(0, 0, 0, 0.8); color: white; padding: 10px; border-radius: 5px; width: 500px;">
              <p style="font-size: 14px;">En Japón, las máquinas expendedoras ofrecen una asombrosa variedad de productos, que van mucho más allá de los refrigerios y bebidas comunes. Puedes encontrar desde comidas calientes, como ramen y curry, hasta productos de uso diario como ropa, paraguas, e incluso artículos de tecnología.</p>
              <img src="imagenes/maquina.jpg" alt="Descripción de la imagen" style="width: 100%; border-radius: 5px; margin-top: 10px;">
          </div>`;

    infospot4.element.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    panorama.add(infospot4);
  });

  // Carga y configura el infospot5 con información sobre las normas de comportamiento en público
  textureLoader.load(iconPath, function (texture) {
    const infospot5 = new PANOLENS.Infospot(50, iconPath);
    infospot5.position.set(-800, 0, -500);
    infospot5.addHoverText(
      "Información sobre el no comer en transportes públicos o caminando",
      -1
    );

    infospot5.element.innerHTML = `
          <div style="background-color: rgba(0, 0, 0, 0.8); color: white; padding: 10px; border-radius: 5px; width: 500px;">
              <p style="font-size: 14px;">Japón tiene un fuerte enfoque en el respeto y la consideración hacia los demás. Comer caminando puede percibirse como una falta de respeto hacia la comida y hacia las personas que te rodean, ya que se considera que no se está dedicando el tiempo y la atención adecuados a la experiencia de comer.</p>
              <img src="imagenes/alimentos.jpg" style="width: 100%; border-radius: 5px; margin-top: 10px;">
          </div>`;

    infospot5.element.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    panorama.add(infospot5);
  });

  // Carga y configura el infospot6 con información sobre el nomikai (evento social de trabajo)
  textureLoader.load(iconPath, function (texture) {
    const infospot6 = new PANOLENS.Infospot(400, iconPath);
    infospot6.position.set(2000, 30, 2600);
    infospot6.addHoverText("Información sobre el nomikai", -1);

    infospot6.element.innerHTML = `
          <div style="background-color: rgba(0, 0, 0, 0.8); color: white; padding: 10px; border-radius: 5px; width: 500px;">
              <p style="font-size: 14px;">En Japón, el nomikai es una tradición de salir a beber después del trabajo para fortalecer relaciones y fomentar el espíritu de equipo, relajando las formalidades entre empleados y jefes. Aunque sigue siendo común, hoy en día algunos cuestionan su obligatoriedad.</p>
              <img src="imagenes/nomikai.jpg" alt="Descripción de la imagen" style="width: 100%; border-radius: 5px; margin-top: 10px;">
          </div>`;

    infospot6.element.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    panorama.add(infospot6);
  });

  // Carga y configura el infospot7 con información sobre el manejo de la basura
  textureLoader.load(iconPath, function (texture) {
    const infospot7 = new PANOLENS.Infospot(200, iconPath);
    infospot7.position.set(-2000, 100, -100);
    infospot7.addHoverText("Información sobre los basureros", -1);

    infospot7.element.innerHTML = `
          <div style="background-color: rgba(0, 0, 0, 0.8); color: white; padding: 10px; border-radius: 5px; width: 500px;">
              <p style="font-size: 14px;">En Japón hay pocos basureros en la calle por razones de seguridad y cultura. La gente lleva su basura consigo, promoviendo limpieza y responsabilidad personal en los espacios públicos.</p>
              <img src="imagenes/basureros.jpg" alt="Descripción de la imagen" style="width: 100%; border-radius: 5px; margin-top: 10px;">
          </div>`;

    infospot7.element.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    panorama.add(infospot7);
  });

  // Agrega el panorama al visor principal
  viewer.add(panorama);

  // Evento que se activa cuando la imagen panorámica se ha cargado
  panorama.addEventListener("load", function () {
    console.log("La imagen panorámica se cargó correctamente."); // Mensaje en consola de confirmación
    checkFullScreen(); // Verifica el modo de pantalla completa (función personalizada)
  });

});
