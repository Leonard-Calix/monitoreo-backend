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
                nameM: { [Op.like]: req.body.mameM }
            }
        });

        if (existMunicipality) {
            return res.status(400).json({ ok: false, msg: 'El Municipio ya esta registrado', data: null });
        }

        const newMunicipality = await Municipalities.create({
            nameM: req.body.nameM,
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

const findByDeparmentId = async (req = request, res = response) => {
    try {

        const existDepartment = await Department.findByPk(req.params.departmentId);

        if (!existDepartment) {
            return res.status(400).json({ ok: false, msg: 'El Departemento no esta registrado', data: null });
        }

        const municipalities = await Municipalities.findAll({
            where: {
                state: true,
                DepartmentId: req.params.departmentId
            },
            /*include: [
                { model: Department }
            ]*/
        });

        return res.status(200).json({ ok: true, msg: 'Consulta exitosa', data: municipalities });


    } catch (error) {
        res.status(500).json({ ok: false, msg: "Internal Server Error", data: error });
    }
}



module.exports = {
    findAll,
    create,
    findByDeparmentId
}