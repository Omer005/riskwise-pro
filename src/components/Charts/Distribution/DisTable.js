import { useState } from "react";
import { DistributionDatas } from "./DistributionDatas";
import { Star,Right, Left } from "../../../common/Icons";
import Pagination from "../../Pro/HotWalletsLanding/Pagination";
import Box from '@mui/material/Box';
import LineartextDecorationColor from "@mui/material/LinearProgress"
import * as SVG from "../../../common/Icons";

const DisTable = () => {
  const [tokenTransactionData, setTokenTransactionData] =
    useState(DistributionDatas);
  const [tokenTransactionDataItems, setTokenTransactionDataItems] = useState(
    DistributionDatas.ItemValue
  );

  const [isActive, setIsActive] = useState(false)
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
    const newData = DistributionDatas.ItemValue?.map((item, idx) => {
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
        <div className="min-w-[1300px] mt-6">
          <ul className="flex justify-between text-sm font-semibold text-white border-b-[1px] border-[#232323] py-[2px]">
            <li className=" w-[12%] flex items-center justify-start gap-2 p-2">
              <span className="whitespace-nowrap text-[#9f9fa8]">Address</span>
            </li>
            <li
              className={`w-[11%] flex items-center justify-end gap-1 p-2  `}
            >
              <span className="whitespace-nowrap text-[#9f9fa8]">Balance</span>
            </li>
            <li
              className="w-[11%] flex items-center justify-end p-2 cursor-pointer ">
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">% Ownership <SVG.Notification /> </span>
            </li>
            <li
              className="w-[11%] flex items-center justify-end p-2 ">
              <span className="whitespace-nowrap text-[#9f9fa8]">Change 7D</span>

            </li>
            <li
              className="w-[11%] flex items-center justify-end p-2 ">
              <span className="whitespace-nowrap text-[#9f9fa8]">Change 30D</span>
            </li>
            <li
              className="w-[11%] flex items-center justify-end p-2 ">
              <span className="flex items-center gap-1 whitespace-nowrap text-[#9f9fa8]">Buy<SVG.Notification /></span>
            </li>
            <li
              className="w-[11%] flex items-center justify-end p-2 ">
              <span className="flex items-center gap-1 whitespace-nowrap text-[#9f9fa8]">Sell<SVG.Notification /></span>
            </li>
            <li
              className="w-[11%] flex items-center justify-end p-2 ">
              <span className="flex items-center gap-1 whitespace-nowrap text-[#9f9fa8]">Receive/Sent<SVG.Notification /></span>
            </li>
            <li className="w-[11%] flex items-center justify-end gap-1 p-2">
              <span className="whitespace-nowrap text-[#9f9fa8]">Wallet Profiler</span>
            </li>
          </ul>
          <div className="min-w-[1300px] ">
            {tokenTransactionDataItems.map((item, idx) => (
              <ul
                key={idx}
                className="flex relative justify-between font-normal text-white text-xs border-b-[1px] border-[#232323] transition-all transform duration-200 hover:bg-[#3a4956] cursor-pointer whitespace-nowrap text-ellipsis"
              >
                <li className=" shadow-lg w-[12%] flex items-center justify-start gap-2 p-2 z-30">
                  <div onClick={(e) => handleLike(item.id, e)}>
                    {item.like ? <Star.StarFill /> : <Star.StartOutline />}
                  </div>
                  <span className="w-full truncate">{item.address}</span>
                </li>
                <li className="w-[11%] flex items-center justify-start gap-1 p-2">
                  <span className="flex  items-center gap-2 whitespace-nowrap w-full">
                    {item?.Balance?.value}{`${item.Balance.value ? "₳" : ""}`}
                    {item.Balance.value ? (<Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.Balance.percent} />
                    </Box>) : ("")}
                  </span>
                </li>
                <li className="w-[11%] flex items-center justify-end gap-1 p-2">
                  <span className="flex justify-end items-center gap-2 whitespace-nowrap w-full">
                   {item?.Ownership}
                  </span>
                </li>
                <li className="w-[11%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap w-full">
                    {item?.Change7D?.value}{`${item.Change7D.value ? "₳" : ""}`}
                    {item.Change30D.value ? (<Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.Change7D.percent} />
                    </Box>) : ("")}
                  </span>
                </li>
                <li className="w-[11%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap w-full">
                    {item?.Change30D?.value}{`${item.Change30D.value ? "₳" : ""}`}
                    {item.Change30D.value ? (<Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.Change30D.percent} />
                    </Box>) : ("")}
                  </span>
                </li>
                <li className="w-[11%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap w-full">
                    {item?.Buy?.value}{`${item.Buy.value ? "₳" : ""}`}
                    {item.Buy?.value ? (<Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.Buy.percent} />
                    </Box>) : ("")}
                  </span>
                </li>
                <li className="w-[11%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap w-full">
                    {item?.Sell?.value}{`${item.Sell.value ? "₳" : ""}`}
                    {item.Sell?.value ? (<Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.Sell.percent} />
                    </Box>) : ("")}
                  </span>
                </li>
                <li className="w-[11%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap w-full">
                    {item?.ReceiveSent?.value}{`${item.ReceiveSent.value ? "₳" : ""}`}
                    {item.ReceiveSent?.value ? (<Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.ReceiveSent.percent} />
                    </Box>) : ("")}
                  </span>
                </li>
                <div className="w-[11%] flex items-center justify-end p-2 ">
                  <div
                    onClick={() => handleActive(idx)}
                    className="relative flex gap-3  z-0 bg-[#192028] bg-opacity-70 rounded-md px-2 py-1 border-opacity-0 border-yellow-50  border-[1px] hover:border-yellow-300 hover:border-opacity-70 hover:border-[1px]">
                    {item.walletprofiler.avatar}
                    <Right />
                    {item.type ?
                      (<div className="absolute z-50 flex flex-col gap-3 bottom-0 right-20 bg-[#142028] p-2 rounded-lg">
                        <p onClick={() => window.open(item.walletprofiler.ownerurl)}
                          className="flex justify-between w-32 text-[#9f9fa8] hover:text-white text-sm border-b-[1px] border-b-opacity-70 p-1">
                          Wallet Profiler <Right /></p>
                        <p onClick={() => window.open(item.walletprofiler.proflierurl)}
                          className="flex justify-between text-[#9f9fa8] hover:text-white text-sm px-1">COPI History <Right /></p>
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

export default DisTable;
