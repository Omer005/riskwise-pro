import { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { NFTTransactionData } from "../LandingData/NFTTransaction";
import { UpDown, Right } from "../../../common/Icons";
import Pagination from "./Pagination";

const NFTTransactions = () => {
  const [nftTransactionData, setNftTokenTransactionData] =
    useState(NFTTransactionData);
  const [nftTransactionDataItems, setNftTransactionDataItems] = useState(
    nftTransactionData.ItemValue
  );
  const [sortByTime, setSortByTime] = useState(false);
  const [sortByPrice, setSortByPrice] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const { isDollar } = useSelector((state) => state.wallet);

  const handleSortByTime = () => {
    setSortByTime(!sortByTime);
    setIsSelected("time");
    // TODO API
  };

  const handleSortByPrice = () => {
    setSortByPrice(!sortByPrice);
    setIsSelected("price");
    // TODO API
  };

  return (
    <>
      <div className="relative flex-col justify-center w-full h-full overflow-x-auto hideScrollbar">
        <div className="min-w-[1300px] mt-6 bg-[#142028] p-4 rounded-2xl">
          <ul className="flex justify-between text-sm font-semibold text-white border-b-[1px] border-[#232323] bg-[#142028] py-[2px]">
            <li
              className={`sticky left-0 bg-[#142028] w-[8%] flex items-center justify-start gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "time" && "-translate-y-1"
              }`}
              onClick={handleSortByTime}
            >
              <span className="whitespace-nowrap">Time</span>
              <UpDown rotate={sortByTime} active={isSelected === "time"} />
            </li>
            <li className="w-[19%] flex items-center justify-start p-2">
              <span className="whitespace-nowrap">Collection</span>
            </li>
            <li className="w-[19%] flex items-center justify-start p-2">
              <span className="whitespace-nowrap">Name</span>
            </li>
            <li
              className={`w-[12%] flex items-center justify-end gap-3 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "price" && "-translate-y-1"
              }`}
              onClick={handleSortByPrice}
            >
              <span className="whitespace-nowrap">Price</span>
              <UpDown rotate={sortByPrice} active={isSelected === "price"} />
            </li>
            <li className="w-[8%] flex items-center justify-start p-2"></li>
            <li className="w-[17%] flex items-center justify-start p-2">
              <span className="whitespace-nowrap">Buyer</span>
            </li>
            <li className="w-[17%] flex items-center justify-start p-2">
              <span className="whitespace-nowrap">Seller</span>
            </li>
          </ul>
          <div className="min-w-[1300px]">
            {nftTransactionDataItems.map((item, idx) => (
              <ul
                key={idx}
                className="flex justify-between font-normal text-white text-xs border-b-[1px] border-[#232323] hover:bg-[#3a4956] bg-[#142028] whitespace-nowrap truncate z-50"
              >
                <li className="sticky left-0 bg-[#142028] shadow-lg w-[8%] flex items-center justify-start p-2 z-30">
                  <span className="whitespace-normal">
                    {moment(item.time).fromNow()}
                  </span>
                </li>
                <li
                  className="w-[19%] flex items-center justify-start gap-2 p-2 cursor-pointer"
                  onClick={() => window.open(item.collection.url, "_blank")}
                >
                  <img
                    alt={item.collection.name}
                    width={20}
                    height={20}
                    src={item.collection.imgurl}
                    className="rounded-md"
                  />
                  <span className="whitespace-nowrap">
                    {item.collection.name}
                  </span>
                </li>
                <li className="w-[19%] flex items-center justify-start gap-2 p-2">
                  <img
                    alt={item.name.name}
                    width={20}
                    height={20}
                    src={item.name.imgurl}
                    className="rounded-md"
                  />
                  <span className="whitespace-nowrap">{item.name.name}</span>
                </li>
                <li className="w-[12%] flex items-center justify-end gap-1 p-2">
                  <div className="w-1/3">
                    {isDollar
                      ? `$ ${Math.floor(
                          item.price / 2.633475
                        ).toLocaleString()}`
                      : `₳ ${item.price.toLocaleString()}`}
                  </div>
                  <div className="w-2/3 relative overflow-x-hidden">
                    {item.price > 0 && (
                      <div
                        className="h-1 bg-yellow-400 rounded-3xl absolute"
                        style={{
                          width: `${Math.floor(
                            (item.price * 100) / nftTransactionData.maxprice
                          )}%`,
                        }}
                      ></div>
                    )}
                    <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                  </div>
                </li>
                <li className="w-[8%] flex items-center justify-start p-2"></li>
                <li className="w-[17%] flex items-center justify-start gap-3 p-2">
                  <div
                    className="flex gap-3 bg-[#192028] bg-opacity-70 rounded-md px-2 py-1 cursor-pointer"
                    onClick={() => window.open(item.buyer.url, "_blank")}
                  >
                    {item.buyer.avatar}
                    <Right />
                  </div>
                  <div className="space-x-1 truncate">
                    {item.buyer.type && (
                      <span className="text-green-500 text-sm">$</span>
                    )}
                    <span>{item.buyer.name}</span>
                  </div>
                </li>
                <li className="w-[17%] flex items-center justify-start gap-3 p-2">
                  <div
                    className="flex gap-3 bg-[#192028] bg-opacity-70 rounded-md px-2 py-1 cursor-pointer"
                    onClick={() => window.open(item.seller.url, "_blank")}
                  >
                    {item.seller.avatar}
                    <Right />
                  </div>
                  <div className="space-x-1 truncate">
                    {item.seller.type && (
                      <span className="text-green-500 text-sm">$</span>
                    )}
                    <span>{item.seller.name}</span>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <Pagination number={nftTransactionData.totaldatanumber} />
    </>
  );
};

export default NFTTransactions;
