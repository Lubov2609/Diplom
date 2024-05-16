const knex = require('../db/db');

module.exports = docsModel = {
    getAll: async (year_id) => {
        const docs = await knex('docs').where('year_id', year_id);
        return docs;
    },

    docsAll: async () => {
        const docs = await knex
            .select("docs.id", "docs.doc_name", "docs.doc_link","docs.year_id", "years.year_name")
            .from("docs")
            .join("years","docs.year_id","years.id");
        return docs;
    },

    delete: async (id) => {
        const docs = await knex("docs").where("id", id).delete();
        return docs;
    },
};