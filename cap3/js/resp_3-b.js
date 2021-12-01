function mostrarVelocidade () {

    var inPermitida = document.getElementById('inPermitida')
    var inCondutor = document.getElementById('inCondutor')
    var outSituacao = document.getElementById('outSituacao')

    var permitida = Number(inPermitida.value)
    var condutor = Number(inCondutor.value)

    // se não prencheu ou NaN
    if (permitida == 0 || isNaN(permitida)) {
        alert('Por favor, digita a velocidade Permitida')
        inPermitida.focus()
    }
    if (condutor == 0 || isNaN(permitida)) {
        alert('Por favor, digita a velocidade do condutor')
        inCondutor.focus()
    }

      // cria as condições para verificar situação do condutor
  if (condutor <= permitida) {
    outSituacao.textContent = "Situação: Sem Multa";
  } else {
    var maisVinte = permitida * 1.20;
    if (condutor <= maisVinte) {
      outSituacao.textContent = "Situação: Multa Leve";
    } else {
      outSituacao.textContent = "Situação: Multa Grave";
    }
  }
}

    // criar um referência para o botão
    var btVerificar = document.getElementById('btVerificar')
    btVerificar.addEventListener('click', mostrarVelocidade)