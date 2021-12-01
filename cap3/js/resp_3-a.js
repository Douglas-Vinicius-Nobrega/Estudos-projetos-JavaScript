function imparOuPar () {
     // criar uma referência aos elementos de entrada
    var inNumero = document.getElementById('inNumero')
    var outResposta = document.getElementById('outResposta')

    // converte conteúdo do campo inNumero
    var numero = Number(inNumero.value)

    // se não preencheu ou Not-a-Number(NaN)
    if (numero == 0 || isNaN(numero)) {
        alert('Por favor, digita um número válido...')
        inNumero.focus()
        return
    }
    // se resto da divisão do número por 2 for igual a 0 
    if ( numero % 2 == 0) {
        outResposta.textContent = ` O número ${numero} é par`
    } else {
        outResposta.textContent = ` O número ${numero} é ímpar`
    }

}

    // Criar uma referência para o botão
    var btVerificar = document.getElementById('btVerificar')
    // registra um evento associado ao botão
    btVerificar.addEventListener('click', imparOuPar)