import { useState } from "react";
import { iUSD } from "../../common/IMG/Images";
const ChartConnect = () => {
  const [isActive, setIsActive] = useState(false)
  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => setIsActive(false);
  return (
    <div
      style={{
        "background": "transparent linear-gradient(270deg, #142028, #000) 0 0 no-repeat padding-box"
      }}
      className="flex flex-col   justify-center h-full w-full   rounded-2xl px-4 py-4 gap-6  mt-4">
      {/* chart position*/}

      <div className="flex justify-start items-center gap-3">
        <img
          src={iUSD}
          alt="taptool"
          className="w-8"
        />
        <p className="text-white text-sm font-normal"> Orders</p>
      </div>
      <div className={`flex justify-center items-center p-2 `}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`flex justify-center items-center bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-xl h-11 px-10 transition-all transform duration-300 cursor-pointer `}>
          <p className="text-base tracking-wide font-normal ">Connect Wallet </p>
        </div>
      </div>
    </div>
  )
}

export default ChartConnect