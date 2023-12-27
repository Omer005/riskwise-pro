import { useState } from "react";
import * as SVG from "../../common/Icons";

const PortfolioContentNoToken = () => {
  const [color, setColor] = useState("yellow")
  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <div className="bg-yellow-100 p-1 rounded-full">
        <SVG.Close color={color} />
      </div>
      <p className="text-[#9f9fa8] text-base font-normal">No tokens</p>
    </div>
  )
}
export default PortfolioContentNoToken;