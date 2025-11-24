function paquimetro() {
    // Obtém o valor do input
    var inValor = Number(document.getElementById("inValor").value);
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");

    // Calcula o tempo e o troco
    if (inValor >= 3.00) {
        var tempo = 120;
        var troco = inValor - 3.00;
    } else if (inValor >= 1.75) {
        var tempo = 60;
        var troco = inValor - 1.75;

    }
    else if (inValor >= 1.00) {
        var tempo = 30;
        var troco = inValor - 1.00;
    }
    else {
        alert("Valor insuficiente. O valor mínimo é R$ 1,00");
       inValor.focus();
        return;
    }
    

    

// Exibe o tempo e o troco
outTempo.textContent = "Tempo: " + tempo + " min";
outTroco.textContent = "Troco: R$ " + troco.toFixed(2);
}
// Adiciona um ouvinte de evento ao botão para chamar a função quando clicado
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", paquimetro);