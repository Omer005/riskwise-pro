import { useState, useEffect } from "react";

import { UpDown } from "../../../../../common/Icons";
import Pagination from "../../../HotWalletsLanding/Pagination";

import { TokenSummaryData as Data } from "./Fakedata";

const TokensSummary = (props) => {
  const [data, setData] = useState(Data);
  const [dataItems, setDataItems] = useState(Data.itemValue);

  const [sortByHoldings, setSortByHoldings] = useState(false);
  const [sortByBuyAmount, setSortByBuyAmount] = useState(false);
  const [sortByBuyPrice, setSortByBuyPrice] = useState(false);
  const [sortBySellAmount, setSortBySellAmount] = useState(false);
  const [sortBySellPrice, setSortBySellPrice] = useState(false);
  const [sortByIncome, setSortByIncome] = useState(false);
  const [sortByRealizedProfit, setSortByRealizedProfit] = useState(false);
  const [sortByUnrealizedProfit, setSortByUnrealizedProfit] = useState(false);
  const [sortByTotalProfit, setSortByTotalProfit] = useState(false);
  const [sortByROI, setSortByROI] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  useEffect(() => {
    props.selectCollection === "All" || props.selectCollection === "ADA"
      ? setDataItems(Data.itemValue)
      : filterData();
  }, [props]);

  const filterData = () => {
    let filteredData = [];
    Data.itemValue.map((item, id) => {
      if (item.token === props.selectCollection) {
        filteredData.push(item);
      }
    });
    setDataItems(filteredData);
  };

  const handleSortByHoldings = () => {
    setSortByHoldings(!sortByHoldings);
    setIsSelected("Holdings");
    // TODO API
  };

  const handleSortByBuyAmount = () => {
    setSortByBuyAmount(!sortByBuyAmount);
    setIsSelected("BuyAmount");
    // TODO API
  };

  const handleSortByBuyPrice = () => {
    setSortByBuyPrice(!sortByBuyPrice);
    setIsSelected("BuyPrice");
    // TODO API
  };

  const handleSortBySellAmount = () => {
    setSortBySellAmount(!sortBySellAmount);
    setIsSelected("SellAmount");
    // TODO API
  };

  const handleSortBySellPrice = () => {
    setSortBySellPrice(!sortBySellPrice);
    setIsSelected("SellPrice");
    // TODO API
  };

  const handleSortByRealizedProfit = () => {
    setSortByRealizedProfit(!sortByRealizedProfit);
    setIsSelected("RealizedProfit");
    // TODO API
  };

  const handleSortByUnrealizedProfit = () => {
    setSortByUnrealizedProfit(!sortByUnrealizedProfit);
    setIsSelected("UnrealizedProfit");
    // TODO API
  };

  const handleSortByTotalProfit = () => {
    setSortByTotalProfit(!sortByTotalProfit);
    setIsSelected("TotalProfit");
    // TODO API
  };

  const handleSortByROI = () => {
    setSortByROI(!sortByROI);
    setIsSelected("ROI");
    // TODO API
  };

  const handleSortByIncome = () => {
    setSortByIncome(!sortByIncome);
    setIsSelected("Income");
    // TODO API
  };

  return (
    <div>
      <div className="relative flex-col justify-center w-full h-full overflow-x-auto hideScrollbar mb-4">
        <div className="min-w-[1540px] mt-6 bg-[#142028] p-4 rounded-2xl">
          <ul className="flex justify-between bg-[#142028] text-md font-semibold text-white border-b-[1px] border-[#232323] py-[2px]">
            <li className="sticky left-0 bg-[#142028] w-[8%] flex items-center justify-start gap-2 p-2">
              <span className="whitespace-nowrap">Token</span>
            </li>
            <li
              className={`w-[8%] flex items-center justify-start gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "Holdings" && "-translate-y-1"
              }`}
              onClick={handleSortByHoldings}
            >
              <span className="whitespace-nowrap">Holdings</span>
              <UpDown
                rotate={sortByHoldings}
                active={isSelected === "Holdings"}
              />
            </li>
            <li
              className={`w-[10%] flex items-center justify-start gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "BuyAmount" && "-translate-y-1"
              }`}
              onClick={handleSortByBuyAmount}
            >
              <span className="whitespace-nowrap">Buy Amount</span>
              <UpDown
                rotate={sortByBuyAmount}
                active={isSelected === "BuyAmount"}
              />
            </li>
            <li
              className={`w-[8%] flex items-center justify-start gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "BuyPrice" && "-translate-y-1"
              }`}
              onClick={handleSortByBuyPrice}
            >
              <span className="whitespace-nowrap">Avg Buy Price</span>
              <div className="w-4">
                <UpDown
                  rotate={sortByBuyPrice}
                  active={isSelected === "BuyPrice"}
                />
              </div>
            </li>
            <li
              className={`w-[10%] flex items-center justify-start gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "SellAmount" && "-translate-y-1"
              }`}
              onClick={handleSortBySellAmount}
            >
              <span className="whitespace-nowrap">Sell Amount</span>
              <UpDown
                rotate={sortBySellAmount}
                active={isSelected === "SellAmount"}
              />
            </li>
            <li
              className={`w-[8%] flex items-center justify-start gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "SellPrice" && "-translate-y-1"
              }`}
              onClick={handleSortBySellPrice}
            >
              <span className="whitespace-nowrap">Avg Sell Price</span>
              <div className="w-4">
                <UpDown
                  rotate={sortBySellPrice}
                  active={isSelected === "SellPrice"}
                />
              </div>
            </li>
            <li
              className={`w-[10%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "Income" && "-translate-y-1"
              }`}
              onClick={handleSortByIncome}
            >
              <span className="whitespace-nowrap">Income</span>
              <UpDown rotate={sortByIncome} active={isSelected === "Income"} />
            </li>
            <li
              className={`w-[10%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "RealizedProfit" && "-translate-y-1"
              }`}
              onClick={handleSortByRealizedProfit}
            >
              <span className="whitespace-nowrap">Realized Profit</span>
              <UpDown
                rotate={sortByRealizedProfit}
                active={isSelected === "RealizedProfit"}
              />
            </li>
            <li
              className={`w-[10%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "UnrealizedProfit" && "-translate-y-1"
              }`}
              onClick={handleSortByUnrealizedProfit}
            >
              <span className="whitespace-nowrap">Unrealized Profit</span>
              <div className="w-4">
                <UpDown
                  rotate={sortByUnrealizedProfit}
                  active={isSelected === "UnrealizedProfit"}
                />
              </div>
            </li>
            <li
              className={`w-[10%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "TotalProfit" && "-translate-y-1"
              }`}
              onClick={handleSortByTotalProfit}
            >
              <span className="whitespace-nowrap">Total Profit</span>
              <UpDown
                rotate={sortByTotalProfit}
                active={isSelected === "TotalProfit"}
              />
            </li>
            <li
              className={`w-[8%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "ROI" && "-translate-y-1"
              }`}
              onClick={handleSortByROI}
            >
              <span className="whitespace-nowrap">ROI %</span>
              <UpDown rotate={sortByROI} active={isSelected === "ROI"} />
            </li>
          </ul>
          <div className="min-w-[1540px]">
            {dataItems.map((item, idx) => (
              <ul
                key={idx}
                className="flex justify-between bg-[#142028] font-normal text-white text-sm border-b-[1px] border-[#232323] hover:bg-[#3a4956] cursor-pointer whitespace-nowrap"
              >
                <li className="sticky left-0 bg-[#142028] shadow-lg w-[8%] flex items-center justify-start gap-2 p-2 z-30">
                  <span className="">
                    <img src={item.icon} className="w-12 rounded-full" />
                  </span>
                  <span className="w-full truncate">{item.token}</span>
                </li>
                <li className="w-[8%] flex items-center justify-start space-y-1 p-2">
                  <div className="">
                    <span className="">
                      {item.holdings.top.toLocaleString()}
                    </span>
                    <span className="block text-[12px] text-[#9f9fa8]">{`${item.holdings.bottom} ₳`}</span>
                  </div>
                </li>
                <li className="w-[10%] flex items-center justify-start space-y-1 p-2">
                  <div className="">
                    <span className="truncate whitespace-nowrap">
                      {item.buyAmount.top.toLocaleString()}
                    </span>
                    <span className="block text-[12px] text-[#9f9fa8]">{`${item.buyAmount.bottom} ₳`}</span>
                  </div>
                </li>
                <li className="w-[8%] flex items-center justify-start p-2">
                  <div className="">{` ${item.buyPrice} ₳`}</div>
                </li>
                <li className="w-[10%] flex items-center justify-start space-y-1 p-2">
                  <div className="">
                    <span className="">
                      {item.sellAmount.top.toLocaleString()}
                    </span>
                    <span className="block text-[12px] text-[#9f9fa8]">{`${item.sellAmount.bottom} ₳`}</span>
                  </div>
                </li>
                <li className="w-[8%] flex items-center justify-start gap-3 p-2">
                  <div className="">{item.sellPrice} ₳</div>
                </li>
                <li className="w-[10%] flex items-center justify-end space-x-2 p-2">
                  <div className="">{`${item.income.toLocaleString()} ₳`}</div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    <div
                      className={`${
                        item.income > 0 ? "bg-yellow-400" : "bg-red-500"
                      } h-1 rounded-3xl absolute`}
                      style={{
                        width: `${Math.floor(
                          (Math.abs(item.income) * 100) / data.maxIncome
                        )}%`
                      }}
                    ></div>
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[10%] flex items-center justify-end space-x-2 p-2">
                  <div className="">{`${item.realizedProfit.toLocaleString()} ₳`}</div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    <div
                      className={`${
                        item.realizedProfit > 0 ? "bg-yellow-400" : "bg-red-500"
                      } h-1 rounded-3xl absolute`}
                      style={{
                        width: `${Math.floor(
                          (Math.abs(item.realizedProfit) * 100) /
                            data.maxRealizedProfit
                        )}%`
                      }}
                    ></div>
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[10%] flex items-center justify-end space-x-2 p-2">
                  <div className="">{`${item.unrealizedProfit.toLocaleString()} ₳`}</div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    <div
                      className={`${
                        item.unrealizedProfit > 0
                          ? "bg-yellow-400"
                          : "bg-red-500"
                      } h-1 rounded-3xl absolute`}
                      style={{
                        width: `${Math.floor(
                          (Math.abs(item.unrealizedProfit) * 100) /
                            data.maxUnrealizedProfit
                        )}%`
                      }}
                    ></div>
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[10%] flex items-center justify-end space-x-2 p-2">
                  <div className="">{`${item.totalProfit.toLocaleString()} ₳`}</div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    <div
                      className={`${
                        item.totalProfit > 0 ? "bg-yellow-400" : "bg-red-500"
                      } h-1 rounded-3xl absolute`}
                      style={{
                        width: `${Math.floor(
                          (Math.abs(item.totalProfit) * 100) /
                            data.maxTotalProfit
                        )}%`
                      }}
                    ></div>
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[8%] flex items-center justify-end gap-3 p-2">
                  <div className="">{`${item.ROI} %`}</div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className={`${dataItems.length >= 20 ? "block" : "hidden"}`}>
        <Pagination number={data.totaldatanumber} />
      </div>
    </div>
  );
};

export default TokensSummary;
