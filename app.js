
// Подключение библиотек для сайта
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const parser =require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require("config");




// Регистрация роутов для сайта
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

app.use(methodOverride('_method'));
// app.use(parser.urlencoded({extended: true}))
// app.use(parser.json())






//создание пути тестирования

app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' &&
      req.query.test === '1';
  next();
});
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


app.listen(process.env.PORT || config.port, () => {
  global.console.log(`Server is up and running on port ${config.port}`);
});


module.exports = app;
