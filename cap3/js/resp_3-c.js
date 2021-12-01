function parquimetro () {

    var inValor = document.getElementById('inValor')
    var outTempo = document.getElementById('outTempo')
    var outTroco = document.getElementById('outTroco')

    var valor = Number(inValor.value)
    
    if (valor == 0 || isNaN(valor)) {
        alert('Digite um valor...')
        inValor.focus()
        return
    }

     // declara variáveis
    var tempo;
    var troco;

    // cria as condições para verificar tempo e troco
    if (valor >= 3.00) {
    tempo = 120;
    troco = valor - 3.00;
    } else if (valor >= 1.75) {
    tempo = 60;
    troco = valor - 1.75;
    } else {
    tempo = 30;
    troco = valor - 1.00;
    }

  // exibe as respostas
  outTempo.textContent = `Tempo: ${tempo} min`
  if (troco > 0) {
    outTroco.textContent = `Troco R$: ${troco.toFixed(2)}`;
  }
}

    // Criar um referência para o botão
    var btDeposito = document.getElementById('btDeposito')
    btDeposito.addEventListener('click', parquimetro)

    function limparCampos () {
        // recarrega a página
        location.reload()
        // posiciona (joga o focu) no elemento inValor
        document.getElementById('inValor').focus()
    }
    var btLimpar = document.getElementById('btLimpar')
    btLimpar.addEventListener('click', limparCampos)