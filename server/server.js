import express from "express";
// import mysql from "mysql";
// import cors from "cors";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import cookieParser from "cookie-parser";
// const salt = 10;

const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(cookieParser());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "konnect_db0",
// });

app.get("/", (req, res) => {
  return res.send("Serverside");
});
app.get("/register", (req, res) => {
  return res.send("Register Page");
});

// app.post("/register", (req, res) => {
//   const sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?)";
//   bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
//     if (err) return res.json({ Error: "Error in Salting Password" });
//     const values = [req.body.name, req.body.email, hash];
//     db.query(sql, [values], (err, result) => {
//       if (err) return res.json({ Error: "Error in Salting Password" });
//       return res.json({ Status: "Success" });
//     });
//   });
// });

app.listen(8081, () => {
  console.log("Server running on port http://localhost:8081 ...");
});
