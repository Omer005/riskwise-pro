import { useState } from "react";
import { PuffLoader } from 'react-spinners';
import * as SVG from "../../common/Icons";

const ChartCurrentyConversion = (props) => {
  const isDetail=props.isDetail;
  const [isUSD, setIsUSD] = useState(true)
  const handleIUSDClick = () => {
    setIsUSD(!isUSD);
  }
  const [color, setColor] = useState("yellow");
  return (
    <>
      <div className="flex justify-between items-center px-4 mt-2">
        <div
          className="flex items-center gap-[1px] text-white hover:text-[#9f9fa8] cursor-pointer">
          <PuffLoader
            size={25}
            color="yellow" />
          <div
            onClick={handleIUSDClick}
            className="flex ml-1">
            <p className="text-base">{isUSD ? "1 ADA" : "1 USD"} </p>
            <p className="text-base">= </p>
            <p className="text-base">{isUSD ? "0.4231343" : "2.36"} </p>
            <p className="text-base">{isUSD ? "i USD" : "ADA"} </p>
          </div>
        </div>
        <div className="flex gap-3 cursor-pointer">
          <p 
          onClick={()=>{
            props.handleDetail(isDetail)
          }}
          className="text-yellow-400 text-base font-medium">DETAILS</p>
          <div className="flex justify-center items-center rotate-180">
            <SVG.Down color={color} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChartCurrentyConversion