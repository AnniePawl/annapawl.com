import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Mobile from "./components/mobile/Mobile";
import Tablet from "./components/tablet/Tablet";
import Desktop from "./components/desktop/Desktop";
import "./app.scss";

function App() {
  const [isMobile, setMobile] = useState(window.innerWidth < 768);
  const [isTablet, setTablet] = useState(
    window.innerWidth > 600 && window.innerWidth < 1000
  );
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setMobile(window.innerWidth < 600);
    setTablet(window.innerWidth > 600 && window.innerWidth < 1000);
    setDesktop(window.innerWidth > 1000);
    console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Router>
      <div className="app">
        <Link to="/">
          {isMobile && <Mobile />}
          {isTablet && <Tablet />}
          {isDesktop && <Desktop />}
        </Link>
      </div>
    </Router>
  );
}

export default App;
