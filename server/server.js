const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

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
