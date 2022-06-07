import { useState, useEffect } from "react";
import Desktop from "./desktop/Desktop";
import Tablet from "./tablet/Tablet";
import Mobile from "./mobile/Mobile";

function Main() {
  const [isMobile, setMobile] = useState(window.innerWidth < 768);
  const [isTablet, setTablet] = useState(
    window.innerWidth > 600 && window.innerWidth < 1000
  );
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  console.log(isDesktop);
  const updateMedia = () => {
    setMobile(window.innerWidth < 600);
    setTablet(window.innerWidth > 600 && window.innerWidth < 1000);
    setDesktop(window.innerWidth > 1000);
    // console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div>
      {isMobile && <Mobile />}
      {isTablet && <Tablet />}
      {isDesktop && <Desktop />}
    </div>
  );
}

export default Main;
