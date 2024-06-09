const studentsModel = require("../models/studentsModel");
const groupsModel = require('../models/groupsModel');
const listsModel = require('../models/listsModel');
const usersModel = require("../models/usersModel");
const docsModel = require("../models/docsModel");
const vkrsModel=require("../models/vkrsModel");
const yearsModel=require("../models/yearsModel");



module.exports = listController = {
    partial: async (req, res, next) => {
        try {
            const year_id = parseInt(req.params.yearID);
            const docs = await listsModel.groupsAll(year_id);

            // const docs = await docsModel.getAll1(year_id);
            res.render('partial/menu', {
                title: 'Документация',
                docs,
                // docs

            });
        } catch (error) {
            next(error);
        }
    },
    groupsAll: async (req, res, next) => {
        try {
            const year_id = parseInt(req.params.yearID); // Получаем id_year из параметра маршрута
            const groups = await listsModel.groupsAll(year_id);
            const years = await yearsModel.getById(year_id)

            res.render("list/groups", {
                title: 'Список групп',
                layout: 'layout2',
                groups,
                years
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
            const years = await yearsModel.getById(year_id)

            res.render('list/students', {
                title: 'Список студентов',
                layout: 'layout2',
                students,
                years
            })
        } catch (error){
            next(error);
        }
    },
    getAll: async (req, res, next) => {
        try {
            const  year_id = parseInt(req.params.yearID);
            const student_id =parseInt(req.params.studentID);
            const lists = await listsModel.getAll(student_id);
            const students= await studentsModel.getById(student_id)
            const years = await yearsModel.getById(year_id)
            res.render('list/list', {
                title: 'Оценочный лист',
                layout: 'layout2',
                lists,
                students,
                years
            })
        } catch (error){
            next(error);
        }
    },
    newList: async (req, res, next) => {

        const users= await listsModel.usersAll();
        const student_id =parseInt(req.params.studentID);
        const students= await listsModel.getAll(student_id);
        const groups = await listsModel.groupAll();
        try {
            res.render('list/new', {
                title: 'Заполнение оценочного листа',
                students,
                users,
                groups
            })
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const list = await listsModel.create(req.body);
            res.render('list/new', {
                title: 'Заполнение оценочного листа',
                list
            })
        } catch (error) {
            next(error);
        }
        res.redirect('../');

    },
    getById: async (req, res, next) => {
        try {
            const  year_id = parseInt(req.params.yearID);
            const student_id =parseInt(req.params.studentID);
            const group_id = parseInt(req.params.groupID);
            const student= await listsModel.studentAll(group_id,year_id);
            const years = await yearsModel.getById(year_id)
            const list = await listsModel.getById(req.params.id);
            const students= await listsModel.studentsAll()
            console.log();
            res.render('list/edit', {
                title: 'Редактирование листа',
                layout:"layout2",
                list,
                students,
            })
        } catch (error) {
            next(error);
        }

    },
    update: async (req, res, next) => {
        try {
            const list = await listsModel.update(req.params.id, req.body);
            res.render('admin/groups/edit', {
                title: 'Редактирование группы',
                list
            })
            // res.send(user);
        } catch (error) {
            next(error);
        }
        res.redirect('../../');
    },
};