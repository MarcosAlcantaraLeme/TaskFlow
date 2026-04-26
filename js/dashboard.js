function adicionarTarefa(){
    const texto = pegarTexto();
    if (texto == "") return;

    const li = criarTarefa(texto);
    adicionarNaLista(li);
}

function pegarTexto(){
    const input = document.getElementById("novaTarefa");
    const texto = input.value;
    input.value = "";
    return texto;
}

function criarTarefa(texto){
    const li = document.createElement("li")
    li.textContent = texto;

    const botao = criarBotaoRemover(li);
    li.appendChild(botao);

    return li;
}

function criarBotaoRemover (li){
    const botao = document.createElement("button");
    botao.textContent = "X";

    botao.onclick = function () {
        removerTarefa(li);
    }

    return botao;
}

function removerTarefa (li){
    li.remove();
}

function adicionarNaLista (li){
    const lista = document.getElementById("listaTarefa");
    lista.appendChild(li);
}