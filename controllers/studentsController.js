const studentsModel = require('../models/studentsModel');
const groupsModel = require("../models/groupsModel");


module.exports = studentsController = {
    studentsAll: async (req, res, next) => {
        try {
            const students = await studentsModel.studentsAll();
            res.render('admin/students', {
                title: 'Студенты',
                students
            })
        } catch (error){
            next(error);
        }
    }
    };