import { useState } from "react";
// import { MoonLoader } from "react-spinners";
import PortChart from "./PortChart";

const datas = [
  { id: 0, date: "24h", active: true },
  { id: 1, date: "7d", active: false },
  { id: 2, date: "30d", active: false },
  { id: 3, date: "90d", active: false },
  { id: 4, date: "1y", active: false },
  { id: 5, date: "All", active: false }
];

const PortfolioChartContent = () => {
  const [dataItem, setDataItem] = useState(datas);
  const handleClick = (_idx) => {
    const newItem = datas.map((item, idx) => {
      if (_idx === idx) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setDataItem(newItem);
  };
  return (
    <div
      style={{
        background: "linear-gradient(1turn, #142028, rgba(18, 18, 24, 0))",
        boxShadow: "0 3px 25px rgba(0, 0, 0, 0.522)"
      }}
      className="w-full p-4 rounded-xl h-full"
    >
      <div className="flex sm:gap-14 gap-4 justify-end px-6 pb-2">
        <div className="bg-[#142028] md:space-x-4 space-x-2 rounded-2xl px-2 py-1">
          {datas.map((item, idx) => {
            return (
              <span
                onClick={() => handleClick(idx)}
                key={idx}
                className={`${
                  item.active
                    ? "bg-[#3a4956] rounded-xl text-white text-base"
                    : ""
                } px-2 text-[#9f9fa8] text-base cursor-pointer`}
              >
                {item.date}
              </span>
            );
          })}
        </div>
      </div>
      <div className="py-8 relative">
        <div className="h-[300px] w-full flex justify-center items-center">
          <div className="flex justify-center items-center w-full h-full">
            {/* <MoonLoader speedMultiplier="0.5" size="30" color="yellow" /> */}
            <PortChart />
          </div>
          <div className="absolute right-0 bottom-0">
            <p className="text-[#9f9fa8] text-xs">
              Right click on point to exclude data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioChartContent;
