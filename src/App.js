import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
