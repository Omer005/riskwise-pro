import { useState } from "react";
import SliderBase from "../Slider/SliderBase";
const ChartLimit = () => {
  const [isOne, setIsOne] = useState(true);
  const [betValue, setBetValue] = useState(1);
  return (
    <>
      {/* Card Group */}
      <div className="relative flex flex-col">
        <div
          style={{
            "background": "transparent linear-gradient(180deg, #142028, #070709) 0 0 no-repeat padding-box",
          }}
          className={`flex flex-col justify-between h-full w-full mr-10  rounded-2xl p-4 bg-[#121218] mt-4`} >
          {/* chart position*/}
          <div className="flex flex-col gap-2">
            {/* Limit Price */}
            <div className="flex justify-between">
              <p className={`text-[#88919e] text-sm `}>Limit Price</p>
              <div className="flex gap-2">
                <p className={`text-red-400 text-xs  font-normal`}>-5%</p>
                <p className={`text-red-400 text-xs  font-normal`}>-10%</p>
                <p className={`text-red-400 text-xs  font-normal`}>-25%</p>
                <p className={`text-red-400 text-xs  font-normal`}>-50%</p>

              </div>
            </div>
            {/* Value */}
            <div className="flex justify-between  ">
              <div className="flex flex-col items-start gap-2 relative">
                <p className="text-[#88919e] text-lg font-medium" >2.36</p>
                <div className="h-[2px] bg-[#88919e] mt-[1px] w-[150px]"></div>
              </div>
              <div className="flex items-center gap-2 relative">
                <p className="text-[#88919e] text-sm font-normal" >Market Price=2.36 iUSD</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className={`flex gap-7 b  bg-[#000] py-1 px-[10px] rounded-lg text-sm relative `}>
                <span
                  onClick={() => setIsOne(true)}
                  className={`text-sm cursor-pointer z-50 ${isOne ? "text-black" : "text-[#88919e]"}`}
                >ONE</span>
                <span
                  onClick={() => setIsOne(false)}
                  className={`text-sm cursor-pointer z-50 ${isOne ? "text-[#88919e]" : "text-black"}`}
                >SPLIT</span>
                <span
                  className={`bg-yellow-400 absolute w-12 h-[26px] rounded-lg top-0 -left-[7px] duration-300 ${isOne ? "translate-x-2" : "translate-x-[66px]"}`}
                ></span>
              </span>
              {isOne ?
                (<p className="text-[#88919e] text-xs  font-normal">Single Order
                </p>) :
                (<div className="w-[200px]">
                  <SliderBase
                    height="3px"
                    ctrColor="#FDE047 "
                    barColor="#FDE047 "
                    betValue={betValue}
                    setBetValue={setBetValue}
                    defaultValue={0}
                    min={1}
                    max={40}

  />
                </div>)}
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default ChartLimit