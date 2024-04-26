
exports.up = (knex, Promise) => {
    return knex.schema
        .createTable("groups", table => {
            table.increments().primary();
            table.integer("year_id").notNullable();
            table.string("group_name",4).notNullable();
            table.timestamps(true, true);
        });
};

// eslint-disable-next-line
exports.down = (knex, Promise) => {
    return knex.schema.dropTable("groups");
};


