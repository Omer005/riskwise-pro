import { useState } from "react";
import { Link } from "react-router-dom";

import { UpDown, Star } from "../../../../../common/Icons";
import Pagination from "../../../HotWalletsLanding/Pagination";

import { data as Data } from "./Fakedata";

const Table = () => {
  const [data, setData] = useState(Data);
  const [dataItems, setDataItems] = useState(Data.ItemValue);
  const [sortByInAmount, setSortByInAmount] = useState(false);
  const [sortByIn, setSortByIn] = useState(false);
  const [sortByOutAmount, setSortByOutAmount] = useState(false);
  const [sortByOut, setSortByOut] = useState(false);
  const [sortByFTx, setSortByFTx] = useState(false);
  const [sortByLTx, setSortByLTx] = useState(false);
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

  const handleSortByLTx = () => {
    setSortByLTx(!sortByLTx);
    setIsSelected("LTx");
    // TODO API
  };

  const handleLike = (_idx, e) => {
    e.stopPropagation();
    const newData = dataItems.map((item, idx) => {
      if (item.id === _idx) item.like = !item.like;
      return item;
    });
    setDataItems(newData);
    //  TODO API
  };

  return (
    <div>
      <div className="relative flex-col justify-center w-full h-full overflow-x-auto hideScrollbar mb-4">
        <div className="min-w-[1510px] mt-6 bg-[#142028] p-4 rounded-2xl">
          <ul className="flex justify-between text-md font-semibold text-white  border-b-[1px] border-[#232323] py-[2px]">
            <li className="sticky left-0 bg-[#142028] w-[16%] flex items-center justify-start gap-2 p-2">
              <Star.StartOutline />
              <span className="whitespace-nowrap">Address</span>
            </li>
            <li
              className={`w-[15%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "InAmount" && "-translate-y-1"
              }`}
              onClick={handleSortByInAmount}
            >
              <span className="whitespace-nowrap">Inbound Amount</span>
              <UpDown
                rotate={sortByInAmount}
                active={isSelected === "InAmount"}
              />
            </li>
            <li
              className={`w-[15%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "In" && "-translate-y-1"
              }`}
              onClick={handleSortByIn}
            >
              <span className="whitespace-nowrap"># Inbound</span>
              <UpDown rotate={sortByIn} active={isSelected === "In"} />
            </li>
            <li
              className={`w-[15%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "OutAmount" && "-translate-y-1"
              }`}
              onClick={handleSortByOutAmount}
            >
              <span className="whitespace-nowrap">Outbound Amount</span>
              <UpDown
                rotate={sortByOutAmount}
                active={isSelected === "OutAmount"}
              />
            </li>
            <li
              className={`w-[15%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "Out" && "-translate-y-1"
              }`}
              onClick={handleSortByOut}
            >
              <span className="whitespace-nowrap"># Outbound</span>
              <UpDown rotate={sortByOut} active={isSelected === "Out"} />
            </li>
            <li
              className={`w-[12%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "FTx" && "-translate-y-1"
              }`}
              onClick={handleSortByFTx}
            >
              <span className="whitespace-nowrap">First Tx</span>
              <UpDown rotate={sortByFTx} active={isSelected === "FTx"} />
            </li>
            <li
              className={`w-[12%] flex items-center justify-end gap-1 p-2 cursor-pointer hover:-translate-y-1 duration-200 ${
                isSelected === "LTx" && "-translate-y-1"
              }`}
              onClick={handleSortByLTx}
            >
              <span className="whitespace-nowrap">Last Tx</span>
              <UpDown rotate={sortByLTx} active={isSelected === "LTx"} />
            </li>
          </ul>
          <div className="min-w-[1510px]">
            {dataItems.map((item, idx) => (
              <Link to={item.url} target="blank">
                <ul
                  key={idx}
                  className="flex justify-between font-normal bg-[#142028] text-white text-sm border-b-[1px] border-[#232323] hover:bg-[#3a4956] cursor-pointer whitespace-nowrap"
                >
                  <li className="sticky left-0 bg-[#142028] shadow-lg w-[16%] flex items-center justify-start gap-2 p-2 z-30">
                    <div onClick={(e) => handleLike(item.id, e)}>
                      {item.like ? <Star.StarFill /> : <Star.StartOutline />}
                    </div>
                    <span className="w-full truncate">
                      {item.address.length > 30
                        ? item.address.substring(0, 10) +
                          "..." +
                          item.address.substring(
                            item.address.length - 4,
                            item.address.length
                          )
                        : item.address}
                    </span>
                  </li>
                  <li className="w-[15%] flex items-center justify-end space-x-2 p-2">
                    <div className="">
                      {`₳ ${item.inAmount.toLocaleString()}`}
                    </div>
                    <div className="w-1/2 relative overflow-x-hidden">
                      {item.inAmount > 0 && (
                        <div
                          className="h-1 bg-yellow-400 rounded-3xl absolute"
                          style={{
                            width: `${Math.floor(
                              (item.inAmount * 100) / data.maxInAmount
                            )}%`
                          }}
                        ></div>
                      )}
                      <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                    </div>
                  </li>
                  <li className="w-[15%] flex items-center justify-end space-x-2 p-2">
                    <div className="">{`${item.in.toLocaleString()}`}</div>
                    <div className="w-1/2 relative overflow-x-hidden">
                      {item.in > 0 && (
                        <div
                          className="h-1 bg-yellow-400 rounded-3xl absolute"
                          style={{
                            width: `${Math.floor(
                              (item.in * 100) / data.maxIn
                            )}%`
                          }}
                        ></div>
                      )}
                      <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                    </div>
                  </li>
                  <li className="w-[15%] flex items-center justify-end space-x-2 p-2">
                    <div className="">
                      {`₳ ${item.outAmount.toLocaleString()}`}
                    </div>
                    <div className="w-1/2 relative overflow-x-hidden">
                      {item.outAmount > 0 && (
                        <div
                          className="h-1 bg-yellow-400 rounded-3xl absolute"
                          style={{
                            width: `${Math.floor(
                              (item.outAmount * 100) / data.maxOutAmount
                            )}%`
                          }}
                        ></div>
                      )}
                      <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                    </div>
                  </li>
                  <li className="w-[15%] flex items-center justify-end space-x-2 p-2">
                    <div className="">{`${item.out.toLocaleString()}`}</div>
                    <div className="w-1/2 relative overflow-x-hidden">
                      {item.out > 0 && (
                        <div
                          className="h-1 bg-yellow-400 rounded-3xl absolute"
                          style={{
                            width: `${Math.floor(
                              (item.out * 100) / data.maxOut
                            )}%`
                          }}
                        ></div>
                      )}
                      <div className="w-full h-1 bg-[#4d5359] rounded-3xl"></div>
                    </div>
                  </li>
                  <li className="w-[12%] flex items-center justify-end p-2">
                    <div className="">{item.fTx}</div>
                  </li>
                  <li className="w-[12%] flex items-center justify-end p-2">
                    <div className="">{item.lTx}</div>
                  </li>
                </ul>
              </Link>
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
