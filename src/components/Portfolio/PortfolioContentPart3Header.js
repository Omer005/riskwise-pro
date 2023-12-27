const PortfolioContentPart3Header = () => {
 
  return (
      <div
        style={{
          "background": "transparent linear-gradient(267deg,#141414,#142028) 0 0 no-repeat padding-box"
        }}
        className="flex h-[85px] rounded-xl justify-around  gap-3 p-3 ">
        <div className="flex flex-col justify-center items-center ">
          <p className="text-base text-[#9f9fa8] font-normal whitespace-nowrap inline-block  overflow-hidden text-ellipsis"> Lifetime Interest:</p>
          <p className="text-lg text-white font-normal">+ 0 ADA</p>
        </div>
        <div className="h-full w-[3px] bg-[#000]"></div>
        <div className="flex flex-col justify-center items-center max-w-[80%]">
          <p className="text-base text-[#9f9fa8] font-normal whitespace-nowrap inline-block  overflow-hidden text-ellipsis"> Average APY:
          </p>
          <p className="text-lg text-white font-normal">0.00%
          </p>
        </div>
      </div>
  );
};

export default PortfolioContentPart3Header;
