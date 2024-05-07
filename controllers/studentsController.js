const studentsModel = require('../models/studentsModel');


module.exports = studentsController = {
    getAll: async (req, res, next) => {
        try {
            const group_id = parseInt(req.params.groupID); // Получаем id_year из параметра маршрута
            const students = await studentsModel.getAll(group_id);
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