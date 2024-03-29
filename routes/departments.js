const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { findAll, create } = require('../controllers/deparments.controller');

const router = Router();

router.get('/', [], findAll);

router.post('/', [
    //check('department', 'El nombre es obligatorio').isEmpty(),
    validarCampos
], create);

//router.post('/', );


module.exports = router;