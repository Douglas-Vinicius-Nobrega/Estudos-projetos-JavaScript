function exibirRaiz () {
    // Criar uma refência aos elementos da página
    var inNumero = document.getElementById('inNumero')
    var outRaiz = document.getElementById('outRaiz')

    // obtém e converte o conteúdo do campo inNumero
    var numero = Number(inNumero.value) 
    // obtém conteúdo do campo inNúmero

    // se não preencher ou Not-a-Number (NaN)
    if (numero == '' || isNaN(numero)) {
        alert('Digita o número válido...') 
        // exibe o alerta

        inNumero.focus() 
        // posiciona no campo inNumero
        return // retorna 
    }

    var raiz = Math.sqrt(numero) 
    // calcula a raiz quadrada do numero

    // se o valor da variável raiz igual a este valor, arredondado para baixo...
    if (raiz == Math.floor(raiz)) {
        outRaiz.textContent = `Raiz ${raiz}` 
        // mostra a raiz

    } else {
    // se não, exibe mensagem indicando que não há raiz exata
        outRaiz.textContent = `não há raiz exata para ${numero}`
    }
}
    // cria uma referência ao elemento btExibir e registra evento que irá carregar a function
    var btExibir = document.getElementById('btExibir')
    btExibir.addEventListener('click', exibirRaiz)