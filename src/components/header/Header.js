import { useState, useEffect } from "react";

// import HeaderButton from "./HeaderButton";
import HeaderData from "./HeaderData";
// import HeaderSearch from "./HeaderSearch";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [show, setShow] = useState("");

  useEffect(() => {
    if (window.location.pathname === "/") {
      setShow("block float-right pt-4 px-8");
    } else setShow("hidden");
  }, [window.location.pathname]);

  return (
    <>
      <MobileHeader />
      {/* <div className="headercontainer pt-20 px-4 mb-3">
        <HeaderSearch />
        <div className={show}>
          <HeaderData />
        </div>
      </div> */}
      <div className="pt-20 px-4 mb-3">
        <div className={show}>
          <HeaderData />
        </div>
      </div>
    </>
  );
};

export default Header;
