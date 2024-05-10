const knex = require('../db/db');

module.exports = studentsModel = {
    studentsAll: async (group_id) => {
        const students = await knex('students').where('group_id',group_id);
        return students;
    },
    studentAll: async () => {
        const students = await knex
            .select("students.id", "students.student_fio", "students.student_gpa", "groups.group_name")
            .from("students")
            .join("groups","students.group_id","groups.id");
        return students;
    },
    getAll: async (group_id,id) => {
            const vkr = await knex('students').where('id',id);
            return  vkr;

        }
};