const studentsModel = require('../models/studentsModel');
const groupsModel = require("../models/groupsModel");


module.exports = studentsController = {
    studentsAll: async (req, res, next) => {
        try {
            const group_id = parseInt(req.params.groupID); // Получаем id_year из параметра маршрута
            const students = await studentsModel.studentsAll(group_id);
            res.render('students/students', {
                title: 'students',
                layout: 'layout2',
                students
            })
        } catch (error){
            next(error);
        }
    },
        groupsAll: async (req, res, next) => {
            try {
                const groups = await groupsModel.groupsAll();
                res.render('students/student-groups', {
                    title: 'groups',
                    layout: 'layout2',
                    groups
                })
            } catch (error){
                next(error);
            }
        }
    };