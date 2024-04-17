const { Router, Request, Response } = require('express');
const { index } = require('../controllers/app.controller');
const { findAll, findOne } = require('../controllers/serveys.controller');
const { validarJWT } = require('../middlewares/valida-jwt');
const router = Router();

router.get('/', [], findAll);

router.get('/:id', [], findOne);


module.exports = router;