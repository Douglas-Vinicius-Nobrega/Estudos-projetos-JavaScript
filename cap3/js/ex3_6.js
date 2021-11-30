function notasParaSaque () {
    // criar uma referência aos elementos de entrada
    var inSaque = document.getElementById('inSaque')
    var outNotasCem = document.getElementById('outNotasCem')
    var outNotasCinquenta = document.getElementById('outNotasCinquenta')
    var outNotasDez = document.getElementById('outNotasDez')

    // Limpa mensagens (caso, segunda execusão)
    outNotasCem.textContent = ""
    outNotasCinquenta.textContent = ""
    outNotasDez.textContent = "" 

    var saque = Number(inSaque.value) // converte conteúdo do campo inSaque

    // se não preencheu ou Not-a-Number(NaN)
    if (saque == 0 || isNaN(saque)) {
        alert(`Informe o valor do saque corretamente`)
        // exiba o alerta

        inSaque.focus()
        // posiciona em inSaque

        
    }

    // verifica se saque não é multiplo de 10
    if (saque % 10 != 0) {
        alert('Valor invalido para notas disponiveis (R$ 10, 50, 100)')
        inSaque.focus()
        return
    }

    // calcula notas de 100, 50 e 10
    var notasCem = Math.floor(saque / 100)
    var resto = saque % 100
    var notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    var notasDez = Math.floor(resto / 10)

    // exibe as notas apenas se houver
    if (notasCem > 0) {
        outNotasCem.textContent = `Notas de R$ 100: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        outNotasCinquenta.textContent = `Notas de R$ 50: ${notasCinquenta}`
    }
    if (notasDez > 0) {
    outNotasDez.textContent = `Notas de R$ 10: ${notasDez}`
    }
}

// Cria uma referência ao elemento btExibir e associa a function
var btSaque = document.getElementById('btSaque')
btSaque.addEventListener('click', notasParaSaque)