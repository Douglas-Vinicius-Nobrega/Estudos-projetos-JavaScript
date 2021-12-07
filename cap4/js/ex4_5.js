// declara e inicializa contadores e acumuladores (variáveis globais)

var numContas = 0 /* Atua como um contador, para apresentar a cada acréscimo
de conta o número de contas inseridas pelo usuário*/  
var valTotal = 0 // soma o valor das contas inseridas no programa

// variável string que acumula as contas
var resposta = ''


function mostrarContas () {
    // criar referência aos elementos da página manipulados pela function
    var inDescricao = document.getElementById('inDescricao')
    var inValor = document.getElementById('inValor')
    var outListaContas = document.getElementById('outListaContas')
    var outTotal = document.getElementById('outTotal')

    // obtém o conteúdo dos campos
    var descricao = inDescricao.value 
    var valor = Number(inValor.value)

    // verifica preenchimento dos campos
    if (descricao == '' || valor == 0 || isNaN(valor)) {
        alert('Digite a descrição do item...')
        inDescricao.focus()
        return
    }

    // adiciona valores ao contador e acumulador
    numContas++
    valTotal = valTotal + valor

    // concatenar as contas
    resposta = resposta + descricao + ' - R$ ' + valor.toFixed(2) + '\n'
    
    // altera o conteúdo das tags de resposta
    outListaContas.textContent = resposta + '--------------------------------------'
    outTotal.textContent = numContas + ' Contas(s) - Total R$: ' + valTotal.toFixed(2)

    // limpa campos e posiciona curso em inDescricao
    inDescricao.value = ''
    inValor.value = ''
    inDescricao.focus()
}

    // referencia elemento e após associa a function ao evento click
    var btRegistrar = document.getElementById('btRegistrar')
    btRegistrar.addEventListener('click', mostrarContas)

    function limparDados () {
        location.reload()
        document.getElementById('inDescricao').focus()
    }

    var btLimpar = document.getElementById('btLimpar')
    btLimpar.addEventListener('click', limparDados)