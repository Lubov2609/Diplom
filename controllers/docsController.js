const docsModel = require('../models/docsModel');
const yearsModel = require("../models/yearsModel");
const groupsModel = require("../models/groupsModel");
const vkrsModel = require("../models/vkrsModel");


module.exports = docsController = {
    getAll: async (req, res, next) => {
        try {
            const year_id = parseInt(req.params.yearID); // Получаем id_year из параметра маршрута
            const docs = await docsModel.getAll(year_id); // Передаем id_year в модель для получения данных
            res.render('docs', {
                title: 'Документация',
                layout: 'layout2',
                docs
            });
        } catch (error) {
            next(error);
        }
    },
    docsAll: async (req, res, next) => {
        try {
            const docs = await docsModel.docsAll(); // Передаем id_year в модель для получения данных
            res.render('admin/docs/docs', {
                title: 'Документация',
                docs
            });
        } catch (error) {
            next(error);
        }
    },
    newDoc: async (req, res, next) => {
        try {
            res.render('admin/docs/add', {
                title: 'add new',

            })
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const doc = await docsModel.create(req.body);
            res.render('admin/docs/add', {
                title: 'create',
                doc

            })
            // res.json(user);
        } catch (error) {
            next(error);
        }
    },


    delete: async (req, res, next) => {
        try {
            const doc = await docsModel.delete(req.params.id);
            res.render('admin/docs/docs', {
                title: 'Удаление ВКР',
                doc
            })
        } catch (error) {
            next(error);
        }
    }
};