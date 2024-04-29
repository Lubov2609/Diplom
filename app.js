// var fs =require('node:fs');
// var formidable = require('formidable' );
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contact');
var yearsRouter = require('./routes/years');

var docsRouter = require('./routes/docs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);
app.use('/docs',docsRouter);
app.use('/years', yearsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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



//
// var dataDir = __dirname + '/data';
// var vacationPhotoDir = dataDir + '/vacation-file';
// fs.existsSync(dataDir) || fs.mkdirSync(dataDir);
// fs.existsSync(vacationPhotoDir) || fs.mkdirSync(vacationPhotoDir);
// function saveContestEntry(contestName, email, year, month, photoPath){
//   // TODO... это будет добавлено позднее
// }
// app.post('/public/vacation-file/:year/:month', function(req, res){
//   var form = new formidable.IncomingForm();
//   form.parse(req, function(err, fields, files){
//     if(err) {
//       res.session.flash = {
//         type: 'danger',
//         intro: 'Упс!',
//         message: 'Во время обработки отправленнойВами формы ' +
//         'произошла ошибка. Пожалуйста,попробуйте еще раз.',
//       };
//       return res.redirect(303, '/public/vacation-file');
//     }
//     var file = files.file;
//     var dir = vacationPhotoDir + '/' + Date.now();
//     var path = dir + '/' + file.name;
//     fs.mkdirSync(dir);
//     fs.renameSync(file.path, dir + '/' + file.name);
//     saveContestEntry('vacation-file', fields.email,
//         req.params.year, req.params.month, path);
//     req.session.flash = {
//       type: 'success',
//       intro: 'Удачи!',
//       message: 'Вы стали участником конкурса.',
//     };
//     return res.redirect(303, '/public/vacation-file/entries');
//   });
// });

module.exports = app;
