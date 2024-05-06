const mainRoles = require('../models/mainModel');

module.exports = mainController = {
  getAll: async (req, res, next) => {
    try {
      const years = await mainRoles.getAll();
      res.render('index', {
        title: 'Years',
        years
      })
    } catch (error){
      next(error);
    }
  }
};