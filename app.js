
// Подключение библиотек для сайта
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var parser =require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config()

// Регистрация роутов для сайта
const mainRoute = require('./routes/main');
// var contactRouter = require('./routes/contact');
// var yearsRouter = require('./routes/years');
// var docsRouter = require('./routes/docs');
// const userRouter = require("./routes/userRouter.js");

var app = express();

// Насстройка шаблонов view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// 
// app.set("trust proxy", true);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(parser.urlencoded({extended: true}))
// app.use(parser.json())

// Подключение роутов для проекта
app.use("/", mainRoute);
// app.use('/users', userRouter);
// app.use('/contact', contactRouter);
// app.use('/docs',docsRouter);
// app.use('/years', yearsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404).send("Not Found"));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
