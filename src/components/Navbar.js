import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavbarHeader from "./NavbarHeader";
import NavarHome from "./NavbarHome";
import NavbarCharts from "./NavbarCharts";
import NavbarPortfolio from "./NavbarPortfolio";
import NavbarMarkets from "./NavbarMarkets";
import NavbarWatchList from "./NavbarWatchList";
import NavbarNews from "./NavbarNews";
import NavbarProfiler from "./NavbarProfiler";
import NavbarHotProfiler from "./NavbarHotProfiler";
import NavbarMoneyFlow from "./NavbarMoneyFlow";
import NavbarAccount from "./NavbarAccount";

const Navbar = () => {
  const navbar = document.getElementById("Navbar");
  const [isScale, setIsScale] = useState(false);
  const location = useLocation();
  const [menu, setMenu] = useState("");

  if (navbar) {
    navbar.addEventListener("mouseenter", function () {
      setIsScale(true);
    });
    navbar.addEventListener("mouseleave", function () {
      setIsScale(false);
    });
  }

  useEffect(() => {
    var current = location.pathname.substring(
      location.pathname.lastIndexOf("/") + 1
    );
    setMenu(current);
  }, [location.pathname.substring(location.pathname.lastIndexOf("/") + 1)]);

  return (
    <>
      <div
        className={`fixed h-full min-h-screen top-0 overflow-hidden transition-all duration-200 z-50 bg-gradient-to-b from-yellow-400 via-blue-300 to-black rounded-r-[20px]  mt-1 max-lg:hidden ${
          isScale ? " w-[176px]" : " w-[46px]"
        }`}
      >
        <div
          className={`fixed top-0 transition-all duration-200 z-50 mt-[5px] rounded-r-[20px] bg-gradient-to-b from-gray-800 to-black h-screen overflow-hidden  ${
            isScale ? "w-[175px]" : " w-[45px]"
          }`}
          id="Navbar"
        >
          {/* Navbar header */}
          <NavbarHeader props={isScale} />
          {/* Navbar Body */}
          <div className="p-[3px] pt-[2px] h-[90%] flex flex-col items-start    relative">
            <NavarHome menu={menu} isScale={isScale} />
            <NavbarCharts menu={menu} isScale={isScale} />
            <NavbarPortfolio menu={menu} isScale={isScale} />
            <NavbarMarkets menu={menu} isScale={isScale} />
            <NavbarWatchList menu={menu} isScale={isScale} />
            <NavbarNews menu={menu} isScale={isScale} />
            <div className="p-2 flex justify-start mt-2">
              <p className="text-green-500 font-medium text-xs">PRO</p>
            </div>
            <NavbarProfiler menu={menu} isScale={isScale} />
            <NavbarHotProfiler menu={menu} isScale={isScale} />
            <NavbarMoneyFlow menu={menu} isScale={isScale} />
            <NavbarAccount menu={menu} isScale={isScale} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
