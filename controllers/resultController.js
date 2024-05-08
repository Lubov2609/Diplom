const studentsModel = require("../models/studentsModel");
const groupsModel = require('../models/groupsModel');

module.exports = vkrController = {
    groupsAll: async (req, res, next) => {
        try {
            const groups = await groupsModel.groupsAll();
            res.render("result/groups", {
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
            res.render('result/students', {
                title: 'Результаты',
                layout: 'layout2',
                students
            })
        } catch (error){
            next(error);
        }
    }
}