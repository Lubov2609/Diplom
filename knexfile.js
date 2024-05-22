require('dotenv').config()
const pg = require('pg')
pg.defaults.ssl = false

module.exports = {
    development: {
        client: "postgresql",
        connection: {
            host: "localhost",
            user: "luba",
            password: "admin",
            database: "my_db"
        }
    },
    production: {
        client: "postgresql",
        connection: {
            host: "127.0.0.1",
            port: 5432,
            user: "postgres",
            password: "admin",
            database: "my_db"
        }
    }
  };

