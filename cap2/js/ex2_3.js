function mostrarPromocao() {
    // cria referências aos elementos da página
    var inTitulo = document.getElementById("inVeiculo");
    var inDuracao = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");

    // obtém conteúdo dos campos de entrada
    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);

    // calcula valor das parcelas
    var entrada = preco * 0.50;
    var parcela = (preco * 0.50) / 12;
    // altera o conteúdo dos elementos de saída
    outVeiculo.textContent = "Promoção: " + veiculo;
    outEntrada.textContent = "Entrada de R$ " + entrada.toFixed(2);
    outParcela.textContent = " + 12x de R$ " + parcela.toFixed(2);
}
// cria referência ao botão e associa função ao evento click
var btPromocao = document.getElementById("btVerPromocao");
btPromocao.addEventListener("click", mostrarPromocao);