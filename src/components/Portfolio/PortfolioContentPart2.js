import { useState } from "react";
import PortfolioContentPart2TableHeader from "./PortfolioContentPart2TableHeader";
import PortfolioContentPart2DebtToken from "./PortfolioContentPart2DebtToken";
import PortfolioContentPart2LoansToken from "./PortfolioContentPart2LoansToken";
import PortfolioContentPart2TradesToken from "./PortfolioContentPart2TradesToken";
const ButtonData = [
  {
    id: 0,
    value: "Holding",
    active: true
  },
  {
    id: 1,
    value: "Debt",
    active: false
  },
  {
    id: 2,
    value: "Loans",
    active: false
  },
  {
    id: 3,
    value: "Tades",
    active: false
  }
];
const ButtonData1 = [
  {
    id: 0,
    value: "Tokens",
    active: true
  },
  {
    id: 1,
    value: "LP",
    active: false
  },
  {
    id: 2,
    value: "NFTs",
    active: false
  }
];
const PortfolioContentPart2 = () => {
  const [menuItem, setMenuItem] = useState(ButtonData);
  const [menuItem1, setMenuItem1] = useState(ButtonData1);
  const handleBackground = (_idx) => {
    const newMenuItem = ButtonData.map((item, idx) => {
      if (idx === _idx) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setMenuItem(newMenuItem);
  };
  const handleBackgrond1 = (_idx) => {
    const newMenuItem = ButtonData1.map((item, idx) => {
      if (idx === _idx) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setMenuItem1(newMenuItem);
  };
  return (
    <>
      {/* Button Group */}
      <div className="lg:flex lg:justify-between items-center lg:w-full py-4 max-lg:space-y-4">
        {/* Left Button Group */}
        <div className="flex gap-4 bg-[#142028] rounded-lg  items-center w-fit h-fit " >
          {ButtonData.map((item, idx) => {
            return (
              <span
                key={idx}
                onClick={() => handleBackground(idx)}
                className={`text-[#9f9fa8] text-base hover:text-white cursor-pointer  py-1 sm:px-3 px-1 ${item.active ? "bg-[#3a4956] rounded-lg text-white" : ""
                  }`} >
                {item.value}
              </span>
            );
          })}
        </div>
        {/* Right Button Group */}
        <div className="flex gap-4 bg-[#142028] rounded-lg  items-center w-fit">
          {ButtonData1.map((item, idx) => {
            return (
              <span
                key={idx}
                onClick={() => handleBackgrond1(idx)}
                className={`text-[#9f9fa8] text-base hover:text-white cursor-pointer  py-1 sm:px-3 px-1 ${item.active ? "bg-[#3a4956] text-white rounded-lg" : ""
                  }`}
              >
                {item.value}
              </span>
            );
          })}
        </div>
      </div>
      {ButtonData[0].active && <PortfolioContentPart2TableHeader />}
      {ButtonData[1].active && <PortfolioContentPart2DebtToken />}
      {ButtonData[2].active && <PortfolioContentPart2LoansToken />}
      {ButtonData[3].active && <PortfolioContentPart2TradesToken />}
    </>
  );
};

export default PortfolioContentPart2;
