const groupsModel = require('../models/groupsModel');

module.exports = groupsController = {
    groupsAll: async (req, res, next) => {
        try {
            const groups = await groupsModel.groupsAll();
            res.render('admin/groups', {
                title: 'Группы',
                groups
            })
        } catch (error){
            next(error);
        }
    }
};
