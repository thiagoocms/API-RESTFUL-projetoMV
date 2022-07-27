const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.listen(5500, () => console.log('Rodando na porta 5500'))

app.use(cors())

app.use(express.json())

let pacientes = [{
  id: 1,
  name: "matilde Gracielly",
  healthInsuranceCardId: "123456789",
  address: "rua do shopping",
  createdAt:"2022-05-05"

}]


app.get('/paciente',(req, res) => res.json({
  pacientes
}))

app.get('/paciente',(req, res) => {
  const pacienteId = req.params.id

  const paciente = pacientes.find(paciente => Number(paciente.id) === Number(pacienteId))

  if (!paciente) {
    return res.json('paciente nor found!')
  }

  res.json(paciente)
})

app.post('/paciente',(req, res) => {
  const lastId = pacientes[pacientes.length - 1].id
  pacientes.push({
    id: lastId + 1,
    name: req.body.name,
    healthInsuranceCardId: req.body.healthInsuranceCardId,
    address: req.body.address,
    createdAt: req.body.createdAt
  })
  res.json('Saved paciente')
})

app.put('/paciente/:id', async (req, res) => {
  const pacienteId = req.params.id
  
    const paciente =  await pacientes.find(paciente => Number(paciente.id) === Number(pacienteId))

  if (!paciente) {
    return res.json('paciente nor found!')
  }

  const updatedPaciente = {
    ...paciente,
    name: req.body.name,
    healthInsuranceCardId: req.body.healthInsuranceCardId,
    address: req.body.address,
    createdAt: req.body.createdAt
  }
  

  pacientes = pacientes.map(paciente => {
    if (Number(paciente.id) === Number(pacienteId)) {
      paciente = updatedPaciente
    }
    return paciente
  })
  
  res.json("Updated paciente")
})

app.delete('/paciente/:id',(req, res) => {
  const pacienteId = req.params.id

  pacientes = pacientes.filter(paciente => Number(paciente.id) !== Number(pacienteId))
  

  res.json('Deleted paciente')
})

mongoose.connect('mongodb+srv://thiagoocms:Melancia1@cluster0.1ebzx.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('conectamos ao banco')

    //porta localhost
    
})
.catch((err) => console.log(err))