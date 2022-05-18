$(document).ready(()=> {
    const socket = io("http://localhost:7173");
    console.log('Ready to code.');
    socket.on('someone_joined', (join_from_server) => {
        console.log(join_from_server.lucky_number);

        console.log(join_from_server.greeting);
        socket.emit('client_sent', `hello from client ${join_from_server.id}`);
        
    });

    // new user that isn't this user joined chat
    socket.on('new_user', (new_user_joined_info) => {
        console.log(new_user_joined_info)
    });

    socket.on('i_left_chat', (message) => {
        console.log(message);
    })

    $('form').submit((e) =>{
        e.preventDefault()
        console.log('stopped form')
        console.log($('input[name="name"').val())
        console.log($('input[name="email"').val())
    })
})