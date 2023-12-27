import { Bublish } from "../../common/IMG/Images"
import { Bearish } from "../../common/IMG/Images"
import * as SVG from "../../common/Icons";
const ChartBulish = () => {
  return (
    <div className="flex flex-col px-3  mt-4 w-full  gap-4">
      <div className="flex items-center justify-end">
        <SVG.Alert />
      </div>
    <div className="flex items-center h-full   justify-between rounded-2xl ">

      <div className="flex flex-col gap-2">
        <div
          style={{
            "background": "linear-gradient(153deg, #000 60%, rgba(112, 236, 253, .5))",
          }}
          className="flex justify-center  items-center  rounded-[10px] cursor-pointer">
          <img src={Bublish} className="w-10" />
        </div>
        <div className="flex justify-center items-center rounded-lg border-[2px] border-green-400 px-3" >
          <p className=" text-[10px] text-yellow-400">239</p>

        </div>
      </div>
      <div className="w-[60%]">
        <div className=" w-full h-1 bg-red-400 rounded-2xl">
          <div className="w-[80%] h-1 bg-yellow-400 rounded-2xl"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div
          className="flex justify-center  items-center  rounded-[10px] cursor-pointer">
          <img src={Bearish} className="w-10" />
        </div>
        <div className="flex justify-center items-center rounded-lg border-[2px] border-red-400 px-3" >
          <p className=" text-[10px] text-red-400">80</p>

        </div>
      </div>
    </div>
    </div>
  )
}

export default ChartBulish