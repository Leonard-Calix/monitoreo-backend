const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const { findAll, create, findByDeparmentId } = require('../controllers/municipalities.controller');

const router = Router();

router.get('/', [], findAll);

router.get('/department/:departmentId', [], findByDeparmentId);

router.post('/', [
    //check('department', 'El nombre es obligatorio').isEmpty(),
    validarCampos
], create);


module.exports = router;