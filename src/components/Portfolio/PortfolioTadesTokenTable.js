import * as SVG from "../../common/Icons";
import Box from '@mui/material/Box';
import LineartextDecorationColor from "@mui/material/LinearProgress"
import { HoldingTokenData } from "./HoldingTokenData";
import SimpleBarReact from "simplebar-react";
import { Tappy } from "../../common/IMG/Images";
import { TradesTokenData } from "./TradesTokenData";
const PortfolioTadesTokenTable = () => {
  return (
    <>
      <SimpleBarReact className="h-[400px]">
      <div className="flex-col relative z-0 justify-center min-w-[800px] h-full overflow-x-auto hideScrollbar">
          <div className="w-full ">
            {TradesTokenData.ItemValue.map((item, idx) => (
              <ul
                key={idx}
                className="flex relative justify-between font-normal text-white text-xs border-b-[1px] border-[#232323] transition-all transform duration-200 hover:bg-[#3a4956] cursor-pointer whitespace-nowrap text-ellipsis"
              >
                <li className=" flex flex-col items-center justify-start gap-1 py-2">
                  <span className="flex flex-col items-start gap-2 whitespace-nowrap w-full">
                    {item.time.year}
                  </span>
                  <span className="flex flex-col items-start gap-2 whitespace-nowrap w-full text-[#9f9fa8]">
                    {item.time.clock}
                  </span>
                </li>
                <li className="w-[9%] flex  items-center justify-end gap-1 py-2">
                  <span className={`flex  items-center justify-end gap-2 whitespace-nowrap w-full text-base ${item.Type === "Buy" ? "text-yellow-400" : "text-red-400"}`}>
                    {item.Type}
                  </span>
                </li>
                <li className="w-[12%] flex  items-center justify-end gap-2 py-2">
                  <div className="flex items-center justify-end w-8 h-8">
                    <img
                      src={item.token.avatar}
                      className=""
                      height={30}
                      width={30}
                      alt="icon" />
                  </div>
                  <span className={`flex  items-center gap-2 justify-end whitespace-nowrap w-full text-base `}>
                    {item.token.name}
                  </span>
                </li>
                <li className="w-[9%] flex  items-center  gap-3 py-2">
                  <span className={`  whitespace-nowrap text-base `}>
                    {item.tokenAmount}k
                  </span>
                  <span className={` whitespace-nowrap text-base `}>
                    {item.token.name}
                  </span>
                </li>
                <li className="w-[9%] flex  items-center  gap-3 py-2">
                  <span className={`  whitespace-nowrap text-base `}>
                    {item.tokenAmount}k
                  </span>
                  <span className={` whitespace-nowrap text-base `}>
                    {item.token.name}
                  </span>
                </li>
                <li className="w-[9%] flex  items-center  gap-3 py-2">
                  <span className="flex justify-end items-center gap-2 whitespace-nowrap w-full">
                    {item?.swapAmount?.value}{`${item.swapAmount.value ? "₳" : ""}`}
                    <Box sx={{ width: '70px' }}>
                      <LineartextDecorationColor
                        color={`${item.swapAmount.state === "rise" ? "success" : "error"}`}
                        variant="determinate" value={item.swapAmount.percent} />
                    </Box>
                  </span>
                </li>
                <li className="w-[12%] flex  items-center justify-start gap-3 py-2">
                  <span className={`  whitespace-nowrap text-base `}>
                    {item.price}₳
                  </span>
                </li>
                <li className="w-[9%] flex  items-center justify-start gap-3 py-2">
                  <div className="felx items-center 2-6 h-6">
                    <img
                      src={item.exchange.avatar}
                      height={20}
                      width={20}
                      className=""
                      alt="" />
                  </div>
                  <span className={`  whitespace-nowrap text-base `}>
                    {item.exchange.name}
                  </span>
                </li>
                <li className="w-[9%] flex  items-center justify-start gap-3 py-2">
                  <span className={` text-red-400 whitespace-nowrap text-base `}>
                    Down{item.priceSinceTrade.percent}%
                  </span>
                </li>
                <li className=" flex  items-center justify-start gap-3 py-">
                  <img
                    src={Tappy}
                    height={20}
                    width={20}
                    className=""
                    alt="icon" />
                </li>
              </ul>
            ))}
          </div>
        </div>
      </SimpleBarReact >
    </>
  );
};

export default PortfolioTadesTokenTable;
