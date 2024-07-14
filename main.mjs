import express from "express";
import cors from "cors";
import mysql from "mysql2";

const PORT = process.env.PORT || 3000;
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employee",
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "welcome to our api" });
});

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
