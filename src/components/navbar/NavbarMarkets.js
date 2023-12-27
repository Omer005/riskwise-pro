import { Link } from "react-router-dom";

import * as SVG from "../../common/Icons";
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';

const NavbarMarkets = (props) => {
  const { menu } = props;
  const { isScale } = props;

  return (
    <>
      <div
        className={`h-9  transition-all duration-300  flex items-center mt-2  
            ${menu === "market-overviewhome"
            ? "bg-gradient-to-r from-yellow-200 to-yellow-400"
            : ""
          }
             ${isScale ? "w-[177px] justify-start pl-2 " : "w-24  pl-2 "
          }`}
      >
        <Link to="/market-overview" className="flex cursor-pointer items-center">
          <div className={`flex justify-center items-center ${menu === "market-overviewhome" ? "" : "text-white"} `}>
            <PriceChangeOutlinedIcon fontSize="small" />
          </div>
          <div
            className={`transition-all duration-300
                 ${menu === "market-overviewhome" ? "text-black" : "text-white"}
                ${isScale ? "opacity-100" : ""}`}
          >
            <span className={`font-normal ml-5 truncate`}>Market Data</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarMarkets;
