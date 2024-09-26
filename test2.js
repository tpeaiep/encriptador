const { encriptarContrasena, verificarContrasena } = require('encriptador');

async function probarEncriptador() {
    const contrasenaOriginal = 'hola';
    const hashedPassword = await encriptarContrasena(contrasenaOriginal);
    console.log('Contraseña encriptada:', hashedPassword);

    const contrasenaVerificacion = 'chao'; // Cambia aquí a la contraseña que quieres verificar
    const esCoincidente = await verificarContrasena(contrasenaVerificacion, hashedPassword);
    console.log('¿Las contraseñas coinciden?', esCoincidente);
}

probarEncriptador();
