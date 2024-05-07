const knex = require('../db/db');

module.exports = studentsModel = {
    studentsAll: async (group_id) => {
        const students = await knex('students').where('group_id',group_id);
        return students;
    }
};