const studentsModel = require("../models/studentsModel");
const groupsModel = require('../models/groupsModel');
const vkrsModel = require("../models/vkrsModel");
const yearsModel = require("../models/yearsModel");

module.exports = vkrController = {
    groupsAll: async (req, res, next) => {
        try {
            const groups = await groupsModel.groupsAll();
            res.render("vkr/list-groups", {
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
            res.render('vkr/students', {
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
            const vkrs = await vkrsModel.getAll(student_id);
            res.render('vkr/vkr', {
                title: 'Выпускная квалификационная работа',
                layout: 'layout2',
                vkrs
            })
        } catch (error){
            next(error);
        }
    },
    vkrAll: async (req, res, next) => {
        try {
            const vkrs = await vkrsModel.vkrAll();
            res.render('admin/vkrs/vkrs', {
                title: 'Выпускная кваликафиционная работа',
                vkrs
            })
        } catch (error) {
            next(error);
        }
    },
    newVKR: async (req, res, next) => {
        const students = await vkrsModel.studentsAll()
        try {
            res.render('admin/vkrs/add', {
                title: 'Добавить ВКР',
                students
            })
        } catch (error) {
            next(error);
        }
    },

    create: async (req, res, next) => {
        try {
            const vkr = await vkrsModel.create(req.body);
            res.render('admin/vkrs/add', {
                title: 'Добавить ВКР',
                vkr
            })
        } catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            const vkr = await vkrsModel.delete(req.params.id);
            res.render('admin/vkrs/vkrs', {
                title: 'Удаление ВКР',
                vkr
            })
        } catch (error) {
            next(error);
        }
    }
};