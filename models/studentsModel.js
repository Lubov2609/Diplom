const knex = require('../db/db');

module.exports = studentsModel = {
    studentsAll: async (group_id) => {
        const students = await knex('students').where('group_id',group_id);
        return students;
    },

        vkrAll: async (group_id,id) => {
            const vkr = await knex('students').where('id',id);
            return  vkr;

        }
};