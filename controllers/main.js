// import config from 'config';
var knex = require('../db/db');

/*
 * GET getRoles
 */
exports.getRoles= function(req, res, next){
    let roles;

  try {
    roles = knex('roles').orderBy('id', 'ASC');
  } catch ({ message }) {
    return next({
      status: 500,
      message,
    });
  }

  res.render('index', {
    title: 'Главная страница',
    roles,
  });

  global.console.log(roles);
}

// exports.getRoles = function(request, response){
//     response.render("index", {
//         roles = knex('roles').orderBy('id', 'ASC'),
//         title: 'Главная страница'
//     });
// };
