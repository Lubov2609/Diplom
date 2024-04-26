exports.up = (knex, Promise) => {
    return knex.schema
        .createTable("students", table => {
            table.increments().primary();
            table.integer("group_id").notNullable();
            table.string("student_fio",150).notNullable();
            table.decimal("user_gpa").notNullable();
            table.text("user_pz").notNullable();
            table.text("user_tz").notNullable();
            table.integer("year_id").notNullable();;
            table.timestamps(true, true);
        });
};
// eslint-disable-next-line
exports.down = (knex, Promise) => {
    return knex.schema.dropTable("students");
};

