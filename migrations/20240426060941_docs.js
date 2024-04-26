exports.up = (knex, Promise) => {
    return knex.schema
        .createTable("docs", table => {
            table.increments().primary();
            table.integer("year_id");
            table.string("doc_name",50).notNullable();
            table.string("doc_link",255).notNullable();
            table.timestamp(true, true);
        });
};

// eslint-disable-next-line
exports.down = (knex, Promise) => {
    return knex.schema.dropTable("docs");
};

