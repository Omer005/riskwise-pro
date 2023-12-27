import * as SVG from "../../common/Icons";
import { useState } from "react";
const HomeTableHeader = () => {

  const [rotation, setRotation] = useState(false);
  const [rotationd, setRotationd] = useState(false);
  const [rotationm, setRotationm] = useState(false);
  const [rotationMarket, setRotationMarket] = useState(false);
  const [rotationVolume, setRotationVolume] = useState(false);
  const [rotationLiquidity, setRotationLiquidity] = useState(false);

  const rotateComponent = () => setRotation(!rotation);
  const rotatedComponent = () => setRotationd(!rotationd);
  const rotatemComponent = () => setRotationm(!rotationm);
  const rotateMarketComponent = () => setRotationMarket(!rotationMarket)
  const rotateVloumeComponent = () => setRotationVolume(!rotationVolume)
  const rotateLiquidityComponent = () => setRotationLiquidity(!rotationLiquidity);

  return (
    <div>
      <div className="flex mt-3 px-2  w-full">
        <div className="flex items-center xl:w-1/5 w-3/5  ">
          <div className="flex w-3 h-3 items-center justify-center" >
            <SVG.WatchList />
          </div>
          <div className="text-white font-semibold flex justify-center items-center ml-4 sm:text-sm text-xs">#</div>
          <div className="text-white font-normal flex justify-center items-center ml-4 sm:text-sm text-xs">Name</div>
        </div>
        {/* Price */}
        <div className="flex items-center justify-end xl:w-[7%] sm:w-[10%] w-[20%]">
          <div className="text-white font-normal flex justify-center items-center ml-4 sm:text-sm text-xs">Price</div>
        </div>
        {/* 24hr */}
        <div
          id="24h"
          onClick={rotateComponent}
          className={`flex items-center  justify-end cursor-pointer transition-all duration-300 hover:mt-[-8px] xl:w-[7%] sm:w-[10%] w-[20%]`}>
          <div className="text-white font-normal sm:text-sm text-xs">24h </div>
          <div
            className={`text-white font-normal ml-1 transition-all duration-300 ${rotation ? " rotate-180" : ""}`}><SVG.Arrow /> </div>
        </div>
        {/* 7 days */}
        <div
          onClick={rotatedComponent}
          id="7d"
          className={`sm:flex sm:items-center hidden justify-end cursor-pointer transition-all duration-300 xl:w-[7%] sm:w-[10%] w-0 hover:mt-[-8px]`}
        >
          <div className="text-white font-normal flex justify-center items-center sm:text-sm text-xs">7d </div>
          <div
            className={`text-white font-normal flex justify-center items-center ml-1 transition-all duration-300 ${rotationd ? " rotate-180" : ""}`}><SVG.Arrow /> </div>
        </div>
        {/* 30days */}
        <div
          onClick={rotatemComponent}
          id="30d"
          className={`sm:flex sm:items-center hidden justify-end cursor-pointer  transition-all duration-300 xl:w-[7%] sm:w-[10%] w-0 hover:mt-[-8px]`}>
          <div className="text-white font-normal flex justify-center items-center sm:text-sm text-xs">30d </div>
          <div className={`text-white font-normal flex justify-center items-center ml-1 transition-all duration-300 ${rotationm ? " rotate-180" : ""}`}><SVG.Arrow /> </div>
        </div>

        {/* MarketCap */}
        <div
          onClick={rotateMarketComponent}
          id="marketCap"
          className={`xl:flex xl:items-center hidden justify-end transition-all duration-300 cursor-pointer  w-[12%]  gap-2 hover:mt-[-8px]`}>
          <div className="text-white font-normal flex justify-center items-center ">MarketCap </div>
          <div className="text-white font-normal flex justify-center items-center "><SVG.Alert /> </div>
          <div className={`text-white font-normal flex justify-center items-center ml-1 transition-all duration-300 ${rotationMarket ? " rotate-180" : ""}`}><SVG.Arrow /> </div>
        </div>
        {/* Volume */}
        <div
          onClick={rotateVloumeComponent}
          id="volume"
          className={`xl:flex xl:items-center hidden justify-end  cursor-pointer transition-all duration-300  w-[12%] gap-2 hover:mt-[-8px]`}>
          <div className="text-white font-normal flex justify-center items-center ">Volume </div>
          <div className="text-white font-normal flex justify-center items-center "><SVG.Alert /> </div>
          <div className={`text-white font-normal flex justify-center items-center ml-1 transition-all duration-300  ${rotationVolume ? " rotate-180" : ""}`}><SVG.Arrow /> </div>
        </div>
        {/* Liquid */}
        <div
          onClick={rotateLiquidityComponent}
          id="liquididy"
          className={`xl:flex xl:items-center hidden  justify-end cursor-pointer  transition-all duration-300 w-[12%] gap-2 hover:mt-[-8px]  `}>
          <div className="text-white font-normal flex justify-center items-center ">Liquidity </div>
          <div className="text-white font-normal flex justify-center items-center "><SVG.Alert /> </div>
          <div className={`text-white font-normal flex justify-center items-center ml-1 transition-all duration-300  ${rotationLiquidity ? " rotate-180" : ""}`}><SVG.Arrow /> </div>

        </div>
        <div className="xl:flex xl:items-center hidden justify-end   gap-2 w-1/5">
          <div className="text-white font-normal flex justify-center items-center ">Last 7 Days </div>
        </div>
      </div>
      <div className="w-full h-[1px] mt-2 bg-[#232323]"></div>
    </div>
  )
}
export default HomeTableHeader;