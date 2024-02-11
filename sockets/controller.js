const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        //console.log('Cliente desconectado', socket.id);

    });

    socket.on('enviar-mensaje', (payload, callback) => {


        //simulacion de retornar un id para operaciones con base de datos
        const id = 12345689;
        callback(id);

        socket.broadcast.emit('enviar-mensaje', payload);

    });

}

module.exports = {
    socketController
}