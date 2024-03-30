const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { create, findAll, BulkCeate } = require('../controllers/poll.controller');
const { validarJWT } = require('../middlewares/valida-jwt');

const router = Router();

router.get('/', [], findAll);

router.post('/', [
    //check('department', 'El nombre es obligatorio').isEmpty(),
    validarJWT,
    validarCampos
], create);

router.post('/bluk-create', [
    //check('department', 'El nombre es obligatorio').isEmpty(),
    //validarJWT,
    validarCampos
], BulkCeate);

module.exports = router;