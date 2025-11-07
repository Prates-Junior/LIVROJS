function calcularPreco() {
    // cria referência aos elementos da página
    var quilo = document.getElementById("inQuilo").value;
    var consumo = document.getElementById("inConsumo").value;
    var outValor = document.getElementById("outValor");
    // obtém conteúdo dos campos de entrada
    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);

    // calcula valor a pagar
    var valor = (consumo / 1000) * quilo;
    // altera o conteúdo do elemento de saída
    outValor.textContent = "Valor a pagar R$ " + valor.toFixed(2);
}
// cria referência ao botão e associa função ao evento click
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);