const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) =>{
    res.send('User List')
})
routes.get('/new', (req, res) =>{
    res.send('User New Form')
})

module.exports = routes; 