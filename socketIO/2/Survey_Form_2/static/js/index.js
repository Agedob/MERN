$(document).ready(()=> {
    const socket = io("http://localhost:7173");
    console.log('Ready to code.');
    socket.on('someone_joined', (join_from_server) => {
        // console.log(join_from_server.lucky_number);

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

    // send and reset
    $('form').submit((e) =>{
        const temp = $('form').html()
        console.log('stopped form')
        // console.log(e.target.elements.name.value);
        // console.log(e.target.elements.email.value);
        const name = $('input[name="name"').val();
        const email = $('input[name="email"').val();
        console.log($('input[name="name"').val())
        console.log($('input[name="email"').val())
        socket.emit('form_sent_from_client', {name:name, email:email })
       e.preventDefault()
       $('form').html(temp)
    })

    // recieve and write 
    socket.on('updated_message', (data) => {
        $('#container').append(`<h1> ${data} </h1>`);
        // console.log(data)
    })

})