function mostrarPromocao () {
    var inProduto = document.getElementById('inProduto')
    var inPreco = document.getElementById('inPreco')
    var outProduto = document.getElementById('outProduto')
    var outPromocao = document.getElementById('outPromocao')

    // ler as entradas 
    var produto = inProduto.value
    var preco = Number(inPreco.value)

    // calcula valores
    var terceiro = preco / 2
    var total = (preco * 2) + terceiro

    // exibe resposta
  outProduto.textContent = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`

  outPromocao.textContent = `O 3º produto custa apenas R$: ${terceiro.toFixed(2)}`
}
    btVer.addEventListener('click', mostrarPromocao)