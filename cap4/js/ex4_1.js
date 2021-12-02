function mostrarTabuada () {
    // cria referência aos elementos da página
    var inNumero = document.getElementById('inNumero')
    var outTabuada = document.getElementById('outTabuada')

    // converter conteúdo do campo inNumero
    var numero = Number(inNumero.value)

    // valida o número
    if(numero == 0 || isNaN(numero)) {
        alert('Informe um número válido...')
        inNumero.focus
        return
    }

    // cria uma variável do tipo String, que irá concatenar a resposta
    var resposta = " "

    // cria um laço de repetição
    for (var i = 1; i <=10; i++) {
        // a variável resposta vai acumulando os novos conteúdos
        resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
    }
    
    // conteúdo da tag pre é alterada para exibir a tabuada do num
    outTabuada.textContent = resposta;
}

    // cria uma referência ao botão e após associa a function ao elevento click
    var btMostrar = document.getElementById('btMostrar')
    btMostrar.addEventListener('click', mostrarTabuada)

    function limparCampo () {
        location.reload()
        document.getElementById('inNumero').focus()
    }

    var btLimpar = document.getElementById('btLimpar')
    btLimpar.addEventListener('click', limparCampo)

