const { Router, Request, Response } = require('express');
const { login, checkToken } = require('../controllers/auth.controller');
const { check } = require('express-validator');
const { validarCampos, valida } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/valida-jwt');


const router = Router();

router.post('/login', [
    check('email', 'El correo no es valido').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login);

router.get('/check-token', [validarJWT], checkToken);


module.exports = router;