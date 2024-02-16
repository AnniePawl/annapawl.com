// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import DWC from "./components/dwc/dwc";
import Embroidery from "./components/embroidery/Embroidery";
import "./app.scss";


import {
 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="app">
          <Router>
        <Routes>
            <Route path="/" element={<Main />}></Route>
            {/* Graphic Design */}
            <Route path="/dwc" element={<DWC/>} />
            <Route path="/embroidery" element={<Embroidery/>} />
        </Routes>
    </Router>
    
      
    </div>
  );
}

export default App;
