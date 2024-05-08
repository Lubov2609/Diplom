const yearsModel = require('../models/yearsModel');

module.exports = yearsController = {
    getAll: async (req, res, next) => {
        try {
            const years = await yearsModel.getAll();
            res.render('admin/index', {
                title: 'Года',
                years
            })
        } catch (error){
            next(error);
        }
    },
    yearsAll: async (req, res, next) => {
        try {
            const years = await yearsModel.yearsAll();
            res.render('years', {
                title: 'Год',
                years
            })
        } catch (error) {
            next(error);
        }
    },
    getById: async (req, res, next) => {
        try {
            const year = await yearsModel.getById(req.params.id);
            res.render('year', {
                title: 'Год',
                year
            })
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const year = await yearsModel.create(req.body);
            res.render('years', {
                title: 'Год',
                year
            })
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const year = await yearsModel.update(req.params.id, req.body);
            res.render('edit-year', {
                title: 'Год',
                year
            })
        } catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            const year = await yearsModel.delete(req.params.id);
            res.render('years', {
                title: 'Год',
                year
            })
        } catch (error) {
            next(error);
        }
    }
};