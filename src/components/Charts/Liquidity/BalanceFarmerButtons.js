import { useState } from "react";
const BalanceFarmerButtons = () => {
  const [isActiveToken, setIsActiveToken] = useState(true);
  const [isActiveValue, setIsActiveValue] = useState(false);
  const handleTokenClick = () => {
    setIsActiveToken(true);
    setIsActiveValue(false);
  }
  const handleValueClick = () => {
    setIsActiveValue(true);
    setIsActiveToken(false);
  }
  return (
    <div className="flex bg-[#0b1217] rounded-xl justify-between items-center gap-4 w-[180px] h-8">
      <button
        onClick={handleTokenClick}
        className={` flex items-center justify-center text-[#9f9fa8] text-sm font-normal hover:text-white w-[90px] h-8 ${isActiveToken ? "bg-[#3a4956] text-white rounded-xl" : ""}`}>TopBalance</button>
      <button
        onClick={handleValueClick}
        className={` flex items-center justify-center text-[#9f9fa8] text-sm font-normal hover:text-white w-[90px] h-8  ${isActiveValue ? "bg-[#3a4956] text-white rounded-xl" : ""}`}>Top Farmers</button>
    </div>
  )
}
export default BalanceFarmerButtons