const mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "konnect_db0",
});
const insertOne = (uname, unum) => {
  con.connect(function (err) {
    if (err) throw err;
    var sql = `INSERT INTO users (name, mobile_number) VALUES ('${uname}', '${unum}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
};
const getdata = () => {
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM tests", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
};

module.exports = { insertOne, getdata };
