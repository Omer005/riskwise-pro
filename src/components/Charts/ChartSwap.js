import { useState } from "react"
import ChartPosition from "./ChartPosition";
import ChartWatchList from "./ChartWatchList";
import ChartBulish from "./ChartBulish";
import ChartSwapHeader from "./ChaerSwapHeader";
import ChartSwapSetting from "./ChaerSwapSetting";
const ChartSwap = () => {
  const [isSetting, setIsSetting] = useState(false);
  const handleSetting = () => {
    setIsSetting(!isSetting);
  }
  return (
    <>
      {isSetting ? (<ChartSwapSetting isSetting={isSetting} handleSetting={handleSetting}/>) : (<ChartSwapHeader isSetting={isSetting} handleSetting={handleSetting}/>)}
      {/* <ChartPosition />
      <ChartBulish />
      <ChartWatchList /> */}
    </>
  )
}

export default ChartSwap