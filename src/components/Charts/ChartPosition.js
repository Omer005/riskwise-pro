import { useState } from "react";
import * as SVG from "../../common/Icons";

const ChartPosition = () => {
  const [isActive, setIsActive] = useState(false)
  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => setIsActive(false);
  return (
    <div className="flex items-center h-full w-full  justify-between rounded-2xl px-3 bg-[#142028] mt-4">
      {/* chart position*/}

      <div className="flex  p-3">
        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <SVG.Portfolio />
            <p className="text-white text-xl font-normal"> Your Position</p>
          </div>
          <div className="">
            <p className="text-white text-2xl font-normal"> 0 €</p>
          </div><div className="">
            <p className="text-[#9f9fa8] text-base font-semibold"> 0 iUSD</p>
          </div>
        </div>

      </div>
      <div className="flex flex-col ">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-lg h-7 px-10 transition-all transform duration-300 cursor-pointer ${isActive ? "mt-[-6px]" : ""}`}>
            <p className="text-base tracking-wide">Investments </p>
          </div>
        
      </div>
    </div>
  )
}

export default ChartPosition