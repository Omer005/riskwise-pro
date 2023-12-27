import DropDownMenu from "../../../components/marketing/DropDownMenu"
import { useState } from "react";
import * as SVG from "../../../common/Icons";

const LiquidityHeader = (props) => {
  const durationList = [
    { id: 0, value: "30d" },
    { id: 1, value: "24h" },
    { id: 2, value: "7d" },
    { id: 3, value: "90d" },
    { id: 4, value: "all" }
  ];

  const chooseItem = (item) => {
    setDuration(item.value);
  };
  const beSpread = () => {
    setSpread(!spread);
  };
  const [spread, setSpread] = useState(false);

  const [duration, setDuration] = useState("30d");
  return (
    <div
      style={{ "background": "linear-gradient(rgb(20, 32, 40), rgb(0, 0, 0)) 0px 0px no-repeat padding-box padding-box transparent" }}
      className="lg:flex lg:justify-between hidden w-full rounded-2xl h-full p-4">
      {/* Part 1 */}
      <div className="flex flex-col justify-center gap-3 w-1/5 bg-[#0b1217] rounded-xl p-3">
        <div className="flex justify-between">
          <p className="text-[#9f9fa8] font-normal text-sm">ADA in Liquidity
          </p>
        </div>
        <div className="flex justify-start">
          <p className="text-white font-normal text-lg">6.06 M ₳
          </p>
        </div>
      </div>
      {/* Part 2 */}
      <div className="flex flex-col justify-center gap-3 w-1/5 bg-[#0b1217] rounded-xl p-3">
        <div className="flex justify-between">
          <p className="text-[#9f9fa8] font-normal text-sm">24h Volume
          </p>
        </div>
        <div className="flex justify-start">
          <p className="text-white font-normal text-lg">2.61M ₳
          </p>
        </div>
      </div>
      {/* Part 3 */}
      <div className="flex flex-col gap-3 w-1/5 bg-[#0b1217] rounded-xl p-3">
        <div className="flex justify-between items-center w-full">
          <p className="text-[#9f9fa8] text-sm inline-block whitespace-normal overflow-hidden text-ellipsis">Liquidity Added / Removed</p>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-yellow-400 font-normal text-sm">22% in Profit
            </p>
            <p className="text-red-400 font-normal text-sm">78% in Loss
            </p>
          </div>
          <div className="flex w-full">
            {/* <div className={`w-[${lengthToken}%]`}> */}
            <div className="w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-[#0b1217] rounded-full"></div>
            {/* </div> */}
            <div className="w-full h-1 bg-gradient-to-l from-red-500 via-red-500 to-[#0b1217] rounded-full"></div>
          </div>
          <div className="flex justify-between">
            <p className="text-white font-normal text-sm">547,168 ₳
            </p>
            <p className="text-white font-normal text-sm">404,256 ₳
            </p>
          </div>
        </div>
      </div>
      {/* Part 4 */}
      <div className="flex flex-col gap-3 w-1/5 bg-[#0b1217] rounded-xl p-3">
        <div className="flex justify-between items-center w-full">
          <p className="text-[#9f9fa8] text-base inline-block whitespace-no overflow-hidden text-ellipsis truncate">Total Unrealized Profit/Loss</p>
          <div
            className="relative flex items-center bg-[#142028] px-3 h-7 rounded-[10px] cursor-pointer"
            id="spread"
            onClick={beSpread}
          >
            <span onClick={beSpread} className="pr-2 text-[#9f9fa8] text-sm">
              {duration}
            </span>
            <div className=" w-5 h-5 rounded-sm flex justify-center items-center">
              {spread === true ? <SVG.Up /> : <SVG.Down />}
            </div>
            <div
              className={`absolute bottom-0 left-0 z-50 ${spread === false ? "hidden" : "w-full"
                }`}
            >
              <DropDownMenu
                menuitems={durationList}
                chooseItem={chooseItem}
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-yellow-400 font-normal text-sm">22% in Profit
            </p>
            <p className="text-red-400 font-normal text-sm">78% in Loss
            </p>
          </div>
          <div className="flex w-full">
            {/* <div className={`w-[${lengthToken}%]`}> */}
            <div className="w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-[#0b1217] rounded-full"></div>
            {/* </div> */}
            <div className="w-full h-1 bg-gradient-to-l from-red-500 via-red-500 to-[#0b1217] rounded-full"></div>
          </div>
          <div className="flex justify-between">
            <p className="text-white font-normal text-sm">235
            </p>
            <p className="text-white font-normal text-sm">844
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LiquidityHeader