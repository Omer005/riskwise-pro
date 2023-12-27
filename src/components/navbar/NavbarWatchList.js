import { Link } from "react-router-dom";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const NavbarWatchList = (props) => {
  const { menu } = props;
  const { isScale } = props;

  return (
    <>
      <div
        className={`h-9  flex items-center mt-2 
            ${menu === "watchlisthome"
            ? "bg-gradient-to-r from-yellow-200 to-yellow-400"
            : ""
          }
             ${isScale ? "w-[177px] justify-start px-2 " : "w-24  pl-2 "
          }`}
      >
        <Link to="/" className="flex cursor-pointer">
          <div className={`flex justify-center items-center text-white `}>
            <AutoAwesomeOutlinedIcon fontSize="small" />
          </div>
          <div
            className={` ${menu === "watchlisthome" ? "text-black" : "text-white"}
                `}
          >
            <span className={`font-normal ml-5`}>HotList</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarWatchList;
