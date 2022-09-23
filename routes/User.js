const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) =>{
    res.send('User List')
})
routes.get('/new', (req, res) =>{
    res.send('User New Form')
})
routes.post('/', (req, res) =>{
  res.send('create user')
})
routes.get('/:id', (req, res) =>{
    res.send(`update use with ID ${req.params.id}`)
})
module.exports = routes; 