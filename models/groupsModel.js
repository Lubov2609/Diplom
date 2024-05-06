const knex = require('../db/db');

module.exports = groupsModel = {
    getAll: async () => {
        const groups = await knex('groups');
        return groups;
    }
};