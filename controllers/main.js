// const knex = require('../db/db');
// const config = require('../db/db');
// module.exports = knex(config.development);
const rolesService = require("../service/rolesService");
// const slugify = require('slug');
/*
 * GET getRoles
 */

module.exports = roleController = {
  getRoles: async (req, res, next) => {
    try {
      const roles = await rolesService.getRoles();

     //сточка вывода всего селекта
     //  res.json(roles);



      //вывод объектов
      res.render('index', {
    title: 'Главная страница',
    roles,
  });
  global.console.log(roles);

    } catch (error) {
      next(error);
    }
  }
};

// exports.getRoles= function(req, res, next) {
//   let roles;
//
//   try {
//     roles = knex('roles').orderBy('id', 'ASC');
//   } catch ({message}) {
//     return next({
//       status: 500,
//       message,
//     });
//   }
// };
// //   // удалить эти 2 абзаца
// //   if (!roles[0]) {
// //     return res.status(404).json({ message: 'Roles not found' });
// //   }
// //
// //   // [0] - удаляет квадратные скобки в выводе
// //   return res.json(roles);
// // }
//
//
//
// // вернуться к прошлой версии- раскомитить это
//   res.render('index', {
//     title: 'Главная страница',
//     roles,
//   });
//   global.console.log(roles);
// }



// exports.getRoles = function(request, response){
//     response.render("index", {
//         roles = knex('roles').orderBy('id', 'ASC'),
//         title: 'Главная страница'
//     });
// };
