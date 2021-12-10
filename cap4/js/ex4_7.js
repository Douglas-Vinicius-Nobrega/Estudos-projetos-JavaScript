    function mostrarEstrelas () {
    
        var inNumeros = document.getElementById('inNumeros')
        var outResposta = document.getElementById('outResposta')

        var num = Number(inNumeros.value)

        if (num == 0 || isNaN(num)) {
            alert('Digite um número válido...')
            inNumeros.focus()
            return
        }

        var estrelas = '' // declara variável que irá concatenar as estrelas/traços

        // cria um laço de repetições de 1 até o número informado
        for ( var i = 1; i <= num; i++) {
            if ( i % 2 == 1) { 
            estrelas = estrelas + ' * ' // na posição impar do i: *
        } else {
            estrelas = estrelas + ' - ' // na posição par: -
        }
    }
        outResposta.textContent = estrelas // exibe as estrelas    
}

    // cria a referência ao botão
    var btPreencher = document.getElementById('btPreencher')
    btPreencher.addEventListener('click', mostrarEstrelas)

    function limpar () {
        location.reload()
        document.getElementById('inNumeros').focus()
    }

    var btLimpar = document.getElementById('btLimpar')
    btLimpar.addEventListener('click', limpar)
