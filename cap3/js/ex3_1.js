function MostrarSituacao () {
    // exibir os comandos de entrada 
    var inNome = document.getElementById('inNome')
    var inNota1 = document.getElementById('inNota1')
    var inNota2 = document.getElementById('inNota2')
    var outMedia = document.getElementById('outMedia')
    var outSituacao = document.getElementById('outSituacao')

    // obtém o contéudo de entrada
    var nome = inNome.value 
    var nota1 = Number(inNota1.value)
    var nota2 = Number(inNota2.value)

    // calcular a nota do aluno 
    var media = (nota1 + nota2) / 2
    
    // apresebtar a média (alterar o conteúdo do elemento outMedia)
    outMedia.textContent = `Média das Notas: ${media.toFixed(1)}`

    // criar a condição
    if (media > 7) { // se a média for maior q 7
        // altera o texto e estilo da cor do elemento outSituacao
        outSituacao.textContent = `Parabéns ${nome}! voçê foi aprovado(a)`
        outSituacao.style.color = 'blue'
    } else {
        outSituacao.textContent = `Ops, ${nome}! voçê foi reprovado(a)!`
        outSituacao.style.color = 'red'
    }
}

  // criar um referência ao botão, para chamar a função

  var btExibir = document.getElementById('btExibir')
  btExibir.addEventListener('click', MostrarSituacao)