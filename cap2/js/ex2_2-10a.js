function mostrarPromocao () {
    // criar um referência aos elementos manipulados pelo programa
    var inMedicamento = document.getElementById('inMedicamento')
    var inPreco = document.getElementById('inPreco')
    var outMedicamento = document.getElementById('outMedicamento')
    var outPromocao = document.getElementById('outPromocao')

    // obtém conteúdo dos campos de entrada
    var medicamento = inMedicamento.value
    var preco = Number(inPreco.value)
    
    // calcular a promoção (arredonda para baixo)
     var promocao = Math.floor(preco * 2) 
    
     //alterar o conteúdo da linha do paragrafo
    outMedicamento.textContent = `Promoção de ${medicamento}`
    outPromocao.textContent = `leve 2 por apenas R$: ${promocao}`
}

// criar referência ao botão e associar a função

var btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', mostrarPromocao)