import { useState } from "react";
import * as SVG from "../../common/Icons";
const AddNewWallet = () => {
  return (
    <div
      className={`flex justify-between items-center p-3 rounded-2xl bg-gradient-to-r from-[#142028] to-[#121218] cursor-pointer`}>
      <div className="flex gap-4 w-full">
        <div className="flex justify-center items-center bg-[#253a48] rounded-full p-3">
          <SVG.chartPlus />
        </div>
        <div className="flex items-center text-center gap-2 max-w-[60%]  ">
          <p className="text-white text-center text-base font-normal whitespace-nowrap inline-block  overflow-hidden text-ellipsis">Add New Wallet</p>
        </div>
      </div>
    </div>
  )
}
export default AddNewWallet