import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return ( // user가 있는 url에 따라서 보여질 화면
  <Router> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Detail />} />
    </Routes>
  </Router>
  );
}

export default App;
