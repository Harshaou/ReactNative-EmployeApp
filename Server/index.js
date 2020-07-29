const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('./model')

const employee = mongoose.model('employeeModel')

const mongoUrl = 'mongodb+srv://Employeeapp:T8hbFgMUty6suJIJ@cluster0.8kitw.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'))


app.get('/', (req,res) => {
    res.send('Whooo')
})



app.listen(4000, () => console.log('server live on 4000'))