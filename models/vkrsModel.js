const knex = require('../db/db');

module.exports = vkrsModel = {
    getAll: async (student_id) => {
        const vkrs = await knex('vkrs').where('student_id',student_id);
        return  vkrs;
    },
    vkrAll: async () => {
        const vkrs = await knex
            .select("vkrs.id", "vkrs.vkr_pz", "vkrs.vkr_tz","vkrs.student_id","students.student_fio")
            .from("vkrs")
            .join("students","vkrs.student_id","students.id");
        return vkrs;
    },

};