const groupsModel = require('../models/groupsModel');
const studentsModel = require("../models/studentsModel");
const yearsModel = require("../models/yearsModel");

module.exports = groupsController = {
    groupsAll: async (req, res, next) => {
        try {
            const groups = await groupsModel.groupsAll();
            res.render('admin/groups/groups', {
                title: 'Группы',
                groups
            })
        } catch (error){
            next(error);
        }
    },
    newGroup: async (req, res, next) => {
        try {
            res.render('admin/groups/add', {
                title: 'add new',
                layout: 'layout',

            })
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const group = await groupsModel.create(req.body);
            res.render('admin/groups/edit', {
                title: 'Добавление группы',
                group,
                layout: 'layout',

            })
        } catch (error) {
            next(error);
        }
    },
    getById: async (req, res, next) => {
        try {
            const groups = await groupsModel.getById(req.params.id);
            res.render('admin/groups/edit', {
                title: 'Редактирование группы',
                groups
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
    },
};
