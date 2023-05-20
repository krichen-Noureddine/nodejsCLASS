//config
const express = require("express");
const logger = require('morgan');
const createError = require('http-errors');
const mongoose = require('mongoose');
const routes = require('./routes/students');

mongoose.set('strictQuery', false);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', routes);

app.use((req, res, next)=>{
    next(createError(404))
});

mongoose.connect('mongodb://localhost:27017/class', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database!');
}).catch(error => {
  console.log('Error connecting to database:', error.message);
});
module.exports = app;