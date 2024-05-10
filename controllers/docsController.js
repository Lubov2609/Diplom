const docsModel = require('../models/docsModel');


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
            res.render('admin/docs', {
                title: 'Документация',
                docs
            });
        } catch (error) {
            next(error);
        }
    },

};