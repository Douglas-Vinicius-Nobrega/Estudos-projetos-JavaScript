function verificarPrimo () {
    // criar referência aos elementos da página
    var inNumero = document.getElementById('inNumero')
    var outResposta = document.getElementById('outResposta')

    //obtém o número informado
    var num = Number(inNumero.value)

    // verifica se preencheu corretamente o campo inNumero
    if (num == 0 || isNaN(num)){
        alert('Digite um número inválido...')
        inNumero.focus()
        return
    }

    // declara e inicializa contador
    var numDivisores = 0

    // percorre todos os possiveis divisores do número
    for (var i = 1; i <= num; i++) {
        // verifica se i (1, 2, 3...) é divisor de um
        if ( num % 1 == 0) {
            numDivisores++ // se é, incrementa contador
        }
    }

    // se possivel apenas 2 divisores, é primo
    if (numDivisores == 2) {
        outResposta.textContent = ` ${num} é primo `
    } else {
        outResposta.textContent = ` ${num} não é primo`
    }
}

    // referencia elemento e após associa function
    var btVerificar = document.getElementById('btVerificar')
    btVerificar.addEventListener('click', verificarPrimo)

    function limparCampos () {
        location.reload()
        document.getElementById('inNumero').focus()
    }

    var btLimpar = document.getElementById('btLimpar')
    btLimpar.addEventListener('click', limparCampos)