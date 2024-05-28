const docsModel = require('../models/docsModel');
const yearsModel = require("../models/yearsModel");
const groupsModel = require("../models/groupsModel");
const vkrsModel = require("../models/vkrsModel");
const studentsModel = require("../models/studentsModel");
const multer = require('multer');
const fileUpload= require('../middleware/upload_docs');


module.exports = docsController = {
    getAll: async (req, res, next) => {
        try {
            const year_id = parseInt(req.params.yearID); // Получаем id_year из параметра маршрута
            const docs = await docsModel.getAll(year_id); // Передаем id_year в модель для получения данных
            res.render('docs', {
                title: 'Документация',
                layout: 'layout2',
                docs
            });
        } catch (error) {
            next(error);
        }
    },
    docsAll: async (req, res, next) => {
        try {
            const docs = await docsModel.docsAll(); // Передаем id_year в модель для получения данных
            res.render('admin/docs/docs', {
                title: 'Документация',
                docs
            });
        } catch (error) {
            next(error);
        }
    },
    fileUploadForm:function(req,res){
        res.render('admin/docs/add');
    },
    uploadFile:function(req,res){
        var upload = multer({
            storage: fileUpload.files.storage(),
            allowedFile:fileUpload.files.allowedFile
        }).single('file');
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                res.send(err);
            } else if (err) {
                res.send(err);
            }else{
                res.render('admin/docs/add');
            }

        })

    },


    newDoc: async (req, res, next) => {
        try {
           // const  years = await docsModel.docsAll()
            res.render('admin/docs/add', {
                title: 'add new',
                // years
            })
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            // const doc = await docsModel.create(req.body);
            if (req.files) {
                console.log(req.files)
                const file = req.files.file
                const fileName = file.name
                // console.log(fileName)

                await file.mv('./public/uploads/' + fileName, function (err) {
                    if (err) {
                        res.send(err)
                    } else {
                        res.send("file uploaded")
                    }
                })
            }
            //         res.render('admin/docs/add', {
            //             title: 'create',
            //             // doc
            //         })
            //         // res.json(user);
            //     } catch (error) {
            //         next(error);
            //     }
        } catch (error) {}
    },


    delete: async (req, res, next) => {
        try {
            const doc = await docsModel.delete(req.params.id);
            res.render('admin/docs/docs', {
                title: 'Удаление ВКР',
                doc
            })
        } catch (error) {
            next(error);
        }
        res.redirect('/docs');
    }
};