import { useState } from "react";
import * as SVG from "../../common/Icons";
import { ADA } from "../../common/IMG/Images";
import { Verified } from "../../common/IMG/Images";
import { Tuna } from "../../common/IMG/Images";
const ChartCardGroup = () => {
  const [ada, setAda] = useState("0");
  const [tuna, setTuna] = useState("0");
  const [isActiveDown, setIsActiveDown] = useState(false)
  const handleSwapDown = () => {
    setIsActiveDown(!isActiveDown);
  }
  return (
    <>
      {/* Card Group */}
      <div className="relative flex flex-col">
        {/* ADA Content */}
        <div
          style={{
            "background": "transparent linear-gradient(180deg, #142028, #000) 0 0 no-repeat padding-box",
          }}
          className={`flex flex-col justify-between h-full w-full mr-10  rounded-2xl p-4 #121218] mt-4 border-[2px] border-[#24242c] ${isActiveDown ? "order-2" : ""}`} >
          {/* chart position*/}
          <div className="flex flex-col gap-2">
            {/* You Sell */}
            <div className="flex justify-between">
              <p className={`text-[#88919e] text-lg font-medium`}> {isActiveDown ? "You buy" : "You sell"}</p>
              <div className="flex gap-2">
                <p className={`text-[#88919e] text-base  font-normal`}> Balance:0</p>
                <p className={`text-yellow-400 text-base  font-medium tracking-wide`}>{isActiveDown ? "" : "MAX"}</p>
              </div>
            </div>
            {/* ADA */}
            <div className="flex justify-between  w-full">
              <div className="flex items-center gap-2 relative">
                <div className="relative">
                  <div className="w-[30px] h-[30px]">
                    <img src={ADA} className=" w-[30px] h-[30px]" /></div>
                  <div className="absolute bottom-[-2px] right-[-3px]">
                    <img src={Verified}
                      className="w-[16px] h-[16px]" />
                  </div>
                </div>
                <p className="text-white text-[30px] font-semibold" >ADA</p>

              </div>
              <div className="flex  justify-end">
                <input
                  type="text"
                  value={ada}
                  onChange={(e) => {
                    setAda(e.target.value)
                  }}
                  maxLength={12}
                  className="text-white text-right bg-transparent border-none focus:border-none text-[30px] w-[70%]   font-semibold" />
              </div>
            </div>
            {/* Cardano */}
            <div className="flex justify-between">
              <p className="text-[#88919e] text-base font-medium">Cardano</p>
              <p className="text-[#88919e] text-base  font-normal"> ~$0.00</p>
            </div>
          </div>

        </div>
        {/* TUNA Content */}
        <div
        style={{
          "background":"#142028"
        }}
          className="flex flex-col  justify-between h-full w-full mr-10  rounded-2xl p-4 bg-transparent mt-2 border-[2px] border-[#24242c] ">
          {/* chart position*/}
          <div className="flex flex-col gap-2 ">
            {/* You buy */}
            <div className="flex justify-between ">
              <p className="text-[#88919e] text-lg font-medium"> {isActiveDown ? "You sell" : "You buy"}</p>
              <div className="flex gap-2">
                <p className={`text-[#88919e] text-base  font-normal`}> Balance:0</p>
                <p className={`text-yellow-400 text-base  font-medium tracking-wide`}>{isActiveDown ? "MAX" : ""}</p>
              </div>
            </div>
            {/* Tuna */}
            <div className="flex justify-between  w-full">
              <div className="flex items-center gap-2 relative">
                <div className="relative">
                  <div className="w-[30px] h-[30px] ">
                    <img src={Tuna} className="rounded-full w-[30px] h-[30px]" /></div>
                  <div className="absolute bottom-[-2px] right-[-3px]">
                    <img src={Verified}
                      className="w-[16px] h-[16px]" />
                  </div>
                </div>
                <p className="text-white text-[30px] font-semibold" >TUNA</p>

              </div>
              <div className="flex  justify-end">
                <input
                  type="text"
                  value={tuna}
                  onChange={(e) => {
                    setTuna(e.target.value)
                  }}
                  maxLength={12}
                  className="text-white text-right bg-transparent border-none focus:border-none text-[30px] w-[70%]   font-semibold" />
              </div>
            </div>

            {/* Cardano */}
            <div className="flex justify-between">
              <p className="text-[#88919e] text-base font-medium">TUNA</p>
              <p className="text-[#88919e] text-base  font-normal"> ~$0.00</p>
            </div>
          </div>

        </div>
        <div
          onClick={handleSwapDown}

          className="absolute bg-[#142028] border-[1px] border-yellow-300 top-[calc(50%-10px)] left-1/2 cursor-pointer p-2 rounded-full">
          <SVG.SwapDown />
        </div>

      </div>
    </>
  )
}

export default ChartCardGroup