# Build project
$ npm install
$ nCREATE DATABASE pm start
скс
# PSQL commands
`\q` - выход
`\l` - просмотр баз
`\d` - просмотр таблиц
`\d [table_name]` - просмотр записей в таблицах
`\du` - просмотр ролей
`\password` - задаём пользователю новый пароль
`\c или \connect [db_name]` - подключение к бд
`\dt` - список всех таблиц в текущей базе
`\di` - список всех индексов в текущей базе
`\df` - список всех пользовательских функций в текущей базе
`\timing` - отобразить время выполнения запроса
`\?` - все команды консольной утилиты
`\x` - расширенный дисплей
`\x auto` - если данных много, то выводится построчно, если мало то таблицей
`\e` - написание запроса в редакторе (vim), после закрытия редактора выполняется sql-запрос
`\i - /sql/query.sql` - выполнение запроса из файла

# KNEX
> https://knexjs.org/guide/migrations.html#seed-files
`$ sudo npm install knex -g`- установка knex глобально в нашу систему

`$ knex migrate:latest` - запуск миграции
`$ knex seed:make seed_name` - создание сида
`$ knex seed:run` - запуск сида