const express = require('express');
const app = express();
app.use(express.static(__dirname + '/static'));
const server = app.listen(7173);
console.log('Listening on 7173');
const io = require('socket.io')(server);

// user joined 
var the_number = 0;
io.on('connection', function (socket) {
    
    socket.emit('joined_server', { greeting:`Thank you for joinging ${socket.id} this will be your id number.`, id: socket.id});
    
    // socket.emit('refresh_number', the_number);

    socket.on('plus-1', () => {
        the_number +=1;
        if(the_number <= 20){
            io.emit('refresh_number', the_number);
        }
        else if (the_number >= 21){
            io.emit('half_way', {msg: `Made it halfway.`, count: the_number});
        }
    })
    socket.on('reset', () => {
        the_number = 0;
        io.emit('refresh_number', the_number)
    })

    // user left
    socket.on('disconnect', () => {
        socket.broadcast.emit('i_left_chat', `${socket.id} left the chat`); 
        console.log(socket.id, ' Left the server')
    })

});
