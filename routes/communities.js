const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { findAll, create, findByMunicipalityId } = require('../controllers/communities.controller');
const { validarJWT } = require('../middlewares/valida-jwt');

const router = Router();

router.get('/', [], findAll);

router.get('/municipality/:municipalityId', [
    validarJWT
], findByMunicipalityId);

router.post('/', [
    //check('department', 'El nombre es obligatorio').isEmpty(),
    validarJWT,
    validarCampos
], create);

//router.post('/', );


module.exports = router;