// // Update with your config settings.
//
// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */
// module.exports = {
//
//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },
//
//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },
//
//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }
//
// };



// Update with your config settings.
// require("dotenv").config();
//
// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      user: "luba",
      password: "admin",
      database: "my_db"
    }

  }
};
//
// module.exports = {
//   development: {
//     client: "postgresql",
//     connection: "postgres://localhost/my_db"
//   },
//   staging: {
//     client: "postgresql",
//     connection: ""
//   },
//   production: {
//     client: "postgresql",
//     connection: {
//       host: "localhost",
//       user: "postgres",
//       password: "admin",
//       database: "my_db"
//     }
//   }
// };
