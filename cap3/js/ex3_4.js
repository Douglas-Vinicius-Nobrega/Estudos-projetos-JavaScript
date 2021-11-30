function mostrarHora () {
    // cria uma referência aos elementos da página
    var inHoraBrasil = document.getElementById('inHoraBrasil')
    var outHoraFraca = document.getElementById('outHoraFranca')

    // obtém e converte o conteúdo do campo InHoraBrasil
    var horaBrasil = Number(inHoraBrasil.value)

    // se não preencheu ou Not-a-Number(NaN)
    if (inHoraBrasil.value == '' || isNaN(horaBrasil)) {
        alert('Informe a hora no Brasil corretamente') // exibe o alerta
        inHoraBrasil.focus() // posiciona em InHoraBrasil
        return
    }

    var horaFranca = horaBrasil + 5 // Calcula o horário na França

    // se passar dar 24 hrs na Franca...
    if(horaFranca > 24) {
        horaFranca = horaFranca - 24 // ... subtrai 24

        // exibe resposta (altera o conteúdo do elemento outHoraFranca)
        outHoraFraca.textContent = `Hora da França: ${horaFranca.toFixed(2)}`
    }
}

    // Criar uma referência ao elemento btExibir e registra evento associado a Function
    var btExibir = document.getElementById('btExibir')
    btExibir.addEventListener('click', mostrarHora)