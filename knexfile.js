// require('dotenv').config()
const pg = require('pg')
pg.defaults.ssl = false

module.exports = {
    development: {
        client: "pg",
        connection: {
            host: "localhost",
            user: "luba",
            password: "admin",
            database: "my_db"
        }
    },
    production: {
        client: "pg",
        connection: {
            host: "localhost",
            user: "luba",
            password: "admin",
            database: "my_db"
        }
    }
  };
  
