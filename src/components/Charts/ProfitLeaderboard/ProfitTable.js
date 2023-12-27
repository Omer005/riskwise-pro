import { useState } from "react";
import { ProfitDatas } from "./ProfitDatas";
import { Star, Right, UpDown } from "../../../common/Icons";
import Pagination from "../../Pro/HotWalletsLanding/Pagination";
import Box from '@mui/material/Box';
import LineartextDecorationColor from "@mui/material/LinearProgress"
import * as SVG from "../../../common/Icons";
import { setIn } from "formik";

const ProfitTable = () => {
  const [tokenTransactionData, setTokenTransactionData] =
    useState(ProfitDatas);
  const [tokenTransactionDataItems, setTokenTransactionDataItems] = useState(
    ProfitDatas.ItemValue
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
    const newData = ProfitDatas.ItemValue?.map((item, idx) => {
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
  const [sortByAvgSellPrice, setSortByAvgSellPrice] = useState(false);
  const [sortBySellAmount, setSortBySellAmount] = useState(false)
  const [income, setIncome] = useState(false);
  const [realizedProfit, setRealizedProfit] = useState(false)
  const [unrealizedProfit, setUnrealizedProfit] = useState(false)
  const [totalProfit, setTotalProfit] = useState(false)
  const [roi, setRoi] = useState(false)
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
  const handleAvgSellPrice = () => {
    setSortByAvgBuyPrice(!sortByAvgSellPrice)
    setIsSelected("avgSellPrice")
  }
  const handleIncome = () => {
    setIncome(!income)
    setIsSelected("income")
  }
  const handleUnrealizedProfit = () => {
    setUnrealizedProfit(!unrealizedProfit);
    setIsSelected("unrealizedProfit")
  }
  const handleRealizedProfit = () => {
    setRealizedProfit(!realizedProfit);
    setIsSelected("realizedProfit")
  }
  const handleTotalProfit = () => {
    setTotalProfit(!totalProfit)
    setIsSelected("totalProfit")
  }
  const handleRoi = () => {
    setRoi(!roi);
    setIsSelected("roi")
  }
  return (
    <>
      <div className=" flex-col relative z-0 justify-center w-full h-full overflow-x-auto hideScrollbar bg-[#142028] opacity-80 p-4 rounded-2xl">
        <div className="min-w-[1300px] mt-6">
          <ul className="flex justify-between text-sm font-semibold text-white border-b-[1px] border-[#232323] py-[2px]">
            <li className=" w-[10%] flex items-center justify-start gap-2 p-2">
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]"><Star.StartOutline /> #  Address</span>
            </li>
            <li
              onClick={handleSortByHolding}
              className={`w-[9%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Holdings
              </span>
              <UpDown
                rotate={sortByHolding}
                active={isSelected === "holding"}
              />
            </li>
            <li
              onClick={handleSortByAmount}
              className={`w-[9%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Buy Amount
              </span>
              <UpDown
                rotate={sortByBuyAmount}
                active={isSelected === "buyAmount"}
              />
            </li>
            <li
              onClick={handleAvgBuyPrice}
              className={`w-[9%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Avg Buy Price
              </span>
              <UpDown
                rotate={sortByAvgBuyPrice}
                active={isSelected === "avgBuyPrice"}
              />
            </li>
            <li
              onClick={handleSellAmount}
              className={`w-[9%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Sell Amount
              </span>
              <UpDown
                rotate={sortBySellAmount}
                active={isSelected === "sellAmount"}
              />
            </li>
            <li
              onClick={handleAvgSellPrice}
              className={`w-[9%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Avg Sell Amount
              </span>
              <UpDown
                rotate={sortByAvgSellPrice}
                active={isSelected === "Avg Sell Price"}
              />
            </li>
            <li
              onClick={handleIncome}
              className={`w-[9%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Income
              </span>
              <UpDown
                rotate={income}
                active={isSelected === "income"}
              />
            </li>
            <li
              onClick={handleRealizedProfit}
              className={`w-[9%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Realized Profit
              </span>
              <UpDown
                rotate={realizedProfit}
                active={isSelected === "realizedProfit"}
              />
            </li>
            <li
              onClick={handleUnrealizedProfit}
              className={`w-[9%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Unrealized Profit
              </span>
              <UpDown
                rotate={unrealizedProfit}
                active={isSelected === "realizedProfit"}
              />
            </li>
            <li
              onClick={handleTotalProfit}
              className={`w-[9%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">Total Profit
              </span>
              <UpDown
                rotate={totalProfit}
                active={isSelected === "totalProfit"}
              />
            </li>
            <li
              onClick={handleRoi}
              className={`w-[9%] flex items-center justify-end gap-1 p-2  cursor-pointer transition-all duration-200 hover:translate-y-[-2px]`}
            >
              <span className="flex gap-1 items-center whitespace-nowrap text-[#9f9fa8]">ROI %
              </span>
              <UpDown
                rotate={roi}
                active={isSelected === "roi"}
              />
            </li>
          </ul>
          <div className="min-w-[1300px] ">
            {tokenTransactionDataItems.map((item, idx) => (
              <ul
                key={idx}
                className="flex relative justify-between font-normal text-white text-xs border-b-[1px] border-[#232323] transition-all transform duration-200 hover:bg-[#3a4956] cursor-pointer whitespace-nowrap text-ellipsis"
              >
                <li className=" w-[10%] flex items-center justify-start gap-2 p-2 z-30">
                  <div onClick={(e) => handleLike(item.id, e)}>
                    {item.like ? <Star.StarFill /> : <Star.StartOutline />}
                  </div>
                  <span className="w-full truncate">{item.address}</span>
                </li>
                <li className="w-[9%] flex flex-col items-end justify-end gap-1 p-2">
                  <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full">
                    {item?.holdings?.value1}{`${item.holdings.value1 ? "₳" : ""}`}
                  </span>
                  <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full text-[#9f9fa8]">
                    {item?.holdings?.value2}
                  </span>
                </li>
                <li className="w-[9%] flex flex-col items-center justify-start gap-1 p-2">
                  <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full">
                    {item?.buyAmount?.value1}{`${item.buyAmount.value1 ? "₳" : ""}`}
                  </span>
                  <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full text-[#9f9fa8]">
                    {item?.buyAmount?.value2}
                  </span>
                </li>
                <li className="w-[9%] flex  items-center justify-start gap-1 p-2">
                  <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full">
                    {item?.avgBuyPrice} ₳
                  </span>
                </li>
                <li className="w-[9%] flex flex-col items-end justify-start gap-1 p-2">
                  <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full">
                    {item?.sellAmount?.value1}{`${item.sellAmount.value1 ? "₳" : ""}`}
                  </span>
                  <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full text-[#9f9fa8]">
                    {item?.sellAmount?.value2}
                  </span>
                </li>
                <li className="w-[9%] flex  items-center justify-start gap-1 p-2">
                  <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full">
                    {item?.avgSellPrice} ₳
                  </span>
                </li>
                <li className="w-[9%] flex items-center justify-end gap-1 p-2">
                  <span className="flex justify-end items-center gap-2 whitespace-nowrap w-full">
                    {item?.income?.value}{`${item.income.value ? "₳" : ""}`}
                    <Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.income.percent} />
                    </Box>
                  </span>
                </li>
                <li className="w-[9%] flex items-center justify-end gap-1 p-2">
                  <span className="flex justify-end items-center gap-2 whitespace-nowrap w-full">
                    {item?.realizedProfit?.value}{`${item.realizedProfit.value ? "₳" : ""}`}
                    <Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.realizedProfit.percetn} />
                    </Box>
                  </span>
                </li>
                <li className="w-[9%] flex items-center justify-end gap-1 p-2">
                  <span className="flex justify-end items-center gap-2 whitespace-nowrap w-full">
                    {item?.unrealizedProfit?.value}{`${item.unrealizedProfit.value ? "₳" : ""}`}
                    <Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.unrealizedProfit.percent} />
                    </Box>
                  </span>
                </li>
                <li className="w-[9%] flex items-center justify-end gap-1 p-2">
                  <span className="flex items-center gap-2 whitespace-nowrap w-full">
                    {item?.totalProfit?.value}{`${item.totalProfit.value ? "₳" : ""}`}
                    <Box sx={{ width: '70%' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.totalProfit.percent} />
                    </Box>
                  </span>
                </li>
                <li className="w-[9%] flex justify-end items-center gap-1 p-2">
                  <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full">
                    {item?.roi} %
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

export default ProfitTable;
