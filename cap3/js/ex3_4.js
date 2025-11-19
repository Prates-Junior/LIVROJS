
// cria uma referência aos elementos da 
function calcularFuso() {
  var inHoraBrasil  = document.getElementById("inHoraBrasil");
  var outHoraFranca = document.getElementById("outHoraFranca");

// obtém e converte o conteúdo do campo inHoraBrasil
    var horaBrasil = Number(inHoraBrasil.value);

//se não preencheu ou Not-a-Number (NaN)
    if (inHoraBrasil.value == 0 || isNaN(horaBrasil)) {
        alert("Informe a hora no Brasil corretamente"); // exibe o alerta
        inHoraBrasil.focus(); // posiciona o cursor em inHoraBrasil
        return;
    }
    var horaFranca = horaBrasil + 5;
    //se passar das 24 horas na Franca ...
    if (horaFranca >= 24) {
        horaFranca = horaFranca - 24; //... subtrai 24
    }
    //  exibe resposta (altera conteúdo do elemento outHoraFranca)
    outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2) + " h";
}
//  cria uma referência ao elemento btExibir e registra evento associado a function
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso);