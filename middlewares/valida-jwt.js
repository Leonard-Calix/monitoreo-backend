const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const { User } = require('../models');


const validarJWT = async (req = request, res = response, next) => {

    let token = req.header('Authorization') || '';

    token = token.split(' ')[1];
    
    console.log(token)

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        });
    }

    try {
     
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        
        const existUser = await User.findByPk(uid);

        if(!existUser){
            return res.status(401).json({
                msg: 'Token no valido'
            });
        }
        
        if(!existUser.active){
            return res.status(401).json({
                msg: 'Token no valido'
            });
        }

        req.user = existUser;

        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            msg: 'Token no valido'
        });
    }
}

module.exports = {
    validarJWT
}