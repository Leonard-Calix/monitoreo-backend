const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { create, findAll, BulkCeate, findOne } = require('../controllers/poll.controller');
const { validarJWT } = require('../middlewares/valida-jwt');

const router = Router();

router.get('/', [
    validarJWT
], findAll);

router.get('/:id', [
    validarJWT
], findOne);

router.post('/', [
    validarJWT,
    validarCampos
], create);

router.post('/bluk-create', [
    validarJWT,
    validarCampos
], BulkCeate);

module.exports = router;