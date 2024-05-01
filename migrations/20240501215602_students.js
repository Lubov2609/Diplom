exports.up = (knex, Promise) => {
    return knex.schema
        .createTable("students", table => {
            table.increments().primary();
            table.integer("group_id").notNullable();
            table.string("student_fio",150).notNullable();
            table.decimal("student_gpa").notNullable();
            table.text("student_pz").notNullable();
            table.text("student_tz").notNullable();
            table.timestamps(true, true);
        });
};
// eslint-disable-next-line
exports.down = (knex, Promise) => {
    return knex.schema.dropTable("students");
};
