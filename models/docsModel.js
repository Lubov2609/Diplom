const knex = require('../db/db');

// module.exports = docsModel = {
//     getAll: async () => {
//         let id_year = parseInt(localStorage.getItem('yearID'));
//         const docs = await knex('docs').where('id_year', id_year);
//         return docs;
//     }
// };

module.exports = docsModel = {
    getAll: async (year_id) => {
        const docs = await knex('docs').where('year_id', year_id);
        return docs;
    }
};