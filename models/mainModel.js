const knex = require('../db/db');

module.exports = mainRoles = {
    getAll: async () => {
        const years = await knex('years');

        return years;
    }
};