import * as SVG from "../common/Icons";
import { Link } from "react-router-dom";

const NavbarProfiler = (props) => {
  const { menu } = props;
  const { isScale } = props;
  return (
    <>
      <div className={`h-9 rounded-lg transition-all duration-300  flex items-center mt-2
            ${menu === "profiler" ? "bg-gradient-to-r from-yellow-200 to-yellow-400" : ""}
             ${isScale ? "w-36 justify-start px-3" : "w-9  justify-center"}`}>
        <Link
          to="/profiler"
          className="flex cursor-pointer">
          <SVG.WalletProfiler menu={menu} />
          <div className={`transition-all duration-300
                 ${menu === "profiler" ? "text-black" : "text-white"}
                ${isScale ? "opacity-100" : "hidden"}`} >
            <span className={`font-normal ml-5`}>Profiler</span>
          </div>
        </Link>
      </div>
    </>
  )

}
export default NavbarProfiler;