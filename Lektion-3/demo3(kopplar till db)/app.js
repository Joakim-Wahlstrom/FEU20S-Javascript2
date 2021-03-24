const express = require('express');
const app = express();

// INPORTERA CONTROLLERS
const todosController = require('./controllers/todosController');

// MIDDLEWARE


// CONTROLLERS
app.use('/api/todos', todosController);

module.exports = app;