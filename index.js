const express = require('express')
const app = express()
var bodyParser = require('body-parser')

var userCtrl = require('./controllers/userController')
var userCtrlContact = require('./controllers/contactController')
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/add', (req,res)=>{
    console.log("app ---------")
    userCtrl.addUser(req,res)
})
app.get('/contact', (req,res)=>{
    console.log("app ---------")
    userCtrlContact.addContact(req,res)
})

app.listen(3000,()=>{
    console.log("app is running on 3000")
})