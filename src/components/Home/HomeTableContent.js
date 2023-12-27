import * as SVG from "../../common/Icons";
import { useState } from "react";

const HomeTableContent = (props) => {
  const HomeData = props.props;


  return (
    <div
    className={`cursor-pointer h-full w-full pt-3 overflow-x-hidden  hover:bg-[#3a4956] hover:bg-opacity-60 hover:rounded-lg`}>
      <div className="flex  px-2 mb-3  w-full">
        <div className="flex items-center xl:w-1/5 w-3/5">
          <div className="flex w-3 h-3 items-center justify-center sm:text-sm text-xs" >
            <SVG.WatchList />
          </div>
          <div className="text-white font-semibold flex justify-center items-center ml-4 sm:text-sm text-xs">{HomeData?.id}</div>
          <img src={HomeData?.image} className="xl:w-8 sm:w-7 w-6 xl:h-8 sm:h-7 h-6 ml-5 rounded-full" alt="taptool" />

          <div className="text-white font-normal  flex justify-center items-center ml-4 sm:text-sm text-xs">{HomeData?.name}</div>
        </div>
        {/* Price */}
        <div className="flex flex-col items-end xl:w-[7%] sm:w-[10%] w-[20%]">
          <div className="text-white font-normal sm:text-sm text-xs">{HomeData?.price1}</div>
          <div className="font-normal text-xs text-[#939393] ">{HomeData?.price2}</div>
        </div>
        {/* 24hr */}
        <div
          className={`flex items-center  justify-end cursor-pointer transition-all duration-300 xl:w-[7%] sm:w-[10%] w-[20%]`}>
          <SVG.GoDown />
          <p className="text-[#ff422b] sm:text-sm text-xs ">{HomeData?.percent1}</p>
        </div>
        {/* 7 days */}
        <div
          className={`sm:flex sm:items-center hidden justify-end cursor-pointer transition-all duration-300 xl:w-[7%] sm:w-[10%] `}
        >
          <SVG.GoDown />
          <p className="text-[#ff422b] text-sm ">{HomeData?.percent2}</p>
        </div>
        {/* 30days */}
        <div
          className={`sm:flex sm:items-center hidden justify-end cursor-pointer  transition-all duration-300 xl:w-[7%] w-[10%] `}>
          <SVG.GoUp />
          <p className="text-[#20eb7a] text-sm">{HomeData?.percent3}</p>
        </div>
        {/* MarketCap */}
        <div
          className={`xl:flex xl:items-center hidden justify-end transition-all duration-300 cursor-pointer  w-[12%]  gap-2 `}>
          <div className="flex flex-col items-end">
            <div className="text-white font-normal flex justify-center items-center ">{HomeData?.marketCap1} </div>
            <div className="text-[#939393] text-xs flex justify-center items-center ">{HomeData?.marketCap2} </div>
          </div>

        </div>
        {/* Volume */}
        <div
          id="volume"
          className={`xl:flex xl:items-center hidden justify-end  cursor-pointer transition-all duration-300  w-[12%] gap-2 `}>
          <div className="flex flex-col items-end">
            <div className="text-white font-normal flex justify-center items-center ">{HomeData?.volume} </div>
            <SVG.Progress />
          </div>
        </div>
        {/* Liquid */}
        <div
          className={`xl:flex xl:items-center hidden  justify-end cursor-pointer  transition-all duration-300 w-[12%] gap-2`}>
          
          <div className="flex flex-col items-end">
            <div className="text-white font-normal flex justify-center items-center ">{HomeData?.Liquidity} </div>
            <SVG.Progress />
          </div>
        </div>
        <div className="xl:flex xl:items-center hidden justify-end   gap-2 w-1/5">
          <div className="text-white font-normal flex justify-center items-center "><SVG.Graphic/> </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#232323]"></div>
    </div>
  )
}
export default HomeTableContent;