function calcularPeso() {
// cria referência aos elementos manipulados pela function
var inNome = document.getElementById("inNome");
var rbMasculino = document.getElementById("rbMasculino");
var rbFeminino = document.getElementById("rbFeminino");
var inAltura = document.getElementById("inAltura");
var outResposta = document.getElementById("outResposta");

// obtém o conteúdo dos campos de entrada
var nome = inNome.value;
var sexo = rbMasculino.checked ? "masculino" : "feminino";
var altura = Number(inAltura.value);
}
