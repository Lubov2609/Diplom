// import config from 'config';
var knex = require('../db/db');
const slugify = require('slug');
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
  //удалить эти 2 абзаца
  if (!roles[0]) {
    return res.status(404).json({ message: 'Roles not found' });
  }

  // [0] - удаляет квадратные скобки в выводе
  return res.json(roles);
}



// вернуться к прошлой версии- раскомитить это
//   res.render('index', {
//     title: 'Главная страница',
//     roles,
//   });
//
//   global.console.log(roles);
// }

// exports.getRoles = function(request, response){
//     response.render("index", {
//         roles = knex('roles').orderBy('id', 'ASC'),
//         title: 'Главная страница'
//     });
// };
