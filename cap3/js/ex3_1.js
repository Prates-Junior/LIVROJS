function calcularMedia() {
    // Obtém referências aos elementos da página
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outSituacao = document.getElementById("outSituacao");
    var outMedia = document.getElementById("outMedia");

    // obtém os conteúdos dos campos de edição da página
    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);

    //calcula a média das notas
    var media = (nota1 + nota2) / 2;
    
    // apresenta a média (altera o conteúdo do elemento outMedia)
    outMedia.textContent = "Média das notas: " + media.toFixed(1);
    //verifica a situação do aluno
    if (media >= 7) {
        outSituacao.textContent = "Parabéns " + nome + " você foi APROVADO(a)";
        outSituacao.style.color = "#0000CC";
    } else if (media >= 4) {
        outSituacao.textContent = "Atenção " + nome + " você está em EXAME";
        outSituacao.style.color = "#39880cff";
    } else {
        outSituacao.textContent = "Ops " + nome + " você foi REPROVADO(a)";
        outSituacao.style.color = "#ce1818ff";
    }

}
//cria uma referência ao elemento btResultado (botão)
var btResultado = document.getElementById("btResultado");
//registra um evento associado ao botão, para carregar uma função
btResultado.addEventListener("click", calcularMedia);