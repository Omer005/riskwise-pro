import { Link } from "react-router-dom";

import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const NavbarNewsLarge = (props) => {
  const { menu } = props;

  return (
    <>
      <div
        className={`h-9  px-2 rounded-xl flex items-center mt-2
            ${menu === "newshome"
            ? "bg-gradient-to-r from-yellow-200 to-yellow-400" : ""} `}  >
        <Link to="/news" className="flex items-center cursor-pointer">
          <div className={`flex justify-center items-center ${menu === "newshome" ? "" : "text-white"} `}>
            <SendOutlinedIcon fontSize="small" />
          </div>
          <div
            className={`transition-all duration-300
                 ${menu === "newshome" ? "text-black" : "text-white"}  `} >
            <span className={`font-normal ml-1 text-sm hover:opacity-80`}>Chat</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarNewsLarge;
