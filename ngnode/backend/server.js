var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var jwt = require('jwt-simple')
mongoose.Promise = require('bluebird')
var app = express()

var User = require('./models/User.js')
 
var posts = [ 
    {message : "hello"},
    {message: "hi"}
]

app.use(cors())
app.use(bodyParser.json())

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/register', (req, res) => {
    var userData = req.body;
    
    var user = new User(userData)
    user.save((err, result) => {
        if(err)
            console.log('saving error')
        res.send(200)
    })   
})

app.post('/login', async (req,res) => {
    
    var userData = req.body;
    
    var user = await User.findOne({email: userData.email})
    console.log(user)

})


mongoose.connect('mongodb://test12:test12@ds153460.mlab.com:53460/pssocial', (err) => {
    if(!err)
        console.log('connected to mongo!')
})

app.listen(3000)