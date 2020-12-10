var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  //console.log('a user connected', socket.id);
 
  socket.on('disconnect', () => {
    //console.log('user disconnected', socket.id);
  });
  //Metodo de envio de mensajes del Ejemplo 
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  

  socket.on('chatExample', (msg) => {

      io.emit('chatExample', '' + msg);
    
  });

});

app.use(express.static('public'));


http.listen(3000, () => {
  console.log('listening on *:3000');
});
