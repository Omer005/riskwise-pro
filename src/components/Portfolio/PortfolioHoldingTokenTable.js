import { ProfitDatas } from "../Charts/ProfitLeaderboard/ProfitDatas";
import * as SVG from "../../common/Icons";
import Box from '@mui/material/Box';
import LineartextDecorationColor from "@mui/material/LinearProgress"
import { HoldingTokenData } from "./HoldingTokenData";
import SimpleBarReact from "simplebar-react";
import { Tappy } from "../../common/IMG/Images";

const PortfolioHoldingTokenTable = () => {

  return (
    <>
      <SimpleBarReact className="h-[400px]">
        <div className="flex-col relative z-0 justify-center min-w-[800px] h-full overflow-x-auto hideScrollbar">
          <div className="w-full ">
            {HoldingTokenData.ItemValue.map((item, idx) => (
              <ul
                key={idx}
                className="flex relative justify-between font-normal text-white text-xs border-b-[1px] border-[#232323] transition-all transform duration-200 hover:bg-[#3a4956] cursor-pointer whitespace-nowrap text-ellipsis"
              >
                <li className="shadow-lg w-[21%] flex items-center justify-between gap-2">
                  <div className="flex gap-4 items-center w-full">
                    <div className="flex items-center w-[40%]">
                      <img
                        src={item.name.avatar}
                        height={30}
                        width={30}
                        className="rounded-full"
                        alt="icon" />
                    </div>
                    <span className="w-full truncate inline-block whitespace-nowrap">{item.name.name}</span>
                  </div>
                  <div className="flex items-end flex-col w-full gap-1">
                    <p className="text-xs text-yellow-300 font-medium truncate inline-block whitespace-nowrap text-ellipsis">{item.name.value} %</p>
                    <Box sx={{ width: '60px' }}>
                      <LineartextDecorationColor
                        color='inherit'
                        variant="determinate" value={item.name.percent} />
                    </Box>
                  </div>
                </li>
                <li className="w-[9%] flex flex-col items-center justify-start gap-1 p-2">
                  <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full">
                    {`${item.price.value1 ? "$" : ""}`} {item?.price?.value1}
                  </span>
                  <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full text-[#9f9fa8]">
                    {item?.price?.value2}₳
                  </span>
                </li>
                <li className="w-[9%] flex items-center justify-start gap-1 p-2">
                  <div className="flex items-center gap-3">
                    {item.h24.state === "rise" ? (<SVG.GoUp />) : item.h24.vaule === 0 ? ("") : (<SVG.GoDown />)}
                    <p className={`${item.h24.state === "rise" ? "text-green-300" : item.h24.vaule === 0 ? "text-[#9f9fa8]" : "text-red-400"}`}>{item?.h24?.vaule}%</p>
                  </div>
                </li>
                <li className="w-[9%] flex items-center justify-start gap-1 p-2">
                  <div className="flex items-center gap-3">
                    {item.d7.state === "rise" ? (<SVG.GoUp />) : item.d7.vaule === 0 ? ("") : (<SVG.GoDown />)}
                    <p className={`${item.d7.state === "rise" ? "text-green-300" : item.d7.vaule === 0 ? "text-[#9f9fa8]" : "text-red-400"}`}>{item?.d7?.vaule}%</p>
                  </div>
                </li>
                <li className="w-[9%] flex items-center justify-start gap-1 p-2">
                  <div className="flex items-center gap-3">
                    {item.d30.state === "rise" ? (<SVG.GoUp />) : item.d30.vaule === 0 ? ("") : (<SVG.GoDown />)}
                    <p className={`${item.d30.state === "rise" ? "text-green-300" : item.d30.vaule === 0 ? "text-[#9f9fa8]" : "text-red-400"}`}>{item?.d30?.vaule}%</p>
                  </div>
                </li>
                <li className="w-[9%] flex flex-col items-center justify-start gap-1 p-2">
                  <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full">
                    {`${item.holding.value1 ? "$" : ""}`} {item?.holding?.value1}
                  </span>
                  <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full text-[#9f9fa8]">
                    {item?.holding?.value2}₳
                  </span>
                </li>
                <li className="w-[9%] flex flex-col items-end justify-start gap-1 p-2">
                  <span className="flex justify-end  items-end gap-2 whitespace-nowrap w-full text-[#9f9fa8]">
                    {item?.avgBuy?.value1}
                  </span>
                  <div className="flex items-center gap-3">
                    {item.avgBuy.state === "rise" ? (<SVG.GoUp />) : item.avgBuy.value2 === 0 ? ("") : (<SVG.GoDown />)}
                    <p className={`${item.avgBuy.state === "rise" ? "text-green-300" : item.avgBuy.state === "down" ? "text-red-400" : "text-[#9f9fa8]"}`}>{item?.avgBuy?.value2}%</p>
                  </div>
                </li>
                <li className="w-[9%] flex flex-col items-end justify-start gap-1 p-2">
                  <span className="flex justify-end  items-end gap-2 whitespace-nowrap w-full text-[#9f9fa8]">
                    {item?.avgBuy?.value1}
                  </span>
                  <div className="flex items-center gap-3">
                    {item.avgSell.state === "rise" ? (<SVG.GoUp />) : item.avgSell.vaule2 === 0 ? ("") : (<SVG.GoDown />)}
                    <p className={`${item.avgSell.state === "rise" ? "text-green-300" : item.avgSell.state === "down" ? "text-red-400" : "text-[#9f9fa8]"}`}>{item?.avgSell?.value2}%</p>
                  </div>
                </li>
                <li className="w-[9%] flex  items-center justify-end  gap-3 p-2">
                  <SVG.SwapChart />
                  <div className="flex items-center w-6 h-6">
                    <img
                      src={Tappy}
                      className=""
                      height={30}
                      width={30}
                      alt="tappy" />
                  </div>
                </li>
                {/* <li className="w-[9%] flex flex-col items-end justify-end gap-1 p-2">
                <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full">
                  {item?.holdings?.value1}{`${item.holdings.value1 ? "₳" : ""}`}
                </span>
                <span className="flex flex-col items-end gap-2 whitespace-nowrap w-full text-[#9f9fa8]">
                  {item?.holdings?.value2}
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
              </li> */}
              </ul>
            ))}
          </div>
        </div>
      </SimpleBarReact >
    </>
  );
};

export default PortfolioHoldingTokenTable;
