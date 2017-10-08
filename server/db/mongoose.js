var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:admin@ds119524.mlab.com:19524/node-todo');

module.exports = mongoose;