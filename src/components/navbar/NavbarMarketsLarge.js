import { Link } from "react-router-dom";

import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
const NavbarMarketsLarge = (props) => {
  const { menu } = props;

  return (
    <>
      <div
        className={`h-9  px-2 rounded-xl  flex items-center mt-2  
            ${menu === "market-overviewhome"
            ? "bg-gradient-to-r from-yellow-200 to-yellow-400"
            : ""
          } `}     >
        <Link to="/market-overview" className="flex cursor-pointer items-center">
          <div className={`flex justify-center items-center ${menu === "market-overviewhome" ? "" : "text-white"} `}>
            <PriceChangeOutlinedIcon fontSize="small" />
          </div>
          <div
            className={`transition-all duration-300
                 ${menu === "market-overviewhome" ? "text-black" : "text-white"}
               `}
          >
            <span className={`font-normal ml-1 text-sm hover:opacity-80 truncate`}>Market Data</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarMarketsLarge;
