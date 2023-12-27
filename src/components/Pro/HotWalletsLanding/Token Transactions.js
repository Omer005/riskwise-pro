import { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { TokenTransactionData } from "../LandingData/TokenTransaction";
import { Info, UpDown, Star, Right } from "../../../common/Icons";
import Pagination from "../HotWalletsLanding/Pagination";

const TokenTransactions = () => {
  const [tokenTransactionData, setTokenTransactionData] =
    useState(TokenTransactionData);
  const [tokenTransactionDataItems, setTokenTransactionDataItems] = useState(
    tokenTransactionData.ItemValue
  );
  const [sortByTime, setSortByTime] = useState(false);
  const [sortBySwapAmount, setSortBySwapAmount] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const { isDollar } = useSelector((state) => state.wallet);

  const handleSortByTime = () => {
    setSortByTime(!sortByTime);
    setIsSelected("time");
    // TODO API
  };

  const handleSortByAmount = () => {
    setSortBySwapAmount(!sortBySwapAmount);
    setIsSelected("swapamount");
    // TODO API
  };

  const handleLike = (_idx, e) => {
    e.stopPropagation();
    const newTokenTransactionData = tokenTransactionDataItems.map(
      (item, idx) => {
        if (item.id === _idx) item.like = !item.like;
        return item;
      }
    );
    setTokenTransactionDataItems(newTokenTransactionData);
    //  TODO API
  };

  return (
    <>
      <div className="relative flex-col justify-center w-full h-full overflow-x-auto hideScrollbar">
        <div className="min-w-[1300px] mt-6">
          <ul className="flex justify-between text-sm font-semibold text-white border-b-[1px] border-[#232323] py-[2px]">
            <li className="sticky left-0 bg-[#0b1217] w-[12%] flex items-center justify-start gap-2 p-2">
              <Star.StartOutline />
              <span className="whitespace-nowrap">Address</span>
            </li>
            <li
              className={`w-[7%] flex items-center justify-start gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "time" && "-translate-y-1"
              }`}
              onClick={handleSortByTime}
            >
              <span className="whitespace-nowrap">Time</span>
              <UpDown rotate={sortByTime} active={isSelected === "time"} />
            </li>
            <li className="w-[7%] flex items-center justify-start p-2">
              <span className="whitespace-nowrap">Type</span>
            </li>
            <li className="w-[10%] flex items-center justify-start p-2">
              <span className="whitespace-nowrap">Token</span>
            </li>
            <li className="w-[10%] flex items-center justify-start p-2">
              <span className="whitespace-nowrap">Price</span>
            </li>
            <li className="w-[10%] flex items-center justify-start p-2">
              <span className="whitespace-nowrap">Token Amount</span>
            </li>
            <li
              className={`w-[14%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "swapamount" && "-translate-y-1"
              }`}
              onClick={handleSortByAmount}
            >
              <span className="whitespace-nowrap">Swap Amount</span>
              <UpDown
                rotate={sortBySwapAmount}
                active={isSelected === "swapamount"}
              />
            </li>
            <li className="w-[10%] flex items-center justify-start gap-1 p-2">
              <span className="whitespace-nowrap">Balance</span>
              <Info />
            </li>
            <li className="w-[10%] flex items-center justify-start p-2">
              <span className="whitespace-nowrap">Exchange</span>
            </li>
            <li className="w-[10%] flex items-center justify-end gap-1 p-2">
              <span className="whitespace-nowrap">Wallet Profiler</span>
              <Info />
            </li>
          </ul>
          <div className="min-w-[1300px]">
            {tokenTransactionDataItems.map((item, idx) => (
              <ul
                key={idx}
                onClick={() => window.open(item.walletprofiler.url, "_blank")}
                className="flex justify-between font-normal text-white text-xs border-b-[1px] border-[#232323] hover:bg-[#3a4956] cursor-pointer whitespace-nowrap text-ellipsis"
              >
                <li className="sticky left-0 bg-[#0b1217] shadow-lg w-[12%] flex items-center justify-start gap-2 p-2 z-30">
                  <div onClick={(e) => handleLike(item.id, e)}>
                    {item.like ? <Star.StarFill /> : <Star.StartOutline />}
                  </div>
                  <span className="w-full truncate">{item.address}</span>
                </li>
                <li className="w-[7%] flex items-center justify-start gap-1 p-2">
                  <span className="whitespace-nowrap">
                    {moment(item.time).fromNow()}
                  </span>
                </li>
                <li className="w-[7%] flex items-center justify-start p-2">
                  <span
                    className={`whitespace-nowrap ${
                      item.type ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {item.type ? "Buy" : "Sell"}
                  </span>
                </li>
                <li className="w-[10%] flex items-center justify-start gap-1 p-2">
                  <img
                    alt={item.token.name}
                    width={20}
                    height={20}
                    src={item.token.imgurl}
                  />
                  <span className="whitespace-nowrap">{item.token.name}</span>
                </li>
                <li className="w-[10%] flex items-center justify-start p-2">
                  <span className="whitespace-nowrap">
                    {isDollar
                      ? `$ ${(item.price / 2.633475).toLocaleString()}`
                      : `₳ ${item.price.toLocaleString()}`}
                  </span>
                </li>
                <li className="w-[10%] flex items-center justify-start p-2">
                  <span className="whitespace-nowrap">
                    {item.tokenamount.toLocaleString()}
                  </span>
                </li>
                <li className="w-[14%] flex items-center justify-end gap-1 p-2">
                  <div className="w-1/3">
                    {isDollar
                      ? `$ ${Math.floor(
                          item.swapamount / 2.633475
                        ).toLocaleString()}`
                      : `₳ ${item.swapamount.toLocaleString()}`}
                  </div>
                  <div className="w-2/3 relative overflow-x-hidden">
                    {item.swapamount > 0 && (
                      <div
                        className={`h-1 ${
                          item.type ? "bg-yellow-400" : "bg-red-500"
                        }  rounded-3xl absolute`}
                        style={{
                          width: `${Math.floor(
                            (item.swapamount * 100) /
                              tokenTransactionData.maxswapamount
                          )}%`,
                        }}
                      ></div>
                    )}
                    <div className="w-full h-1 bg-[#1E2023] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[10%] flex items-center justify-start gap-1 p-2">
                  <span className="whitespace-nowrap">
                    {item.balance.toLocaleString()}
                  </span>
                </li>
                <li className="w-[10%] flex items-center justify-start gap-1 p-2">
                  <img
                    alt={item.exchange.name}
                    width={20}
                    height={20}
                    src={item.exchange.imgurl}
                  />
                  <span className="whitespace-nowrap">
                    {item.exchange.name}
                  </span>
                </li>
                <div className="w-[10%] flex items-center justify-end p-2 ">
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
      <Pagination number={tokenTransactionData.totaldatanumber} />
    </>
  );
};

export default TokenTransactions;
