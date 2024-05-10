const knex = require('../db/db');

module.exports = groupsModel = {
    groupsAll: async () => {
        const groups = await knex
            .select("groups.id", "groups.group_name", "groups.year_id", "years.year_name")
            .from("groups")
            .join("years","groups.year_id","years.id");
        return groups;
    }
};