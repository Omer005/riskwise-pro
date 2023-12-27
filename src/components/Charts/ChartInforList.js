import { Tappy } from "../../common/IMG/Images"
import * as SVG from "../../common/Icons";
import UpdateInfor from "../../common/UpdateInfor";
const ChartInforList = () => {
  const handleUpdateInfo =() =>{
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSc2OMvnrzTwIXxSMsw8RHV_qphw4NhazR27qrGw8oOna7GMvA/viewform", "_blank")

  }
  const handleCardanoscan = () =>{
    window.open("https://cardanoscan.io/","_blank")
  }
  const handleEarth = () =>{
    window.open("https://singularitynet.io/","_blank")
  }
  return (
    <div
      className=" h-full rounded-xl ">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex justify-start items-center gap-1 cursor-pointer">
          <div 
          onClick={handleUpdateInfo}
          className=" flex items-center rounded-xl  bg-[#0b1217] cursor-pointer">
            <p className="text-[12px] font-bold text-[#7b7b7b] py-1 px-2">Update Info</p>
          </div>
          <img
          onClick={handleCardanoscan}
            src={Tappy}
            alt="taptool"
            className="w-5 h-5 cursor-pointer"
          />
          <div 
          onClick={handleEarth}
          className="cursor-pointer">
            <SVG.Earth />
          </div>
        </div>
        <div className="flex justify-center items-center cursor-pointer"> <SVG.Share /></div>
      </div>
      {/* Content */}
      {/* Daily volume */}
      <div className="flex px-1 mt-4">
        <p className="text-white text-base font-semibol w-1/2" >Daily volume:</p>
        <p className="text-white text-sm font-semibold w-1/2" >{UpdateInfor.DailyVolume}</p>
      </div>
      {/* Pooled EUR */}
      <div className="flex px-1 mt-2">
        <p className="text-white text-base font-semibol w-1/2" >PooledEUR:</p>
        <p className="text-white text-sm font-semibold w-1/2" >{UpdateInfor.PooledEUR}</p>
      </div>
      {/* Pooled LENFI  */}
      <div className="flex px-1 mt-2">
        <p className="text-white text-base font-semibol w-1/2" >Pooled LENFI:</p>
        <p className="text-white text-sm font-semibold w-1/2" >{UpdateInfor.PooledLENFI}</p>
      </div>
      {/* Total Tx */}
      <div className="flex px-1 mt-2">
        <p className="text-white text-base font-semibol w-1/2" >Total Tx:</p>
        <p className="text-white text-sm font-semibold w-1/2" >{UpdateInfor.TotalTx}</p>
      </div>
      {/* Market Cap */}
      <div className="flex px-1 mt-2">
        <p className="text-white text-base font-semibol w-1/2" >Market Cap:</p>
        <p className="text-white text-sm font-semibold w-1/2" >{UpdateInfor.MarketCap}</p>
      </div>
      {/* Dilutaed Market Cap */}
      <div className="flex px-1 mt-2">
        <p className="text-white text-base font-semibol w-1/2" >Dilutaed Market Cap:</p>
        <p className="text-white text-sm font-semibold w-1/2" >{UpdateInfor.DilutedMarketCap}</p>
      </div>
      {/* Circulating Supply */}
      <div className="flex px-1 mt-2">
        <p className="text-white text-base font-semibol w-1/2" >Circulating Supply:</p>
        <p className="text-white text-sm font-semibold w-1/2" >{UpdateInfor.CirculatingSupply}</p>
      </div>
      {/* Total Supply */}
      <div className="flex px-1 mt-2">
        <p className="text-white text-base font-semibol w-1/2" >Total Supply:</p>
        <p className="text-white text-sm font-semibold w-1/2" >{UpdateInfor.TotalSupply}</p>
      </div>
      {/* PooledPercent */}
      <div className="flex px-1 mt-2">
        <p className="text-white text-base font-semibol w-1/2" >% Pooled WMT:</p>
        <p className="text-white text-sm font-semibold w-1/2" >{UpdateInfor.PooledPercent}</p>
      </div>
      {/* 1 EUR */}
      <div className="flex px-1 mt-2">
        <p className="text-white text-base font-semibol w-1/2" >1 EUR:</p>
        <p className="text-white text-sm font-semibold w-1/2" >{UpdateInfor.OneEUR}</p>
      </div>
    </div>
  )
}
export default ChartInforList