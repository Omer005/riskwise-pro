import { useState } from "react";
import { LiquidityDataSecond } from "../Liquidity/LiquidityDataSecond"
import { StakingDataFirst } from "./StakingDataFirst"
import { Right, UpDown } from "../../../common/Icons";
import Pagination from "../../Pro/HotWalletsLanding/Pagination";
import Box from '@mui/material/Box';
import LineartextDecorationColor from "@mui/material/LinearProgress"
import DropDownMenu from "../../marketing/DropDownMenu";
import { Icon } from "../../../common/IMG/Images";
import * as SVG from "../../../common/Icons";
const StakingTableFirst = () => {
  const [tokenTransactionData, setTokenTransactionData] =
    useState(StakingDataFirst);
  const [tokenTransactionDataItems, setTokenTransactionDataItems] = useState(
    StakingDataFirst.ItemValue
  );
  const [isSelected, setIsSelected] = useState("")
  const handleActive = (_idx) => {
    const newData = StakingDataFirst.ItemValue?.map((item, idx) => {
      if (idx === _idx) {
        item.type = !item.type;
      }
      else { item.type = false; }
      return item
    })
    setTokenTransactionData(newData);
  }
  const [sortByHolding, setSortByHolding] = useState(false);
  const [sortByBuyAmount, setSortByBuyAmount] = useState(false);
  const [sortByAvgBuyPrice, setSortByAvgBuyPrice] = useState(false);
  const [sortBySellAmount, setSortBySellAmount] = useState(false)
  const handleSortByHolding = () => {
    setSortByHolding(!sortByHolding);
    setIsSelected("holding");
    // TODO API
  };
  const handleSortByAmount = () => {
    setSortByBuyAmount(!sortByBuyAmount);
    setIsSelected("buyAmount");
    // TODO API
  };
  const handleAvgBuyPrice = () => {
    setSortByAvgBuyPrice(!sortByAvgBuyPrice);
    setIsSelected("avgBuyPrice")
  }
  const handleSellAmount = () => {
    setSortBySellAmount(!sortBySellAmount);
    setIsSelected("sellAmount")
  }

  const [duration, setDuration] = useState("7d");
  const [spread, setSpread] = useState(false);
  const beSpread = () => {
    setSpread(!spread);
  };
  const chooseItem = (item) => {
    setDuration(item.value);
  };
  const durationList = [
    { id: 0, value: "7d", },
    { id: 1, value: "24h", },
    { id: 2, value: "90d", },
    { id: 3, value: "180d", },
    { id: 4, value: "1y", },
    { id: 5, value: "All", },
  ];

  return (
    <>
      <div className=" flex-col relative z-0 justify-center w-full h-full overflow-x-auto hideScrollbar bg-[#142028] opacity-80 p-4 rounded-2xl">
        {/* Top Table */}
        <div className="flex justify-between px-4">
          <div className="flex gap-4">
            <p className="text-white text-sm font-normal"> Staking Netflow</p>
            <div
              className="relative flex items-center bg-[#0b1217] px-3 h-7 rounded-[10px] cursor-pointer"
              id="spread"
              onClick={beSpread}
            >
              <span onClick={beSpread} className="pr-2 text-[#9f9fa8] text-sm">
                {duration}
              </span>
              <div className="bg-black w-5 h-5 rounded-sm flex justify-center items-center">
                {spread === true ? <SVG.Up /> : <SVG.Down />}
              </div>
              <div
                className={`absolute bottom-0 left-0 z-50 ${spread === false ? "hidden" : "w-full"
                  }`}
              >
                <DropDownMenu
                  menuitems={durationList}
                  chooseItem={chooseItem}
                />
              </div>
            </div>
          </div>
          <div className="sm:flex hidden">
            <div className="w-8 h-8">
              <img
                src={Icon}
                alt="icon"
                className="" />
            </div>
          </div>
        </div>
        <div className="min-w-[1300px] mt-6">
          {/* Table Header */}
          {/* Table Content */}
          <div className="min-w-[1300px] mt-6">
            <ul className="flex justify-between text-sm font-semibold text-white border-b-[1px] border-[#232323] py-[2px]">
              <li className="w-[20%] flex items-center justify-start gap-2 p-2">
                <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]"> Address</span>
              </li>
              <li
                onClick={handleSortByHolding}
                className={`w-[20%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
              >
                <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Staked Balance
                </span>
                <UpDown
                  rotate={sortByHolding}
                  active={isSelected === "holding"}
                />
              </li>
              <li
                onClick={handleSortByAmount}
                className={`w-[20%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
              >
                <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Staked
                </span>
                <UpDown
                  rotate={sortByBuyAmount}
                  active={isSelected === "buyAmount"}
                />
              </li>
              <li
                onClick={handleAvgBuyPrice}
                className={`w-[20%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
              >
                <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Unstaked
                </span>
                <UpDown
                  rotate={sortByAvgBuyPrice}
                  active={isSelected === "avgBuyPrice"}
                />
              </li>
              <li
                onClick={handleSellAmount}
                className={`w-[20%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
              >
                <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Netflow
                </span>
                <UpDown
                  rotate={sortBySellAmount}
                  active={isSelected === "sellAmount"}
                />
              </li>
            </ul>
            <div className="min-w-[1300px] ">
              {tokenTransactionDataItems.map((item, idx) => (
                <ul
                  key={idx}
                  className="flex relative justify-between font-normal text-white text-xs border-b-[1px] border-[#232323] transition-all transform duration-200 hover:bg-[#3a4956] cursor-pointer whitespace-nowrap text-ellipsis"
                >
                  <li className="shadow-lg w-[20%] flex items-center justify-start gap-2 p-2 z-30">
                    <div
                      onClick={() => handleActive(idx)}
                      className="relative flex gap-3 z-0 bg-[#142028] bg-opacity-70 rounded-md px-2 py-1 border-opacity-0 border-yellow-50  border-[1px] hover:border-yellow-300 hover:border-opacity-70 hover:border-[1px]">
                      {item.address.avatar}
                      <Right />
                      {item.type ?
                        (<div className="absolute flex flex-col gap-3 bottom-0 left-20 bg-[#142028] p-2 rounded-lg">
                          <p onClick={() => window.open(item.walletprofiler.ownerurl)}
                            className="flex justify-between w-32 text-[#9f9fa8] hover:text-white text-sm border-b-[1px] border-b-opacity-70 p-1">
                            Wallet Profiler <Right /></p>
                          <p onClick={() => window.open(item.walletprofiler.proflierurl)}
                            className="flex justify-between text-[#9f9fa8] hover:text-white text-sm px-1">COPI History <Right /></p>
                        </div>) : ("")}
                    </div>
                    <span className="w-full truncate">{item.address.value}</span>
                  </li>
                  <li className="w-[20%] flex items-center justify-end gap-1 p-2">
                    <span className="flex justify-end items-center gap-2 whitespace-nowrap w-full">
                      {item?.StakedBalance?.value}{`${item.StakedBalance.value ? "₳" : ""}`}
                      <Box sx={{ width: '100px' }}>
                        <LineartextDecorationColor
                          color='inherit'
                          variant="determinate" value={item.StakedBalance.percent} />
                      </Box>
                    </span>
                  </li>
                  <li className="w-[20%] flex items-center justify-end gap-1 p-2">
                    <span className="flex justify-end items-center gap-2 whitespace-nowrap w-full">
                      {item?.Staked?.value}{`${item.Staked.value ? "₳" : ""}`}
                      <Box sx={{ width: '100px' }}>
                        <LineartextDecorationColor
                          color='inherit'
                          variant="determinate" value={item.Staked.percent} />
                      </Box>
                    </span>
                  </li>
                  <li className="w-[20%] flex items-center justify-end gap-1 p-2">
                    <span className="flex justify-end items-center gap-2 whitespace-nowrap w-full">
                      {item?.UnStaked?.value}{`${item.UnStaked.value ? "₳" : ""}`}
                      <Box sx={{ width: '100px' }}>
                        <LineartextDecorationColor
                          color='inherit'
                          variant="determinate" value={item.UnStaked.percent} />
                      </Box>
                    </span>
                  </li>
                  <li className="w-[20%] flex items-center justify-end gap-1 p-2">
                    <span className="flex justify-end items-center gap-2 whitespace-nowrap w-full">
                      {item?.Netflow?.value}{`${item.Netflow.value ? "₳" : ""}`}
                      <Box sx={{ width: '100px' }}>
                        <LineartextDecorationColor
                          color='inherit'
                          variant="determinate" value={item.Netflow.percent} />
                      </Box>
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Pagination number={tokenTransactionData.totaldatanumber} />
    </>
  );
};

export default StakingTableFirst;
