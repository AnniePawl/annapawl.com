import { useState, useEffect } from "react";
import Mobile from "./components/mobile/Mobile";
import Tablet from "./components/tablet/Tablet";
import Desktop from "./components/desktop/Desktop";
import "./app.scss";

function App() {
  const [isMobile, setMobile] = useState(window.innerWidth < 540);
  const [isTablet, setTablet] = useState(
    window.innerWidth > 540 && window.innerWidth < 1000
  );
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setMobile(window.innerWidth < 540);
    setTablet(window.innerWidth > 540 && window.innerWidth < 1000);
    setDesktop(window.innerWidth > 1000);
    console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="app">
      {isMobile && <Mobile />}
      {isTablet && <Tablet />}
      {isDesktop && <Desktop />}
    </div>
  );
}

export default App;
