import * as SVG from "../../common/Icons";
import * as IMG from "../../common/IMG/Images";
import { useState } from "react";
import { PuffLoader } from 'react-spinners';
import useMedia from "../../common/mediaQuery";
import Logo1 from "../../common/Logo/logo1";
const ChartTableHeader = () => {
  const [rotation, setRotation] = useState(false);
  const [rotationMarket, setRotationMarket] = useState(false);
  const [rotationVolume, setRotationVolume] = useState(false);
  const [rotationLiquidity, setRotationLiquidity] = useState(false);
  const [isActiveWalletProfiler, setIsActiceWalletProfiler] = useState(false)
  const handleMouseEnter = () => {  
    setIsActiceWalletProfiler(true)
  }
  const handleMouseLeave = () => {
    setIsActiceWalletProfiler(false)
  }
  const rotateComponent = () => setRotation(!rotation);
  const rotateMarketComponent = () => setRotationMarket(!rotationMarket)
  const rotateVloumeComponent = () => setRotationVolume(!rotationVolume)
  const rotateLiquidityComponent = () => setRotationLiquidity(!rotationLiquidity);
  const usemedia = useMedia();
  const xsmall = usemedia.useXSmall;

  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <div className="flex">
          <div className="flex text-white lg:text-lg sm:text-base text-sm font-medium">Trade History</div>
          <div className="flex relative items-center px-2 justify-center gap-1 bg-[#142028] rounded-xl ml-4">
            <div className="flex  relative ">
              <PuffLoader
                size={18}
                color="yellow"
              />
            </div>
            <p className="text-white text-[14px]">LIVE</p>
          </div>
        </div>
        <div >
          <p className="max-sm:hidden text-white lg:text-base xs:text-sm   font-normal">LENFI<span>{"(last 507 trades)"}</span></p>
        </div>

      </div>
      <div className="flex mt-6 px-2  w-full">
        {/* Date */}
        <div
          id="24h"
          onClick={rotateComponent}
          className={`flex items-center  justify-start lg:w-[180px] w-1/5 cursor-pointer transition-all duration-300 hover:mt-[-8px] `}>
          <div className="sm:text-sm text-xs text-white font-normal ">Date </div>
          <div
            className={`text-white font-normal ml-1 transition-all duration-300 ${rotation ? " rotate-180" : ""}`}><SVG.Arrow /> </div>
        </div>
        {/* Type */}
        <div className="lg:flex items-center justify-end lg:w-[7%] hidden">
          <div className="sm:text-sm text-white font-normal flex justify-center items-center ml-4">Type</div>
        </div>
        {/* Price */}
        <div className="flex items-center justify-end lg:w-[12%] w-1/5">
          <div className="sm:text-sm text-xs text-white font-normal flex justify-center items-center ml-4">Price </div>
        </div>
        {/* Total LENFI && Total EUR*/}
        {xsmall ?
          (
            <>
              <div
                onClick={rotateMarketComponent}
                className={`flex items-center justify-end transition-all duration-300 cursor-pointer  lg:w-[35%] w-1/5  gap-2 hover:mt-[-8px]`}>
                <div className="sm:text-sm text-xs text-white font-normal flex justify-center items-center ">Total LENFI </div>
                <div className={`text-white font-normal lg:flex lg:justify-center lg:items-center hidden ml-1 transition-all duration-300 ${rotationMarket ? " rotate-180" : ""}`}><SVG.Arrow /> </div>
              </div>
              <div
                onClick={rotateVloumeComponent}
                id="volume"
                className={`flex items-center justify-end  cursor-pointer transition-all duration-300  lg:w-[35%] w-1/5 gap-2 hover:mt-[-8px]`}>
                <div className="sm:text-sm text-xs text-white font-normal flex justify-center items-center ">Total EUR  </div>
                <div className={`text-white font-normal lg:flex lg:justify-center lg:items-center hidden ml-1 transition-all duration-300  ${rotationVolume ? " rotate-180" : ""}`}><SVG.Arrow /> </div>
              </div>
            </>

          ) : (
            <div
              onClick={rotateMarketComponent}
              className={`flex items-center justify-end transition-all duration-300 cursor-pointer  lg:w-[35%] w-[30%]  gap-2 hover:mt-[-8px]`}>
              <div className="sm:text-sm text-xs text-white font-normal flex justify-center items-center ">LENFI/EUR </div>
              <div className={`text-white font-normal lg:flex lg:justify-center lg:items-center hidden ml-1 transition-all duration-300 ${rotationMarket ? " rotate-180" : ""}`}><SVG.Arrow /> </div>
            </div>)}
        {/* Wallet Profiler */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={rotateLiquidityComponent}
          id="liquididy"
          className={`flex items-center  justify-end cursor-pointer  transition-all duration-300 lg:w-[20%] xs:w-1/5 w-[30%] gap-2 relative `}>
          <div className="sm:text-sm text-xs text-white font-normal inline-block items-center ">Wallet Profiler </div>
          <div className="text-white font-normal lg:flex lg:justify-center lg:items-center hidden"><SVG.Alert /> </div>
          {isActiveWalletProfiler ? (<div
            className={`absolute transition-all duration-300 transform top-7 z-50 w-[220px]  flex flex-col gap-1 p-2 rounded-lg bg-[#142028]`}>
            <div className="flex justify-start  items-center px-5 gap-4 py-1  w-full bg-[#3a4956] rounded-lg">
              <SVG.OverM />
              <span className="text-white text-sm ">0K₳-5K₳</span>
            </div>
            <span className="flex justify-start px-5 gap-4 py-1  w-full bg-[#3a4956] rounded-lg">
              <SVG.Price2 />
              <span className="text-white text-sm ">5K₳-25K₳</span>
            </span>
            <span className="flex justify-start px-5 gap-4 py-1  w-full bg-[#3a4956] rounded-lg">
              <SVG.Price3 />
              <span className="text-white text-sm ">25K₳-100K₳</span>
            </span>
            <span className="flex justify-start px-5 gap-4 py-1  w-full bg-[#3a4956] rounded-lg">
              <SVG.Price4 />
              <span className="text-white text-sm ">100K₳-250K₳</span>
            </span>
            <span className="flex justify-start px-5 gap-4 py-1  w-full bg-[#3a4956] rounded-lg">
              <SVG.Price5 />
              <span className="text-white text-sm ">250K₳-1M₳</span>
            </span>
            <span className="flex justify-start px-5 gap-4 py-1  w-full bg-[#3a4956] rounded-lg">
              <SVG.Price6 />
              <span className="text-white text-sm ">1M₳+₳</span>
            </span>
          </div>) : ("")}
        </div>
      </div>
      <div className="w-full h-[1px] mt-2 bg-[#232323]"></div>
    </div>
  )
}
export default ChartTableHeader;