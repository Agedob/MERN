const express = require('express');
const app = express();
app.use(express.static(__dirname + "/static"));
const server = app.listen(7173);
const io = require('socket.io')(server);

io.on('connection', function (socket) { 
  console.log("Someone's listening. ID:" + socket.id)

});
