import { Link } from "react-router-dom";

import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';

const NavbarProfiler = (props) => {
  const { menu } = props;
  const { isScale } = props;

  return (
    <>
      <div
        className={`h-9  transition-all duration-300  flex items-center mt-2
            ${menu === "profilerhome"
            ? "bg-gradient-to-r from-yellow-200 to-yellow-400"
            : ""
          }
             ${isScale ? "w-[177px]  justify-start pl-2" : "w-[108px]  pl-2"
          }`}
      >
        <Link to="/profiler" className="flex cursor-pointer">
          <div className={`flex justify-center items-center ${menu === "profilerhome" ? "" : "text-white"} `}>
            <RoomPreferencesIcon fontSize="small" />
          </div>
          <div
            className={`transition-all duration-300
                 ${menu === "profilerhome" ? "text-black" : "text-white"}
                ${isScale ? "opacity-100" : ""}`}
          >
            <span className={`font-normal ml-5`}>Portfolio</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarProfiler;
