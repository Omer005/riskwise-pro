import { useState } from "react";
import PortfolioMenuItem from "./PortfolioMenuItem";
import PortfolioContentNoToken from "./PortfolioContentNoToken";
import PortfolioHoldingTokenTable from "./PortfolioHoldingTokenTable";
const HeaderItemDatas = [

  {
    id: 0,
    value: "Price",
    precent: "[9%]",
    svgFile: true,
    active: false,
  },
  {
    id: 1,
    value: "24h",
    precent: "[9%]",
    svgFile: true,
    active: false,
  },
  {
    id: 2,
    value: "7d",
    precent: "[9%]",
    svgFile: true,
    active: false,
  },
  {
    id: 3,
    value: "30h",
    precent: "[9%]",
    svgFile: true,
    active: false,
  },
  {
    id: 4,
    value: "Holdings",
    precent: "[9%]",
    svgFile: true,
    active: false,
  },
  {
    id: 5,
    value: "AVG Buy",
    precent: "[9%]",
    svgFile: true,
    active: false,
  },
  {
    id: 6,
    value: "AVG Sell",
    precent: "[9%]",
    svgFile: true,
    active: false,
  },
  {
    id: 7,
    value: "Links",
    precent: "[9%]",
    svgFile: false,
    active: false,
  },
]
const PortfolioContentPart2TableHeader = () => {
  const [isToken, setIsToken] = useState(true)
  return (
    <div className="p-4 bg-[#142028] rounded-2xl">
      <div className="flex justify-between">
        <div className={`w-[21%]`} >
          {/* 24h */}
          <div
            className={`flex w-full items-center justify-start transition-all duration-300 cursor-pointer   gap-2 `}>
            <div className="text-[#9f9fa8] text-sm font-normal flex justify-center items-center ">Name </div>
          </div>
        </div>
        {HeaderItemDatas.map((item, idx) => {
          return (
            <PortfolioMenuItem key={idx} item={item} />)
        })}
      </div>
      <div className="w-full h-[1px] mt-2 bg-[#232323]"></div>
      {isToken ? (<PortfolioHoldingTokenTable />) : (<PortfolioContentNoToken />)}
    </div>
  )
}
export default PortfolioContentPart2TableHeader;