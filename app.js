// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    // Validar entrada
    if (!nombreAmigo) {
        alert("Debes ingresar un nombre válido.");
        inputAmigo.focus();
        return;
    }

    // Evitar duplicados
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista.");
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}

// Función para renderizar la lista de amigos
function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    limpiarElemento(listaAmigos); // Limpiar contenido previo

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<strong>El amigo sorteado es:</strong> ${amigoSorteado}`;

    // Opcional: Eliminar al amigo sorteado de la lista
    amigos = amigos.filter(amigo => amigo !== amigoSorteado);
    renderizarAmigos();
}

// Función para limpiar un elemento del DOM
function limpiarElemento(elemento) {
    elemento.innerHTML = "";
}

// Función para limpiar toda la lista
function limpiarLista() {
    amigos = [];
    renderizarAmigos();
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar mensaje de resultado
}
