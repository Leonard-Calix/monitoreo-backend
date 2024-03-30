const { request, response } = require("express");
const { Community, Municipalities } = require("../models");
const { Op } = require("sequelize");


const findAll = async (req = request, res = response) => {
    try {

        const communities = await Community.findAll();

        return res.json({ ok: true, msg: 'Consulta exitosa', data: communities });

    } catch (error) {
        res.status(500).json({ ok: false, msg: "Internal Server Error", data: error });
    }
}

const create = async (req = request, res = response) => {
    try {

        const existMunicipality = await Municipalities.findByPk(req.body.municipalityId);

        if (!existMunicipality) {
            return res.status(400).json({ ok: false, msg: 'El Municipio no esta registrado', data: null });
        }

        const existComminity = await Community.findOne({
            where: {
                nameC: { [Op.like]: req.body.nameC },
                MunicipalityId: req.body.municipalityId
            }
        });

        if (existComminity) {
            return res.status(400).json({ ok: false, msg: 'La Municipalidad ya esta registrada', data: null });
        }

        const newCommunity = await Community.create({
            nameC: req.body.nameC,
            state: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            MunicipalityId: req.body.municipalityId
        });

        return res.status(200).json({ ok: true, msg: 'Consulta exitosa', data: newCommunity });

    } catch (error) {
        res.status(500).json({ ok: false, msg: "Internal Server Error", data: error });
    }
}

const findByMunicipalityId = async (req = request, res = response) => {
    try {

        const existMunicipality = await Municipalities.findByPk(req.params.municipalityId);

        if (!existMunicipality) {
            return res.status(400).json({ ok: false, msg: 'El Municipio no esta registrado', data: null });
        }

        const communities = await Community.findAll({
            where: {
                MunicipalityId: req.params.municipalityId
            }
        });

        return res.json({ ok: true, msg: 'Consulta exitosa', data: communities });

    } catch (error) {
        res.status(500).json({ ok: false, msg: "Internal Server Error", data: error });

    }
}


module.exports = {
    findAll,
    create,
    findByMunicipalityId
}