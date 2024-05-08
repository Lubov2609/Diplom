const studentsModel = require("../models/studentsModel");
const groupsModel = require('../models/groupsModel');

module.exports = vkrController = {
    groupsAll: async (req, res, next) => {
        try {
            const groups = await groupsModel.groupsAll();
            res.render("vkr/list-groups", {
                title: 'groups',
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
                title: 'students',
                layout: 'layout2',
                students
            })
        } catch (error){
            next(error);
        }
    },
    vkrAll: async (req, res, next) => {
        try {
            const id =parseInt(req.params.studentID); // Получаем id_year из параметра маршрута
            const vkr = await studentsModel.studentsAll(id);
            res.render('vkr/vkr', {
                title: 'students',
                layout: 'layout2',
                vkr
            })
        } catch (error){
            next(error);
        }
    }
};