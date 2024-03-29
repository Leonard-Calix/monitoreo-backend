const validarJWT = require('../middlewares/valida-jwt');
const validaRoles = require('../middlewares/validar-roles');
const validarCampos = require('../middlewares/validar-campos');

module.exports = {
    ...validaRoles,
    ...validarCampos,
    ...validarJWT
}