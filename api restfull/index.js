const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.listen(5500, () => console.log('Rodando na porta 5500'))

app.use(cors())

app.use(express.json())

let users = [{
  id: 1,
  name: "matilde Gracielly",
  healthInsuranceCardId: "123456789",
  address: "rua do shopping",
  createdAt:"2022-05-05"

}]


app.route('/paciente').get((req, res) => res.json({
  users
}))

app.route('/paciente/:id').get((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  res.json(user)
})

app.route('/paciente').post((req, res) => {
  const lastId = users[users.length - 1].id
  users.push({
    id: lastId + 1,
    name: req.body.name,
    avatar: req.body.avatar,
    healthInsuranceCardId: req.body.healthInsuranceCardId,
    address: req.body.address,
    createdAt: req.body.createdAt
  })
  res.json('Saved user')
})

app.route('/paciente/:id').put( async (req, res) => {
  const userId = req.params.id
  
    const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  const updatedUser = {
    ...user,
    name: req.body.name,
    avatar: req.body.avatar,
    healthInsuranceCardId: req.body.healthInsuranceCardId,
    address: req.body.address,
    createdAt: req.body.createdAt
  }
  

   users = users.map(user => {
    if (Number(user.id) === Number(userId)) {
      user = updatedUser
    }
    return user
  })
  
  res.json("Updated user")
})

app.route('/paciente/:id').delete((req, res) => {
  const userId = req.params.id

  users = users.filter(user => Number(user.id) !== Number(userId))
  

  res.json('Deleted User')
})

mongoose.connect('mongodb+srv://thiagoocms:Melancia1@cluster0.1ebzx.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('conectamos ao banco')

    //porta localhost
    
})
.catch((err) => console.log(err))