import * as SVG from "../../common/Icons";
import { useState } from "react";
import PortfolioMenuItem from "./PortfolioMenuItem";
import PortfolioContentNoToken from "./PortfolioContentNoToken";
import PortfolioTadesTokenTable from "./PortfolioTadesTokenTable";
const HeaderItemDatas = [

  {
    id: 0,
    value: "Time",
    precent: "",
    svgFile: false,
    active: false,
  },
  {
    id: 1,
    value: "Type",
    precent: "[9%]",
    svgFile: false,
    active: false,
  },
  {
    id: 2,
    value: "Token",
    precent: "[9%]",
    svgFile: false,
    active: false,
  },
  {
    id: 3,
    value: "Token Amount",
    precent: "[9%]",
    svgFile: false,
    active: false,
  },
  {
    id: 4,
    value: "Swap Amount",
    precent: "[9%]",
    svgFile: false,
    active: false,
  },
  {
    id: 5,
    value: "Price",
    precent: "[12%]",
    svgFile: false,
    active: false,
  },
  {
    id: 6,
    value: "Exchange",
    precent: "[9%]",
    svgFile: false,
    active: false,
  },
  {
    id: 7,
    value: "PriceSinceTrade",
    precent: "[9%]",
    svgFile: false,
    active: false,
  },
]
const ButtonData = [
  {
    id: 0,
    value: "Trades",
    active: true,
  },
  {
    id: 1,
    value: "Profit/Loss",
    active: false,
  },
]
const PortfolioContentPart2TradesToken = () => {
  const [menuItem, setMenuItem] = useState(ButtonData)
  const [color, setColor] = useState("red")
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
  const [isActive, setIsActive] = useState(false);
  const handleDropDown = () => {
    setIsActive(!isActive)
  }
  const [isToken, setIsToken] = useState(true)
  return (
    <div className="p-4 w-full overflow-hidden bg-[#142028] rounded-2xl">
      <div className="flex justify-between w-full mb-4" >
        <div className="w-[44%] flex flex-col items-start gap-2">
          <p className="text-white text-lg font-normal">Buy/Sell</p>
          <div className="w-full bg-red-400 h-1 rounded-lg"></div>
          <div className="flex justify-between w-full">
            <p className="text-yellow-400 text-base font-normal">0 ₳</p>
            <p className="text-red-400 text-base font-normal">0 ₳</p>
          </div>

        </div>
        <div className="flex flex-col gap-1 w-[25%]">
          <div
            onClick={handleDropDown}
            className=" flex justify-between w-full relative bg-[#0b1217] rounded-lg pl-4 py-1 cursor-pointer ">
            <p className="text-white text-lg">Select Assests</p>
            <div className="flex items-center absolute top-0 bottom-0 right-3">
              {isActive ? <SVG.Up /> : <SVG.Down />}
            </div>
            {isActive &&
              <div
                style={{
                  "background": "linear-gradient(90deg, hsla(0, 0%, 100%, .05), hsla(0, 0%, 100%, .03))",
                }}
                className="absolute bg-[#0b1217] rounded-lg  p-3 z-50 top-[110%] left-0 right-0 flex justify-between items-center">
                <p className="text-white text-base">No Assets Available
                </p>
                <SVG.Close color={color} />
              </div>}
          </div>
        </div>
      </div>
      <div className="flex gap-4 w-fit bg-[#0b1217] rounded-lg  items-center mb-4">
        {ButtonData.map((item, idx) => {
          return (
            <span
              key={idx}
              onClick={() => handleBackground(idx)}
              className={` text-base hover:text-white cursor-pointer  py-1 px-3 ${item.active ? "bg-[#3a4956] text-white rounded-lg" : "text-[#9f9fa8]"}`}>{item.value}</span>
          )
        })}
      </div>
      <div className="flex justify-between  w-full px-">
        {HeaderItemDatas.map((item, idx) => {
          return (
            <PortfolioMenuItem key={idx} item={item} />
          )
        })}
      </div>
      <div className="w-full h-[1px] mt-2 bg-[#232323]"></div>
      {isToken ? (<PortfolioTadesTokenTable />) : (<PortfolioContentNoToken />)}
    </div>
  )
}
export default PortfolioContentPart2TradesToken;