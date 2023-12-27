import { useState } from "react";
import { StakingDataSecond } from "./StakingDataSecond";
import { Right, UpDown } from "../../../common/Icons";
import Pagination from "../../Pro/HotWalletsLanding/Pagination";
import Box from '@mui/material/Box';
import LineartextDecorationColor from "@mui/material/LinearProgress"
import { Icon, Tapply, Tappy } from "../../../common/IMG/Images";
const StakingTableSecond = () => {
  const [tokenTransactionData, setTokenTransactionData] =
    useState(StakingDataSecond);
  const [tokenTransactionDataItems, setTokenTransactionDataItems] = useState(
    StakingDataSecond.ItemValue
  );
  const [isSelected, setIsSelected] = useState("")
  const handleActive = (_idx) => {
    const newData = StakingDataSecond.ItemValue?.map((item, idx) => {
      if (idx === _idx) {
        item.type = !item.type;
      }
      else { item.type = false; }
      return item
    })
    setTokenTransactionData(newData);
  }
  const [sortByHolding, setSortByHolding] = useState(false);
  const [sortByAvgBuyPrice, setSortByAvgBuyPrice] = useState(false);
  const handleSortByHolding = () => {
    setSortByHolding(!sortByHolding);
    setIsSelected("holding");
    // TODO API
  };
  const handleAvgBuyPrice = () => {
    setSortByAvgBuyPrice(!sortByAvgBuyPrice);
    setIsSelected("avgBuyPrice")
  }
  return (
    <>
      <div className=" flex-col relative z-0 justify-center w-full h-full overflow-x-auto hideScrollbar bg-[#142028] opacity-80 p-4 rounded-2xl">
        {/* Top Table */}
        <div className="flex justify-between px-4">
          <div className="flex gap-4">
            <p className="text-white text-sm font-normal">Transactions</p>
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
          <ul className="flex justify-between text-sm font-semibold text-white border-b-[1px] border-[#232323] py-[2px]">
            <li
              onClick={handleSortByHolding}
              className={`w-[14%] flex items-center justify-start gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Time
              </span>
              <UpDown
                rotate={sortByHolding}
                active={isSelected === "holding"}
              />
            </li>
            <li className="w-[14%] flex items-center justify-start gap-2 p-2">
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]"> Address</span>
            </li>
            <li
              className={`w-[14%] flex items-center justify-start gap-1 p-2  `}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Protocol
              </span>
            </li>
            <li
              className={`w-[14%] flex items-center justify-start gap-1 p-2  `}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Token
              </span>
            </li>
            <li
              className={`w-[14%] flex items-center justify-start gap-1 p-2 `}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Type
              </span>
            </li>
            <li
              onClick={handleAvgBuyPrice}
              className={`w-[14%] flex items-center justify-start gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Amount
              </span>
              <UpDown
                rotate={sortByAvgBuyPrice}
                active={isSelected === "buyAvgPrice"}
              />
            </li>
            <li
              className={`w-[14%] flex items-center justify-end gap-1 p-2  `}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Value
              </span>
            </li>
            <li
              className={`w-[2%] flex items-center justify-center gap-1 p-2  `}
            >
              
            </li>
          </ul>
          {/* Table Content */}
          <div className="min-w-[1300px] ">
            {tokenTransactionDataItems.map((item, idx) => (
              <ul
                key={idx}
                className="flex relative justify-between font-normal text-white text-xs border-b-[1px] border-[#232323] transition-all transform duration-200 hover:bg-[#3a4956] cursor-pointer whitespace-nowrap text-ellipsis"
              >
                <li className="w-[14%] flex items-center justify-start gap-1 p-2">
                  <span className="flex justify-start items-center gap-2 whitespace-nowrap w-full">
                    {item?.time}d ago
                  </span>
                </li>
                <li className="flex  w-[14%]  items-center justify-start gap-2 p-2">
                  <div
                    onClick={() => handleActive(idx)}
                    className="relative flex justify-start gap-3 bg-[#142028] bg-opacity-70 rounded-md px-2 py-1 border-opacity-0 border-yellow-50  border-[1px] hover:border-yellow-300 hover:border-opacity-70 hover:border-[1px]">
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
                <li className="w-[14%] flex items-center justify-start gap-1 p-2">
                  <div className="flex items-center w-8 h-8 ">
                    <img
                      src={item.protocol.image}
                      width={20}
                      height={20}
                      className=""
                      alt="icon" />
                  </div>
                  <span className="flex justify-start items-center gap-2 whitespace-nowrap w-full">
                    {item?.protocol.name}
                  </span>
                </li>
                <li className="w-[14%] flex items-center justify-start gap-1 p-2">
                  <div className="flex items-center w-8 h-8 ">
                    <img
                      src={item.Token.image}
                      width={20}
                      height={20}
                      className="rounded-full"
                      alt="icon" />
                  </div>
                  <span className="flex justify-start items-center gap-2 whitespace-nowrap w-full">
                    {item?.Token.name}
                  </span>
                </li>
                <li className="w-[14%] flex items-center justify-start gap-1 p-2">
                  <span className={`flex justify-start items-center gap-2 whitespace-nowrap w-full ${item.Type === "Deposit" ? "text-yellow-400" : "text-red-400"}`}>
                    {item?.Type}
                  </span>
                </li>
                <li className="w-[14%] flex items-center justify-start  gap-1 p-2">
                  <span className="flex justify-start items-center gap-2 whitespace-nowrap w-full">
                    {item?.amount?.value}{`${item.amount.value ? "₳" : ""}`}
                    <Box sx={{ width: '100px' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.amount.percent} />
                    </Box>
                  </span>
                </li>
                <li className="w-[14%] flex items-center justify-end gap-1 p-2">
                  <span className="flex justify-end items-center gap-2 whitespace-nowrap w-full">
                    {item?.value?.value}{`${item.value.value ? "₳" : ""}`}
                    <Box sx={{ width: '100px' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.value.percent} />
                    </Box>
                  </span>
                </li>
                <li className="w-[2%] flex items-center justify-end gap-1 p-2">
                  <div className="flex items-center w-6 h-6">
                    <img
                    src={Tappy}
                height={20}
                width={20}
                className=""
                alt="icon" />
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div >
      <Pagination number={tokenTransactionData.totaldatanumber} />
    </>
  );
};

export default StakingTableSecond;
