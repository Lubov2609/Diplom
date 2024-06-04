const knex = require('../db/db');

module.exports = groupsModel = {
    groupAll:async (year_id) => {
        const groups = await knex('docs').where('year_id', year_id);
        return groups;
    },
    groupsAll: async () => {
        const groups = await knex
            .select("groups.id", "groups.group_name", "groups.year_id", "years.year_name")
            .from("groups")
            .join("years","groups.year_id","years.id");
        return groups;
    },
    yearsAll: async () => {
        const years = await knex('years');
        const groups = await knex
            .select("groups.id", "groups.group_name", "groups.year_id", "years.year_name")
            .from("groups")
            .join("years","groups.year_id","years.id");
        return years;
    },

    create: async (group) => {
        const groups = await knex("groups").insert(group);
        return groups;
    },
    getById: async (id) => {
        const group = await knex("groups")
            .where('id', id);
        // .select("groups.id", "groups.group_name", "groups.year_id", "years.year_name")
        // .from("groups")
        // .join("years","groups.year_id","years.id")
        // .where("groups.id", id);
        return group;
    },
    update: async (id, group) => {
        const groups = await knex("groups")
            .select("groups.id", "groups.group_name", "groups.year_id", "years.year_name")
            .from("groups")
            .join("years","groups.year_id","years.id")
            .where("groups.id", id).update(
                {
            group_name: group.group_name,
            year_id:group.year_id,
        }
        );
        return groups;
    },
    delete: async (id) => {
        const groups = await knex("groups").where("id", id).delete();
        return groups;
    },
};