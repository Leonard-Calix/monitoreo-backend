const { request, response } = require("express");
const { Department } = require("../models/");
const { Op } = require("sequelize");


const findAll = async (req = request, res = response) => {
    try {

        const deparments = await Department.findAll();

        return res.json({ ok: true, msg: 'Consulta exitosa', data: deparments });

    } catch (error) {
        res.status(500).json({ ok: false, msg: "Internal Server Error", data: error });
    }
}

const create = async (req = request, res = response) => {
    try {

        const existDepartment = await Department.findOne({
            where: {
                nameD: { [Op.like]: req.body.department },
            }
        });

        if (existDepartment) {
            return res.status(400).json({ ok: false, msg: 'El Departamento ya esta registrado', data: null });
        }

        const newPeparment = await Department.create({
            nameD: req.body.department,
            state: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.status(200).json({ ok: true, msg: 'Consulta exitosa', data: newPeparment });

    } catch (error) {
        res.status(500).json({ ok: false, msg: "Internal Server Error", data: JSON.stringify(error) });
    }
}


module.exports = {
    findAll,
    create
}