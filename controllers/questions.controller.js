const { request, response } = require("express");
const { Question } = require("../models");
const { Op } = require("sequelize");


const findAll = async (req = request, res = response) => {
    try {

        const questions = await Question.findAll({
            where: { state: true }
        });

        res.json({ ok: true, msg: 'Consulta exitosa', data: questions });

    } catch (error) {
        res.status(500).json({ ok: false, msg: "Internal Server Error", data: error });
    }
}

const create = async (req = request, res = response) => {
    try {

        const existQuestion = await Question.findAll({
            where: {
                description: { [Op.like]: req.body.description }
            }
        });

        if (existQuestion.length > 0) {
            return res.status(400).json({ ok: false, msg: 'La pregunbta ya esta registrada', data: null });
        }

        const neQuestion = await Question.create({
            description: req.body.description,
            recommendation: req.body.recommendation,
            type: req.body.type,
            state: true,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        return res.status(200).json({ ok: true, msg: 'Consulta exitosa', data: neQuestion });

    } catch (error) {
        res.status(500).json({ ok: false, msg: "Internal Server Error", data: error });
    }
}


module.exports = {
    findAll,
    create
}