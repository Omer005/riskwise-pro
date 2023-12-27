import { useState } from "react";
import { UpDown } from "../../../../common/Icons";
import Pagination from "../../HotWalletsLanding/Pagination";
import { minHistroyData as Data } from "./minHistoryData";
import * as SVG from "../../../../common/Icons";

const Table = () => {
  const [data, setData] = useState(Data);
  const [dataItems, setDataItems] = useState(Data.itemValue);
  const [sortByInAmount, setSortByInAmount] = useState(false);
  const [sortByIn, setSortByIn] = useState(false);
  const [sortByOutAmount, setSortByOutAmount] = useState(false);
  const [sortByOut, setSortByOut] = useState(false);
  const [sortByFTx, setSortByFTx] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  const handleSortByInAmount = () => {
    setSortByInAmount(!sortByInAmount);
    setIsSelected("InAmount");
    // TODO API
  };

  const handleSortByIn = () => {
    setSortByIn(!sortByIn);
    setIsSelected("In");
    // TODO API
  };

  const handleSortByOutAmount = () => {
    setSortByOutAmount(!sortByOutAmount);
    setIsSelected("OutAmount");
    // TODO API
  };

  const handleSortByOut = () => {
    setSortByOut(!sortByOut);
    setIsSelected("Out");
    // TODO API
  };

  const handleSortByFTx = () => {
    setSortByFTx(!sortByFTx);
    setIsSelected("FTx");
    // TODO API
  };
  return (
    <div>
      <div className="relative flex-col justify-center w-full h-full overflow-x-auto hideScrollbar mb-4">
        <div className="min-w-[1510px] mt-6 bg-[#142028] p-4 rounded-2xl">
          <ul className="flex justify-between ] text-sm text-[#9f9fa8] border-b-[1px] border-[#232323] py-[2px]">
            <li className="sticky left-0  w-[16%] flex items-center justify-start gap-2 p-2">
              <span className="whitespace-nowrap">Collection</span>
            </li>
            <li
              className={`w-[12%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${isSelected === "mints" && "-translate-y-[2px]"
                }`}
              onClick={handleSortByInAmount}
            >
              <span className="whitespace-nowrap">Mints</span>
              <UpDown
                rotate={sortByInAmount}
                active={isSelected === "mints"}
              />
            </li>
            <li
              className={`w-[15%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${isSelected === "balance" && "-translate-y-[2px]"
                }`}
              onClick={handleSortByIn}
            >
              <span className="whitespace-nowrap">Balance</span>
              <UpDown rotate={sortByIn} active={isSelected === "balance"} />
            </li>
            <li
              className={`w-[15%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${isSelected === "OutAmount" && "-translate-y-[2px]"
                }`}
              onClick={handleSortByOutAmount}
            >
              <span className="whitespace-nowrap">Buy(NFTS)</span>
              <UpDown
                rotate={sortByOutAmount}
                active={isSelected === "OutAmount"}
              />
            </li>
            <li
              className={`w-[12%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-[2px] duration-200 ${isSelected === "buy₳" && "-translate-y-[2px]"
                }`}
              onClick={handleSortByOut}
            >
              <span className="whitespace-nowrap">Buy(₳)</span>
              <UpDown rotate={sortByOut} active={isSelected === "buy₳"} />
            </li>
            <li
              className={`w-[12%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${isSelected === "sellNFT" && "-translate-y-[2px]"
                }`}
              onClick={handleSortByFTx}
            >
              <span className="whitespace-nowrap">Sells(NFTs)</span>
              <UpDown rotate={sortByFTx} active={isSelected === "sellNFT"} />
            </li>
            <li
              className={`w-[12%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${isSelected === "sell₳)" && "-translate-y-[2px]"
                }`}
              onClick={handleSortByFTx}
            >
              <span className="whitespace-nowrap">Sells(₳)</span>
              <UpDown rotate={sortByFTx} active={isSelected === "Sells(₳)"} />
            </li>
            <li
              className={`w-[12%] flex items-center justify-end gap-1 p-2 `} >
              <span className="whitespace-nowrap">Links</span></li>
          </ul>
          <div className="min-w-[1510px]">
            {dataItems.map((item, idx) => (
              <ul
                key={idx}
                className="flex justify-between bg-[#142028] font-normal text-white text-sm border-b-[1px] border-[#232323] hover:bg-[#3a4956] cursor-pointer whitespace-nowrap text-ellipsis"
              >
                <li className="w-[16%] flex items-center gap-2 justify-start p-2">
                  <div className="flex items-center w-8 h-8">
                    <img
                      src={item.collection.image}
                      width={30}
                      height={30}
                      className=""
                      alt="icon" />
                  </div>
                  <div className="">{item.collection.value}</div>
                </li>
                <li className="w-[12%] flex items-center justify-end space-x-2 p-2">
                  <div className="">{`${item.mints.value.toLocaleString()}`}</div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    <div
                      className={`${item.mints.percent > 0 ? "bg-yellow-400" : "bg-red-500"
                        } h-1 rounded-3xl absolute`}
                      style={{
                        width: `${Math.floor(
                          (Math.abs(item.mints.percent) * 100) / data.maxIncome
                        )}%`
                      }}
                    ></div>
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[15%] flex items-center justify-end space-x-2 p-2">
                  <div className="">{`${item.balance.value.toLocaleString()}`}</div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    <div
                      className={`${item.balance.percent > 0 ? "bg-yellow-400" : "bg-red-500"
                        } h-1 rounded-3xl absolute`}
                      style={{
                        width: `${Math.floor(
                          (Math.abs(item.balance.percent) * 100) / data.maxIncome
                        )}%`
                      }}
                    ></div>
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[15%] flex items-center justify-end space-x-2 p-2">
                  <div className="">{`${item.buysNFT.value.toLocaleString()}`}</div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    <div
                      className={`${item.buysNFT.balance > 0 ? "bg-yellow-400" : "bg-red-500"
                        } h-1 rounded-3xl absolute`}
                      style={{
                        width: `${Math.floor(
                          (Math.abs(item.buysNFT.balance) * 100) / data.maxIncome
                        )}%`
                      }}
                    ></div>
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[15%] flex items-center justify-end space-x-2 p-2">
                  <div className="">{`${item.buy.value.toLocaleString()}`}</div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    <div
                      className={`${item.buy.balance > 0 ? "bg-yellow-400" : "bg-red-500"
                        } h-1 rounded-3xl absolute`}
                      style={{
                        width: `${Math.floor(
                          (Math.abs(item.buy.balance) * 100) / data.maxIncome
                        )}%`
                      }}
                    ></div>
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[12%] flex items-center justify-end space-x-2 p-2">
                  <div className="">{`${item.sellsNFT.value.toLocaleString()}`}</div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    <div
                      className={`${item.sellsNFT.balance > 0 ? "bg-yellow-400" : "bg-red-500"
                        } h-1 rounded-3xl absolute`}
                      style={{
                        width: `${Math.floor(
                          (Math.abs(item.sellsNFT.balance) * 100) / data.maxIncome
                        )}%`
                      }}
                    ></div>
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[12%] flex items-center justify-end space-x-2 p-2">
                  <div className="">{`${item.sell.value.toLocaleString()}`}</div>
                  <div className="w-1/2 relative overflow-x-hidden">
                    <div
                      className={`${item.sell.balance > 0 ? "bg-yellow-400" : "bg-red-500"
                        } h-1 rounded-3xl absolute`}
                      style={{
                        width: `${Math.floor(
                          (Math.abs(item.sell.balance) * 100) / data.maxIncome
                        )}%`
                      }}
                    ></div>
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[12%] flex items-center justify-end space-x-2 p-2">
                  <SVG.SwapChart />
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

export default Table;
