const knex = require('../db/db');

module.exports = vkrsModel = {
    getAll: async (student_id) => {
        const vkrs = await knex('vkrs').where('student_id',student_id);
        return  vkrs;
    },
    getAll2: async (student_id,year_id,group_id) => {
        const vkrs = await knex
            .select("vkrs.id", "vkrs.file","vkrs.file_pz","vkrs.student_id","students.student_fio", "students.group_id", "groups.year_id")
            .from("vkrs")
            .join("students","vkrs.student_id","students.id")
            .join("groups","students.group_id","groups.id")

            .where('students.group_id',group_id)
            .where('groups.year_id',year_id)
            .where('vkrs.student_id',student_id);
        return  vkrs;
    },
    vkrAll: async () => {
        const vkrs = await knex
            .select("vkrs.id", "vkrs.file","vkrs.file_pz","vkrs.student_id","students.student_fio")
            .from("vkrs")
            .join("students","vkrs.student_id","students.id");
        return vkrs;
    },
    studentAll: async (group_id,year_id) => {
        const students = await knex
            .select("students.id", "students.student_fio","students.group_id", "students.student_gpa", "groups.year_id","groups.group_name")
            .from("students")
            .join("groups","students.group_id","groups.id")
            .where('students.group_id',group_id)
            .where('groups.year_id',year_id);

        return students;
    },
    groupsAll: async (year_id) => {
        const docs = await knex('groups').where('year_id', year_id);
        return docs;
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