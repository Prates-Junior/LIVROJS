function ladosTriangulo() {
    // obtém o tipo de triângulo com base nos comprimentos dos lados a, b e c
    var inLadoA = Number(document.getElementById("inLadoA").value);
    var inLadoB = Number(document.getElementById("inLadoB").value);
    var inLadoC = Number(document.getElementById("inLadoC").value);
    var outLados = document.getElementById("outLados");
    var outTipo = document.getElementById("outTipo");

    // verifica se os valores inseridos formam um triângulo válido
    if (inLadoA < inLadoB + inLadoC && inLadoB < inLadoA + inLadoC && inLadoC < inLadoA + inLadoB) {
        outLados.textContent = "Lados podem Formar um triângulo.";

        // determina o tipo de triângulo
        if (inLadoA === inLadoB && inLadoB === inLadoC){ 
            outTipo.textContent = "Tipo: Equilátero.";
        } else if (inLadoA === inLadoB || inLadoA === inLadoC || inLadoB === inLadoC) {
            outTipo.textContent = "Tipo: Isósceles.";
        } else {
            outTipo.textContent = "Tipo: Escaleno.";
        }
    } else {
        outLados.textContent = "Não formam um triângulo.";
        outTipo.textContent = "";
    }
}
// adiciona um ouvinte de evento ao botão para chamar a função quando clicado
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", ladosTriangulo);

// função para limpar os campos de entrada e saída
function limparCampos() {
    document.getElementById("inLadoA").value = "";
    document.getElementById("inLadoB").value = "";
    document.getElementById("inLadoC").value = "";
    document.getElementById("outLados").textContent = "";
    document.getElementById("outTipo").textContent = "";
    document.getElementById("inLadoA").focus();
}