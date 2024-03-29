const { Router } = require('express');
const { create, getAllUsers} = require('../controllers/users.controller');
const { check } = require('express-validator');
const { existEmail } = require('../helpers/db-validators');
const { validarCampos  }  = require('../middlewares')

const router = Router();

router.get('/', [], getAllUsers);

router.post('/', [
    check('firstName', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('userName', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'El correo no es valido').isEmail(),
    check('password', 'La contraseña es obligatoria y mas de 6 letras').isLength({ min: 6 }),
   //check('rol', 'El rol no es permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    //check('rol').custom(esRoleValido), 
    check('email').custom(existEmail),
    validarCampos
], create);
/*
router.put('/:id', [
    check('id', 'No es un iD valido').isMongoId(),
    check('id').custom(existUserById),
    check('rol', 'El rol no es permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    //check('rol').custom(esRoleValido),  
    validarCampos
], update);

router.delete('/:id', [
    validarJWT,
    //esAdminRole,
    tieneRole('ADMIN_ROLE', 'USER_ROLE'),
    check('id', 'No es un iD valido').isMongoId(),
    check('id').custom(existUserById),
    validarCampos
], deleteUSers);

*/
module.exports = router;