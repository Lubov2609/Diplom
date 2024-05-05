const knex = require('../db/db');

module.exports = mainRoles = {
    getAll: async () => {
        const roles = await knex('roles');
        return roles;
    }
};