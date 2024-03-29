
const { request, response } = require("express");

const esAdminRole = (req = request, res = response, next) => {

    if (!req.user) {
        return res.status(500).json({
            msg: 'Seq quiere verificar el role sin validar el token primero'
        });
    }

    const { rol, name } = req.user;

    if (rol !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: name + ' no es administrador - no puede hacer esto'
        });
    }

    next();
}

const tieneRole = (...roles) => {
    return (req = request, res = response, next) => {
        //console.log(roles, req.user.rol)
        if (!req.user) {
            return res.status(500).json({
                msg: 'Seq quiere verificar el role sin validar el token primero'
            });
        }

        if (!roles.includes(req.user.rol)) {
            return res.status(401).json({
                msg: 'El servicio requiere uno de estos roles ' + roles
            });
        }
        next();
    }
}

module.exports = {
    esAdminRole,
    tieneRole
}