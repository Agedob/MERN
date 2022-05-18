const express = require('express');
const app = express();
app.use(express.static(__dirname + "/static"));
const server = app.listen(7173);
const io = require('socket.io')(server);

// user joined 
io.on('connection', function (socket) {
    var lucky = Math.ceil(Math.random()*1000)

    socket.emit('someone_joined', { greeting:`Thank you for joinging ${socket.id} this will be your id number.`, id: socket.id, lucky_number: lucky});

    // message form client that joined 
    socket.on('client_sent', (from_client) => {
        console.log(from_client)
    });

    // telling everyone else this user joined
    socket.broadcast.emit('new_user', `${socket.id} joined the chat`); 
    
    
    // user left
    socket.on('disconnect', () => {
        socket.broadcast.emit('i_left_chat', `${socket.id} left the chat`); 
        console.log(socket.id, ' Left the server')
    })

    socket.on('form_sent_from_client', (info) => {
        console.log(info);
    })

});
