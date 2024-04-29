exports.up = (knex, Promise) => {
    return knex.schema
        .createTable("roles", table => {
            table.increments().primary();
            table.string("role_name",255).notNullable();
            table.timestamps(true, true);
        });
};

// eslint-disable-next-line
exports.down = (knex, Promise) => {
    return knex.schema.dropTable("roles");
};

