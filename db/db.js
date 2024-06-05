const environment = process.env.NODE_ENV || 'development';
const conf = require('../knexfile')[environment];
module.exports = require('knex')(conf);
