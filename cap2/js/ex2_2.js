function converterDuracao() {
    // cria referências aos elementos da página
    var inTitulo = document.getElementById("intitulo");
    var inDuracao = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");

// obtém os valores digitados
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);

// arredonda para baixo o resultado da divisão
    var horas = Math.floor(duracao / 60);
    var minutos = duracao % 60;
// altera o conteúdo dos parágrafos de resposta
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + " hora(s) e " + minutos + " minuto(s)";
}
// cria uma referência ao elemento btConverter (botão)
var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", converterDuracao);

