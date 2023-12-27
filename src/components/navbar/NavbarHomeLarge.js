import { Link } from "react-router-dom";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
const NavbarHomeLarge = (props) => {
  const { menu } = props;
  const { isScale } = props;
 
  return (
    <>
      <div
        className={`flex items-center h-9  mt-2 px-2 rounded-xl ${menu === "home"
          ? "bg-gradient-to-r from-yellow-200 to-yellow-300 "
          : ""
          }`}   >
        <Link to="/" className="flex cursor-pointer">

          {menu === "home" ? (<HomeSharpIcon fontSize="small" />
          ) : (
            <div className="flex justify-center items-center text-white">
              <HomeSharpIcon  fontSize="small" />
            </div>)}
          <div
            className={`
                ${menu === "home" ? "text-black" : "text-white"}
                ${isScale ? "opacity-100" : ""}`}
          >
            <p className={` font-normal ml-1 text-sm hover:opacity-80`}>Home</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarHomeLarge;
