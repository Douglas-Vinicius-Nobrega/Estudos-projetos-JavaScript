    // declara vetor de escopo global que irá conter os números já apostados
    var erros = []

    // gera um número aleatório entre 1 e 100
    var sorteado = Math.floor(Math.random() * 100) + 1

    // declara constante com o número de chances
    const CHANCES = 6

    function apostarNumero () {
        // criar referência ao campo de entrada e obtém seu conteúdo
        var inNumero = document.getElementById('inNumero')
        var numero = Number(inNumero.value)

        // valida o número
        if ( numero == 0 || isNaN(numero)) {
            alert('Informe um número válido...')
            inNumero.focus()
            return
        }

        // referencia espaços das saídas de dados
        var outDica = document.getElementById('outDica')
        var outErros = document.getElementById('outErros')
        var outChances = document.getElementById('outChances')

        // se aposta do jogador for igual ao número sorteado
        if (numero == sorteado) {
            alert('Parabéns!! você acertou!!!')
            // troca status dos botões
            btApostar.disabled = true
            btJogar.classname = 'exibe'
            outDica.textContent = 'Parabéns!! Número sorteado: ' + sorteado
        } else {
            // se número existe no vetor erros
            if ( erros.indexOf(numero) >= 0 ) {
                alert("Você já apostou o número" + numero + ". Tente outro...")
            } else {
                erros.push(numero) // adiciona um numero no vetor
                var numErros = erros.length // obtém tamanho do vetor
                var numChances = CHANCES - numErros // calcular n° de chances
                outErros.textContent = numErros + " ( " + erros.join(" , ") + " )"
                outChances.textContent = numChances
                if (numChances == 0) {
                    btApostar.disabled = true
                    btJogar.classname = 'exibe'
                    outDica.textContent = "Game Over!! Número Sorteado: " + sorteado
                } else {
                    // usa operador ternário (condional) para mensagem da dica
                    var dica = numero < sorteado ? "maior" : "menor"
                    outDica.textContent = 'Dica: tente um número ' + dica + " que " + numero 
                }
            }
        }
        // limpa campo de entrada e posiciona curso neste campo
        inNumero.value = ""
        inNumero.focus()
    }

        var btApostar = document.getElementById('btApostar')
        btApostar.addEventListener('click', apostarNumero)

        function jogarNovamente () {
            location.reload() // recarrega a página
        }

        var btJogar = document.getElementById('btJogar')
        btJogar.addEventListener('click', jogarNovamente)