var socket = io();

//escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el svr');
})

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Pablo',
    message: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta: ', resp);
});

socket.on('enviarMensaje', function(message) {
    console.log(message);
})