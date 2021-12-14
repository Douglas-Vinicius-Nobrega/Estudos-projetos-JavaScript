function mostraNumeroFrutas () {

    var inFruta = document.getElementById('inFruta')
    var inNumero = document.getElementById('inNumero')
    var outResposta = document.getElementById('outResposta')

    var fruta = inFruta.value 
    var numero = Number(inNumero.value)

    if (fruta == " " || numero == 0 || isNaN(numero)) {
        alert('Digite corretamente os dados...')
        inFruta.focus()
        return;
    }

    // váriael que vai acumular o número repetido das frutas
    var resposta = ""

    // criar repetição e...
    for ( var i=1; i<numero; i++) {
        // a cada volta, aciona uma fruta
        resposta = resposta + fruta + ' * '
    }

    // isola a ultima fruta, para não exibir o * no final
    resposta = resposta + fruta 

    outResposta.textContent = resposta
}

    var btRepetir = document.getElementById('btRepetir')
    btRepetir.addEventListener('click', mostraNumeroFrutas)

    function limparCampos () {
        location.reload()
        document.getElementById('inFruta').focus()
    }

    var btLimpar = document.getElementById('btLimpar')
    btLimpar.addEventListener('click', limparCampos)