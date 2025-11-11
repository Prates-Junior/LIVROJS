function calcularPrecoFinal() {
    // cria referências aos elementos da página
    var medicamento = document.getElementById("inMedicamento").value;
    var preco = Number(document.getElementById("inPreco").value);
    var outPromocao = document.getElementById("outPromocao");
    var outMedicamento = document.getElementById("outMedicamento");

    // Calcula o preço total e remove os centavos
    var preco = Math.floor(preco * 2);


    // Exibe o resultado na página
    outMedicamento.textContent = "Promoção de " + medicamento;
    outPromocao.textContent = "Leve 2 por: R$ " + preco.toFixed(2);
}

// Associa a função ao evento click do botão
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPrecoFinal);