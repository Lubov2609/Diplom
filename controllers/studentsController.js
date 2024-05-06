const studentsModel = require('../models/studentsModel');

module.exports = studentsController = {
    getAll: async (req, res, next) => {
        try {
            const students = await studentsModel.getAll();
            res.render('students', {
                title: 'students',
                layout: 'layout2',
                students
            })
        } catch (error){
            next(error);
        }
    }
};