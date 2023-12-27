import * as SVG from "../../common/Icons";

const TopSection = () => {
  return (
    <div className="">
      <div className="lg:grid grid-cols-11 w-full h-full px-3 text-sm bg-gradient-to-t from-[#121218] to-[#142028] box-border rounded-3xl mt-4 hidden">
        <div className="col-start-1 col-end-3 bg-[#142028] h-[72px] rounded-2xl my-5 flex items-center text-white">
          <div className="ml-4">
            <div className="text-[#9f9fa8]">Active Addresses</div>
            <div className="flex place-items-baseline">
              <span className="mr-3">24,678</span>
              <SVG.GoDown />
              <span className="text-[#ff422b] ml-1">8.67 %</span>
            </div>
          </div>
        </div>
        <div className="col-start-4 col-end-6 bg-[#142028] h-[72px] rounded-2xl my-5 flex items-center text-white">
          <div className="ml-4">
            <div className="text-[#9f9fa8]">Trading Volume</div>
            <div className="flex place-items-baseline">
              <span className="mr-3">326,301,975 ₳</span>
              <SVG.GoUp />
              <span className="text-[#20eb7a!important] ml-1">4.35 %</span>
            </div>
          </div>
        </div>
        <div className="col-start-7 col-end-9 bg-[#142028] h-[72px] rounded-2xl my-5 flex items-center text-white">
          <div className="ml-4">
            <div className="text-[#9f9fa8]">Total Value Locked (TVL)</div>
            <div className="flex place-items-baseline">
              <span className="mr-3">271,292,715 ₳</span>
              <SVG.GoDown />
              <span className="text-[#ff422b] ml-1">1.67 %</span>
            </div>
          </div>
        </div>
        <div className="col-start-10 col-end-12 bg-[#142028] h-[72px] rounded-2xl my-5 flex items-center text-white">
          <div className="ml-4">
            <div className="text-[#9f9fa8]">DEX Token Market Cap</div>
            <div className="flex place-items-baseline">
              <span className="mr-3">150,331,282 ₳</span>
              <SVG.GoDown />
              <span className="text-[#ff422b] ml-1">16.44 %</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex justify-evenly min-w-[365px] bg-gradient-to-t from-black to-[#121218] box-border rounded-tr-3xl rounded-tl-3xl mt-4">
        <div className="flex flex-col items-center justify-center py-4 space-y-1 -mr-4">
          <div className="text-center text-[#9f9fa8] text-xs">Active Addresses</div>
          <div className="text-center text-[#fff] text-[10px]">25058</div>
          <div className="flex items-baseline">
            <SVG.GoDown />
            <span className="text-red-600 text-[10px]">10.86</span>
          </div>
        </div>
        <div className="flex justify-center items-center h-20 w-8 py-4 pr-2">
          <div className="h-full w-full border-r-2 rounded-full border-[#9f9fa8]"></div>
        </div>
        <div className="flex flex-col items-center justify-center py-4 space-y-1 -mr-4">
          <div className="text-center text-[#9f9fa8] text-xs">Trading Volume</div>
          <div className="text-center text-[#fff] text-[10px]">309265876₳</div>
          <div className="flex items-baseline">
            <SVG.GoDown />
            <span className="text-red-600 text-[10px]">14.07%</span>
          </div>
        </div>
        <div className="flex justify-center items-center h-20 w-8 py-4 pr-2">
          <div className="h-full w-full border-r-2 rounded-full border-[#9f9fa8]"></div>
        </div>
        <div className="flex flex-col items-center justify-center py-4 space-y-1 -mr-4">
          <div className="text-center text-[#9f9fa8] text-xs">TVL</div>
          <div className="text-center text-[#fff] text-[10px]">273421394₳</div>
          <div className="flex items-baseline">
            <SVG.GoDown />
            <span className="text-red-600 text-[10px]">6.09%</span>
          </div>
        </div>
        <div className="flex justify-center items-center h-20 w-8 py-4 pr-2">
          <div className="h-full w-full border-r-2 rounded-full border-[#9f9fa8]"></div>
        </div>
        <div className="flex flex-col items-center justify-center py-4 space-y-1">
          <div className="text-center text-[#9f9fa8] text-xs">DTM Cap</div>
          <div className="text-center text-[#fff] text-[10px]">145726366₳</div>
          <div className="flex items-baseline">
            <SVG.GoDown />
            <span className="text-red-600 text-[10px]">11.52%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
