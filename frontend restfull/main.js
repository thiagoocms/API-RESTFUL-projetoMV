const url = "http://localhost:5500/paciente"

function getUsers() {
  axios.get(url)
    .then(response => {
      const data =  response.data

      renderApiResult.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
//exibir
function getUser() {
  axios.get(`${url}/1`)
    .then(response => {
      const data = response.data

      
      userId.textContent = data.id
      userName.textContent = data.name
      userHealthInsuranceCardId.textContent = data.healthInsuranceCardId
      userAddress = data.address
      userCreatdAt = data.creatdAt
      

    })
    .catch(error => console.log(error))
}
//criar


function btnpost() {
    // capturar os dados do formulário
    const paciente = getDadosForm()
    // enviar os dados para api
    addNewUser(paciente)

    window.location.href = 'index.html'
}

function getDadosForm () {
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
function addNewUser(paciente) {

  axios.post(url, paciente)
    .then(response => {
      alert(JSON.stringify(response.data))
      getUsers()
    })
    .catch(error => console.error(error));
}

//atualizar

 function btnatl(){
    // capturar os dados do formulário
    const paciente = putDadosForm()
    const id = paciente[id]
    // enviar os dados para api
    updateUser( paciente, id)

    window.location.href = 'index.html'
}

function putDadosForm () {
    
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
  function updateUser( paciente, id) {
  axios.put(`${url}/${id}`, paciente)
    .then(response => {
      alert(JSON.stringify(response.data))
      getUsers()
    })
    .catch(error => console.error(error));
}

//deletar



function btndel(){
    // capturar os dados do formulário
    const inputId = document.querySelector('#id')
    
    const id = inputId.value
    // enviar os dados para api
    deleteUser(id)

    window.location.href = 'index.html'
}



function deleteUser(id) {
  axios.delete(`${url}/${id}`)
    .then(response => {
      alert(JSON.stringify(response.data))
      getUsers()
    })
    .catch(error => console.error(error));
}

//calls
getUsers()
getUser()

// addNewUser({
//   name: "jose da silva",
//    healthInsuranceCardId: "123456789",
//   address: "rua do shopping",
//   createdAt:"2022-05-05"
// })
// updateUser({
//   name: "jose da silva",
//    healthInsuranceCardId: "123456789",
//   address: "rua da alegria",
//   createdAt:"2022-05-05"
// }, 2)

// deleteUser(2)

  
 
  
  