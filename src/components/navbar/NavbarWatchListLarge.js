import { Link } from "react-router-dom";

import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
const NavbarWatchListLarge = (props) => {
  const { menu } = props;

  return (
    <>
      <div
        className={`h-9 px-2 rounded-xl transition-all duration-300  2xl:flex 2xl:items-center hidden  mt-2  ${menu === "watchlisthome"
          ? "bg-gradient-to-r from-yellow-200 to-yellow-400" : ""}`}  >
        <Link to="/" className="flex cursor-pointer">
          <div className={`flex justify-center items-center text-white `}>
            <AutoAwesomeOutlinedIcon fontSize="small" />
          </div>
          <div
            className={`transition-all duration-300  ${menu === "watchlisthome" ? "text-black" : "text-white"}`}  >
            <span className={`font-normal ml-1 text-sm hover:opacity-80`}>HotList</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarWatchListLarge;
