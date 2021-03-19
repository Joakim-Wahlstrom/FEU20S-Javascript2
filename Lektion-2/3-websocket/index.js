const express = require('express');
const http = require('http');
const path = require('path');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log('server running on http://localhost:' + PORT);
})


const io = socket(server);

io.on('connection', socket => {
  console.log('New user connected', socket.id);


  // socket.emit('message', 'Welcome to the chat!');
  socket.broadcast.emit('user', 'A user has joined the chat');
  socket.on('disconnect', () => {
    io.emit('user', 'A user has left the chat');
  })

  socket.on('message', data => {
    // console.log(data);
    io.sockets.emit('message', data);
  })

  // Broadcast skickar till anna andra sockets förutom sin egna.
  socket.on('typing', data => {
    socket.broadcast.emit('typing', data);
  })


})