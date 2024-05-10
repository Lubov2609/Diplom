const knex = require('../db/db');

module.exports = usersModel = {
    getAll: async () => {
        const users = await knex
            .select("users.id", "users.user_fio", "users.login","users.password", "users.email","users.role_id","users.year_id", "roles.role_name","years.year_name")
            .from("users")
            .join("roles","users.role_id","roles.id")
            .join("years","users.year_id","years.id");

        return users;
    }
};