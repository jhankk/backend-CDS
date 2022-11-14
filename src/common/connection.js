const mysql = require("mysql");
require("dotenv").config();
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
  });
  
  connection.connect();

  module.exports = {
    connection
  }