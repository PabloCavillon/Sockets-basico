const { io } = require('../server')

io.on('connection', client => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        message: 'Bienvenido a la app'
    })

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data)
    });
})