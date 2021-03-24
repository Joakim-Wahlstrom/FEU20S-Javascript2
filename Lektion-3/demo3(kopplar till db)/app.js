const express = require('express');
const app = express();

// INPORTERA CONTROLLERS
const todosController = require('./controllers/todosController');

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CONTROLLERS
app.use('/api/todos', todosController);

module.exports = app;