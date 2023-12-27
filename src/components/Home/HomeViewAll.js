import { useState, useEffect } from "react";
import * as SVG from "../../common/Icons";

const HomeViewAll = () => {
  const [menu, setMenu] = useState("");
  const [isMarket, setIsMarket] = useState(true)
  const [isPro, setIsPro] = useState(false);
  const [isGainer, setIsGainer] = useState(false)
  const [isLoser, setIsLoser] = useState(false)
  const [isRecent, setIsRecent] = useState(false)
  const [isView, setIsView] = useState(false)

  const [stroke, setStroke] = useState(true)

  const handleMarket = () => {
    setIsMarket(true);
    setIsPro(false);
    setIsGainer(false);
    setIsLoser(false);
    setIsRecent(false);
    setIsView(false);
  }
  const handlePro = () => {
    setIsMarket(false);
    setIsPro(true);
    setIsGainer(false);
    setIsLoser(false);
    setIsRecent(false);
    setIsView(false);
  }
  const handleGainer = () => {
    setIsMarket(false);
    setIsPro(false);
    setIsGainer(true);
    setIsLoser(false);
    setIsRecent(false);
    setIsView(false);
  }
  const handleLoser = () => {
    setIsMarket(false);
    setIsPro(false);
    setIsGainer(false);
    setIsLoser(true);
    setIsRecent(false);
    setIsView(false);
  }
  const handleRecent = () => {
    setIsMarket(false);
    setIsPro(false);
    setIsGainer(false);
    setIsLoser(false);
    setIsRecent(true);
    setIsView(false);
  }
  const handleView = () => {
    setIsMarket(false);
    setIsPro(false);
    setIsGainer(false);
    setIsLoser(false);
    setIsRecent(false);
    setIsView(true);
  }
  useEffect(() => {
    var current = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
    setMenu(current)
  }, [window.location.pathname.substring(window.location.pathname.lastIndexOf('/' + 1))])

  return (
    <>
      <div
        className="flex justify-between items-center bg-[#142028] rounded-lg lg:w-[750px] w-fit lg:h-8 h-fit mt-2 lg:ml-3">
        {/* Top */}
        <span
          onClick={handleMarket}
          id="top"
          className={`flex items-center justify-center duration-300 cursor-pointer lg:px-4 px-2 lg:py-2 py-1 lg:text-[13px] text-xs text-[#939393]  lg:h-8 h-fit hover:text-[#fff] ${isMarket ? "text-white rounded-lg bg-[#3a4956]" : ""} `}>
          <div className="lg:w-4 w-3 lg:h-4 h-3 flex items-center mr-2">
            <SVG.Top /></div>
          <p className="mr-1">Top</p>50
        </span>
        {/* Trending */}
        <span
          onClick={handlePro}
          id="trending"
          className={` flex items-center justify-center text-[13px] text-[#939393] lg:px-4 px-2 lg:py-2 py-1 duration-300 cursor-pointer   w-full  lg:h-8 hover:text-[#fff] ${isPro ? "text-white rounded-lg bg-[#3a4956]" : ""}`}>
          <div className="lg:w-4 w-3 lg:h-4 h-3 flex items-center mr-2">
            <SVG.HotWallets /></div>
          <div className="flex items-center">Trendig</div>
        </span>
        {/* Top Gainers */}
        <span
          onClick={handleGainer}
          id="gainer"
          className={` sm:flex hidden sm:items-center justify-center text-[13px] text-[#939393] lg:px-4 px-2 lg:py-2 py-1 duration-300 cursor-pointer   lg:w-full w-fit lg:h-8 h-fit hover:text-[#fff] ${isGainer ? "text-white rounded-lg bg-[#3a4956]" : ""}`}>
          <div className="lg:w-4 w-3 lg:h-4 h-3 flex items-center mr-2 text-[#939393] ">
            <SVG.GoUp stroke={stroke} /></div>
          <div className="flex items-center">TopGainers</div>
        </span>
        {/* Top Losers */}
        <span
          onClick={handleLoser}
          id="loser"
          className={` sm:flex hidden sm:items-center lg:text-[13px] text-xs text-[#939393] lg:px-4 px-2 lg:py-2 py-1 duration-300 cursor-pointer   lg:w-full w-fit  lg:h-8 h-fit hover:text-[#fff] ${isLoser ? "text-white rounded-lg bg-[#3a4956]" : ""}`}>
          <div className="lg:w-4 w-3 lg:h-4 h-3 flex items-center mr-2">
            <SVG.GoDown stroke={stroke} /></div>
          <div className="flex items-center">TopLosers</div>
        </span>
        {/* Recently Added */}
        <span
          onClick={handleRecent}
          id="recent"
          className={` sm:flex hidden sm:items-center justify-center duration-300 cursor-pointer lg:px-4 px-2 lg:py-2 py-1 lg:text-[13px] text-xs text-[#939393]  lg:h-8 h-fit hover:text-[#fff] ${isRecent ? "text-white rounded-lg bg-[#3a4956]" : ""}`}>
          <div className="w-4 h-4 flex items-center mr-2">
            <SVG.Clock /></div>
          <div className="flex items-center">RecentlyAdded</div>
        </span>
        {/* View All */}
        <span
          onClick={handleView}
          id="view"
          className={`flex items-center justify-center duration-300 cursor-pointer lg:px-4 px-2 lg:py-2 py-1 lg:text-[13px] text-xs text-[#939393]  lg:h-8 h-fit hover:text-[#fff] ${isView ? "text-white rounded-lg bg-[#3a4956]" : ""}`}>
          <div className="w-4 h-4 flex items-center mr-2">
            →</div>
          <div className="flex items-center">ViewAll</div>
        </span>
      </div>
    </>
  )
}
export default HomeViewAll;