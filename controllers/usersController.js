const usersModel = require('../models/usersModel');
const studentsModel = require("../models/studentsModel");
const yearsModel = require("../models/yearsModel");

module.exports = usersController = {
    getAll: async (req, res, next) => {
        try {
            const users = await usersModel.getAll();
            res.render('admin/users/users', {
                title: 'Пользватели',
                users
            })
        } catch (error){
            next(error);
        }
    },
    newUser: async (req, res, next) => {
        try {
            res.render('admin/users/add', {
                title: 'Добавление пользователя'
            })
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const user = await usersModel.create(req.body);
            res.render('admin/users/edit', {
                title: 'Добавление пользователя',
                user
            })
        } catch (error) {
            next(error);
        }
    },
    getById: async (req, res, next) => {
        try {
            const users = await usersModel.getById(req.params.id);
            res.render('admin/users/edit', {
                title: 'Редактирование пользователя',
                users
            })
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const user = await usersModel.update(req.params.id, req.body);
            res.render('admin/users/edit', {
                title: 'Редактирование пользователя',
                user
            })
            // res.send(user);
        } catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            const user = await usersModel.delete(req.params.id);
            res.render('admin/users/users', {
                title: 'Удаление',
                user
            })
        } catch (error) {
            next(error);
        }
    },
};