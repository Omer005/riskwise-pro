import { useState } from "react";

const HomeMarketButton = () => {
  const [isMarket, setIsMarket] = useState(true)
  const [isPro, setIsPro] = useState(false);
  const handleMarket = () => {
    setIsMarket(true);
    setIsPro(false);
  }
  const handlePro = () => {
    setIsMarket(false);
    setIsPro(true);
  }
  return (
    <>
      <div
        className="flex justify-center items-center bg-[#142028] rounded-xl  h-fit mt-2">
        <span
          onClick={handleMarket}
          id="market"
          className={`flex items-center duration-300 cursor-pointer lg:px-4 px-2 lg:py-1 py-1  text-[#939393] lg:text-sm text-xs  lg:h-8 hover:text-[#fff] ${isMarket ? "text-white rounded-lg bg-[#3a4956]" : ""} `}>Tokens
        </span>
        <span
          onClick={handlePro}
          id="pro"
          className={`flex items-center duration-300 cursor-pointer  lg:px-4 px-2 lg:py-1 py-1 text-[#939393]   lg:text-sm text-xs justify-center  hover:text-[#fff] ${isPro ? "text-white rounded-lg bg-[#3a4956]" : ""}`}>NFTs
        </span>
      </div>
    </>
  )
}
export default HomeMarketButton;