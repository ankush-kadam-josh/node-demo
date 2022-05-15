var mysql = require("mysql");
const dbConfig = require("./db.config");

//create a connection to db
var con = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

//open a connection to db
con.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB!");
});

module.exports = con;
