import { Link } from "react-router-dom";

import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';

const NavbarPortfolio = (props) => {
  const { menu } = props;
  const { isScale } = props;

  return (
    <>
      <div
        className={`h-9  transition-all duration-300  flex items-center mt-2 
            ${menu === "portfoliohome"
            ? "bg-gradient-to-r from-yellow-200 to-yellow-400"
            : ""
          }
             ${isScale ? "w-[177px] justify-start px-2 " : "w-24  pl-2 "
          }`}
      >
        <Link to="/portfolio" className="flex cursor-pointer">
          <div className={`flex justify-center items-center ${menu === "portfoliohome" ? "" : "text-white"} `}>
            <CurrencyBitcoinOutlinedIcon fontSize="small" />
          </div>          <div
            className={`transition-all duration-300
                 ${menu === "portfoliohome" ? "text-black" : "text-white"}
                ${isScale ? "opacity-100" : ""}`}
          >
            <span className={`font-normal ml-5`}>Investments</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarPortfolio;
