document.getElementById('menuOpciones').addEventListener('change', galeria);

function galeria() {
    const opciones = document.getElementById('menuOpciones').value;
    const categorias = ["desayunos", "almuerzos", "cenas", "bebidas"];

    categorias.forEach(categoria => {
        document.querySelector(`.galeria${capitalize(categoria)}`).style.display = opciones === categoria ? "block" : "none";
    });
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
