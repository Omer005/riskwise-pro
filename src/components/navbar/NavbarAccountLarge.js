import { Link } from "react-router-dom";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from "react-redux";
const NavbarAccountLarge = (props) => {
  const { menu } = props;
  const { signedMessage } = useSelector((state) => state.wallet);
console.log(signedMessage,'NQV-----');
  return (
    <>
      <div
        className={`h-9 px-2 items-center rounded-xl flex
            ${menu === "accounthome"
            ? "bg-gradient-to-r from-yellow-200 to-yellow-400"
            : ""
          }`} >
            {signedMessage?
            <>
             <div className={`flex justify-center items-center ${menu === "accounthome" ? "" : "text-white"} `}>
            <AccountCircleIcon fontSize="small" />
          </div>
          <div
            className={`transition-all duration-300
                 ${menu === "accounthome" ? "text-black" : "text-white"}`} >
            <span className={`font-normal ml-2 text-sm hover:opacity-80`}>{signedMessage?.substring(0,8)+".."}</span>
          </div>
            </>
          :
          <Link to="/account" className="flex cursor-pointer">
          <div className={`flex justify-center items-center ${menu === "accounthome" ? "" : "text-white"} `}>
            <AccountCircleIcon fontSize="small" />
          </div>
          <div
            className={`transition-all duration-300
                 ${menu === "accounthome" ? "text-black" : "text-white"}`} >
            <span className={`font-normal ml-2 text-sm hover:opacity-80`}>Account</span>
          </div>
        </Link>
          }
       
      </div>
    </>
  );
};

export default NavbarAccountLarge;
