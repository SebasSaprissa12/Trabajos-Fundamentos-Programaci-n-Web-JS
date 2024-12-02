window.onload = function() {
    
    var logo = document.createElement("img");
    logo.src = "./imagenes/Logo.png";
    logo.alt = "Logo Cosmos";
    logo.classList.add("logo-img");


    document.getElementById("logo").appendChild(logo);
};

document.getElementById("btn-login").addEventListener("click", function() {
    window.location.href = "login.html";
});

