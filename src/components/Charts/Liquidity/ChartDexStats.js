import { DEXDatas } from "./DEXData"
import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { Icon } from "../../../common/IMG/Images";
import Box from '@mui/material/Box';
import LineartextDecorationColor from "@mui/material/LinearProgress"
const ChartDexStats = () => {
  return (
    <div className="lg:w-[28%] w-full bg-[#142028] rounded-2xl p-3">
      <div className="flex justify-between">
        <p className="text-[#9f9fa8] font-medium text-base">DEX Stats</p>
        <div className="sm:flex hidden">
          <div className="w-8 h-8">
            <img
              src={Icon}
              alt="icon"
              className="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between border-b-[1px] border-b-[#9f9fa8] py-2 px-3">
        <p className="text-[#9f9fa8] text-base">DEX</p>
        <p className="text-[#9f9fa8] text-base">Pooled ₳</p>
        <p className="text-[#9f9fa8] text-base">24h Vol</p>
        <p className="text-[#9f9fa8] text-base">Price</p>
      </div>
      <SimpleBarReact className="h-64 w-full">
        {DEXDatas?.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-between items-center py-2 px-2">
              <div className="flex flex-col items-center cursor-pointer w-[18%]">
                <div className="w-8 h-8 flex justify-center">
                  <img
                    src={item.DEX.image}
                    className="w-8 h-8 rounded-full"
                    alt="" />
                </div>
                <p className="text-white text-sm ">{item.DEX.name}</p>
              </div>
              <div className="flex flex-col items-end cursor-pointer w-[28%]">
                <p className="text-white text-sm ">{item.pooled.value}</p>
                <Box sx={{ width: '70%' }}>
                  <LineartextDecorationColor
                    color='success'
                    variant="determinate" value={item.pooled.percent} />
                </Box>
              </div>
              <div className="flex flex-col items-end cursor-pointer w-[28%]">
                <p className="text-white text-sm ">{item.vol.value}</p>
                <Box sx={{ width: '70%' }}>
                  <LineartextDecorationColor
                    color='success'
                    variant="determinate" value={item.vol.percent} />
                </Box>
              </div>
              <div className="flex flex-col items-end cursor-pointer w-[23%]">
                <p className="text-white text-sm ">{item.price} ₳</p>
                </div>
              {/* <div className="flex justify-start">
                <p className="text-white text-sm">{item.price}</p>
              </div>
              <div className="flex justify-start">
                <p className="text-yellow-400 text-sm">{item.percent}</p>
              </div>
              <div className="flex cursor-pointer justify-end">
                <SVG.SwapChart />
              </div> */}
            </div>
          )
        })}
      </SimpleBarReact>
    </div>
  )
}

export default ChartDexStats 