const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { create, findAll, findOne, update } = require('../controllers/questions.controller');
const { validarJWT } = require('../middlewares/valida-jwt');

const router = Router();

router.get('/', [validarJWT], findAll);

router.get('/:id', [validarJWT], findOne);

router.post('/', [
    validarJWT,
    validarCampos
], create);

router.put('/:id', [
    validarJWT,
    validarCampos
], update);

module.exports = router;