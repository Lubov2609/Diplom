const knex = require('../db/db');

module.exports = groupsModel = {
    groupsAll: async () => {
        const groups = await knex
            .select("groups.id", "groups.group_name", "groups.year_id", "years.year_name")
            .from("groups")
            .join("years","groups.year_id","years.id");
        return groups;
    },
    getById: async (id) => {
        const group = await knex("groups").where("id", id);
        return group;
    },
    create: async (group) => {
        const groups = await knex.select("groups.id", "groups.group_name", "groups.year_id", "years.year_name")
            .from("groups")
            .join("years","groups.year_id","years.id").insert(group);
        return groups;
    },
    update: async (id, group) => {
        const groups = await knex("groups").where("id", id).update({
            group_name: group.group_name,

        });
        return groups;
    },
    delete: async (id) => {
        const groups = await knex("groups").where("id", id).delete();
        return groups;
    },
};