const groupsModel = require('../models/groupsModel');

module.exports = groupsController = {
    getAll: async (req, res, next) => {
        try {
            const groups = await groupsModel.getAll();
            res.render('st_group', {
                title: 'groups',
                layout: 'layout2',
                groups
            })
        } catch (error){
            next(error);
        }
    }
};
