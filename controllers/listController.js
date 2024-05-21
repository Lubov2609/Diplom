const studentsModel = require("../models/studentsModel");
const groupsModel = require('../models/groupsModel');
const listsModel = require('../models/listsModel');
const usersModel = require("../models/usersModel");

module.exports = vkrController = {
    groupsAll: async (req, res, next) => {
        try {
            const groups = await groupsModel.groupsAll();
            res.render("list/groups", {
                title: 'Список групп',
                layout: 'layout2',
                groups
            })
        } catch (error){
            next(error);
        }
    },
    studentsAll: async (req, res, next) => {
        try {
            const group_id = parseInt(req.params.groupID); // Получаем id_year из параметра маршрута
            const students = await studentsModel.studentsAll(group_id);
            res.render('list/students', {
                title: 'Список студентов',
                layout: 'layout2',
                students
            })
        } catch (error){
            next(error);
        }
    },
    getAll: async (req, res, next) => {
        try {
            const student_id =parseInt(req.params.studentID); // Получаем id_year из параметра маршрута
            const lists = await listsModel.getAll(student_id);
            res.render('list/list', {
                title: 'Оценочный лист',
                layout: 'layout2',
                lists
            })
        } catch (error){
            next(error);
        }
    },
    newList: async (req, res, next) => {
        try {
            res.render('list/list', {
                title: 'Заполнение оценочного листа',

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
};