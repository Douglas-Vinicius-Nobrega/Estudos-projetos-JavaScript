function mostrarValor () {
    var inValor = document.getElementById('inValor')
    var inTempo = document.getElementById('inTempo')
    var outTotal = document.getElementById('outTotal')

    // obtém os conteúdo de entrada
    var valor = Number(inValor.value)
    var tempo = Number(inTempo.value)

     // calcular o valor a ser pago
     var pagar = Math.ceil(tempo / 15) * valor

     // altea o conteúdo da linha do parágrafo
     outTotal.textContent = `Valor a pagar R$: ${pagar}`

}

    // criar uma referência ao elemento botão
    var btCalcular = document.getElementById('btCalcular')
    btCalcular.addEventListener('click', mostrarValor)