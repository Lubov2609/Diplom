//
// // Подключение библиотек для сайта
//
// const createError = require('http-errors');
// const express = require('express');
// // const path = require('path');
// // const parser =require('body-parser');
// const methodOverride = require('method-override');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const config = require("config");
// const upload = require('express-fileupload')
// // const hbs = require('hbs');
// const bcrypt = require("bcrypt");
// const { pool } = require('./dbConfig')
// const session = require("express-session");
// const flash = require("express-flash");
// const passport = require("passport");
// const initializePassport = require("./passportConfig");
//
//
// // Регистрация роутов для сайта
// const aboutRouter = require('./routes/about')
// const contactRouter = require('./routes/contact');
// const yearsRouter = require('./routes/yearsRoute');
// const docsRouter = require('./routes/docsRoute');
// const usersRouter = require('./routes/usersRoute');
// const studentsRouter = require('./routes/studentsRoute');
// const groupsRouter = require('./routes/groupsRoute');
// const vkrRouter = require('./routes/vkrRoute');
// const listRouter = require('./routes/listRoute');
// const resultRouter = require('./routes/resultRoute');
//
// var app = express();
//
// // Насстройка шаблонов view
// // app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'hbs');
// // Set view engine as EJS
// app.set("view engine", "ejs");
// // app.use(express.static(path.join(__dirname, 'public')));
// //
// // // Set 'views' directory for any views
// // // being rendered res.render()
// // app.set('views', path.join(__dirname, 'views'));
// //
// // // Set view engine as EJS
// // app.engine('html', require('ejs').renderFile);
// // app.set('view engine', 'html');
//
//
// hbs.registerPartials(__dirname + '/views/partials');
// // app.set("trust proxy", true);
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public')));
// app.use(methodOverride('_method'));
// // app.use(parser.urlencoded({extended: true}))
// // app.use(parser.json())
//
// //создание пути тестирования
// app.use(function(req, res, next){
//   res.locals.showTests = app.get('env') !== 'production' &&
//       req.query.test === '1';
//   next();
// });
// // Подключение роутов для проекта
// app.use('/', usersRouter);
// app.use('/', contactRouter);
// app.use('/', docsRouter);
// app.use('/', yearsRouter);
// app.use('/', aboutRouter);
// app.use('/', groupsRouter);
// app.use('/', studentsRouter);
// app.use('/', vkrRouter);
// app.use('/', listRouter);
// app.use('/', resultRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404).send("Not Found"));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// initializePassport(passport);
//
//
// // app.set('views', path.join(__dirname, 'views'));
// // app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: false }));
// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false
// }));
//
// app.use(passport.initialize());
// app.use(passport.session());
//
// app.use(flash());
//

// app.listen(process.env.PORT || config.port, () => {
//   global.console.log(`Server is up and running on port ${config.port}`);
// });
//
// module.exports = app;


const express = require("express");
const app = express();
const { pool } = require("./dbConfig");
const bcrypt = require("bcrypt");
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");
const initializePassport = require("./passportConfig");

// Подключение библиотек для сайта

const createError = require('http-errors');
const path = require('path');
const parser =require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require("config");
const upload = require('express-fileupload')
const hbs = require('hbs');

const aboutRouter = require('./routes/about')
const contactRouter = require('./routes/contact');
const yearsRouter = require('./routes/yearsRoute');
const docsRouter = require('./routes/docsRoute');
const usersRouter = require('./routes/usersRoute');
const studentsRouter = require('./routes/studentsRoute');
const groupsRouter = require('./routes/groupsRoute');
const vkrRouter = require('./routes/vkrRoute');
const listRouter = require('./routes/listRoute');
const resultRouter = require('./routes/resultRoute');

// var app = express();

initializePassport(passport);

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
hbs.registerPartials(__dirname + '/views/partials');
// app.set("trust proxy", true);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
// app.use(parser.urlencoded({extended: true}))
// app.use(parser.json())

// создание пути тестирования
// app.use(function(req, res, next){
//   res.locals.showTests = app.get('env') !== 'production' &&
//       req.query.test === '1';
//   next();
// });


function checkAuthenticated(req, res, next){
    if (req.isAuthenticated()) {
        return res.redirect("/menu");
    }
    next();
}

function checkNotAuthenticated(req, res, next){
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/menu");
}
// Подключение роутов для проекта
app.use('/', usersRouter);
app.use('/', contactRouter);
app.use('/', docsRouter);
app.use('/', yearsRouter);
app.use('/', aboutRouter);
app.use('/', groupsRouter);
app.use('/', studentsRouter);
app.use('/', vkrRouter);
app.use('/', listRouter);
app.use('/', resultRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404).send("Not Found"));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

const PORT = process.env.PORT || 3000;



app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// app.get("/", (req, res) => {
//     res.render("index");
// });

// app.get("/users/register", checkAuthenticated, (req, res) => {
//     res.render("register");
// });

app.get("/", checkAuthenticated, (req, res) => {
    res.render("admin/index",{layout:null});
});

app.get("/users/dashboard", checkNotAuthenticated, (req, res) => {
    // res.render("dashboard", {user: "Sergey"});
    res.render("dashboard", {user: req.user.user_fio});
});

app.get("/users/logout", (req, res, next) => {
    // req.logout();
    req.logout(function(err) {
        if (err) { return next(err); }
    });

    req.flash('success_msg', "Вы разлогинены!");
    res.redirect("/");
});


app.post(
    "/",
    passport.authenticate("local", {

        successRedirect: "/menu",
        failureMessage: "/",
        failureFlash: true

    })
);



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}

function isAdmin(req, res, next) {
    if (req.isAuthenticated()) {
        if (req.user.role == "1") {
            return next();
        }
    }
    res.redirect('/login');
}

app.listen(process.env.PORT || config.port, () => {
  global.console.log(`Server is up and running on port ${config.port}`);
});

module.exports = app;