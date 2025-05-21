require('dotenv').config();

module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "dbCrud",
    host: "localhost",
    port: 3306,
    dialect: "mysql"
  }
};