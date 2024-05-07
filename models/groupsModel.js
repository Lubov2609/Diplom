const knex = require('../db/db');

module.exports = groupsModel = {
    groupsAll: async () => {
        const groups = await knex('groups');
        return groups;
    }
};