const knex = require('../db/db');

module.exports = usersModel = {
    getAll: async () => {
        const users = await knex
            .select("users.id", "users.user_fio","users.password", "users.email","users.role_id","users.year_id", "roles.role_name","years.year_name")
            .from("users")
            .join("roles","users.role_id","roles.id")
            .join("years","users.year_id","years.id");
        return users;
    },
    rolesALL: async (req, res, next) => {
        const roles = await knex('roles');
        const years = await knex('years');
        const users = await knex .select("users.id", "users.user_fio","users.password", "users.email","users.role_id","users.year_id", "roles.role_name","years.year_name")
            .from("users")
            .join("roles","users.role_id","roles.id")
            .join("years","users.year_id","years.id");
        return roles;
    },
    yearsALL: async (req, res, next) => {
        const years = await knex('years');
        const users = await knex .select("users.id", "users.user_fio","users.password", "users.email","users.year_id", "years.year_name")
            .from("users")
            .join("years","users.year_id","years.id");
        return years;
    },

    create: async (user) => {
        const users = await knex("users").insert(user);
        return users;
    },
    getById: async (id) => {
        const user = await knex('users').where('id', id);
        return user;
    },
    update: async (id, user) => {
        const users = await knex.select("users.id", "users.user_fio","users.password", "users.email","users.role_id","users.year_id", "roles.role_name","years.year_name")
            .from("users")
            .join("roles","users.role_id","roles.id")
            .join("years","users.year_id","years.id")
            .where('id', id).update({
            user_fio: user.user_fio,
            email: user.email,
            login: user.login,
            password: user.password,
            role_id: user.role_id,
            year_id: user.year_id,
        });
        return users;
    },
    delete: async (id) => {
        const users = await knex("users").where("id", id).delete();
        return users;
    },
};