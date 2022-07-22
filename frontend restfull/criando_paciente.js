const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {
    // capturar os dados do formulário
    const paciente = getDadosForm()
    // enviar os dados para api
    enviarDadosParaAPI(paciente)
    
})

function getDadosForm () {
    const inputNome = document.querySelector('#nome')
    const inputNumero = document.querySelector('#numero')
    const inputEndereco = document.querySelector('#endereco')
    const inputData = document.querySelector('#data')



    const paciente = {
        nome: inputNome.value,
        numero: inputNumero.value,
        endereco: inputEndereco.value,
        data: inputData.value,
    }
    return paciente
}

async function enviarDadosParaAPI (paciente) {
try {
    const resposta = await fetch('http://localhost:5500/paciente', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(paciente)
    })
    if (resposta.status === 201) {
        limparCampos()
        window.location.href = 'index.html'
    } else {
        console.log('Erro ao adicionar paciente')
    }
} catch (erro) {
    console.error(erro)
}
}

function limparCampos () {
    document.querySelector('#nome').value = ''
    document.querySelector('#numero').value = ''
    document.querySelector('#endereco').value = ''
    document.querySelector('#data').value = ''
}
