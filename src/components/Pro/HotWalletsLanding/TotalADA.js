import { useState } from "react";
import { useSelector } from "react-redux";
import { TotalADAData } from "../LandingData/TotalADA";
import { Info, Star, Right } from "../../../common/Icons";
import Pagination from "../HotWalletsLanding/Pagination";

const TotalADA = () => {
  const [totalADAData, setTotalADAData] = useState(TotalADAData);
  const [totalADADataItems, setTotalADADataItems] = useState(
    totalADAData.ItemValue
  );

  const { isDollar } = useSelector((state) => state.wallet);

  const handleLike = (_idx, e) => {
    e.stopPropagation();
    const newTotalADAData = totalADADataItems.map((item, idx) => {
      if (item.id === _idx) item.like = !item.like;
      return item;
    });
    setTotalADADataItems(newTotalADAData);
    //  TODO API
  };

  return (
    <>
      <div className="relative flex-col justify-center w-full h-full overflow-x-auto hideScrollbar">
        <div className="min-w-[1300px] mt-6 bg-[#142028] p-4 rounded-2xl">
          <ul className="flex justify-between text-sm font-semibold text-white border-b-[1px] border-[#232323] bg-[#142028] py-[2px]">
            <li className="sticky left-0 bg-[#142028] w-[16%] flex items-center justify-start gap-2 p-2">
              <Star.StartOutline />
              <span className="whitespace-nowrap">Address</span>
            </li>
            <li className="w-[14%] flex items-center justify-end p-2">
              <span className="whitespace-nowrap">Total ADA</span>
            </li>
            <li className="w-[14%] flex items-center justify-end p-2">
              <span className="whitespace-nowrap">% ADA</span>
            </li>
            <li className="w-[14%] flex items-center justify-end p-2">
              <span className="whitespace-nowrap">Change 7d</span>
            </li>
            <li className="w-[14%] flex items-center justify-end p-2">
              <span className="whitespace-nowrap">Change 30d</span>
            </li>
            <li className="w-[14%] flex items-center justify-start p-2">
              <span className="whitespace-nowrap">Top Hodings</span>
            </li>
            <li className="w-[14%] flex items-center justify-end gap-2 p-2">
              <span className="whitespace-nowrap">Wallet Profiler</span>
              <Info />
            </li>
          </ul>
          <div className="min-w-[1300px]">
            {totalADADataItems.map((item, idx) => (
              <ul
                key={idx}
                onClick={() => window.open(item.walletprofiler.url, "_blank")}
                className="flex justify-between font-normal text-white text-xs border-b-[1px] border-[#232323] hover:bg-[#3a4956] cursor-pointer whitespace-nowrap truncate bg-[#142028]"
              >
                <li className="sticky left-0 bg-[#142028] shadow-lg w-[16%] flex items-center justify-start gap-2 p-2 z-30">
                  <div onClick={(e) => handleLike(item.id, e)}>
                    {item.like ? <Star.StarFill /> : <Star.StartOutline />}
                  </div>
                  <span className="w-full truncate">{item.address}</span>
                </li>
                <li className="w-[14%] flex items-center gap-1 p-2">
                  <div className="w-1/2">
                    {isDollar
                      ? `$ ${Math.floor(
                          item.totalADA / 2.633475
                        ).toLocaleString()}`
                      : `₳ ${item.totalADA.toLocaleString()}`}
                  </div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    {item.totalADA > 0 && (
                      <div
                        className="h-1 bg-yellow-400 rounded-3xl absolute"
                        style={{
                          width: `${Math.floor(
                            (item.totalADA * 100) / totalADAData.maxtotalADA
                          )}%`,
                        }}
                      ></div>
                    )}
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[14%] flex items-center gap-1 p-2">
                  <div className="w-1/3">{item.percentADA} %</div>
                  <div className="w-2/3 relative overflow-x-hidden">
                    {item.percentADA > 0 && (
                      <div
                        className="h-1 bg-yellow-400 rounded-3xl absolute"
                        style={{
                          width: `${item.percentADA}%`,
                        }}
                      ></div>
                    )}
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[14%] flex items-center justify-end gap-1 p-2">
                  {isDollar
                    ? `$ ${Math.floor(
                        item.change7d[0] / 2.633475
                      ).toLocaleString()}`
                    : `₳ ${item.change7d[0].toLocaleString()}`}
                  <span
                    className={`${
                      item.change7d[1] >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    ({item.change7d[1].toFixed(2)} %)
                  </span>
                </li>
                <li className="w-[14%] flex items-center justify-end gap-1 p-2">
                  {isDollar
                    ? `$ ${Math.floor(
                        item.change30d[0] / 2.633475
                      ).toLocaleString()}`
                    : `₳ ${item.change30d[0].toLocaleString()}`}
                  <span
                    className={`${
                      item.change30d[1] > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    ({item.change30d[1].toFixed(2)} %)
                  </span>
                </li>
                <li className="w-[14%] flex items-center justify-start p-2">
                  <div className="w-full whitespace-nowrap overflow-x-scroll scrollable-invisible">
                    <div className="flex">
                      {item.topholding.map((subitem, subidx) => (
                        <p
                          key={subidx}
                          className="border-dashed border-b-[1px] mx-[2px]"
                          onClick={() => window.open(subitem.url, "_blank")}
                        >
                          {subitem.name}
                          {subidx < item.topholding.length - 1 && ","}
                        </p>
                      ))}
                    </div>
                  </div>
                </li>
                <div className="w-[14%] flex items-center justify-end p-2 ">
                  <div className="flex gap-3 bg-[#192028] bg-opacity-70 rounded-md px-2 py-1">
                    {item.walletprofiler.avatar}
                    <Right />
                  </div>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <Pagination number={totalADAData.totaldatanumber} />
    </>
  );
};

export default TotalADA;
