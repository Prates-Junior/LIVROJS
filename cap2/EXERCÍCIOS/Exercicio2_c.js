function mostraValorConta() {
    // Obtém os elementos de entrada e saída
    var produto = document.getElementById("inproduto");
    var preco = document.getElementById("inpreco");
    var outProduto = document.getElementById("outProduto");
    var outTotal = document.getElementById("outTotal");

    // Lê os valores digitados
    var produto = produto.value;
    var preco = Number(preco.value);


    // Calcula o valor da promoção
    var total = (3 * preco) - (preco / 2); // paga 2 e meio
    var desconto = preco / 2;

    // Exibe as mensagens
    outProduto.textContent = produto + " - Promoção: Leve 3 por R$" + total.toFixed(2);
    outTotal.textContent = "O 3º produto custa apenas R$" + desconto.toFixed(2);
}

// Adiciona o evento de clique ao botão
var btCalcularConta = document.getElementById("btCalcularConta");
btCalcularConta.addEventListener("click", mostraValorConta);
