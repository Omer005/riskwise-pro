import { Link } from "react-router-dom";
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';

const NavbarCharts = (props) => {
  const { menu } = props;
  const { isScale } = props;

  return (
    <>
      <div
        className={`h-9  transition-all duration-300  flex items-center mt-2
            ${menu === "tokenhome"
            ? "bg-gradient-to-r from-yellow-200 to-yellow-400"
            : ""
          }
             ${isScale ? "w-[177px] justify-start px-2" : "w-24  px-2 "
          }`}
      >
        <Link to="/charts/token" className="flex cursor-pointer">
          <div className={`flex justify-center items-center ${menu === "tokenhome" ? "" : "text-white"} `}>
            <TroubleshootOutlinedIcon fontSize="small" />
          </div>          <div
            className={`transition-all duration-300
                 ${menu === "tokenhome" ? "text-black" : "text-white"}
                ${isScale ? "opacity-100" : ""}`}
          >
            <span className={`font-normal ml-5`}>Charts</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarCharts;
