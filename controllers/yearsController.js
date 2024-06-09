const yearsModel = require('../models/yearsModel');

module.exports = yearsController = {

    getAll: async (req, res, next) => {
        try {
            const years = await yearsModel.getAll();
            res.render('admin/menu', {
                title: 'Года',
                years
            })
            // res.send(years);
        } catch (error){
            next(error);
        }
    },
    yearsAll: async (req, res, next) => {
        try {
            const years = await yearsModel.yearsAll();
            res.render('admin/years/years', {
                title: 'Года',
                years
            })
        } catch (error) {
            next(error);
        }
    },
    newYear: async (req, res, next) => {
        try {
            res.render('admin/years/add', {
                title: 'Добавить год'
            })
        } catch (error) {
            next(error);
        }
    },

    create: async (req, res, next) => {
        try {
            const year = await yearsModel.create(req.body);
            res.render('admin/years/add', {
                title: 'Добавить год',
                year
            })
        } catch (error) {
            next(error);
        }
        res.redirect('/years');

    },
    getById: async (req, res, next) => {
        try {
            const years = await yearsModel.getById(req.params.id);
            res.render('admin/years/edit', {
                title: 'Редактировать год',
                years
            })
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const year = await yearsModel.update(req.params.id, req.body);
            res.render('admin/years/edit', {
                title: 'Редактировать год',
                year
            })
            // res.send(user);
        } catch (error) {
            next(error);
        }
        res.redirect('/years');

    },
    delete: async (req, res, next) => {
        try {
            const year = await yearsModel.delete(req.params.id);
            res.render('admin/years/years', {
                title: 'Удаление года',
                year
            })
        } catch (error) {
            next(error);
        }
        res.redirect('/years');
    }

};