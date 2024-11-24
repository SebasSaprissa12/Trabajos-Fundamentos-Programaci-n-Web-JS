const translations = {
    en: {
        nav1: "Home",
        nav2: "About Us",
        nav3: "Services",
        nav4: "Suites",
        nav5: "Menu",
        nav6: "Activities",
        nav7: "Contact",
        idioma: "Es",
        idioma2: "En",
        htitulo: "Rooms",
        lujo: "Luxury Suite",
        familiar: "Family Suite",
        penthouse: "Luxury Penthouse",
        demo: "Demo",
        titulo: "Your refuge in nature",
        nostitulo: "About Us",
        nosinfo: "Welcome to Cosmos Mountains, a unique retreat nestled in the heart of the mountains. From the moment you step through our doors, you are immersed in an unparalleled natural setting where the serenity of nature meets the comfort of home.",
        director: "CEO: Juan Pérez",
        directorinfo: "We work every day to deliver unique experiences.",
        chef: "Executive Chef: Ana López",
        chefinfo: "My passion is creating dishes that combine local flavors and happy memories.",
        coordinador: "Activities Coordinator: Carlos Méndez",
        coordinadorinfo: "I enjoy planning adventures that connect our guests with nature.",
        recepcion: "Reception Manager: Sofía Ruiz",
        recepcioninfo: "I love giving a warm welcome so every visitor feels special.",
        spa: "Spa Manager: Marta Fernández",
        spainfo: "We offer well-being and tranquility in a space designed for relaxation.",
        habitacion: "Rooms",
        habitacioninfo: "Our rooms are designed to offer comfort and tranquility. Each room is carefully decorated with warm, natural materials inspired by the mountainous landscape, creating a cozy environment for relaxation.",
        price: "Prices",
        pricetext: "Room costs per night.",
        tipo: "Type",
        tipoelegir: "-- Select Type --",
        familiatipo: "Family",
        lujotipo: "Luxury",
        penthousetipo: "Penthouse",
        version: "Version",
        versiontipo: "-- Select Version --",
        calcular: "Calculate",
        spaseccion: "Spa",
        spasecinfo: "Immerse yourself in a wellness experience at our spa, a sanctuary designed to revitalize body and mind in harmony with nature. Our spa offers a wide range of treatments to relax and rejuvenate in a serene and exclusive environment.",
        activitysec: "Activities",
        activityinf: "Enjoy a complete mountain experience with activities for all tastes, from hiking and zip-lining adventures to local craft workshops and stargazing. Relax in outdoor yoga sessions or in our spa, and connect with nature while discovering the region's flora and fauna.",
        activitiestitu: "Activities:",
        activityseleccion: "Select an activity",
        senderismo: "Hiking",
        observar: "Animal and Plant Observation",
        ciclismo: "Cycling",
        noche: "Stargazing",
        horario: "Schedules",
        buffet: "Buffet",
        buffetinfo: "The culinary experience is as memorable as the views that surround us. Our Gastronomic Buffet invites you to enjoy a selection of carefully crafted dishes that highlight the best of local and seasonal products.",
        desayuno: "Breakfast",
        almuerzo: "Lunch",
        cena: "Dinner",
        desatitulo: "Energy to Start the Day",
        desainfo: "Start your day enjoying a varied breakfast with options such as eggs to taste, fresh fruits, natural juices, artisanal bread, homemade jams, and a selection of specialty coffees from local origins.",
        almuertitulo: "Midday Flavors",
        almuerinfo: "Our lunch buffet includes a selection of fresh salads, hot soups, grilled meats, freshly made pasta, and homemade desserts.",
        cenatitulo: "Dinners with Mountain Views",
        cenainfo: "Relax at the end of the day with an elegant dinner that includes gourmet dishes such as fresh trout, mountain stews, vegetarian options, and a carefully selected wine list.",
        trayectoria: "Our History in the Mountains",
        anios: "Years Hosting Guests",
        sendereco: "Trails Covered",
        huespedes: "Satisfied Guests",
        colaboradores: "Committed Employees",
        testimonial: "Testimonials",
        testiinfo: "Discover unforgettable experiences from those who have enjoyed the magic of our mountains.",
        laura: "Laura Martínez",
        laurainfo: "The hotel offers spectacular landscapes and outdoor activities. Every corner invites you to relax and enjoy the natural surroundings.",
        diego: "Diego Torres",
        diegoinfo: "The rooms are warm and comfortable. The staff makes the stay unforgettable with their attention and dedication.",
        sofia: "Sofía Fernández",
        sofiainfo: "The surroundings are perfect for exploring and enjoying tranquility. The connection with the environment is unique.",
        andres: "Andrés Gómez",
        andresinfo: "The restaurant surprises with delicious dishes and stunning views. Every meal becomes a special experience.",
        elena: "Elena Sánchez",
        elenainfo: "It’s perfect for all ages, with activities to enjoy together. The atmosphere is safe and full of joy.",
        javier: "Javier Morales",
        javierinfo: "The spa and common areas invite you to completely relax. It’s ideal for disconnecting from daily stress.",
        derechos: "All Rights Reserved",
        copyright: "Copyright 2024",
    }
};




// Función para cambiar el idioma al inglés
function changeLanguage() {
    // Verificar si el idioma actual es español ('es')
    if (document.documentElement.lang === 'es') {
        // Cambiar el idioma del atributo `lang`
        document.documentElement.lang = 'en';

        // Cambiar el texto de los elementos traducibles
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            element.innerHTML = translations.en[key] || element.innerHTML;
        });

        // Cambiar el texto del botón
        document.getElementById('languageButton').textContent = "Translate to Spanish";
    } else {
        // Regresar al español (contenido inicial, no requiere objeto de traducción)
        document.documentElement.lang = 'es';

        // Restaurar el contenido original
        document.querySelectorAll('[data-translate]').forEach(element => {
            const originalContent = element.getAttribute('data-original');
            if (originalContent) element.innerHTML = originalContent;
        });

        // Cambiar el texto del botón
        document.getElementById('languageButton').textContent = "Traducir a inglés";
    }
}

// Al cargar la página, guarda el contenido inicial en un atributo `data-original`
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[data-translate]').forEach(element => {
        element.setAttribute('data-original', element.innerHTML);
    });
});
