var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var User = require('./models/user.js');
var Todo = require('./models/todo.js');

var app = express();
const port = process.env.PORT || 3000;

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
    Todo.findById(req.params.id).then((result) => {
        res.status(200).send({result});
    }, (err) => {
        res.status(400).send({err});
    });
}); 

app.listen(port, () => {
    console.log('Started on port ' + port);
})

