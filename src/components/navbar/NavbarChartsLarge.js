import { Link } from "react-router-dom";
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
const NavbarChartsLarge = (props) => {
  const { menu } = props;

  return (
    <>
      <div
        className={`h-9  px-2 rounded-xl flex items-center mt-2
            ${menu === "tokenhome"
            ? "bg-gradient-to-r from-yellow-200 to-yellow-400"
            : ""
          }
             `}
      >
        <Link to="/charts/token" className="flex cursor-pointer">
          <div className={`flex justify-center items-center ${menu === "tokenhome" ? "" : "text-white"} `}>
            <TroubleshootOutlinedIcon fontSize="small" />
          </div>
          <div
            className={`transition-all duration-300
                 ${menu === "tokenhome" ? "text-black" : "text-white"}
              `}
          >
            <span className={`font-normal ml-1 text-sm hover:opacity-80`}>Charts</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarChartsLarge;
