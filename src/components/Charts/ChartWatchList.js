import { useState } from "react";
import * as SVG from "../../common/Icons";
import "simplebar-react/dist/simplebar.min.css";
import ChartTopGainers from "./ChartTopGainers";
import ChartTopLosers from "./ChartTopLosers";
import ChartWatchListButton from "./ChartWatchListButton";
import ChartTop25 from "./ChartTop25";
import ChartTopTrending from "./ChartTopTrending";
const ChartWatchList = () => {

  const [isTitle, setIsTitle] = useState("WatchList")
  const data = [
    {
      id: 0,
      name: "WatchList",
      active: true,
    },
    {
      id: 1,
      name: "Top Gainers",
      active: false,
    }
    , {
      id: 2,
      name: "Top Losers",
      active: false,
    },
    {
      id: 3,
      name: "Top Trending",
      active: false,
    },
    {
      id: 4,
      name: "Top25",
      active: false,
    }
  ]
  const [menuItems, setMenuItems] = useState(data);
  const [isActive, setIsActive] = useState(false);
  const [isActiveMore, setIsActiveMore] = useState(false);

  const handleMouseClick = () => {
    setIsActiveMore(!isActiveMore);
  }
  const handleClick = (_idx) => {
    const newMenuItem = menuItems.map((item, idx) => {

      if (_idx === idx) {
        item.active = true;
        setIsTitle(item.name);
        setIsActiveMore(!isActiveMore);
      }
      else {
        item.active = false
      }
      return item
    });

    setMenuItems(newMenuItem)
  }
  return (

    <div className="flex flex-col  rounded-2xl px-3 bg-[#142028] mt-4 ">
      <div className="flex items-center h-full w-full  justify-between border-b-2 border-b-solid border-b-[#0b1217]">
        {/* chart position*/}

        <div className="flex  p-3 gap-4 items-center">
          {isTitle === "WatchList" && <SVG.WatchList />}
          {isTitle === "Top Gainers" && <SVG.SwapTopGainers />}
          {isTitle === "Top Losers" && <SVG.SwapTopLosers />}
          {isTitle === "Top Trending" && <SVG.HotWallets />}
          {isTitle === "Top25" && <SVG.Top />}
          <p className="text-white lg:text-xl sm:text-base text-sm font-normal"> {isTitle}</p>
          <p className="text-white text-xl font-normal cursor-pointer">❯</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center cursor-pointer relative">
            <div
              onClick={handleMouseClick}
              className="">
              <SVG.More menu={isActiveMore} />
            </div>
            <div className={`absolute top-[20px] left-[-100px] flex flex-col bg-[#0b1217] opacity-70 rounded-xl overflow-x-hidden overflow-y-auto w-[130px] transition-all duration-300 origin-top z-10
                ${isActiveMore ? "scale-y-1 opacity-100" : "scale-y-0 opacity-0"} `}>
              {data.map((item, index) => {
                return (
                  <ChartWatchListButton key={index} item={item} handleClick={handleClick} />)
              })}
              <div className={`flex items-center py-1 px-4 ${isActive ? "bg-[#363645]" : ""}`}>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isTitle === "WatchList" && <div className="flex justify-center items-center py-5">
        <p className="text-white lg:text-base sm:text-sm text-xs ">No  Tokens</p>
      </div>}
      {isTitle === "Top Gainers" && <ChartTopGainers />}
      {isTitle === "Top Losers" && <ChartTopLosers />}
      {isTitle === "Top25" && <ChartTop25 />}
      {isTitle === "Top Trending" && <ChartTopTrending />}


    </div>
  )
}

export default ChartWatchList 