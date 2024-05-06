const knex = require('../db/db');

module.exports = studentsModel = {
    getAll: async () => {
        const students = await knex('students');
        return students;
    }
};