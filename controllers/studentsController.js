const studentsModel = require('../models/studentsModel');
const yearsModel = require("../models/yearsModel");
const usersModel = require("../models/usersModel");
const groupsModel = require("../models/groupsModel");


module.exports = studentsController = {
    studentAll: async (req, res, next) => {
        try {
            const students = await studentsModel.studentAll();
            res.render('admin/students/students', {
                title: 'Cтуденты',
                students
            })
        } catch (error){
            next(error);
        }
    },
    newStudent: async (req, res, next) => {
        const groups = await studentsModel.groupsAll()
        try {
            res.render('admin/students/add', {
                title: 'Добавление студента',
                groups
            })
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const student = await studentsModel.create(req.body);
            res.render('admin/students/edit', {
                title: 'Добавление студента',
                student
            })
        } catch (error) {
            next(error);
        }
        res.redirect('/students');
    },
    getById: async (req, res, next) => {
        try {
            const students = await studentsModel.getById(req.params.id);
            const groups= await studentsModel.groupsAll()
            res.render('admin/students/edit', {
                title: 'Редактирование студента',
                students,
                groups
            })
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const student = await studentsModel.update(req.params.id, req.body);
            res.render('admin/students/edit', {
                title: 'Редактирование студента',
                student
            })
            // res.send(user);
        } catch (error) {
            next(error);
        }
        res.redirect('/students');
    },
    delete: async (req, res, next) => {
        try {
            const student = await studentsModel.delete(req.params.id);
            res.render('admin/students/students', {
                title: 'Удаление студента',
                student
            })
        } catch (error) {
            next(error);
        }
        res.redirect('/students');
    },
    parserStudent: async (req, res, next) => {
        const groups = await studentsModel.groupsAll();
        const educations = await studentsModel.educationsAll();
        try {
            res.render('admin/students/parser', {
                title: 'Добавление группы студентов',
                groups,
                educations
            })
        } catch (error) {
            next(error);
        }
    },
    };