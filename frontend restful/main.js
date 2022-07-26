const url = "http://localhost:5500/paciente"
//exibir
function getPacientes() {
  axios.get(url)
    .then(response => {
      const data =  response.data

      result.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

function getPaciente() {
  axios.get(`${url}/1`)
    .then(response => {
      const data = response.data

      
      pacienteId.textContent = data.id
      pacienteName.textContent = data.name
      pacienteHealthInsuranceCardId.textContent = data.healthInsuranceCardId
      pacienteAddress = data.address
      pacienteCreatdAt = data.creatdAt
      

    })
    .catch(error => console.log(error))
}
//criar


function btnpost() {
    // capturar os dados do formulário
    const paciente = getDadosFormPost()
    // enviar os dados para api
    addNewPaciente(paciente)

    window.location.href = 'index.html'
}

function getDadosFormPost () {
    const inputNome = document.querySelector('#nome')
    const inputNumero = document.querySelector('#numero')
    const inputEndereco = document.querySelector('#endereco')
    const inputData = document.querySelector('#data')



    const paciente = {
        name: inputNome.value,
        healthInsuranceCardId: inputNumero.value,
        address: inputEndereco.value,
        creatdAt: inputData.value,
    }
    return paciente
}
function addNewPaciente(paciente) {

  axios.post(url, paciente)
    .then(response => {
      alert(JSON.stringify(response.data))
      getPacientes()
    })
    .catch(error => console.error(error));
}

//atualizar

 function btnatl(){
    // capturar os dados do formulário
    const paciente = getDadosFormPut()
    const id = paciente.id
    // enviar os dados para api
    updatePaciente( paciente ,id)

    window.location.href = 'index.html'
}

function getDadosFormPut () {
    
    const inputId = document.querySelector('#id')
    const inputNome = document.querySelector('#nome')
    const inputNumero =document.querySelector('#numero')
    const inputEndereco = document.querySelector('#endereco')
    const inputData = document.querySelector('#data')



    const paciente = {
        id: inputId.value,
        name: inputNome.value,
        healthInsuranceCardId: inputNumero.value,
        address: inputEndereco.value,
        creatdAt: inputData.value,
    }
    return paciente
}
  function updatePaciente( paciente, id) {
  axios.put(`${url}/${id}`, paciente)
    .then(response => {
      alert(JSON.stringify(response.data))
      getPacientes()
    })
    .catch(error => console.error(error));
}

//deletar



function btndel(){
    // capturar os dados do formulário
    const paciente = getDadosFormDelete()
    const id = paciente.id
    
    
    // enviar os dados para api
    deletePaciente(id)

    
}

function getDadosFormDelete () {
    
  const inputId = document.querySelector('#id')
 



  const paciente = {
      id: inputId.value,
      
  }
  return paciente
}


function deletePaciente(id) {
  axios.delete(`${url}/${id}`)
    .then(response => {
      alert(JSON.stringify(response.data))
      getPacientes()
    })
    .catch(error => console.error(error));
}

//calls
getPacientes()
getPaciente()

// addNewPaciente({
//   name: "jose da silva",
//    healthInsuranceCardId: "123456789",
//   address: "rua do shopping",
//   createdAt:"2022-05-05"
// })
// updatePaciente({
//   name: "jose da silva",
//    healthInsuranceCardId: "123456789",
//   address: "rua da alegria",
//   createdAt:"2022-05-05"
// }, 2)

// deletePaciente(2)

  
 
  
  