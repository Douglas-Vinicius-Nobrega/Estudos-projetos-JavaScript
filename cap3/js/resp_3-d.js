function mostrarLados () {

    var inLadoA = document.getElementById('inLadoA')
    var inLadoB = document.getElementById('inLadoB')
    var inLadoC = document.getElementById('inLadoC')
    var outLadosTriangulo = document.getElementById('outLadosTriangulo')
    var outTipos = document.getElementById('outTipos')

    var ladoA = Number(inLadoA.value)
    var ladoB = Number(inLadoB.value)
    var ladoC = Number(inLadoC.value)

     // valida os dados de entrada
  if (ladoA == 0 || ladoB == 0 || ladoC == 0 || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    alert("Informe lados válidos para o triângulo");
    inLadoA.focus();
    return;
  }

  // cria as condições para exibir a resposta
  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    outLadosTriangulo.textContent = "Lados não podem formar um triângulo";
  } else {
    outLadosTriangulo.textContent = "Lados podem formar um triângulo";
    if (ladoA == ladoB && ladoA == ladoC) {
      outTipos.textContent = "Tipo: Equilátero";
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      outTipos.textContent = "Tipo: Isósceles";      
    } else {
      outTipos.textContent = "Tipo: Escaleno";            
    }
  }
}

    // criar um referência para o botão

    var btVerificar = document.getElementById('btVerificar')
    btVerificar.addEventListener('click', mostrarLados)

    function limparCampos () {
        location.reload()
        document.getElementById('inLadoA').focus()
    }
    var btLimpar = document.getElementById('btLimpar')
    btLimpar.addEventListener('click', limparCampos)