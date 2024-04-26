exports.up = (knex, Promise) => {
    return knex.schema
        .createTable("years", table => {
            table.increments().primary();
            table.integer("year_name").notNullable();
            table.timestamps(true, true);
        });
};

// eslint-disable-next-line
exports.down = (knex, Promise) => {
    return knex.schema.dropTable("years");
};

