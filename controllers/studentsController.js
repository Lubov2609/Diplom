const studentsModel = require('../models/studentsModel');


module.exports = studentsController = {
    studentAll: async (req, res, next) => {
        try {
            const students = await studentsModel.studentAll();
            res.render('admin/students', {
                title: 'Cтуденты',
                students
            })
        } catch (error){
            next(error);
        }
    }
    };