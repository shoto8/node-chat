var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
       from: 'Ray',
       text: 'that sounds good!'
    });
});

socket.on('disconnect', function ()  {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});