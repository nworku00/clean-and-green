require('dotenv').config()
module.exports = {
  "development": {
    "username": "corcoding",
    "password": null,
    "database": "cng-db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize",
    "seederStorageTableName": "sequelize_seeders",
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASS,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
      "dialect": "postgres",
      "seederStorage": "sequelize",
      "seederStorageTableName": "sequelize_seeders",
  }
}
