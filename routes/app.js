const { Router, Request, Response } = require('express');
const { index } = require('../controllers/app.controller');
const router = Router();

router.get('/', index);

module.exports = router;