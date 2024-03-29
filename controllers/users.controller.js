const { request, response } = require("express");
const bcryptjs = require("bcryptjs");

const { User } = require("../models/");

const create = async (req = request, res = response) => {
    try {

        const { firstName, lastName, userName, email, password } = req.body;

        const existEmail = await User.findOne({ where: { email: email } });

        if (existEmail) {
            return res.status(400).json({
                msg: 'El correo ya esta registrado'
            });
        }

        const salt = bcryptjs.genSaltSync();
        let passwordE = bcryptjs.hashSync(password, salt);

        const usuario = await User.create({ firstName, lastName, userName: userName, email, password: passwordE });

        res.json({ usuario });

    } catch (error) {
        res.json({ error: JSON.stringify(error) });
    }
}

const update = async (req = request, res = response) => {
    try {

        const { idUser } = req.params;
        const { id, password, google, email, ...resto } = req.body;

        // TODO validar contra base de datos
        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password, salt);
        }

        const user = await User.update(req.body, {
            where: {
                id: id
            }
        });

        res.json({ user });

    } catch (error) {
        res.status(500).json({ error: JSON.stringify(error) });
    }
}

const getAllUsers = async (req = request, res = response) => {
    try {

        const { limit = 2, from = 0 } = req.query;
        const query = { state: true };

        const users = await User.findAll({
            attributes: {
                exclude: ['id', 'password']
            },
            where: {
                active: 1
            }
        });

        res.json({ users });

    } catch (error) {
        res.status(500).json({ error: JSON.stringify(error) });
    }
}

const deleteUSers = async (req = request, res = response) => {
    try {

        const { id } = req.params;

        const user = await UsuarioModel.findByIdAndUpdate(id, { state: false });

        res.json({ user });

    } catch (error) {
        res.status(500).json({ error: JSON.stringify(error) });
    }
}

module.exports = {
    create,
    update,
    getAllUsers,
    deleteUSers
}