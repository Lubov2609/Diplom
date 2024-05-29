const knex = require('../db/db');

module.exports = vkrsModel = {
    getAll: async (student_id) => {
        const vkrs = await knex('vkrs').where('student_id',student_id);
        return  vkrs;
    },
    vkrAll: async () => {
        const vkrs = await knex
            .select("vkrs.id", "vkrs.file","vkrs.file_pz","vkrs.student_id","students.student_fio")
            .from("vkrs")
            .join("students","vkrs.student_id","students.id");
        return vkrs;
    },
    studentsAll: async () => {

        const students = await knex('students');
        const vkrs = await knex
            .select("vkrs.id", "vkrs.file","vkrs.file_pz", "vkrs.student_id","students.student_fio")
            .from("vkrs")
            .join("students","vkrs.student_id","students.id");
        return students;
    },
    create: async (vkr) => {
        const vkrs = await knex("vkrs").insert(vkr);
        return vkrs;
    },
    delete: async (id) => {
        const vkrs = await knex("vkrs").where("id", id).delete();
        return vkrs;
    },

};