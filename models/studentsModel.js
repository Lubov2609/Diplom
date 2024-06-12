const knex = require('../db/db');

module.exports = studentsModel = {
    studentsAll: async (group_id) => {
        const students = await knex('students').where('group_id',group_id);
        return students;
    },
    getAll: async (id) => {
        const student = await knex('students').where('id', id);
        return student;
    },
    studentAll: async () => {
        const students = await knex
            .select("students.id", "students.student_fio", "students.student_otz","students.student_gpa", "groups.group_name")
            .from("students")
            .join("groups","students.group_id","groups.id");
        return students;
    },
    groupsAll: async () => {
        const groups = await knex("groups");
        const students = await knex
            .select("students.id", "students.student_fio", "students.student_gpa", "groups.group_name")
            .from("students")
            .join("groups","students.group_id","groups.id");
        return groups;
    },

    create: async (student) => {
        const students = await knex("students").insert(student);
        return students;
    },
    getById: async (id) => {
        const student = await knex("students").where("id", id);
        return student;
    },

    update: async (id, student) => {
        const students = await knex
            .select("students.id", "students.student_fio", "students.student_gpa", "groups.group_name")
            .from("students")
            .join("groups","students.group_id","groups.id")
            .where("id", id).update({
            student_fio: student.student_fio,
            student_gpa: student.student_gpa,
            group_id: student.group_id,

        });
        return students;
    },
    delete: async (id) => {
        const students = await knex("students").where("id", id).delete();
        return students;
    },
};