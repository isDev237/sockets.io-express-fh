//referencias html
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

const socket = io();

//listeners
socket.on('connect', () => {
    //console.log('conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});

socket.on('disconnect', () => {
    //console.log('desconectado del servidor');

    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: "1234",
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server ', id);

    });
});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
});