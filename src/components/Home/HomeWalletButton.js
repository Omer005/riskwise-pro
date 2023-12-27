import { useState, useEffect } from "react";
import * as SVG from "../../common/Icons";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const HomeWalletButton = () => {
  const [menu, setMenu] = useState("");
  const [isMarket, setIsMarket] = useState(false)
  const [isPro, setIsPro] = useState(false);

  const handleMarket = () => {
    setIsMarket(true);
    setIsPro(false);
  }
  const handlePro = () => {
    setIsMarket(false);
    setIsPro(true);
  }
  useEffect(() => {
    var current = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
    setMenu(current)
  }, [window.location.pathname.substring(window.location.pathname.lastIndexOf('/' + 1))])


  return (
    <>
      <div
        className="flex justify-between items-center bg-[#142028] rounded-lg lg:w-72 w-fit lg:h-8 h-fit mt-2 ml-3">
        <span
          onClick={handleMarket}
          id="watch"
          className={`flex items-center justify-center duration-300 cursor-pointer lg:px-4 px-2 lg:py-2 py-1 lg:text-[13px] text-xs text-[#939393]  lg:h-8 h-fit hover:text-[#fff] ${isMarket ? "text-white rounded-lg bg-[#3a4956]" : ""} `}>
          <div className="lg:w-4 w-3 lg:h-4 h-3 flex items-center mr-2">
            <AutoAwesomeOutlinedIcon fontSize="small" />
          </div>
          HotList
        </span>
        <span
          onClick={handlePro}
          id="wallet"
          className={`flex items-center  duration-300 cursor-pointer  lg:px-4 pl-2 pr-0 lg:py-2 py-1 lg:w-full w-fit text-[#939393] lg:text-[13px] text-xs  justify-center lg:h-8 h-fit hover:text-[#fff] ${isPro ? "text-white rounded-lg bg-[#3a4956]" : ""}`}>
          <div className="lg:w-4 w-3 lg:h-4 h-3 flex items-center mr-2">
            <AutoAwesomeOutlinedIcon fontSize="small" />
          </div>
          WalletHotList
          <p className="text-yellow-400 font-medium lg:text-[8px] text-opacity-0 ml-1">PRO</p>
        </span>
      </div>
    </>
  )
}
export default HomeWalletButton;