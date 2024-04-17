const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const { findAll, create, findByDeparmentId } = require('../controllers/municipalities.controller');
const { validarJWT } = require('../middlewares/valida-jwt');

const router = Router();

router.get('/', [validarJWT], findAll);

router.get('/department/:departmentId', [validarJWT], findByDeparmentId);

router.post('/', [
    //check('department', 'El nombre es obligatorio').isEmpty(),
    validarJWT,
    validarCampos
], create);


module.exports = router;