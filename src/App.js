// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Main2 from './components/Main2'
import Home2 from './components/home/Home2'
import AboutMe from "./components/about-me/AboutMe";
import DWC from "./components/dwc/dwc";
import Embroidery from "./components/embroidery/Embroidery";
import CodeSnippets from "./components/code-snippets/CodeSnippets";
import NewHome from "./NewHome";
import FoodBlog from "./components/food-blog/FoodBlog";
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
            <Route path="/dwc" element={<DWC/>} />
            <Route path="/about" element={<AboutMe/>} />
            <Route path="/embroidery" element={<Embroidery/>} />
            <Route path="/codesnippets" element={<CodeSnippets/>} />
            <Route path="/foodblog" element={<FoodBlog/>} />
        </Routes>
    </Router>
    
      
    </div>
  );
}

export default App;
