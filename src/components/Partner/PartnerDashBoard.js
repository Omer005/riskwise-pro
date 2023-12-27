import { Dex } from "../../common/IMG/Images";

import { useState } from "react"
const PartnerDashBoard = () => {
  const handleDoc = () =>{
     window.open(
      "https://dexhunter.gitbook.io/dexhunter-partners/",
      "_blank"
    )
  }
  return (
    <div className="flex flex-col gap-4">
      <p className="text-white text-xl tracking-wider mx-auto my-4">DexHunter Stats</p>
      <div className="flex flex-col bg-[#142028] rounded-xl p-4">
        <div className="flex gap-4 flex-wrap items-center">
            <div className="flex flex-col bg-[#0b1217] rounded-xl px-10 py-4">
              <p className="text-[#9f9fa8] text-xs inline-block">TRANSACTIONS</p>
              <p className="text-white text-lg">0</p>
            </div>
            <div className="flex flex-col bg-[#0b1217] rounded-xl px-10 py-4">
              <p className="text-[#9f9fa8] text-xs">PAID FEES</p>
              <p className="text-white text-lg">0 ADA</p>
            </div>
            <div className="flex flex-col bg-[#0b1217] rounded-xl px-10 py-4">
              <p className="text-[#9f9fa8] text-xs">PENDING FEES</p>
              <p className="text-white text-lg">0 ADA</p>
            </div>
          <div className="flex gap-4">
            <button 
            onClick={handleDoc}
            className="flex justify-center items-center bg-[#0b1217] rounded-xl px-8 py-2 h-fit w-fit hover:bg-[#3a4956] hover:bg-opacity-70">
              <p className="text-white text-base font-medium">Docs</p>
            </button>
            <button className="flex justify-center items-center bg-[#0b1217] rounded-xl px-8 py-2 h-fit w-fit hover:bg-[#3a4956] hover:bg-opacity-70">
              <p className="text-white text-base font-medium">Get Support</p>
            </button>
          </div>
        </div>
      </div>
      <p className="flex justify-center text-white text-sm font-medium">Dexy is sad when nobody is trading</p>
      <div className="mx-auto w-12 h-12 overflow-hidden">
        <img
          src={Dex}
          width={50}
          height={50}
          alt="hex"
          className="w-12 h-12"
        />
      </div>
    </div>

  )
}
export default PartnerDashBoard