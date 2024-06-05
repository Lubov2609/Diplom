const knex = require('../db/db');

module.exports = yearsModel = {
    getAll: async () => {
        const years = await knex('years');
        return years;
    },
    yearsAll: async () => {
        const years = await knex('years');
        return years;
    },
    create: async (year) => {
        const years = await knex("years").insert(year);
        return years;
    },
    getById: async (id) => {
        const year = await knex('years').where('id', id);
        return year;
    },
    update: async (id, year) => {
        const years = await knex('years').where('id', id).update({
            year_name: year.year_name,

        });
        return years;
    },
    delete: async (id) => {
        const years = await knex("years").where("id", id).delete();
        return years;
    },

};