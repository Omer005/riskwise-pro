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
  const [menu, setMenu] = useState("");

  useEffect(() => {
    var current = window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    );
    setMenu(current + "home");
  }, [
    window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    )
  ]);

  return (
    <>
      <div
        className={`fixed h-full min-h-screen top-0 overflow-hidden transition-all duration-200 z-50 bg-gradient-to-b from-yellow-400 via-blue-300 to-black pt-1  opacity-90 max-lg:hidden hover:w-[177px] w-[46px]
        }`}
      >
        <div
          className={`fixed top-0 transition-all duration-200 z-50 pt-1 opacity-100 bg-[#142028]  h-screen overflow-hidden  hover:w-[176px] w-[45px]`}
          id="Navbar"
        >
          {/* Navbar header */}
          <NavbarHeader  />
          {/* Navbar Body */}
          <div
            className="p-[3px] pt-[2px] h-[90%] flex flex-col items-start  relative"
          >
            <NavarHome menu={menu}  />
            <NavbarCharts menu={menu} />
            <NavbarPortfolio menu={menu}  />
            <NavbarMarkets menu={menu}  />
            <NavbarWatchList menu={menu}  />
            <NavbarNews menu={menu}  />
            <div className="p-2 flex justify-start mt-2">
              <p className="text-yellow-400 font-medium text-xs">PRO</p>
            </div>
            <NavbarProfiler menu={menu}  />
            <NavbarHotProfiler menu={menu}  />
            <NavbarMoneyFlow menu={menu}  />
            <NavbarAccount menu={menu}  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
