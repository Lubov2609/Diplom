const knex = require('../db/db');

module.exports = studentsModel = {
    getAll: async (group_id) => {
        const students = await knex('students').where('group_id',group_id);
        return students;
    }
};