const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const mysql = require("mysql");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// MySQL connection setup
const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// Connect to MySQL
con.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err.message);
    return;
  }

  console.log("Connected to MySQL database");

  // ... rest of your code ...

  // CORS 활성화 (보안 미들웨어보다 먼저 선언)
  app.use(cors());

  // 보안 미들웨어 추가
  app.use(helmet());

  // 정적 파일 제공 (React 빌드 파일)
  app.use(express.static(path.join(__dirname, "../client/build")));

  // 모든 경로에 대해 React 앱 제공
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });

  app.get("/api/data", (req, res) => {
    // 데이터를 반환하는 로직 추가
    res.json({ message: "Hello, world!" });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
