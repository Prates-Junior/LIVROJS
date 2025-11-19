function calcularPeso() {
    // cria referência aos elementos manipulados pela function
    var inNome = document.getElementById("inNome");
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminino = document.getElementById("rbFeminino");
    var inAltura = document.getElementById("inAltura");
    var outResposta = document.getElementById("outResposta");
<<<<<<< HEAD
=======
    var 
>>>>>>> b9a0b01afed8599183b6871294f488dc7934b4a0

    // obtém o conteúdo dos campos de entrada
    var nome = inNome.value;
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;
    var altura = Number(inAltura.value);

    // verifica se nome foi preenchido e sexo selecionado
    if (nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo!");
        inNome.focus();
        return;

    }
    // se altura vazio (0) ou NaN: Not-a-Number (um texto for informado, por exemplo)
    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;

    } // se masculino (significa se masculino == true)
    if (masculino == true) {
        var peso = 22 * Math.pow(altura, 2); // eleva a altura ao quadrado
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }
    // apresenta o resultado
    outResposta.textContent = "Ola, " + nome + " seu peso ideal e: " + peso.toFixed(3) + " kg";
}
// cria referência ao botão e associa function ao evento click
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);

function limparCampos() {
    // limpa os conteúdos dos elementos
    document.getElementById("inNome").value = "";
    document.getElementById("rbMasculino").checked = false;
    document.getElementById("rbFeminino").checked = false;
    document.getElementById("inAltura").value = "";
    document.getElementById("outResposta").textContent = "";
    document.getElementById("inNome").focus();
}
// cria referência ao botão e associa function ao evento click
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);
<<<<<<< HEAD
=======

/*
/**
 * Limpa os campos de entrada e recarrega a página
 */
function limparCampos() {
    // recarrega a página
    location.reload();
    // posiciona (joga o foco) no elemento inNome
    // para que o usuário possa digitar novamente o nome
    document.getElementById("inNome").focus();
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);





>>>>>>> b9a0b01afed8599183b6871294f488dc7934b4a0
