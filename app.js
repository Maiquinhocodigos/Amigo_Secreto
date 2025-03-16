let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo !== "") {
        amigos.push(nomeAmigo);
        inputAmigo.value = "";
        atualizarListaAmigos();
    } else {
        alert("Por favor, digite um nome válido.");
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    const amigosEmbaralhados = amigos.slice().sort(() => Math.random() - 0.5);

    const itemResultado = document.createElement('li');
    itemResultado.textContent = `O amigo secreto de ${amigosEmbaralhados[0]} é ${amigosEmbaralhados[1]}.`;
    resultado.appendChild(itemResultado);
}