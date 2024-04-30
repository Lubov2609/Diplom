require('dotenv').config()
const pg = require('pg')
pg.defaults.ssl = true

module.exports = {
    development: {
        client: "pg",
        connection:

            {
          host: "localhost",
          user: "luba",
          password: "admin",
          database: "my_db"
        }
    }
};

