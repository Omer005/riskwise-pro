import * as SVG from "../../common/Icons";
import { useState } from "react";
import PortfolioButton from "./PortfolioButton";
import AddNewWallet from "./AddNewWallet";
import PortfolioChart from "./PortfolioChart";
import PortfolioChartHeader from "./PortfolioChartHeader";
import PortfolioContentPart2 from "../../components/Portfolio/PortfolioContentPart2";
import PortfolioContentPart3 from "./PortfolioContentPart3";
const PortfolioButtonData = [
  {
    id: 0,
    svg: "Portfolio",
    value: "Total Portfolio Value",
    price: "0",
    active: true,
  },
  {
    id: 1,
    svg: "Yoroi",
    value: "Yoroi",
    price: "1",
    active: false,
  },
];
const PortfolioContentPart1 = () => {
  const [menuItem, setMenuItem] = useState(PortfolioButtonData);

  const handleBackground = (_idx) => {
    const newMenuItem = PortfolioButtonData.map((item, idx) => {
      if (idx === _idx) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setMenuItem(newMenuItem);
  };

  return (
    <div className="lg:flex w-full">
      <div className="flex flex-col gap-3 lg:w-[40%] w-full p-4">
        <div className="flex justify-between ">
          <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 px-4 py-1 rounded-lg">
            <p className="text-black text-lg font-normal">Investments</p>
          </div>
          <div className="flex justify-center items-center p-2 rounded-full cursor-pointer bg-[#142028] transition-all duration-300 transform origin-center hover:rotate-180">
            <SVG.Setting />
          </div>
        </div>
        <div className="flex flex-col h-[250px] mb-8">
          {PortfolioButtonData.map((item, idx) => {
            return (
              <div key={idx} onClick={() => handleBackground(idx)} className="">
                <PortfolioButton data={item} />
              </div>
            );
          })}
        </div>
        <AddNewWallet />
        <PortfolioChartHeader />
        <PortfolioContentPart3 />
      </div>
      <div className="lg:w-[60%] w-full flex flex-col gap-10">
        <PortfolioChart />
        <PortfolioContentPart2 />
      </div>
    </div>
  );
};

export default PortfolioContentPart1;
