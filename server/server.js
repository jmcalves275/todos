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

app.get('/todos', (req, res) => {
    Todo.find().then((result) => {
        res.status(200).send({result});
    }, (err) => {
        res.status(400).send({err});
    });
});

app.get('/todos/:id', (req, res) => {
    console.log(`Someone asked for todo with id ${req.params.id}`);
    Todo.findById(req.params.id).then((result) => {
        res.status(200).send({result});
        console.log(`[200] ID Found ${req.params.id}`);
    }, (err) => {
        res.status(400).send({err});
        console.log(`[400] ID Not Found ${req.params.id}`);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
})

