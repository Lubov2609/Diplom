const mainRoles = require('../models/mainModel');

module.exports = mainController = {
  getAll: async (req, res, next) => {
    try {
      const roles = await mainRoles.getAll();
      res.render('index', {
        title: 'Roles',
        roles
      })
    } catch (error){
      next(error);
    }
  }
};