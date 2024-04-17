const { request, response } = require("express");
const { Poll, Community, Question, User, Survey } = require("../models");
const { Sequelize, Transaction, where } = require('sequelize');
const models = require('../models');


const create = async (req = request, res = response) => {
    try {

        const existCommunity = await Community.findByPk(req.body.communityId);

        if (!existCommunity) {
            return res.status(400).json({ ok: false, msg: 'Comunidad invalidad', data: null });
        }

        const existQuestion = await Question.findByPk(req.body.questionId);

        if (!existQuestion) {
            return res.status(400).json({ ok: false, msg: 'Pregunta invalida', data: null });
        }

        const newPoll = await Poll.create({
            response: req.body.response,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: req.user.id,
            QuestionId: req.body.questionId,
            CommunityId: req.body.communityId,
        });


        res.status(200).json({ ok: true, msg: 'Consulta exitosa', data: newPoll });


    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Hable con el administrador', data: error });
    }
}

const BulkCeate = async (req = request, res = response) => {

    const t = await models.sequelize.transaction();

    try {

        let { polls, survey } = req.body;

        const newSurvey = await Survey.create({
            recomendation: survey.recomendation,
            monitoringDate: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
            CommunityId: survey.communityId,
            UserId: req.user.id,
        }, { t });

        polls.forEach(async (element, index) => {
            element.UserId = req.user.id;
            element.createdAt = new Date();
            element.updatedAt = new Date();
            element.SurveyId = newSurvey.id
        });

        // Utiliza bulkCreate para insertar múltiples usuarios dentro de la transacción
        await Poll.bulkCreate(polls, { t });

        // Confirma la transacción si todo va bien
        await t.commit();

        res.status(200).json({ ok: true, msg: 'Consulta exitosa', data: null });

    } catch (error) {
        t.rollback();
        return res.status(500).json({ ok: false, msg: 'Hable con el administrador', data: error });
    }
}

const findAll = async (req = request, res = response) => {

    try {

        const Polls = await Poll.findAll({

            include: [
                {
                    model: User
                },
                {
                    model: Question
                },
                {
                    model: Community
                },
            ]
        });

        res.status(200).json({ ok: true, msg: 'Consulta exitosa', data: Polls });


    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Hable con el administrador', data: error });
    }

}

const findOne = async (req = request, res = response) => {

    try {

        const Polls = await Poll.findOne({

            where: {
                id: req.params.id
            },

            include: [
                {
                    model: User
                },
                {
                    model: Question
                },
                {
                    model: Community
                },
            ]
        });

        res.status(200).json({ ok: true, msg: 'Consulta exitosa', data: Polls });

    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Hable con el administrador', data: error });
    }

}

module.exports = {
    create,
    findAll,
    BulkCeate,
    findOne
}