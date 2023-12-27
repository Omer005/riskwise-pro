import { Link } from "react-router-dom";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

import * as SVG from "../../common/Icons";

const NavarHome = (props) => {
  const { menu } = props;
  const { isScale } = props;

  return (
    <>
      <div
        className={`h-9  transition-all duration-300   flex items-center 
            ${menu === "home"
            ? "bg-gradient-to-r from-yellow-200 to-yellow-300 "
            : ""
          }
             ${isScale ? "w-[177px] justify-start px-2 " : "w-24  pl-2"}`}
      >
        <Link to="/" className="flex cursor-pointer">
          <div className="flex justify-center items-center text-white">
            <HomeSharpIcon fontSize="small" />
          </div>
          <div
            className={`transition-all duration-300
                ${menu === "home" ? "text-black" : "text-white"}
                ${isScale ? "opacity-100" : ""}`}
          >
            <p className={` font-normal ml-5`}>Home</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavarHome;
