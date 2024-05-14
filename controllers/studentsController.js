const studentsModel = require('../models/studentsModel');
const yearsModel = require("../models/yearsModel");
const usersModel = require("../models/usersModel");


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
        try {
            res.render('admin/students/add', {
                title: 'Добавление'
            })
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const student = await studentsModel.create(req.body);
            res.render('admin/students/edit', {
                title: 'Добавление',
                student
            })
        } catch (error) {
            next(error);
        }
    },
    getById: async (req, res, next) => {
        try {
            const students = await studentsModel.getById(req.params.id);
            res.render('admin/students/edit', {
                title: 'Редактировать',
                students
            })
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const student = await studentsModel.update(req.params.id, req.body);
            res.render('admin/students/edit', {
                title: 'Редактировать',
                student
            })
            // res.send(user);
        } catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            const student = await studentsModel.delete(req.params.id);
            res.render('admin/students/students', {
                title: 'Удаление',
                student
            })
        } catch (error) {
            next(error);
        }
    },
    };