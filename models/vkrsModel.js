const knex = require('../db/db');

module.exports = vkrsModel = {
    vkrAll: async () => {
        const vkrs = await knex
            .select("vkrs.id", "vkrs.vkr_pz", "vkrs.vkr_tz","vkrs.student_id","students.student_fio")
            .from("vkrs")
            .join("students","vkrs.student_id","students.id");
        return vkrs;
    }
};