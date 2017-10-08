var mongoose = require('../db/mongoose')
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        trim: true,
        minlength: 2,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = Todo