import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "./components/Main";
import Blog from "./components/Blog";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // loading 상태 추가

  useEffect(() => {
    // 서버에서 데이터 가져오기
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data);
        setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 변경
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // 에러 발생 시에도 로딩 상태를 false로 변경
      });
  }, []);

  // 렌더링 중 로딩 중이면 로딩 스피너를 표시
  return (
    <div className="App">
      <Main />
      <Blog />
      <h1>Data from Server:</h1>
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default App;
