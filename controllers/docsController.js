const docsModel = require('../models/docsModel');
const yearsModel = require("../models/yearsModel");
const groupsModel = require("../models/groupsModel");
const vkrsModel = require("../models/vkrsModel");
const studentsModel = require("../models/studentsModel");
const multer = require('multer');
const fileUpload= require('../middleware/upload_docs');
 // import {Translate} from "translate";

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
    newDoc: async (req, res, next) => {
        const years= await docsModel.yearsAll()
        try {
            res.render('admin/docs/add', {
                title: 'add new',
                layout: 'layout',
                years
            })
        } catch (error) {
            next(error);
        }
    },


    uploadFile:function(req,res){
        const upload = multer({
            storage: fileUpload.files.storage(),
            allowedFile:fileUpload.files.allowedFile
        }).single('file');

         upload(req, res, function (err) {
            console.log(req.file.filename);
             console.log(req.body.year_id);
             const translate = Translate({ engine: 'deepl', from: 'es',  });

             // const file =   translate(req.file.filename, 'en');

             const file =  Buffer.from(req.file.filename, 'latin1').toString('utf8');
           const year_id=req.body.year_id;
           docsModel.create({file,year_id},(err, uploadeddata)=>
            {
                if(err) return res.send(err);
                console.log(uploadeddata);
            })

            if (err instanceof multer.MulterError) {
                res.send(err);
            } else if (err) {
                res.send(err);
            }else{
                res.render('admin/docs/add');
            }
            res.redirect('/docs');
        })
    },

    // create: async (req, res,next) => {
    //     try {
    //         const doc = await docsModel.create(req.body);
    //
    //                 res.render('admin/docs/add', {
    //                     title: 'create',
    //                     doc
    //                 })
    //     } catch (error){
    //         next(error);
    //     }
    // },



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