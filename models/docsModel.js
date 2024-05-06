const knex = require('../db/db');

module.exports = mainRoles = {
    getAll: async () => {
        const docs = await knex('docs');
        return docs;
    }
};