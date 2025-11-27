function mostrarTabuada() {
    // cria referência aos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outTabuada = document.getElementById("outTabuada");


    // obtém o conteúdo dos campos de entrada
    var numero = Number(inNumero.value);
    // valida o numero
    if (numero == 0 || isNaN(numero)) {
        alert("Por favor, insira um número inteiro.");
        inNumero.focus();
        return;
    }

    // cria uma variável do tipo String, que irá concatenar a resposta
    var resposta = "";
    // cria um laço de repetição 
    for (var i = 1; i <= 10; i++) {
        resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
    }

    //  o conteúdo da tag pre é alterado para exibir a tabuada do numero
    outTabuada.textContent = resposta;

}

//  cria referência ao botão e após associa function ao evento click
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarTabuada);
