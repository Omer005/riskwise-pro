import { useState } from "react";
import PortfolioMenuItem from "./PortfolioMenuItem";
import PortfolioContentNoToken from "./PortfolioContentNoToken";
const HeaderItemDatas = [

  {
    id: 0,
    value: "Debt",
    precent: "",
    svgFile: true,
    active: false,
  },
  {
    id: 1,
    value: "Collateral",
    precent: "[9%]",
    svgFile: true,
    active: false,
  },
  {
    id: 2,
    value: "Dabt",
    precent: "[9%]",
    svgFile: true,
    active: false,
  },
  {
    id: 3,
    value: "Collateral",
    precent: "[9%]",
    svgFile: true,
    active: false,
  },
  {
    id: 4,
    value: "Health Factor",
    precent: "[9%]",
    svgFile: true,
    active: false,
  },
  {
    id: 5,
    value: "Repayment Due",
    precent: "[12%]",
    svgFile: true,
    active: false,
  },
  {
    id: 6,
    value: "Interest Due",
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
const ButtonData = [
  {
    id: 0,
    value: "Aggregated",
    active: true,
  },
  {
    id: 1,
    value: "Individual",
    active: false,
  },
]
const PortfolioContentPart2DebtToken = () => {
  const [menuItem, setMenuItem] = useState(ButtonData)
  const handleBackground = (_idx) => {
    const newMenuItem = ButtonData.map((item, idx) => {
      if (idx === _idx) {
        item.active = true;
      }
      else {
        item.active = false;
      }
    })
    setMenuItem(newMenuItem)
  }
  return (
    <div className="p-4 w-full ">
      <div className="flex gap-4 w-fit bg-[#142028] rounded-lg  items-center mb-4">
        {ButtonData.map((item, idx) => {
          return (
            <span
              key={idx}
              onClick={() => handleBackground(idx)}
              className={`text-[#9f9fa8] text-base hover:text-white cursor-pointer  py-1 px-3 ${item.active ? "bg-[#3a4956] rounded-lg" : ""}`}>{item.value}</span>
          )
        })}
      </div>
      <div className="p-4 bg-[#142028] rounded-2xl">      
      <div className="flex justify-between  w-ful ">
        {HeaderItemDatas.map((item, idx) => {
          return (
            <PortfolioMenuItem key={idx} item={item} />
          )
        })}
      </div>
        <div className="w-full h-[1px] mt-2 bg-[#232323]"></div>
        <PortfolioContentNoToken />
      </div>
    </div>

  )
}
export default PortfolioContentPart2DebtToken;