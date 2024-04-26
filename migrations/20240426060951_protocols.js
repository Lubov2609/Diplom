exports.up = (knex, Promise) => {
    return knex.schema
        .createTable("protocols", table => {
            table.increments().primary();
            table.integer("user_id").notNullable();
            table.integer("student_id").notNullable();
            table.integer("list_id").notNullable();
            table.timestamps(true, true);
        });
};

// eslint-disable-next-line
exports.down = (knex, Promise) => {
    return knex.schema.dropTable("protocols");
};
