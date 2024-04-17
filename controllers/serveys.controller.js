const { request, response } = require("express");
const { Poll, Survey, User, Question, Community, Municipalities, Department } = require("../models");
const models = require('../models');

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
                {
                    model: Survey
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


        const polls = await Poll.findAll({

            where: {
                surveyId: req.params.id
            },

            include: [
                {
                    model: Question
                },
                {
                    model: Community,
                    include: [
                        {
                            model: Municipalities,
                            include: [
                                {
                                    model : Department
                                }
                            ]
                        }
                    ]
                },
                {
                    model: Survey,
                },
            ]
        });

        res.status(200).json({ ok: true, msg: 'Consulta exitosa', data: polls });

    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Hable con el administrador', data: error });
    }

}

module.exports = {
    findAll,
    findOne
}