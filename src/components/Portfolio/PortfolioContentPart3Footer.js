import { useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";

const ContentData1 = [
  {
    id: 0,
    value: "Net Worth ADA",
    price: "0₳"
  },
  {
    id: 1,
    value: "Assets",
    price: "0₳"
  },
  {
    id: 2,
    value: "Liablities",
    price: "0₳"
  },
  {
    id: 3,
    value: "CollateralRatio",
    price: "%"
  },
]
const ContentData2 = [
  {
    id: 0,
    value: "ADA Balance",
    price: "0₳"
  },
  {
    id: 1,
    value: "Native Assets Value",
    price: "0₳"
  },
  {
    id: 2,
    value: "NA % of Portfolio",
    price: "0.00%"
  },
  {
    id: 3,
    value: "Liquid Value",
    price: "0₳",
  },
  {
    id: 4,
    value: "Tokens",
    price: "0",
  },
  {
    id: 5,
    value: "NFTs",
    price: "0",
  },
]
const PortfolioContentPart3Footer = () => {
  const [isActive, setIsActive] = useState(true);
  const [isTokenActive, setIsToeknActive] = useState(true)
  return (
    <div
      style={{
        "background": "transparent linear-gradient(0deg,#142028,#121212) 0 0 no-repeat padding-box"

      }}
      className="flex flex-col gap-2 h-fit">
      {/* Header */}
      <div className="flex h-[85px] rounded-xl justify-around  gap-3 p-3">
        <div className="flex justify-start w-full">
          <div className="flex items-center gap-4  rounded-lg w-full p-3">
            <div
              onClick={() => setIsActive(true)}
              className={`flex justify-center items-center cursor-pointer  px-3 py-2  rounded-lg ${isActive ? "bg-[#3a4956] text-white" : "bg-[#121218]"}`}>
              <p className={` text-sm font-normal ${isActive ? "text-white" : "text-white"}`}>BreakDown</p>
            </div>
            <div
              onClick={() => setIsActive(false)}
              className={`flex justify-center items-center cursor-pointer  px-3 py-2 rounded-lg ${isActive ? "" : "bg-[#3a4956]"}`}>
              <p className={`text-sm font-normal ${isActive ? "text-white" : "text-white "}`}>Asset Performance</p>
            </div>
          </div>
        </div>
      </div>
      {/* Border */}
      <div
        className="flex h-[45px] rounded-2xl justify-around  gap-3 p-3">
        <div className="flex justify-start w-full">
          <div className="flex items-center gap-4 bg-[#0b1217] rounded-lg w-full p-3">
          </div>
        </div>
      </div>
      {/* Content1 && Content2*/}
      {isActive ?
        (<>
          <div
            className="h-fit rounded-xl justify-around    gap-1 p-3">
            <div className="flex flex-col bg-[#0b1217] rounded-xl pt-2">
              {ContentData1.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex justify-between items-center gap-4  px-3 ">
                    <div
                      className={`flex justify-center items-center w-full cursor-pointer  px-3  gap-10`}>
                      <p className="text-[#9f9fa8] text-sm font-normal whitespace-nowrap    ">{item.value}</p>
                      <div className="bg-[#24242c] h-1 w-full rounded-lg"></div>
                      <p className="text-[#9f9fa8] text-sm font-normal tracking-wider">{item.price}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div
            className="h-fit rounded-xl justify-around    gap-1 p-3">
            <div className="flex flex-col bg-[#0b1217] rounded-xl pt-3">
              {ContentData2.map((item, idx) => {
                return (
                  <div className="flex justify-between items-center gap-4  px-3 ">
                    <div
                      className={`flex justify-center items-center w-full cursor-pointer  px-3 gap-10`}>
                      <p className="text-[#9f9fa8] text-sm font-normal whitespace-nowrap  ">{item.value}</p>
                      <div className="bg-[#24242c] h-[3px] w-full rounded-lg"></div>
                      <p className="text-[#9f9fa8] text-sm font-normal tracking-wider">{item.price}</p>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </>) :
        (<div className="flex flex-col gap-3">
          <div className="flex justify-end px-3 gap-6">
            <button
              onClick={() => setIsToeknActive(true)}
              className={`text-[#9f9fa8] hover:text-white text-base font-normal ${isTokenActive ? "bg-[#3a4956] rounded-lg px-2 py-[2px] text-white" : "text-black"}`}>Tokens</button>
            <button
              onClick={() => setIsToeknActive(false)}
              className={`text-[#9f9fa8] hover:text-white text-base font-normal ${isTokenActive ? "text-black" : "bg-[#3a4956] rounded-lg px-2 py-[2px] text-white"}`}>NFTs</button>
          </div>
          <div className="px-3  h-[300px] w-full mb-4">
            <div className="flex justify-center items-center  w-full h-full bg-[#0b1217] rounded-2xl">
              <MoonLoader
                size={20}
                speedMultiplier={0.3}
                color="yellow" />
            </div>
          </div>
        </div>

        )}

    </div>
  );
};

export default PortfolioContentPart3Footer;
