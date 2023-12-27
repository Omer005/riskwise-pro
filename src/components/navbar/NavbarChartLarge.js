import { Link } from "react-router-dom";

import * as SVG from "../../common/Icons";

const NavbarChartLarge = (props) => {
  const { menu } = props;

  return (
    <>
      <div
        className={`h-9  px-2 rounded-xl flex items-center mt-2
            ${menu === "multihome"
            ? "bg-gradient-to-r from-yellow-200 to-yellow-400" : ""} `}  >
        <Link to="/multi" className="flex items-center cursor-pointer">
          <SVG.multiChart menu={menu} />
          <div
            className={`transition-all duration-300
                 ${menu === "multihome" ? "text-black" : "text-white"}  `} >
            <span className={`font-normal ml-1 text-sm hover:opacity-80`}>MultiChart</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarChartLarge;
