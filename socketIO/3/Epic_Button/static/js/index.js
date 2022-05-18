$(document).ready(() => { 
    const socket = io("http://localhost:7173");
    console.log('Ready to code.');

    socket.on('joined_server', (data) => {
        console.log(data.greeting);
    })

})