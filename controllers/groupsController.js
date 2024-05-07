const groupsModel = require('../models/groupsModel');

module.exports = groupsController = {
    groupsAll: async (req, res, next) => {
        try {
            const groups = await groupsModel.groupsAll();
            res.render('groups', {
                title: 'groups',
                layout: 'layout2',
                groups
            })
        } catch (error){
            next(error);
        }
    }
};
