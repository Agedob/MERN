$(document).ready(() => { 
    const socket = io("http://localhost:7173");
    console.log('Ready to code.');

    socket.on('joined_server', (data) => {
        console.log(data.greeting);
    })
    socket.on('refresh_number', (num) => {
        $('#counter').html(`<h1> ${num} </h1>`)
    })
    $('#reset').on('click', () => {
        socket.emit('reset');
    })
    $('#plus_1').on('click', () => {
        socket.emit('plus-1');
    })
    socket.on('i_left_chat', (message) => {
        console.log(message);
    })
    socket.on('half_way', (data) => {
        $('#counter').html(`<h1> ${data.count} </h1><p> ${data.msg} </p>`)
    })
})