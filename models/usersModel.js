const knex = require('../db/db');

module.exports = usersModel = {
    getAll: async () => {
        const users = await knex('users');
        return users;
    }
};