import { useState } from "react";
import * as SVG from "../../common/Icons";

const PortfolioChartHeader = () => {
  const [color, setColor] = useState("white");

  return (
    <div className="w-full">
      <div className="sm:flex sm:flex-col w-full gap-4 sm:space-y-0 space-y-4">
        <div className="flex h-[90px]  bg-[#142028] px-3 py-2 rounded-xl">
          <div className="flex justify-between gap-8">
            <div className="flex flex-col ">
              <span className="flex gap-2 items-center text-white text-[30px] ">
                0₳
                <p className="text-[#9f9fa8] text-xl">/$0 </p>
              </span>
              <span className="text-[#9f9fa8] text-xl">0.00₳</span>
            </div>
            <div className="flex justify-center items-center w-11 h-7 rounded-xl bg-[#2f3737] p-3 cursor-pointer">
              <SVG.Visibility color={color} />
            </div>
          </div>
        </div>
        <div className="flex flex-auto  relative  justify-evenly gap-6 h-[90px]  bg-[#142028] px-4 py-2 rounded-xl">
          <div className="flex justify-center gap-4">
            <div className="flex flex-col justify-center items-center ">
              <span className="flex gap-2 items-center text-[#9f9fa8] text-lg font-medium ">
                Token Value
              </span>
              <span className="text-white text-xl">0₳</span>
            </div>
          </div>
          <div className="bg-[#121212] h-full w-[2px]"></div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center ">
              <span className="flex gap-2 items-center text-[#9f9fa8] text-lg font-medium ">
                LP Value
              </span>
              <span className="text-white text-xl">0₳</span>
            </div>
          </div>
          <div className="bg-[#121212] h-full w-[2px]"></div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center ">
              <span className="flex gap-2 items-center text-[#9f9fa8] text-lg font-medium">
                NFT Value
              </span>
              <span className="text-white text-xl">0₳</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioChartHeader;
