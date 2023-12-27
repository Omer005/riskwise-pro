import * as SVG from "../../common/Icons";
import { useState } from "react";
import { MueslicSwap, MeanSwap, WRT, Vyfi, Spectrum, } from "../../common/IMG/Images";
import ChartCompareElement from "./ChartCompareElement";
import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
const ChartCompare = () => {
  const [isArrowDown, setIsArrowDown] = useState(false);
  const [isRoate, setIsRotate] = useState(false)
  const handleArrowDown = () => {
    setIsArrowDown(!isArrowDown);
    setIsRotate(!isRoate)
  }
  const compareDatas = [
    {
      name: "Minswap",
      price1: "4.95M₳",
      price2: "1.11M₳",
      price3: "2.384M₳",
      imageURL: MeanSwap
    },
    {
      name: "Minswap",
      price1: "4.95M₳",
      price2: "1.11M₳",
      price3: "2.384M₳",
      imageURL: MueslicSwap
    },
    {
      name: "Minswap",
      price1: "4.95M₳",
      price2: "1.11M₳",
      price3: "2.384M₳",
      imageURL: WRT
    },
    {
      name: "Minswap",
      price1: "4.95M₳",
      price2: "1.11M₳",
      price3: "2.384M₳",
      imageURL: Vyfi
    },
    {
      name: "Minswap",
      price1: "4.95M₳",
      price2: "1.11M₳",
      price3: "2.384M₳",
      imageURL: Spectrum
    }
  ]
  return (
    <div
      onClick={handleArrowDown}
      className=" h-full w-full rounded-2xl bg-[#0b1217] p-2 mt-3 cursor-pointer relative">
      {/* Header */}
      <div
        className="flex justify-center items-center gap-2 ">
        <p className="text-[#939393] text-sm font-medium">Compare DEXs</p>
        <div
          className={`transition-all duration-300  ${isArrowDown ? "rotate-180" : ""}`}>
          <SVG.Down />
        </div>
      </div>

      <div className={`flex flex-col absolute w-full bg-[#0b1217] top-2/3 pt-4  left-0 right-0  h-full transition-all duration-200 z-50 opacity-90 origin-top ${isRoate ? "scale-y-1 opacity-100" : "scale-y-0 opacity-0"}`} >
        <SimpleBarReact className='h-[250px]'>
          {compareDatas.map((item, index) => {
            return (
              <ChartCompareElement key={index} item={item} />)
          })}
        </SimpleBarReact>
      </div>
    </div>
  )
}
export default ChartCompare