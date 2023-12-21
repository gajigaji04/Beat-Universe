const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
});

// MySQL 연결
db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
    throw err;
  }
  console.log("Connected to MySQL");
});

// 쿼리 수행
db.query("SELECT * FROM test", (error, result) => {
  if (error) throw error;
  console.log(result);
});

// 연결 종료
db.end();
