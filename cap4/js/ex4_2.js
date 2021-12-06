function decrescer () {
     // cria referência aos elementos que a function irá manipular 
    var inNumero = document.getElementById('inNumero')
    var outResposta = document.getElementById('outResposta')

    var numero = Number(inNumero.value)


    // varificar validade do numero
    if (numero == 0 || isNaN(numero)) {
        alert('Inserir um número válido...')
        inNumero.focus
        return
    }

    // inicializa variável resposta
    var reposta = ' Entre ' +  numero + ' e 1 : '

    // criar um for descrecente
    for (var i = numero; i > 0; i = i - 1) {
        // resposta vai acumulando números (e virgulas)
        reposta = reposta + i + ' , '
    }

    // altera o conteudo do outDescrecente
    outResposta.textContent = reposta
}

    // referencia ao botão
    var btMenos = document.getElementById('btMenos')
    btMenos.addEventListener('click', decrescer )

    function limpar () {
        location.reload()
        document.getElementById('inNumero').focus()
    }

        var btLimpar = document.getElementById('btLimpar')
        btLimpar.addEventListener('click', limpar)