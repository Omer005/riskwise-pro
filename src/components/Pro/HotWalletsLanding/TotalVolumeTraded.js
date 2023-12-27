import { useState } from "react";
import { useSelector } from "react-redux";
import { TotalVolumeTradedData } from "../LandingData/TotalVolumeTraded";
import { Info, UpDown, Star, Right } from "../../../common/Icons";
import Pagination from "../HotWalletsLanding/Pagination";

const TotalVolumeTraded = () => {
  const [totalVolumeTradedData, setTotalVolumeTradedData] = useState(
    TotalVolumeTradedData
  );
  const [totalVolumeTradedDataItems, setTotalVolumeTradedDataItems] = useState(
    totalVolumeTradedData.ItemValue
  );

  const { isDollar } = useSelector((state) => state.wallet);

  const [sortByDay, setSortByDay] = useState(false);
  const [sortByWeek, setSortByWeek] = useState(false);
  const [sortByMonth, setSortByMonth] = useState(false);
  const [sortByAll, setSortByAll] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  const handleSortByDay = () => {
    setSortByDay(!sortByDay);
    setIsSelected("24h");
    // TODO API
  };

  const handleSortByWeek = () => {
    setSortByWeek(!sortByWeek);
    setIsSelected("7d");
    // TODO API
  };

  const handleSortByMonth = () => {
    setSortByMonth(!sortByMonth);
    setIsSelected("30d");
    // TODO API
  };

  const handleSortByAll = () => {
    setSortByAll(!sortByAll);
    setIsSelected("all");
    // TODO API
  };

  const handleLike = (_idx, e) => {
    e.stopPropagation();
    const newTotalVolumeTradedData = totalVolumeTradedDataItems.map(
      (item, idx) => {
        if (item.id === _idx) item.like = !item.like;
        return item;
      }
    );
    setTotalVolumeTradedDataItems(newTotalVolumeTradedData);
    //  TODO API
  };

  return (
    <>
      <div className="relative flex-col justify-center w-full h-full overflow-x-auto hideScrollbar bg-[#142028] p-4 rounded-2xl">
        <div className="min-w-[1300px] mt-6">
          <ul className="flex justify-between text-sm font-semibold text-white border-b-[1px] border-[#232323] bg-[#142028] py-[2px]">
            <li className="sticky left-0 bg-[#142028] w-[16%] flex items-center justify-start gap-2 p-2">
              <Star.StartOutline />
              <span className="whitespace-nowrap">Address</span>
            </li>
            <li
              className={`w-[14%] flex items-center justify-start gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "24h" && "-translate-y-1"
              }`}
              onClick={handleSortByDay}
            >
              <span className="whitespace-nowrap">Vol 24h</span>
              <UpDown rotate={sortByDay} active={isSelected === "24h"} />
            </li>
            <li
              className={`w-[14%] flex items-center justify-start gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "7d" && "-translate-y-1"
              }`}
              onClick={handleSortByWeek}
            >
              <span className="whitespace-nowrap">Vol 7d</span>
              <UpDown rotate={sortByWeek} active={isSelected === "7d"} />
            </li>
            <li
              className={`w-[14%] flex items-center justify-start gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "30d" && "-translate-y-1"
              }`}
              onClick={handleSortByMonth}
            >
              <span className="whitespace-nowrap">Vol 30d</span>
              <UpDown rotate={sortByMonth} active={isSelected === "30d"} />
            </li>
            <li
              className={`w-[14%] flex items-center justify-start gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "all" && "-translate-y-1"
              }`}
              onClick={handleSortByAll}
            >
              <span className="whitespace-nowrap">Total Vol</span>
              <UpDown rotate={sortByAll} active={isSelected === "all"} />
            </li>
            <li className="w-[14%] flex items-center justify-start gap-2 p-2">
              <span className="whitespace-nowrap">Top Traded</span>
              <Info />
            </li>
            <li className="w-[14%] flex items-center justify-end gap-2 p-2">
              <span className="whitespace-nowrap">Wallet Profiler</span>
              <Info />
            </li>
          </ul>
          <div className="min-w-[1300px]">
            {totalVolumeTradedDataItems.map((item, idx) => (
              <ul
                key={idx}
                onClick={() => window.open(item.walletprofiler.url, "_blank")}
                className="flex justify-between font-normal text-white text-xs border-b-[1px] border-[#232323] hover:bg-[#3a4956] cursor-pointer whitespace-nowrap truncate bg-[#142028]"
              >
                <li className="sticky left-0 bg-[#142028] shadow-lg w-[16%] flex items-center justify-start gap-2 p-2 z-30">
                  <div onClick={(e) => handleLike(item.id, e)}>
                    {item.like ? <Star.StarFill /> : <Star.StartOutline />}
                  </div>
                  <span className="w-full truncate">{item.address}</span>
                </li>
                <li className="w-[14%] flex items-center p-2">
                  <div className="w-1/2">
                    {isDollar
                      ? `$ ${Math.floor(
                          item.vol24h / 2.633475
                        ).toLocaleString()}`
                      : `₳ ${item.vol24h.toLocaleString()}`}
                  </div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    {item.vol24h > 0 && (
                      <div
                        className="h-1 bg-yellow-400 rounded-3xl absolute"
                        style={{
                          width: `${Math.floor(
                            (item.vol24h * 100) /
                              totalVolumeTradedData.maxvol24h
                          )}%`,
                        }}
                      ></div>
                    )}
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[14%] flex items-center gap-1 p-2">
                  <div className="w-1/2">
                    {isDollar
                      ? `$ ${Math.floor(
                          item.vol7d / 2.633475
                        ).toLocaleString()}`
                      : `₳ ${item.vol7d.toLocaleString()}`}
                  </div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    {item.vol7d > 0 && (
                      <div
                        className="h-1 bg-yellow-400 rounded-3xl absolute"
                        style={{
                          width: `${Math.floor(
                            (item.vol7d * 100) / totalVolumeTradedData.maxvol7d
                          )}%`,
                        }}
                      ></div>
                    )}
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[14%] flex items-center gap-1 p-2">
                  <div className="w-1/2">
                    {isDollar
                      ? `$ ${Math.floor(
                          item.vol30d / 2.633475
                        ).toLocaleString()}`
                      : `₳ ${item.vol30d.toLocaleString()}`}
                  </div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    {item.vol30d > 0 && (
                      <div
                        className="h-1 bg-yellow-400 rounded-3xl absolute"
                        style={{
                          width: `${Math.floor(
                            (item.vol30d * 100) /
                              totalVolumeTradedData.maxvol30d
                          )}%`,
                        }}
                      ></div>
                    )}
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[14%] flex items-center gap-3 p-2">
                  <div className="w-1/2">
                    {isDollar
                      ? `$ ${Math.floor(
                          item.volall / 2.633475
                        ).toLocaleString()}`
                      : `₳ ${item.volall.toLocaleString()}`}
                  </div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    {item.volall > 0 && (
                      <div
                        className="h-1 bg-yellow-400 rounded-3xl absolute"
                        style={{
                          width: `${Math.floor(
                            (item.volall * 100) /
                              totalVolumeTradedData.maxvolall
                          )}%`,
                        }}
                      ></div>
                    )}
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>

                <li className="w-[14%] flex items-center justify-start p-2">
                  <div className="w-full whitespace-nowrap overflow-x-scroll scrollable-invisible">
                    <div className="flex">
                      {item.toptraded.map((subitem, subidx) => (
                        <p
                          key={subidx}
                          className="border-dashed border-b-[1px] mx-[2px]"
                          onClick={() => window.open(subitem.url, "_blank")}
                        >
                          {subitem.name}
                          {subidx < item.toptraded.length - 1 && ","}
                        </p>
                      ))}
                    </div>
                  </div>
                </li>
                <div className="w-[14%] flex items-center justify-end p-2 ">
                  <div className="flex gap-3 bg-[#192028] bg-opacity-70 rounded-md px-2 py-1">
                    {item.walletprofiler.avatar}
                    <Right />
                  </div>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <Pagination number={totalVolumeTradedData.totaldatanumber} />
    </>
  );
};

export default TotalVolumeTraded;
