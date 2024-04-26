exports.up = (knex, Promise) => {
    return knex.schema
        .createTable("users", table => {
            table.increments().primary();
            table.integer("year_id").notNullable();
            table.integer("role_id").notNullable();
            table.string("user_fio",255).notNullable();
            table.text("login").notNullable();
            table.text("password").notNullable();
            table.text("email").notNullable();
            table.timestamps(true, true);


        });
};

// eslint-disable-next-line
exports.down = (knex, Promise) => {
    return knex.schema.dropTable("users");
};


