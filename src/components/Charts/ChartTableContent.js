import * as SVG from "../../common/Icons";
import * as IMG from "../../common/IMG/Images";
import useMedia from "../../common/mediaQuery";
const ChartTableContent = (props) => {
  const ChartData = props.props
  const isRisk = props.isRisk;
  const handleButtonClick = props.handleButtonClick
  const usemedia = useMedia();
  const xsmall = usemedia.useXSmall;

  return (
    <div className="hover:bg-[#3a4956] hover:bg-opacity-70 transition-all duration-300 transform">
      <div
        className="flex pt-5 px-2  w-full ">
        {/* Date */}
        <div
          className={`flex items-center  justify-start lg:w-[180px] w-1/5  cursor-pointer transition-all duration-300  `}>
          <div className="text-[#9f9fa8] font-normal text-sm">{ChartData?.date} </div>
        </div>
        {/* Type */}
        <div className="lg:flex lg:items-center lg:justify-end hidden w-[7%] cursor-pointer ">
          <div className="flex justify-center items-center rounded-lg bg-[#3a4956] border-[1px] border-yellow-300 border-opacity-70 font-normal  ml-4 px-2 py-1 ">
            <p className={` text-sm font-normal ${ChartData.type === "Buy" ? "text-yellow-400" : ChartData.type === "Sell" ? "text-red-600" : "text-[#70ecfd]"} `}>{ChartData?.type}</p>
          </div>
        </div>
        {/* Price */}
        <div className="flex items-center justify-end lg:w-[12%] w-1/5">
          <div className="sm:text-sm text-xs text-white font-normal flex justify-center items-center ml-4">{ChartData?.price} </div>
        </div>
        {xsmall ?
          (
            <>
              <div
                className={`flex  items-center justify-end transition-all duration-300 cursor-pointer  lg:w-[35%] w-1/5  gap-2 `}>
                <div className="flex w-full justify-end items-center lg:gap-8 gap-0">
                  <p className="text-white flex justify-end sm:text-sm text-xs font-medium"> {ChartData?.TotalLENFI}</p>
                  <div className="lg:w-[70%] w-0">
                    <SVG.ChartProgress />
                  </div>
                </div>
              </div>
              <div
                className={`flex items-center justify-end  cursor-pointer transition-all duration-300  lg:w-[35%] w-1/5 gap-2`}>
                <div className="flex w-full justify-end items-center lg:gap-8 gap-0">
                  <p className="text-white sm:text-sm text-xs font-medium"> {ChartData?.TotalEUR}</p>
                  <div className="lg:w-[70%] w-0">
                    <SVG.ChartProgress />
                  </div>
                </div>
              </div>
            </>

          ) : (
            <div
              className={`flex items-center justify-end transition-all duration-300 cursor-pointer  lg:w-[35%] w-[30%]  gap-2 hover:mt-[-8px]`}>
              <div className="sm:text-sm text-xs text-white font-normal flex flex-col  justify-center items-center">
                <p className="text-xs">{ChartData?.TotalLENFI}</p>
                <p className="text-xs text-[#9f9fa8]">{ChartData?.TotalEUR}</p>
              </div>

            </div>
          )}
        {/* Wallet Profiler */}
        <div
          className={`flex items-center  justify-between pr-4 pl-10 cursor-pointer  transition-all duration-300 lg:w-[20%] xs:w-1/5 w-[30%] lg:gap-2 gap-0 `}>
          <div className="lg:w-6 w-0">
            <img
              src={IMG.Tappy}
              alt="taptool"
              className="lg:w-6 w-0"
            />
          </div>
          <div
            onClick={() => handleButtonClick(isRisk)}
            className={`flex justify-between items-center bg-[#142028] gap-1 rounded-lg pr-3 pl-1 py-[3px] transition-all duration-100  hover:border-yellow-300 border-[#121218] border-[2px]`}>
            <SVG.Price1 />
            <span className="text-[#9f9fa8]">{`❯`}</span>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] mt-5 bg-[#232323]"></div>
    </div>
  )
}
export default ChartTableContent;