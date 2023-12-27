import { useState } from "react";
import * as SVG from "../../common/Icons";
import ChartCardGroup from "./ChartCardGroup";
import ChartCurrentyConversion from "./ChartCurrentyConversion";
import ChartDexHunter from "./ChartDexHunter";
import ChartWalletButton from "./ChartWalletButton";
import ChartLimit from "./ChartLimir";
import ChartSwapPreview from "./ChaerSwapPreview";
const ChartSwapHeader = (props) => {
  const isSetting =props.isSetting;
  const [isSwapActive, setIsSwapActive] = useState(true);
  const [isLimitActive, setIsLimitActive] = useState(false);
  const [isRotate, setIsRoate] = useState(false);
  const [color, setColor] = useState("yellow");
  const [isDetail, setIsDetail] = useState(true)
  const handleSwapClick = (swap) => {
    setIsSwapActive(true);
    setIsLimitActive(false);
  }
  const handleLimitClick = (swap) => {
    setIsSwapActive(false);
    setIsLimitActive(true);
  }
  const handlerRotate = () => {
    setIsRoate(!isRotate)
  }
  const handleDetail = (isDetail) => {
    setIsDetail(!isDetail);

  }
  return (
    <div className="flex flex-col w-full mt-8">
      {/* Swap and Limit */}
      {isDetail ? (
        <>
          <div className="flex justify-between items-center pl-4">
            <div className="flex gap-3">
              <p
                onClick={handleSwapClick}
                className={` text-base font-normal cursor-pointer ${isSwapActive ? "text-white" : "text-[#88919e]"}`}>Swap</p>
              <p
                id="Limit"
                onClick={handleLimitClick}
                className={`text-base font-normal cursor-pointer ${isLimitActive ? "text-white" : "text-[#88919e]"} `}>Limit</p>
            </div>
            <div className="flex gap-3">
              <div
                onClick={handlerRotate}
                className={`flex items-center cursor-pointer gap-3 duration-1000 transition-all ${isRotate ? "rotate-[360deg]" : ""}`}>
                <SVG.Refresh />
              </div>
              <div
                style={{
                  "background": "transparent linear-gradient(180deg, #121218, #070709) 0 0 no-repeat padding-box"
                }}
                className="flex gap-3  rounded-lg py-2 px-3">
                <p className="text-yellow-400 text-base cursor-pointer">0.5%</p>
                <div 
                onClick={props.handleSetting}
                className=" cursor-pointer">
                  <SVG.Setting color={color} />
                </div>
              </div>
            </div>
          </div>
          <ChartCardGroup />
        </>)
        : <ChartSwapPreview handleDetail={handleDetail} />}
      {isDetail && (isLimitActive ?
        <ChartLimit /> : <ChartCurrentyConversion
          isDetail={isDetail}
          handleDetail={handleDetail} />)}
      <ChartWalletButton />
      <ChartDexHunter />
    </div>
  )
}

export default ChartSwapHeader