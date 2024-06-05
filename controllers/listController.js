const studentsModel = require("../models/studentsModel");
const groupsModel = require('../models/groupsModel');
const listsModel = require('../models/listsModel');
const usersModel = require("../models/usersModel");
const docsModel = require("../models/docsModel");
const vkrsModel=require("../models/vkrsModel");
const yearsModel=require("../models/yearsModel");



module.exports = listController = {
    // partial: async (req, res, next) => {
    //     try {
    //         const year_id = parseInt(req.params.yearID); // Получаем id_year из параметра маршрута
    //         const groups = await docsModel.getAll(year_id);
    //         res.render('partial/menu', {
    //             title: 'Документация',
    //             groups,
    //         });
    //     } catch (error) {
    //         next(error);
    //     }
    // },
    groupsAll: async (req, res, next) => {
        try {
            const year_id = parseInt(req.params.yearID); // Получаем id_year из параметра маршрута
            const groups = await listsModel.groupsAll(year_id);
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
            const  year_id = parseInt(req.params.yearID);
            const group_id = parseInt(req.params.groupID);
            const students = await listsModel.studentAll(group_id,year_id);
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

            const student_id =parseInt(req.params.studentID);
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