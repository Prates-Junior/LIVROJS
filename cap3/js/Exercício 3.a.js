function parimpar() {
    // obtém o valor do número inserido pelo usuário
    var inNumero = document.getElementById("inNumero");
    var resultado;

    // obtem o valor no campo digitado
    var inNumero = Number(inNumero.value);
    // verifica se o número é par ou ímpar

    // Verifique se a string representa um número inteiro válido ou se não é NAN
    if (isNaN(inNumero) || !Number.isInteger(inNumero)) {
        resultado = "Por favor, insira um número inteiro válido.";
        outResposta.textContent = resultado;
        inNumero.focus();
        return; // Sai da função se a entrada for inválida
    }
    if (inNumero % 2 == 0) {
        resultado = "O número " + inNumero + " é par.";
    } else {
        resultado = "O número " + inNumero + " é impar.";
    }
    // exibe o resultado na página
    outResposta.textContent = resultado;
}
// cria referência ao botão e associa função ao evento click
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", parimpar);