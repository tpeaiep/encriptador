const bcrypt = require('bcrypt');

// Función para encriptar contraseñas
async function encriptarContrasena(plainPassword) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
}

// Función para comparar contraseñas
async function verificarContrasena(plainPassword, hashedPassword) {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
}

module.exports = {
    encriptarContrasena,
    verificarContrasena
};
