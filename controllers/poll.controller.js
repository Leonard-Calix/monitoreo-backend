const { request, response } = require("express");
const { Poll, Community, Question, User } = require("../models");


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

const findAll = async (req = request, res = response) => {

    try {

        const Polls = await Poll.findAll({

            include : [
                {
                    model : User
                },
                {
                    model : Question
                },
                {
                    model : Community
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
    findAll
}