import { useState } from "react";
const TokenValueButtonGroup = () => {
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
    <div className="flex justify-between items-center bg-[#0d1217] rounded-xl gap-4 w-[110px] h-8">
      <button
        onClick={handleTokenClick}
        className={` flex items-center justify-center text-[#9f9fa8] text-sm font-normal hover:text-white w-[55px] h-8 ${isActiveToken ? "bg-[#3a4956] text-white rounded-xl" : ""}`}>Token</button>
      <button
        onClick={handleValueClick}
        className={` flex items-center justify-center text-[#9f9fa8] text-sm font-normal hover:text-white w-[55px] h-8  ${isActiveValue ? "bg-[#3a4956] text-white rounded-xl" : ""}`}>Value</button>
    </div>
  )
}
export default TokenValueButtonGroup