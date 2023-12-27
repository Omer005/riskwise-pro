import HeaderData from "./header/HeaderData";
import * as SVG from "../common/Icons";
import { Link } from "react-router-dom";
import DropDownMenu from "./marketing/DropDownMenu";
const ContentHeader = (props) => {
  const { menu } = props
  return (
    <>
      {/* Home header */}
      <div className="text-white mt-4 w-full overflow-x-hidden px-4" >
        {/* description */}
        <div className="flex lg:flex-row flex-col justify-between mb-4">
          <div className="lg:flex-col max-lg:hidden">
            <p className="text-xl font-medium">Welcome to our site</p>
            <div className="flex mt-1">
              <p className="text-sm text-[#9f9fa8] font-semibold">The Cardano DEX market has 44.46M € locked in liquidity, a
              </p>
              <div className="flex items-center ml-1">
                <SVG.GoDown />
              </div>
              <p className="text-[#ff422b]  text-xs font-bold ml-1">2.08 %</p>
              <p className="text-sm text-[#9f9fa8] ml-1 font-semibold">decrease since yesterday.
              </p>
            </div>
          </div>
          <div className="lg:hidden">
            <HeaderData />
          </div>
          {/* Market/Pro buttons */}
          <div className="flex justify-center items-center bg-[#142028] rounded-xl lg:w-44 w-fit h-fit lg:h-10 mt-2">
            <Link
              to="/"
              className={`duration-300 transition-all transform cursor-pointer lg:px-4 lg:py-2 sm:px-3 px-2 py-1 font-medium lg:text-base text-white  sm:text-sm text-xs  ${menu === "" ? "rounded-lg bg-[#3a4956] opacity-100 " : "opacity-70"}`}>Market
            </Link>
            <Link
              to="/home-pro"
              className={`duration-300 transition-all transform  cursor-pointer  lg:px-4 lg:py-2 sm:px-3 px-2 py-1 text-yellow-400 lg:text-base sm:text-sm text-xs font-medium sm:w-24 flex justify-center  ${menu === "home-pro" ? "rounded-lg bg-[#3a4956] opacity-100" : "opacity-70"}`}>PRO
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentHeader;