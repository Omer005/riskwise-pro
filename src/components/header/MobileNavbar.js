import { useState, useEffect } from "react";
import NavbarHome from "../navbar/NavbarHome";
import NavbarCharts from "../navbar/NavbarCharts";
import NavbarPortfolio from "../navbar/NavbarPortfolio";
import NavbarMarkets from "../navbar/NavbarMarkets";
import NavbarWatchList from "../navbar/NavbarWatchList";
import NavbarNews from "../navbar/NavbarNews";
import NavbarProfiler from "../navbar/NavbarProfiler";
import NavbarHotProfiler from "../navbar/NavbarHotProfiler";
import NavbarMoneyFlow from "../navbar/NavbarMoneyFlow";
import NavbarAccount from "../navbar/NavbarAccount";
import NavbarPartner from "../navbar/NavbarPartner"
import NavbarMulti from "../navbar/NavbarMulti";
const MobileNavbar = (props) => {
  const [menu, setMenu] = useState("");
  const [show, setShow] = useState("props.show");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    var current = window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    );
    setMenu(current);
  }, [
    window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/")
    )
  ]);

  useEffect(() => {
    setShow(props.show);
    if (props.show === true) {
      setHidden(true);
    }
    if (props.show === false) {
      setTimeout(() => {
        setHidden(false);
      }, 200);
    }
  }, [props]);

  return (
    <div className="">
      <div
        className={`fixed z-[999999] h-full w-52 top-[60px] right-0 font-light ${show === true ? "mobileNavout" : "mobileNavin"
          } ${hidden === true ? "" : "hidden"}`}
        style={{
          background: "linear-gradient(#142028,rgba(41,41,41,0%))",
          backdropFilter: "blur(10px)"
        }}
      >
        <div className="relative flex flex-col justify-start h-[90%] py-3 px-2">
          <div className="-pr-20">
            <NavbarHome menu={menu} />
            <NavbarCharts menu={menu} />
            <NavbarPortfolio menu={menu} />
            <NavbarMarkets menu={menu} />
            <NavbarNews menu={menu} />
            <NavbarMulti menu={menu} />
            <NavbarPartner menu={menu} />
            <NavbarProfiler menu={menu} />
            <NavbarHotProfiler menu={menu} />
            <NavbarMoneyFlow menu={menu} />
            <div className="absolute bottom-0">
              <NavbarAccount menu={menu} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
