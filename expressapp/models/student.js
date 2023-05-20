const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Student=new Schema({
    Name: String,
    Age: Number
});
module.exports = mongoose.model('students', Student);
