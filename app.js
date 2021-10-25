const express = require('express')
const mongoose = require('mongoose')
const loginRouter = require('./routes/loginRouter')
const app = express()


mongoose.connect(`mongodb+srv://foolhardy21:Vinay21@cluster0.fafup.mongodb.net/medicineapp-test?retryWrites=true&w=majority`
, {useNewUrlParser: true, useUnifiedTopology: true}).then(response => {
    console.log('connected to db')
}).catch(err => {
    console.error(err)
})

app.use('/login', loginRouter)

module.exports = app