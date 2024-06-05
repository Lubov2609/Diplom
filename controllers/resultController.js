const studentsModel = require("../models/studentsModel");
const groupsModel = require('../models/groupsModel');
const usersModel = require("../models/usersModel");
const listsModel = require("../models/listsModel");

module.exports = vkrController = {
    groupsAll: async (req, res, next) => {
        try {
            const year_id = parseInt(req.params.yearID); // Получаем id_year из параметра маршрута

            const groups = await listsModel.groupsAll(year_id );
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
            const resul = await listsModel.getAll4(group_id);

            res.render('result/students', {
                title: 'Результаты',
                layout: 'layout2',
                resul
            })
        } catch (error){
            next(error);
        }
    },
    studentBy: async (req, res, next) => {
        try {
            const id =parseInt(req.params.studentID); // Получаем id_year из параметра маршрута
            const student_id =parseInt(req.params.studentID);
            const result = await studentsModel.getAll(id);
            const users =await usersModel.getAll();
            const lists = await listsModel.getAll2(student_id);
            const resu = await listsModel.getAll3(student_id);
            res.render('result/student', {
                title: 'Результаты',
                layout: 'layout2',
                result,
                users,
                lists,
                resu
            })
        } catch (error){
            next(error);
        }
    }
}