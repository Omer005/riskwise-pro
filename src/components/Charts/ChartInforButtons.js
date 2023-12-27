import * as SVG from "../../common/Icons";
import { iUSD } from "../../common/IMG/Images";
import { EUR } from "../../common/IMG/Images";
import { ADA } from "../../common/IMG/Images";
import { USD } from "../../common/IMG/Images";
import { BTC } from "../../common/IMG/Images";
import { ETH } from "../../common/IMG/Images";
import { CAD } from "../../common/IMG/Images";
import ChartInforButton from "../../common/Button/ChartInforButton";
import { useState } from "react";
const data = [
  { id: 0, value: "ADA", imgurl: ADA, active: true },
  { id: 1, value: "EUR", imgurl: EUR, active: false },
  { id: 2, value: "USD", imgurl: USD, active: false },
  { id: 3, value: "BTC", imgurl: BTC, active: false },
  { id: 4, value: "ETH", imgurl: ETH, active: false },
  { id: 5, value: "CAD", imgurl: CAD, active: false },

];
const ChartInforButtons = () => {
  const [rotate, setRotate] = useState(false);
  const [isArrowDown, setIsArrowDown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveButtons, setIsActiveButtons] = useState(false);
  const [dispValue, setDispValue] = useState(data[0]);
  const [menuItems, setMenuItems] = useState(data);
  const handleRotate = () => { setRotate(!rotate); }

  const handleArrowDown = () => {
    setIsArrowDown(!isArrowDown);
    setIsActiveButtons(!isActiveButtons);
  }
  const handleItem = (_idx) => {
    const newMenuItems = menuItems.map((item, idx) => {
      if (_idx === idx) {
        item.active = true;
        setDispValue(item);
      } else {
        item.active = false;
      }
      return item;
    });

    setMenuItems(newMenuItems);
  };
  return (
    <div
      className=" h-full rounded-xl bg-[#0b1217] p-2 mt-3">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex flex-col justify-center items-start gap-2 cursor-pointer">
          <div className={`flex items-center rounded-xl ${rotate ? "order-2" : "order-1"} cursor-pointer`}>
            <div className="flex justify-start items-center pl-1 pr-6 py-[2px]  bg-[#142028] rounded-xl ">
              <img
                src={iUSD}
                alt="iUSD"
                className="w-5 h-5 cursor-pointer"
              />
              <p className="text-[12px] font-normal text-xs text-white  px-2 py-1">iUSD</p>
            </div>
            <p className="text-[12px] font-bold text-xs text-white  px-2 py-1">1</p>

          </div>
          <div className={`flex items-center rounded-xl  ${rotate ? "order-1" : "order-2"} cursor-pointer`}>
            <div className="flex justify-start items-center relative pl-1 pr-6 py-[2px]  bg-[#142028] rounded-xl">
              <img
                src={dispValue.imgurl}
                alt="iUSD"
                className="w-5 h-5 cursor-pointer "
              />
              <p className="text-[12px] font-normal text-xs text-white  px-2 py-1">{dispValue.value}</p>
              <div
                onClick={handleArrowDown}
                className={`transition-all duration-300 ${isArrowDown ? "rotate-180" : ""}`}>
                <SVG.ArrowDown />
              </div>
              <div className={`absolute left-0 top-[110%] w-full bg-[#142028] rounded-[10px] z-10 transition-all transform origin-top duration-200   ${isActiveButtons ? "scale-y-1 opacity-100" : "scale-y-0 opacity-0"}`}>
                {data.map((item, index) => {
                  return (
                    <>
                      <ChartInforButton key={index} item={item}  handleItem={handleItem}
                      />
                    </>
                  )
                })}
                <div
                  className={`flex items-center cursor-pointer px-2 py-1 gap-1 ${isActive ? "bg-[#24242c] " : ""}`}>
                 
                </div>
              </div>
            </div>
            <p className={`text-[12px] font-bold text-xs text-white  px-2 py-1 `}>0.804</p>
          </div>
        </div>
        <div
          onClick={handleRotate}
          className={`flex justify-center items-center cursor-pointer transition-all duration-300 ${rotate ? " rotate-180" : ""}`}> <SVG.Reverse /></div>
      </div>


    </div >
  )
}
export default ChartInforButtons