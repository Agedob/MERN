const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
// server.listen(80);
var counter = 0;
    
io.on('connection', function (socket) { //2
  
  socket.emit('greeting', { msg: `SLDKJF:SLDKFJ Greetings, from server Node, brought to you by Sockets! -Server ID:${socket.id}`}); //3
  socket.on('thankyou',  (data) => { //7
    console.log(data.msg); //8 (note: this log will be on your server's terminal)
  });
  socket.on('Hello_World', (info) => {
    console.log(info)
  });
    
});


