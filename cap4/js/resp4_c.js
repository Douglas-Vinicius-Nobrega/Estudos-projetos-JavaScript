function numerosPerfeitos () {

    var inNumero = document.getElementById('inNumero')
    var outDivisores = document.getElementById('outDivisores')
    var outResposta = document.getElementById('outResposta')

    var num = Number(inNumero.value)

    if (num == 0 || isNaN(num)) {
       hLista.textContent = 'Digite um numero válido...'
        inNumero.focus()
        return
    }

    // como 1 é um divisor universal, já iniciamos com ele
    var divisores = " Divisores do " + num + " : 1 "
    var soma = 1

    // percorre os possiveis divisores e acumula
    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            divisores = divisores + " , " + i; // virgula + i (evita última vírgula)
            soma = soma + i
        }
    }
    divisores = divisores + " (Soma: " + soma + ")"

    // altera o conteúdo de outDivisores
    outDivisores.textContent = divisores

    // verifica se é perfeito e exibe resposta na tag outResposta
    if(num == soma) {
        outResposta.textContent = num + " È um Número Perfeito"
    } else {
        outResposta.textContent = num + " Não é um Número Perfeito"
    }
}

    var btverificar = document.getElementById('btVerificar')
    btverificar.addEventListener('click', numerosPerfeitos)