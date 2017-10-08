var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var User = require('./models/user.js');
var Todo = require('./models/todo.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo(req.body);
    todo.save().then((result) => {
        res.send(result)
    }, (err) => {
        res.status(400).send(err)
    })
})

app.listen(3000, () => {
    console.log('Started on port 3000');
})

