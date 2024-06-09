const usersModel = require('../models/usersModel');
const studentsModel = require("../models/studentsModel");
const yearsModel = require("../models/yearsModel");
const bcrypt = require("bcrypt");
const flash = require("express-flash");
const {pool} =require("../dbConfig");
module.exports = usersController = {
    getAll: async (req, res, next) => {
        try {
            const users = await usersModel.getAll();
            res.render('admin/users/users', {
                title: 'Пользватели',
                users
            })
        } catch (error){
            next(error);
        }
    },
    newUser: async (req, res, next) => {
        const roles = await usersModel.rolesALL();
        const years = await usersModel.yearsALL();

        try {
            res.render('admin/users/add', {
                title: 'Добавление пользователя',
                roles,
                years
            })
        } catch (error) {
            next(error);
        }
    },
    create: async (req, res) => {
        let {user_fio, email, password, password2,role_id,year_id} = req.body;

        let errors = [];

        if (!user_fio || !email || !password || !password2) {
            errors.push({message: "Пожалуйста заролните все поля!"});
        }

        if (password.length < 6) {
            errors.push({message: "Пароль должен состоять не менее чем из шести символов!"});
        }

        if (password != password2) {
            errors.push({message: "Пароли не совпадают"});
        }

        if (errors.length > 0) {
            res.render("admin/users/add", {errors});
        } else {
            let hashedPassword = await bcrypt.hash(password, 10);
            console.log(hashedPassword);

            pool.query(
                `SELECT * FROM users
            WHERE email = $1`, [email], (err, results) => {
                    if (err) {
                        throw err;
                    }
                    console.log(results.rows);

                    if (results.rows.length > 0) {
                        errors.push({message: "Email уже зарегистрирован!"});
                        res.render("admin/users/add", {errors});
                    } else {
                        pool.query(
                            `INSERT INTO users (user_fio, email, password,year_id,role_id)
                        VALUES ($1, $2, $3,$4, $5)
                        RETURNING id, password`, [user_fio, email, hashedPassword,year_id,role_id], (err, results) => {
                                if (err) {
                                    throw err
                                }
                                console.log(results.rows);
                                // req.flash('success_msg', "Вы только что зарегистрировались! Пожалуйста авторизуйтесь!");
                                res.redirect('/users');
                            }
                        )
                    }
                }
            );
        }
    },
    getById: async (req, res, next) => {
        const roles = await usersModel.rolesALL();
        const years = await usersModel.yearsALL();
        try {
            const users = await usersModel.getById(req.params.id);
            res.render('admin/users/edit', {
                title: 'Редактирование пользователя',
                users,
                roles,
                years
            })
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const user = await usersModel.update(req.params.id, req.body);
            res.render('admin/users/edit', {
                title: 'Редактирование пользователя',
                user
            })
            // res.send(user);
        } catch (error) {
            next(error);
        }
        res.redirect('/users');
    },
    delete: async (req, res, next) => {
        try {
            const user = await usersModel.delete(req.params.id);
            res.render('admin/users/users', {
                title: 'Удаление',
                user
            })
        } catch (error) {
            next(error);
        }
        res.redirect('/users');
    }
};