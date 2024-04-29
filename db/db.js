//db/db.js
const knex = require("knex");
const knexFile = require("../knexfile.js");

// //db/db.js
// const environment = process.env.NODE_ENV || "development";
//
// module.exports = knex(knexFile[environment]);
//
//
// const postgres = require('postgres-date');
//
// var connection = postgres.createConnection({
//     host : 'localhost',
//     database : 'my_db',
//     user : 'luba',
//     password : 'admin'
// });
//
// connection.connect(function(error){
//     if(error)
//     {
//         throw error;
//     }
//     else
//     {
//         console.log('MySQL Database is connected Successfully');
//     }
// });
//
// module.exports = connection;