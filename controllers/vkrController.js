const studentsModel = require("../models/studentsModel");
const groupsModel = require('../models/groupsModel');
const vkrsModel = require("../models/vkrsModel");
const yearsModel = require("../models/yearsModel");
const docsModel = require("../models/docsModel");
const fileUpload= require('../middleware/upload_vkrs');
const fileUpload1= require('../middleware/upload_vkrs1');

const multer = require("multer");
// const translate = require('translate');
// import translate from "translate";


module.exports = vkrController = {
    groupsAll: async (req, res, next) => {
        try {
            const year_id = parseInt(req.params.yearID); // Получаем id_year из параметра маршрута
            const years = await yearsModel.getById(year_id)
            const groups = await vkrsModel.groupsAll(year_id);
            res.render("vkr/list-groups", {
                title: 'Список групп',
                layout: 'layout2',
                groups,
                years
            })
        } catch (error){
            next(error);
        }
    },
    studentsAll: async (req, res, next) => {
        try {
            const  year_id = parseInt(req.params.yearID);
            const group_id = parseInt(req.params.groupID);
            const students = await vkrsModel.studentAll(group_id,year_id);
            const years = await yearsModel.getById(year_id)
            res.render('vkr/students', {
                title: 'Список студентов',
                layout: 'layout2',
                students,
                years
            })
        } catch (error){
            next(error);
        }
    },
    getAll: async (req, res, next) => {
        try {
            const  year_id = parseInt(req.params.yearID);
            const group_id = parseInt(req.params.groupID);
            const student_id =parseInt(req.params.studentID); // Получаем id_year из параметра маршрута
            const vkrs = await vkrsModel.getAll2(student_id,year_id,group_id);
            const years = await yearsModel.getById(year_id)

            res.render('vkr/vkr', {
                title: 'Выпускная квалификационная работа',
                layout: 'layout2',
                vkrs,
                years
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

    uploadFile:function(req,res){
        const upload = multer({
            storage: fileUpload.files.storage(),
            allowedFile:fileUpload.files.allowedFile,
        }).single('file');


        upload(req, res, function (err) {
            console.log(req.file.filename);
            console.log(req.body.student_id);

            const file =  Buffer.from(req.file.filename, 'latin1').toString('utf8');
            const student_id=req.body.student_id;
            vkrsModel.create({file,student_id},(err, uploadeddata)=>
            {
                if(err) return res.send(err);
                console.log(uploadeddata);
            })

            if (err instanceof multer.MulterError) {
                res.send(err);
            } else if (err) {
                res.send(err);
            }else{
                res.render('admin/vkrs/add');
            }
            res.redirect('/vkr');
        })

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
        res.redirect('/vkrs');
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
        res.redirect('/vkr');
    }
};