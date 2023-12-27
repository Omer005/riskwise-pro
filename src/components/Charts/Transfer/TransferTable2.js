import { useState } from "react";
import { TransferDatasTwo } from "./TransferDatasTwo";
import { Right, UpDown } from "../../../common/Icons";
import { Tappy } from "../../../common/IMG/Images"
import Pagination from "../../Pro/HotWalletsLanding/Pagination";
import Box from '@mui/material/Box';
import LineartextDecorationColor from "@mui/material/LinearProgress"
import * as SVG from "../../../common/Icons";
import DropDownMenu from "../../marketing/DropDownMenu"
const durationList = [
  { id: 0, value: "30d" },
  { id: 1, value: "24h" },
  { id: 2, value: "7d" },
  { id: 3, value: "90d" },
  { id: 4, value: "all" }
];
const TransferTable2 = () => {
  const [tokenTransactionData, setTokenTransactionData] =
    useState(TransferDatasTwo);
  const [tokenTransactionDataItems, setTokenTransactionDataItems] = useState(
    TransferDatasTwo.ItemValue
  );
  const [isSelected, setIsSelected] = useState("")
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
  const handleActiveFrom = (_idx) => {
    const newData = TransferDatasTwo.ItemValue?.map((item, idx) => {
      if (idx === _idx) {
        item.typeFrom = !item.typeFrom;
      }
      else { item.typeFrom = false; }
      return item
    })
    setTokenTransactionData(newData);

  }

  const handleActiveTo = (_idx) => {
    const newData = TransferDatasTwo.ItemValue?.map((item, idx) => {
      if (idx === _idx) {
        item.typeTo = !item.typeTo;
      }
      else { item.typeTo = false; }
      return item
    })
    setTokenTransactionData(newData);

  }

  const [sortByHolding, setSortByHolding] = useState(false);
  const [sortByBuyAmount, setSortByBuyAmount] = useState(false);
  const [sortByAvgBuyPrice, setSortByAvgBuyPrice] = useState(false);

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

  const chooseItem = (item) => {
    setDuration(item.value);
  };
  const beSpread = () => {
    setSpread(!spread);
  };
  const [spread, setSpread] = useState(false);
  const [duration, setDuration] = useState("30d");

  return (
    <>
      <div className=" flex-col relative z-0 justify-center w-full h-full overflow-x-auto hideScrollbar bg-[#142028] opacity-80 p-4 rounded-2xl">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <p className="text-white text-base font-medium">Individual Transfers</p>
          </div>
          <div
            className="relative flex items-center bg-[#0b1217] px-3 h-7 rounded-[10px] cursor-pointer"
            id="spread"
            onClick={beSpread}
          >
            <span onClick={beSpread} className="pr-2 text-[#9f9fa8] text-sm">
              {duration}
            </span>
            <div className=" w-5 h-5 rounded-sm flex justify-center items-center">
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
        <div className="min-w-[1300px] mt-6">
          <ul className="flex justify-between text-sm font-semibold text-white border-b-[1px] border-[#232323] py-[2px]">
            <li
              onClick={handleSortByHolding}
              className="w-[6%] flex items-center justify-start gap-2 p-2 cursor-pointer transition-all transform duration-200 hover:translate-y-[-2px]">
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]"> Time</span>
              <UpDown
                rotate={sortByHolding}
                active={isSelected === "holding"} />
            </li>
            <li
              className={`w-[7%] flex items-center justify-end gap-1 p-2 `}    >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">From
              </span>
            </li>
            <li
              className={`w-[7%] flex items-center justify-end gap-1 p-2 `} >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">To
              </span>
            </li>
            <li
              onClick={handleAvgBuyPrice}
              className={`w-[12%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}  >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Token Amount
              </span>
              <UpDown
                rotate={sortByAvgBuyPrice}
                active={isSelected === "avgBuyPrice"} />
            </li>
            <li
              className={`w-[12%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}  >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Value
              </span>
            </li>
          </ul>
          <div className="min-w-[1300px] ">
            {tokenTransactionDataItems.map((item, idx) => (
              <ul
                key={idx}
                className="flex relative justify-between font-normal text-white text-xs border-b-[1px] border-[#232323] transition-all transform duration-200 hover:bg-[#3a4956] cursor-pointer whitespace-nowrap text-ellipsis" >
                <li className="w-[12%] flex items-center justify-start gap-2 p-2 z-30">
                  <span className="flex items-center gap-2 whitespace-nowrap w-full">
                    {item.time}d ago
                  </span>
                </li>
                <div className="w-[14%] flex items-center justify-end p-2 space-x-1">
                  <div
                    onClick={() => handleActiveFrom(idx)}
                    className="relative flex gap-3 bg-[#192028] bg-opacity-70 rounded-md px-2 py-1 border-opacity-0 border-yellow-50  border-[1px] hover:border-yellow-300 hover:border-opacity-70 hover:border-[1px]">
                    {item.Fromaddress.avatar}
                    <Right />
                    {item.typeFrom ?
                      (<div className="absolute flex flex-col gap-3 bottom-0 left-20 bg-[#142028] p-2 rounded-lg">
                        <p onClick={() => window.open(item.walletprofiler.ownerurl)}
                          className="flex justify-between w-32 text-[#9f9fa8] hover:text-white text-sm border-b-[1px] border-b-opacity-70 p-1">
                          Wallet Profiler <Right /></p>
                        <p onClick={() => window.open(item.walletprofiler.proflierurl)}
                          className="flex justify-between text-[#9f9fa8] hover:text-white text-sm px-1">COPI History <Right /></p>
                      </div>) : ("")}
                  </div>
                  <span className="flex items-center gap-2 whitespace-nowrap text-ellipsis w-full truncate">
                    {item.Fromaddress.value}
                  </span>
                </div>
                <li className="w-[14%] flex items-center justify-end p-2 ">
                  <div
                    onClick={() => handleActiveTo(idx)}
                    className="relative flex gap-3 z-0 bg-[#192028] bg-opacity-70 rounded-md px-2 py-1 border-opacity-0 border-yellow-50  border-[1px] hover:border-yellow-300 hover:border-opacity-70 hover:border-[1px]">
                    {item.Toaddress.avatar}
                    <Right />
                    {item.typeTo ?
                      (<div className="absolute z-50 flex flex-col gap-3 bottom-0 left-20 bg-[#142028] p-2 rounded-lg">
                        <p onClick={() => window.open(item.walletprofiler.ownerurl)}
                          className="flex justify-between w-32 text-[#9f9fa8] hover:text-white text-sm border-b-[1px] border-b-opacity-70 p-1">
                          Wallet Profiler <Right /></p>
                        <p onClick={() => window.open(item.walletprofiler.proflierurl)}
                          className="flex justify-between text-[#9f9fa8] hover:text-white text-sm px-1">COPI History <Right /></p>
                      </div>) : ("")}
                  </div>
                  <span className="flex items-center gap-2 whitespace-nowrap w-full truncate">
                    {item.Toaddress.value}
                  </span>
                </li>
                <li className="w-[20%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap w-full truncate">
                    {item?.tokenAmount?.vale}{`${item.tokenAmount.vale ? "₳" : ""}`}
                    <Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.tokenAmount.percent} />
                    </Box>
                  </span>
                </li>
                <li className="w-[20%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap w-full ">
                    {item?.value?.value}{`${item.value.value ? "₳" : ""}`}
                    <Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.value.percent} />
                    </Box>
                  </span>
                  <div className="w-6 h-6">
                    <img
                      src={Tappy}
                      className=""
                      alt=""
                    />
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <Pagination number={tokenTransactionData.totaldatanumber} />
    </>
  );
};

export default TransferTable2;