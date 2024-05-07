const knex = require('../db/db');

module.exports = docsModel = {
    getAll: async (year_id) => {
        const docs = await knex('docs').where('year_id', year_id);
        return docs;
    }
};