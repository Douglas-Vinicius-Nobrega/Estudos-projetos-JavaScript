
function mostraNumeroFrutas () {

    var inFruta = document.getElementById('inFruta')
    var inNumero = document.getElementById('inNumero')
    var outResposta = document.getElementById('outResposta')

    var fruta = inFruta.value 
    var numero = Number(inNumero.value)

    if (fruta == '' || numero == 0 || isNaN(fruta)) {
        alert('Digite um numero válido...')
        inFruta.focus()
        return
    }
}