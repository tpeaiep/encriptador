const { encriptarContrasena, verificarContrasena } = require('./index');

async function test() {
    const contrasena = 'miContrasenaSegura';
    const hashedPassword = await encriptarContrasena(contrasena);
    console.log('Contraseña encriptada:', hashedPassword);

    const isMatch = await verificarContrasena('miContrasenaSegura', hashedPassword);
    console.log('¿Las contraseñas coinciden?', isMatch);
}

test();
