import { Link } from "react-router-dom";
import WalletIcon from '@mui/icons-material/Wallet';
const NavbarHotProfiler = (props) => {
  const { menu } = props;
  const { isScale } = props;

  return (
    <>
      <div
        className={`h-9  transition-all duration-300  flex items-center mt-2
            ${menu === "hotwallethome"
            ? "bg-gradient-to-r from-yellow-200 to-yellow-400"
            : ""
          }
             ${isScale ? "w-[177px] justify-start pl-2" : "w-[133px]  pl-2"
          }`}
      >
        <Link to="/hotwallet" className="flex cursor-pointer">
          <div className={`flex justify-center items-center ${menu === "tokenhome" ? "" : "text-white"} `}>
            <WalletIcon fontSize="small" />
          </div>
          <div
            className={`transition-all duration-300
                 ${menu === "hotwallethome" ? "text-black" : "text-white"}
                ${isScale ? "opacity-100" : ""}`}
          >
            <span className={`font-normal ml-5`}>WalletWatch</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarHotProfiler;
