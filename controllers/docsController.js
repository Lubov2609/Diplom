const docsModel = require('../models/docsModel');

module.exports = docsController = {
    getAll: async (req, res, next) => {
        try {
            const docs = await docsModel.getAll();
            res.render('docs', {
                title: 'Docs',
                layout: 'layout2',
                docs
            })
        } catch (error){
            next(error);
        }
    }
};