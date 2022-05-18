const express = require('express');
const app = express();
app.use(express.static(__dirname + '/static'));
const server = app.listen(7173);
console.log('Listening on 7173');
const io = require('socket.io')(server);

// user joined 
io.on('connection', function (socket) {
    
    socket.emit('joined_server', { greeting:`Thank you for joinging ${socket.id} this will be your id number.`, id: socket.id});

    // // message form client that joined 
    // socket.on('client_sent', (from_client) => {
    //     console.log(from_client)
    // });

    // // telling everyone else this user joined
    // socket.broadcast.emit('new_user', `${socket.id} joined the chat`); 
    
    
    // // user left
    // socket.on('disconnect', () => {
    //     socket.broadcast.emit('i_left_chat', `${socket.id} left the chat`); 
    //     console.log(socket.id, ' Left the server')
    // })

    // // mesage from form
    // socket.on('form_sent_from_client', (info) => {
    //     console.log(info);
    //     const lucky = Math.ceil(Math.random()*1000)
    //     socket.emit('updated_message', `Your lucky number is ${lucky}, you set name as:${info.name} and email as:${info.email}`)
    // })

});
