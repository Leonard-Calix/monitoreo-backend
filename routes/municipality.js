const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const { findAll, create } = require('../controllers/municipalities.controller');

const router = Router();

router.get('/', [], findAll);

router.post('/', [
    //check('department', 'El nombre es obligatorio').isEmpty(),
    validarCampos
], create);


module.exports = router;