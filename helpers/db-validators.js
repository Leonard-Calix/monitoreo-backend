const { User } = require("../models/");

const esRoleValido = async (rol = '') => {
    const existRol = await Role.findOne({ where: { rol } });
    if (!existRol) {
        throw new Error('El rol no esta registrado en la BD');
    }
}

const existEmail = async (email = '') => {

    try {
        const existEmail = await User.findOne({ where: { email: email } });
        if (existEmail) {
            throw new Error('El email ya esta registrado');
        }
    } catch (error) {
        console.log(error)
    }


}

const existUserById = async (id = '') => {
    const existRol = await User.findById(id);
    if (!existRol) {
        throw new Error('El id no esta registrado');
    }
}

module.exports = {
    //esRoleValido,
    existEmail,
    //existUserById
}