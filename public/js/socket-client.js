
// Referencias del HTML
// const lblOnline  = document.querySelector('#lblOnline');
// const lblOffline = document.querySelector('#lblOffline');
// const txtMensaje = document.querySelector('#txtMensaje');
 const btnEnviar  = document.querySelector('button');


const socket = io();



socket.on('connect', () => {
    // console.log('Conectado');

    // lblOffline.style.display = 'none';
    // lblOnline.style.display  = '';

});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');

    // lblOnline.style.display  = 'none';
    // lblOffline.style.display = '';
});


socket.on("enviar-ticket", hoy => {
      console.log(hoy, 'desde on')

    });


btnEnviar.addEventListener( 'click', () => {

    const mensaje = 'hola desde el cliente';
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    
    socket.emit("enviar-ticket", payload, (hoy) => {
      console.log("Desde el server ", hoy, 'desde emit');
    });

});