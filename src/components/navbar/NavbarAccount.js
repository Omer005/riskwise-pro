import { Link } from "react-router-dom";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavbarAccount = (props) => {
  const { menu } = props;
  const { isScale } = props;

  return (
    <>
      <div
        className={`h-9 transition-all duration-300  flex items-center  mt-auto mb-8 
            ${menu === "accounthome"
            ? "bg-gradient-to-r from-yellow-200 to-yellow-400"
            : ""
          }
             ${isScale ? "w-[177px] justify-start pl-2" : "w-[120px]  pl-2"
          }`}
      >
        <Link to="/account" className="flex cursor-pointer">
          <div className={`flex justify-center items-center ${menu === "accounthome" ? "" : "text-white"} `}>
            <AccountCircleIcon fontSize="small" />
          </div>
          <div
            className={`transition-all duration-300
                 ${menu === "accounthome" ? "text-black" : "text-white"}
                ${isScale ? "opacity-100" : ""}`}
          >
            <span className={`font-normal ml-4`}>Account</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarAccount;
