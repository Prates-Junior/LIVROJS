function velocidadePermitida() {
    // Obter o valor da inVelocidade a partir do campo de entrada
    var velPermitida = Number(document.getElementById("inVelocidade").value);
    var velCondutor = Number(document.getElementById("inVelCondutor").value);
    var outResposta = document.getElementById("outResposta");
    

    //  // se não preencheu ou Not-a-Number (NaN)
    if (velPermitida == "" || isNaN(velPermitida) ||
        velCondutor == "" || isNaN(velCondutor)) {
        // exibe mensagem de advertência
        alert("Por favor, informe as velocidades corretamente...");
        // posiciona no campo de edição inVelPermitida
       inVelocidade.focus();
        return;
    }

    // Validação de entrada
    if (isNaN(velPermitida) || isNaN(velCondutor) || velPermitida <= 0 || velCondutor <= 0) {
        alert("Por favor, insira valores válidos.");
    }
    else if (velCondutor <= velPermitida) {
        outResposta.textContent = "Situação: " + "Sem multa.";
    }
    else if (velCondutor <= velPermitida * 1.2) {
        outResposta.textContent ="Situação: " + "Multa leve.";
    }
    else {
        outResposta.textContent = "Situação: " + "Multa grave.";
    }
    //exibe a resposta
    //outResposta.textContent = "Situação: " + outresposta;
}

// Adiciona um ouvinte de evento ao botão para chamar a função quando clicado
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", velocidadePermitida);
