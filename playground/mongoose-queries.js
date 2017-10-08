const mongoose = require('./../server/db/mongoose');
const Todo = require('./../server/models/todo');

var id = '59da3283afaa033c33bd71ce';

Todo.find({
    _id: id
}).then((result) => {
    console.log(result);
}, (err) => {
    console.log(err)
})