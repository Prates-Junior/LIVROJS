function calculaValorConta() {
    // Obtém os valores dos campos de entrada
    var valorPor15Min = Number(document.getElementById("valorPor15Min").value);
    var tempoUsado = Number(document.getElementById("tempoUsado").value);
    var outValorConta = document.getElementById("outValorConta");

    // Calcula o valor total da conta
    var valorConta = Math.ceil(tempoUsado / 15) * valorPor15Min;

    // Exibe o valor da conta formatado com duas casas decimais
    outValorConta.textContent = "Valor da Conta: R$ " + valorConta.toFixed(2);
}
// Adiciona o evento de clique ao botão para calcular a conta
var btCalcularConta = document.getElementById("btCalcularConta");
btCalcularConta.addEventListener("click", calculaValorConta);