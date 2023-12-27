import * as SVG from "../../common/Icons";
import { useState } from "react";

const PortfolioMenuItem = (props) => {
  const value = props.item.value;
  const svgFile = props.item.svgFile;
  const precent = props.item.precent;
  const [rotation, setRotation] = useState(false);
  const rotateComponent = () => setRotation(!rotation);


  return (
    <div className={`w-${precent}`} >
      {/* 24h */}
      <div
        onClick={rotateComponent}
        id="marketCap"
        className={`flex w-full items-center justify-end transition-all duration-300 cursor-pointer   gap-[1px] ${svgFile && "hover:mt-[-6px]"}`}>
        <div className="text-[#9f9fa8] text-sm font-normal  justify-center items-center whitespace-nowrap inline-block  overflow-hidden text-ellipsis  ">{value} </div>
        <div className={`text-[#9f9fa8] text-sm font-normal flex justify-center items-center ml-1 transition-all duration-300 ${rotation ? " rotate-180" : ""}`}>
          {svgFile && <SVG.Arrow />} </div>
      </div>
      {/* Total EUR */}
    </div>
  )
}
export default PortfolioMenuItem;