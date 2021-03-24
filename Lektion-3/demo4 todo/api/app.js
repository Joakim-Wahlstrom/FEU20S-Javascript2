const express = require('express');
const app = express();

const todosController = require('./controllers/todosController');


app.use(express.urlencoded({ exended: false }));
app.use(express.json());


app.use('/api/todos', todosController);

module.exports = app;