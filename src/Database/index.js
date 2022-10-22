const mysql = require('mysql')
const db = mysql.createConnection({
host: "37.48.121.26",
user: "premiums",
password: "6ohe)!VBAE7h10",
database:"premiums_db" 
})

module.exports = db;
