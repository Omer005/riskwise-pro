import useMedia from "../../common/mediaQuery";
import ChartSlick from "../../components/Charts/ChartSick";
import ChartContent from "../../components/Charts/ChartContent";
import ChartPoolInfo from "../../components/Charts/ChartPoolInfo";
import ChartSwap from "../../components/Charts/ChartSwap";
import ChartOrders from "../../components/Charts/ChartOrders";
import * as SVG from "../../common/Icons";
import ChartSmallHeader from "../../components/Charts/ChartSmallHeader";
import ChartSmallHeaderDirect from "../../components/Charts/ChartSmallHeaderDirect";
import { useState } from "react";
const ChartInfoHeader = [
  { id: 0, value: "Swap", active: false, isSVG: true },
  { id: 1, value: "PoolInfo", active: false, isSVG: false },
  { id: 2, value: "Order", active: false, isSVG: false }
];

const Charts = () => {
  const usemedia = useMedia();
  const IsLarge = usemedia.useIsLarge;
  const [chartItem, setChartItem] = useState(ChartInfoHeader);
  const [isSelected, setIsSelected] = useState("")
  const handleItem = (_idx) => {
    const newChartInfoHeader = ChartInfoHeader.map((item, idx) => {
      if (_idx === idx) {
        item.active = true;
        setIsSelected(item.value);
      }
      else {
        item.active = false
      }
      return item;
    });
    setChartItem(newChartInfoHeader);
  }
  return (
    <div className="h-full w-full  pt-10 lg:px-4 px-0 overflow-x-hidden overflow-y-hidden pb-10" >
      {IsLarge ? (<ChartSmallHeaderDirect />) : (<ChartSmallHeader />)}
      <div className="lg:flex lg:justify-between pt-4  gap-3  overflow-x-hidden" >
        <ChartSlick />
        {/* Left Side */}
        <ChartContent />
        <div className={`flex ${isSelected === "" ? "h-[40px] w-[200px]" : " "}  rounded-2xl  bg-[#142028] fixed z-10 bottom-4`}>
          <div className="flex justify-between items-center w-full">
            {chartItem.map((item, idx) => (
              <div
                onClick={() => handleItem(idx)}
                key={idx}
                className={`flex items-center justify-center w-full cursor-pointer py-2  gap-2 ${item.active ? "bg-[#3a4956] text-white rounded-xl " : ""}`} >
                <p className={`${isSelected === "" ? "" : "hidden"} text-base font-medium hover:text-[#fff]  ${item.active ? " text-white " : "text-[#9f9fa8]"}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right Side */}
        <div className={`flex  ${isSelected === "" ? "hidden" : "sm:w-[400px] w-[340px]"} h-fit lg:mt-0 mt-3 gap-5 fixed sm:bottom-10 bottom-4 bg-[#294558] p-4 rounded-2xl bg-opacity-80 `}>
          <div
            onClick={() => setIsSelected("")}
            className="absolute right-4">
            <SVG.Close />
          </div>
          {isSelected === "PoolInfo" ? <ChartPoolInfo /> : ("")}
          {isSelected === "Swap" ? <ChartSwap /> : ("")}
          {isSelected === "Order" ? <ChartOrders /> : ("")}
        </div>
      </div>

    </div >
  )
}
export default Charts;