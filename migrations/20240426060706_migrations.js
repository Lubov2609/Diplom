exports.up = function(knex) {
    return knex.schema
        .createTable("years", table => {
            table.increments().primary();
            table.integer("year_name").notNullable();
            table.timestamps(true, true);
        })
        .createTable("roles", table => {
            table.increments().primary();
            table.string("role_name",255).notNullable();
            table.timestamps(true, true);
        })
        .createTable("users", table => {
            table.increments().primary();
            table.string("user_fio",255).notNullable();
            table.text("login").notNullable();
            table.text("password").notNullable();
            table.text("email").notNullable();
            table.timestamps(true, true);
            table.integer("year_id").references('id').inTable('years').onDelete("CASCADE");
            table.integer("role_id").references('id').inTable('roles').onDelete("CASCADE");
        })
        .createTable("groups", table => {
            table.increments().primary();
            table.string("group_name",4).notNullable();
            table.timestamps(true, true);
            table.integer("year_id").references('id').inTable('years').onDelete("CASCADE");
        })
        .createTable("students", table => {
            table.increments("id").primary();
            table.string("student_fio",150).notNullable();
            table.decimal("student_gpa",).notNullable();
            table.integer("result_grade",1);
            table.timestamps(true, true);
            table.integer("group_id").references('id').inTable('groups').onDelete("CASCADE");
        })
        .createTable("docs", table => {
            table.increments().primary();
            table.string("doc_name",50).notNullable();
            table.string("doc_link",255).notNullable();
            table.timestamp(true, true);
            table.integer("year_id").references('id').inTable('years').onDelete("CASCADE");
        })
        .createTable("protocols", table => {
            table.increments().primary();
            table.integer("user_id").references('id').inTable('users').onDelete("CASCADE");
            table.integer("student_id").references('id').inTable('students').onDelete("CASCADE");
            table.integer("list_id");
            table.timestamps(true, true);
        })
        .createTable("vkrs", table => {
            table.increments().primary();
            table.string("vkr_pz",150).notNullable();
            table.string("vkr_tz",150).notNullable();
            table.integer("student_id").references('id').inTable('students').onDelete("CASCADE");
            table.timestamps(true, true);
        })
        .createTable("lists", table => {
            table.increments().primary();
            table.decimal("g1",5,1);
            table.decimal("g2",5,1);
            table.decimal("g3_1",5,1);
            table.decimal("g3_2",5,1);
            table.decimal("g3_3",5,1);
            table.decimal("g4_1",5,1);
            table.decimal("g4_2",5,1);
            table.decimal("g4_3",5,1);
            table.decimal("g4_4",5,1);
            table.decimal("g4_5",5,1);
            table.decimal("g4_6",5,1);
            table.integer("user_id").references('id').inTable('users').onDelete("CASCADE");
            table.integer("student_id").references('id').inTable('students').onDelete("CASCADE");
            table.timestamps(true, true);
        })


};




exports.down = function(knex) {
    return knex.schema.dropTable("protocols").dropTable("lists").dropTable("users").dropTable("roles").dropTable("vkrs").dropTable("students").dropTable("groups").dropTable("docs").dropTable("years");

};
