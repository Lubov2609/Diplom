const usersModel = require('../models/usersModel');

module.exports = usersController = {
    getAll: async (req, res, next) => {
        try {
            const users = await usersModel.getAll();
            res.render('users', {
                title: 'Users',
                users
            })
        } catch (error){
            next(error);
        }
    }
};