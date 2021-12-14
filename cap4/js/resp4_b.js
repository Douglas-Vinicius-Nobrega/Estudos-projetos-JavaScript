
function chinchilas () {
    var inChi = document.getElementById('inChi')
    var inNumero = document.getElementById('inNumero')
    var outEvolucao = document.getElementById('outEvolucao')

    var chi = Number(inChi.value)
    var anos = Number(inNumero.value)

    // valida os números (deve ser, no mínimo, um casal)
    if ( chi < 2 || isNaN(chi) || anos == 0 || isNaN(anos)) {
        alert('Por favor, digite um número válido')
        inChi.focus()
        return
    }

    // cria uma variáve do tipo string, que irá concatenar a resposta
    var resposta = ""
    var total = chi

    // defina o laço de repetição 
    for ( var i=1; i <= anos; i++) {
        resposta = resposta + i + "º Ano: " + total + " Chinchilas\n"
        total = total * 3
    }

    // altera o conteúdo da tag de resposta
    outEvolucao.textContent = resposta
}

    var btMostrar = document.getElementById('btMostrar')
    btMostrar.addEventListener('click', chinchilas)

    function limpar () {
        location.reload()
        document.getElementById('inChi').focus()
    }

    var btLimpar = document.getElementById('btLimpar')
    btLimpar.addEventListener('click', limpar)

