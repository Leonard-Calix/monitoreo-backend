const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { create, findAll } = require('../controllers/questions.controller');
const { validarJWT } = require('../middlewares/valida-jwt');

const router = Router();

router.get('/', [], findAll);

router.post('/', [
    //validarJWT,
    validarCampos
], create);

module.exports = router;