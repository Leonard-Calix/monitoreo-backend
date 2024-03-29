const { request, response } = require("express");
const { Municipalities, Department } = require("../models/");
const { Op } = require("sequelize");


const findAll = async (req = request, res = response) => {
    try {

        const municipalities = await Municipalities.findAll({
            where: { state: true },
            /*include: [
                { model: Department }
            ]*/
        });

        res.json({ ok: true, msg: 'Consulta exitosa', data: municipalities });

    } catch (error) {
        res.status(500).json({ ok: false, msg: "Internal Server Error", data: JSON.stringify(error) });
    }
}

const create = async (req = request, res = response) => {
    try {

        const existDepartment = await Department.findByPk(req.body.departmentId);

        if (!existDepartment) {
            return res.status(400).json({ ok: false, msg: 'El Departemento no esta registrado', data: null });
        }

        const existMunicipality = await Municipalities.findOne({
            where: {
                nameM: { [Op.like]: req.body.municipality }
            }
        });

        if (existMunicipality) {
            return res.status(400).json({ ok: false, msg: 'El Municipio ya esta registrado', data: null });
        }

        console.log(req.body.municipality)

        const newMunicipality = await Municipalities.create({
            nameM: req.body.municipality,
            state: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            DepartmentId: req.body.departmentId
        });

        return res.status(200).json({ ok: true, msg: 'Consulta exitosa', data: newMunicipality });

    } catch (error) {
        res.status(500).json({ ok: false, msg: "Internal Server Error", data: error });
    }
}


module.exports = {
    findAll,
    create
}