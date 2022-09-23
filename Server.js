const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
   console.log('hello')
//    sends the status of the error
//    res.sendStatus(404)
// res.status(404).send('page not found')
   res.render("index2", {text: 'world'})
})
const userRouter = require('./routes/User')
app.use('/user', userRouter)
app.listen(3000)