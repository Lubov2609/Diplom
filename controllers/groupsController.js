const groupsModel = require('../models/groupsModel');
const studentsModel = require("../models/studentsModel");
const yearsModel = require("../models/yearsModel");

module.exports = groupsController = {

    groupsAll: async (req, res, next) => {
        try {
            const groups = await groupsModel.groupsAll();
            res.render('admin/groups/groups', {
                title: 'Группы',
                groups,
                layout:'layout'
            })
        } catch (error){
            next(error);
        }
    },
    newGroup: async (req, res, next) => {
       const  years = await groupsModel.yearsAll()
        try {
            res.render('admin/groups/add', {
                title: 'Добавить группу',
                years
            })
        } catch (error) {
            next(error);
        }
    },

    create: async (req, res, next) => {
        try {
            const group = await groupsModel.create(req.body);
            res.render('admin/groups/add', {
                title: 'Добавить группу',
                group
            })
        } catch (error) {
            next(error);
        }
        res.redirect('/groups');

    },
    getById: async (req, res, next) => {
        try {
            const groups = await groupsModel.getById(req.params.id);
            const years= await groupsModel.yearsAll()
            res.render('admin/groups/edit', {
                title: 'Редактирование группy',
                groups,
                years,
            })
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const group = await groupsModel.update(req.params.id, req.body);
            res.render('admin/groups/edit', {
                title: 'Редактирование группы',
                group
            })
            // res.send(user);
        } catch (error) {
            next(error);
        }
        res.redirect('/groups');
    },
    delete: async (req, res, next) => {
        try {
            const group = await groupsModel.delete(req.params.id);
            res.render('admin/groups/groups', {
                title: 'Удаление',
                group
            })
        } catch (error) {
            next(error);
        }
        res.redirect('/groups');
    }
};
