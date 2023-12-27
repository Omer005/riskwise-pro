import { Link } from "react-router-dom";
import WalletIcon from '@mui/icons-material/Wallet';

const NavbarHotProfilerLarge = (props) => {
  const { menu } = props;

  return (
    <>
      <div
        className={`h-9  px-2 rounded-xl flex items-center mt-2
            ${menu === "hotwallethome" ? "bg-gradient-to-r from-yellow-200 to-yellow-400" : ""}
             `}
      >
        <Link to="/hotwallet" className="flex cursor-pointer">
          <div className={`flex justify-center items-center ${menu === "hotwallethome" ? "" : "text-white"} `}>
            <WalletIcon fontSize="small" />
          </div>
          <div
            className={`transition-all duration-300
                 ${menu === "hotwallethome" ? "text-black" : "text-white"}`}  >
            <span className={`font-normal ml-2 text-sm hover:opacity-80`}>WalletWatch</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarHotProfilerLarge;
