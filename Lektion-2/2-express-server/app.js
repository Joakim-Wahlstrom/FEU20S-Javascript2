const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('server running on: http://localhost:'+ PORT));



app.get('/', (req, res) => {
  // res.send('<h1>Home</h1>');
  // res.sendFile('./views/index.html', { root: __dirname });
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
})
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
})