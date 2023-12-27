import TradingViewWidget from "react-tradingview-widget";
import ChartTable from "./ChartTable";
import ProLanding from "../Pro/ProLanding";
import { useState } from "react";
const ChartContent = () => {
  const [isRisk, setIsRisk] = useState(false);
  const handleButtonClick = () => {
    setIsRisk(!isRisk);
  }
  
  return (
    <div className="flex  w-full h-full justify-between ">
      {/* chart */}
      <div
        style={{
          background:
            "linear-gradient(to left, #142028, rgba(18, 18, 24, 0))",
        }}
        className="w-full  h-full p-4 rounded-xl">
        <div
          style={{ background: "#142028", borderRadius: "10px" }}
          className="bg-[#142028] h-full rounded-xl">
          <TradingViewWidget
            theme="Dark"
            symbol="BITSTAMP:ETHUSD"
            width="100%"
            backgroundColor="#000"
          />
        </div>
        <ChartTable isRisk={isRisk} handleButtonClick={handleButtonClick} />
        {isRisk && <ProLanding />}
      </div>
    </div>

  )
}

export default ChartContent