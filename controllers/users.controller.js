const { request, response } = require("express");
const bcryptjs = require("bcryptjs");

const { User } = require("../models/");
const { Op } = require("sequelize");

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

        const { id } = req.params;
        //const { id, password, email, ...resto } = req.body;

        const userUpdate = await User.findByPk(id);

        // TODO validar contra base de datos
        /*
        if (password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password, salt);
        }
        */

        await User.update(
            {
                active: (req.body.active == 'true' ? true : false),
                updateAt: new Date(),

            },
            {
                where: {
                    id: id,
                },
            },
        );

        res.json({ ok: true, msg: "Consulta exitosa", data: null });

    } catch (error) {
        res.status(500).json({ ok: true, msg: "Internal Server Error", data: JSON.stringify(error) });
    }
}

const getAllUsers = async (req = request, res = response) => {
    try {

        const users = await User.findAll({
            attributes: {
                exclude: ['password']
            },
            where: {
                id: { [Op.notIn]: [req.user.id] }
            }
        });

        res.json({ ok: true, msg: 'Consulta exitosa', data: users });

    } catch (error) {
        res.status(500).json({ error: JSON.stringify(error) });
    }
}

const getUser = async (req = request, res = response) => {
    try {

        const users = await User.findAll({
            attributes: {
                exclude: ['password']
            },
            where: {
                id: req.params.id
            }
        });

        res.json({ ok: true, msg: 'Consulta exitosa', data: users[0] });

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
    deleteUSers,
    getUser
}