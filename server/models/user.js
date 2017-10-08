var mongoose = require('../db/mongoose')
var User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        minlength: 1,
        required: true
    },
    password: {
        type: String
    }
});

module.exports = User