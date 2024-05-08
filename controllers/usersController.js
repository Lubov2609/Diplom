const usersModel = require('../models/usersModel');

module.exports = usersController = {
    getAll: async (req, res, next) => {
        try {
            const users = await usersModel.getAll();
            res.render('admin/users', {
                title: 'Пользватели',
                users
            })
        } catch (error){
            next(error);
        }
    }
};