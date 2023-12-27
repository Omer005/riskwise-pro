import { useState } from "react";
import { LiquidityDataFirst } from "./LiquidityDataFirst"
import { Star, Right, UpDown } from "../../../common/Icons";
import Pagination from "../../Pro/HotWalletsLanding/Pagination";
import Box from '@mui/material/Box';
import LineartextDecorationColor from "@mui/material/LinearProgress"
import BalanceFarmerButtons from "./BalanceFarmerButtons";
import DropDownMenu from "../../marketing/DropDownMenu";
import { Icon } from "../../../common/IMG/Images";
import * as SVG from "../../../common/Icons";
import { Minswap, MueslicSwap, Wingriders, Vyfi, Spectrum, MeanSwap } from "../../../common/IMG/Images";
const LiquidityTableFisrt = () => {
  const [tokenTransactionData, setTokenTransactionData] =
    useState(LiquidityDataFirst);
  const [tokenTransactionDataItems, setTokenTransactionDataItems] = useState(
    LiquidityDataFirst.ItemValue
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
  const handleActive = (_idx) => {
    const newData = LiquidityDataFirst.ItemValue?.map((item, idx) => {
      if (idx === _idx) {
        item.type = !item.type;
      }
      else { item.type = false; }
      return item
    })
    setTokenTransactionData(newData);
  }
  const [duration, setDuration] = useState("Minswap");
  const [durationImg, setDurationImg] = useState(Minswap)
  const [spread, setSpread] = useState(false);
  const beSpread = () => {
    setSpread(!spread);
  };
  const chooseItem = (item) => {
    setDuration(item.value);
    setDurationImg(item.avatar);
  };
  const durationList = [
    { id: 0, value: "Minswap", avatar: Minswap },
    { id: 1, value: "MuesliSwap", avatar: MueslicSwap },
    { id: 2, value: "WingRiders", avatar: Wingriders },
    { id: 3, value: "Vyfi", avatar: Vyfi },
    { id: 4, value: "Spectrum", avatar: Spectrum },
    { id: 5, value: "MeanSwap", avatar: MeanSwap },
  ];

  return (
    <>
      <div className=" flex-col relative z-0 justify-center w-full h-full overflow-x-auto hideScrollbar bg-[#142028] opacity-80 p-4 rounded-2xl">
        {/* Top Table */}
        <div className="flex justify-between px-4">
          <div className="flex items-center gap-4">
            <BalanceFarmerButtons />
            <div
              className="relative flex items-center bg-[#0b1217] px-3 h-7 rounded-[10px] cursor-pointer"
              id="spread"
              onClick={beSpread}
            >
              <div className="flex items-center w-6 h-6">
                <img
                  src={durationImg}
                  className=""
                  width={20}
                  height={20}
                  alt="icon" />
              </div>
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
          <ul className="flex justify-between text-sm font-semibold text-white border-b-[1px] border-[#232323] py-[2px]">
            <li className="w-[20%] flex items-center justify-start gap-2 p-2">
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]"> #  Address</span>
            </li>
            <li className="w-[20%] flex items-center justify-end gap-2 p-2">
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Amount LP
              </span>
            </li>
            <li className="w-[20%] flex items-center justify-end gap-2 p-2">
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Amount Token
              </span>
            </li>
            <li className="w-[20%] flex items-center justify-end gap-2 p-2">
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Amount ADA
              </span>
            </li>
            <li className="w-[20%] flex items-center justify-end gap-2 p-2">
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Value</span>
            </li>
          </ul>
          {/* Table Content */}
          <div className="min-w-[1300px] ">
            {tokenTransactionDataItems.map((item, idx) => (
              <ul
                key={idx}
                className="flex relative justify-between font-normal text-white text-xs border-b-[1px] border-[#232323] transition-all transform duration-200 hover:bg-[#3a4956] cursor-pointer whitespace-nowrap text-ellipsis"
              >
                <li className="shadow-lg w-[20%] flex items-center justify-start gap-3 p-2 z-30">
                  <span className=" truncate">{item.address.order}</span>
                  <div
                    onClick={() => handleActive(idx)}
                    className="relative flex gap-3 z-0 bg-[#192028] bg-opacity-70 rounded-md px-2 py-1 border-opacity-0 border-yellow-50  border-[1px] hover:border-yellow-300 hover:border-opacity-70 hover:border-[1px]">
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
                    {item?.amountLp?.value}{`${item.amountLp.value ? "₳" : ""}`}
                    <Box sx={{ width: '100px' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.amountLp.percent} />
                    </Box>
                  </span>
                </li>
                <li className="w-[20%] flex items-center justify-end gap-1 p-2">
                  <span className="flex justify-end items-center gap-2 whitespace-nowrap w-full">
                    {item?.amountToken?.value}{`${item.amountToken.value ? "₳" : ""}`}
                    <Box sx={{ width: '100px' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.amountToken.percent} />
                    </Box>
                  </span>
                </li>
                <li className="w-[20%] flex items-center justify-end gap-1 p-2">
                  <span className="flex justify-end items-center gap-2 whitespace-nowrap w-full">
                    {item?.amountADA?.value}{`${item.amountADA.value ? "₳" : ""}`}
                    <Box sx={{ width: '100px' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.amountADA.percent} />
                    </Box>
                  </span>
                </li>
                <li className="w-[20%] flex items-center justify-end gap-1 p-2">
                  <span className="flex justify-end items-center gap-2 whitespace-nowrap w-full">
                    {item?.value?.value}{`${item.value.value ? "₳" : ""}`}
                    <Box sx={{ width: '100px' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.value.percent} />
                    </Box>
                  </span>
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

export default LiquidityTableFisrt;
