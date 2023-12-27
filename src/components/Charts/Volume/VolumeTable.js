import { useState } from "react";
import { VolumeDatas } from "./VolumeDatas";
import { Info, UpDown, Star, Right } from "../../../common/Icons";
import Pagination from "../../Pro/HotWalletsLanding/Pagination";
import Box from '@mui/material/Box';
import LineartextDecorationColor from "@mui/material/LinearProgress"
const VolumeTable = () => {
  const [tokenTransactionData, setTokenTransactionData] =
    useState(VolumeDatas);
  const [tokenTransactionDataItems, setTokenTransactionDataItems] = useState(
    VolumeDatas.ItemValue
  );
  const [sortByTotalVolume, setSortByTotalVolume] = useState(false);
  const [sortByBuyVolume, setSortByBuyVolume] = useState(false);
  const [sortBySellVolume, setSortBySellVolume] = useState(false);
  const [sortByNetVolume, setSortByNetVolume] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const [isActive, setIsActive] = useState(false)


  const handleSortByTotal = () => {
    setSortByTotalVolume(!sortByTotalVolume);
    setIsSelected("totalVolume");
    // TODO API
  };
  const handleSortByBuy = () => {
    setSortByBuyVolume(!sortByBuyVolume);
    setIsSelected("buyVolume");
    // TODO API
  };
  const handleSortBySell = () => {
    setSortBySellVolume(!sortBySellVolume);
    setIsSelected("sellVolume");
    // TODO API
  };
  const handleSortByNet = () => {
    setSortByNetVolume(!sortByNetVolume);
    setIsSelected("netVolume");
    // TODO API
  };

  const handleLike = (_idx, e) => {
    e.stopPropagation();
    const newTokenTransactionData = tokenTransactionDataItems.map(
      (item, idx) => {
        if (item.id === _idx) item.like = !item.like;
        return item;
      }
    );
    setTokenTransactionDataItems(newTokenTransactionData);
    //  TODO API
  };
  const handleActive = (_idx) => {
    const newData = VolumeDatas.ItemValue?.map((item, idx) => {
      if (idx === _idx) {
        item.type = !item.type;
      }
      else { item.type = false; }
      return item
    })
    setTokenTransactionData(newData);

  }
  return (
    <>
      <div className=" flex-col relative z-0 justify-center w-full h-full overflow-x-auto hideScrollbar bg-[#142028] opacity-80 p-4 rounded-2xl">
        <div className="min-w-[1300px] mt-6 ">
          <ul className="flex justify-between text-sm font-semibold text-white border-b-[1px] border-[#232323] py-[2px]">
            <li className="sticky left-0   w-[11%] flex items-center justify-start gap-2 p-2">
              <span className="whitespace-nowrap">Address</span>
            </li>
            <li
              className={`w-[12%] flex items-center justify-end gap-1 p-2  `}
            >
              <span className="whitespace-nowrap">Balance{"(₳)"}</span>
            </li>
            <li
              onClick={handleSortByTotal}
              className="w-[12%] flex items-center justify-end p-2 cursor-pointer hover:-translate-y-[2px] duration-200 transition-all transform">
              <span className="whitespace-nowrap ">Total Volume{"(₳)"}</span>
              <UpDown
                rotate={sortByTotalVolume}
                active={isSelected === "totalVolume"}
              />
            </li>
            <li
              onClick={handleSortByBuy}
              className="w-[12%] flex items-center justify-end p-2 hover:-translate-y-[2px] duration-200 transition-all transform cursor-pointer">
              <span className="whitespace-nowrap">Buy Volume{"(₳)"}</span>
              <UpDown
                rotate={sortByBuyVolume}
                active={isSelected === "buyAmount"}
              />
            </li>
            <li
              onClick={handleSortBySell}
              className="w-[12%] flex items-center justify-end p-2 hover:-translate-y-[2px] duration-200 transition-all transform cursor-pointer">
              <span className="whitespace-nowrap">Sell Volume{"(₳)"}</span>
              <UpDown
                rotate={sortBySellVolume}
                active={isSelected === "sellVolume"}
              />
            </li>
            <li
              onClick={handleSortByNet}
              className="w-[12%] flex items-center justify-end p-2 hover:-translate-y-[2px] duration-200 transition-all transform cursor-pointer">
              <span className="whitespace-nowrap">Net Volume{"(₳)"}</span>
              <UpDown
                rotate={sortByNetVolume}
                active={isSelected === "netVolume"}
              />
            </li>
            <li
              className={`w-[7%] flex items-center justify-end gap-1 p-2 `}
            >
              <span className="whitespace-nowrap">Avg Buy Price</span>
            </li>
            <li className="w-[7%] flex items-center justify-end gap-1 p-2">
              <span className="whitespace-nowrap">Avg Sell Price</span>
            </li>
            <li className="w-[7%] flex items-center justify-end p-2">
              <span className="whitespace-nowrap">Last Trade</span>
            </li>
            <li className="w-[8%] flex items-center justify-end gap-1 p-2">
              <span className="whitespace-nowrap">Wallet Profiler</span>
              <Info />
            </li>
          </ul>
          <div className="min-w-[1300px] ">
            {tokenTransactionDataItems.map((item, idx) => (
              <ul
                key={idx}
                className="flex relative justify-between font-normal text-white text-xs border-b-[1px] border-[#232323] transition-all transform duration-200 hover:bg-[#3a4956] cursor-pointer whitespace-nowrap text-ellipsis"
              >
                <li className=" shadow-lg w-[11%] flex items-center justify-start gap-2 p-2 z-30">
                  <div onClick={(e) => handleLike(item.id, e)}>
                    {item.like ? <Star.StarFill /> : <Star.StartOutline />}
                  </div>
                  <span className="w-full truncate">{item.address}</span>
                </li>
                <li className="w-[12%] flex items-center justify-start gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap w-full">
                    {item?.Balance?.value}{`${item.Balance.value ? "₳" : ""}`}
                    {item.Balance.value ? (<Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.Balance.percent} />
                    </Box>) : ("")}
                  </span>
                </li>
                <li className="w-[12%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap w-full">
                    {item?.TotalVolume?.value}{`${item.TotalVolume.value ? "₳" : ""}`}
                    {item.TotalVolume.value ? (<Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.TotalVolume.percent} />
                    </Box>) : ("")}
                  </span>
                </li>
                <li className="w-[12%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap w-full">
                    {item?.BuyVolume?.value}{`${item.BuyVolume.value ? "₳" : ""}`}
                    {item.BuyVolume.value ? (<Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.BuyVolume.percent} />
                    </Box>) : ("")}
                  </span>
                </li>
                <li className="w-[12%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap w-full">
                    {item?.SellVolume?.value}{`${item.SellVolume.value ? "₳" : ""}`}
                    {item.SellVolume.value ? (<Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.SellVolume.percent} />
                    </Box>) : ("")}
                  </span>
                </li>
                <li className="w-[12%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap w-full">
                    {item?.NetVolume?.value}{`${item.NetVolume.value ? "₳" : ""}`}
                    {item.NetVolume.value ? (<Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.NetVolume.percent} />
                    </Box>) : ("")}
                  </span>
                </li>
                <li className="w-[7%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap ">
                    {item?.AvgBuyPrice}{`${item.AvgBuyPrice ? "₳" : ""}`}

                  </span>
                </li>
                <li className="w-[7%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap ">
                    {item?.AvgSellPrice}{`${item.AvgSellPrice ? "₳" : ""}`}

                  </span>
                </li>
                <li className="w-[7%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap ">
                    {item?.LastTrade}

                  </span>
                </li>
                <div className="w-[8%] flex items-center justify-end p-2 ">
                  <div
                    onClick={() => handleActive(idx)}
                    className="flex gap-3  z-0 bg-[#192028] bg-opacity-70 rounded-md px-2 py-1 border-opacity-0 border-yellow-50  border-[1px] hover:border-yellow-300 hover:border-opacity-70 hover:border-[1px] relative">
                    {item.walletprofiler.avatar}
                    <Right />
                    {item.type ?
                      (<div className="absolute z-50 flex flex-col gap-3  bottom-0 right-[70px] bg-[#142028] p-2 rounded-lg">
                        <p onClick={() => window.open(item.walletprofiler.ownerurl)}
                          className="flex gap-2 text-[#9f9fa8] hover:text-white text-sm border-b-[1px] border-b-opacity-70 p-1">
                          Wallet Profiler <Right /></p>
                        <p onClick={() => window.open(item.walletprofiler.proflierurl)}
                          className="flex gap-2 text-[#9f9fa8] hover:text-white text-sm px-1">COPI History <Right /></p>
                      </div>) : ("")}
                  </div>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <Pagination number={tokenTransactionData.totaldatanumber} />
    </>
  );
};

export default VolumeTable;
