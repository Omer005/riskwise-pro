import { useState, useEffect } from "react";

import * as SVG from "../../../../../common/Icons";

const SummaryTrade = () => {
  const [selected, setSelected] = useState("Summary");
  const [visible, setVisible] = useState(0);
  const [handleClass1, setHandleClass1] = useState("hidden");
  const [handleClass2, setHandleClass2] = useState("hidden");
  const [handleClass3, setHandleClass3] = useState("hidden");
  const [handleClass4, setHandleClass4] = useState("hidden");

  const clicked = (e) => {
    setSelected(e.target.name);
  };

  const handleShow = (i) => {
    setVisible(i);
  };

  const handleNotShow = () => {
    setVisible(0);
  };

  useEffect(() => {
    if (visible === 1) {
      setHandleClass1("flex justify-center");
    } else setHandleClass1("hidden");
    if (visible === 2) {
      setHandleClass2("flex justify-center");
    } else setHandleClass2("hidden");
    if (visible === 3) {
      setHandleClass3("flex justify-center");
    } else setHandleClass3("hidden");
    if (visible === 4) {
      setHandleClass4("flex justify-center");
    } else setHandleClass4("hidden");
  }, [visible]);

  return (
    <div className="lg:flex lg:justify-start lg:items-center lg:space-x-8 lg:space-y-0 space-y-8 mt-10">
      <div className="flex bg-[#142028] rounded-[10px] sm:w-[170px] w-[138px]">
        <button
          type="button"
          name="Summary"
          onFocus={clicked}
          className={`cursor-pointer sm:px-4 px-2 py-1 lg:h-8 text-sm text-[#9f9fa8] hover:text-[#fff] mr-2 ${
            selected === "Summary"
              ? "rounded-[10px] bg-[#3a4956] text-white"
              : ""
          }`}
        >
          Summary
        </button>
        <button
          type="button"
          name="Trades"
          onFocus={clicked}
          className={`cursor-pointer sm:px-4 px-2 py-1 text-sm text-[#9f9fa8] hover:text-[#fff] lg:h-8
          ${
            selected === "Trades"
              ? "rounded-[10px] bg-[#3a4956] text-white"
              : ""
          }`}
        >
          Trades
        </button>
      </div>
      <div
        className={`${
          selected === "Trades" ? "hidden" : "lg:flex block"
        } lg:items-center lg:space-x-4`}
      >
        <div className="xl:flex xl:space-x-4 xl:space-y-0 lg:space-x-0 lg:space-y-4">
          <div className="lg:flex lg:items-baseline lg:justify-start lg:space-x-2 flex justify-between sm:text-base text-sm">
            <div className="flex items-baseline space-x-2">
              <span className="text-white">Income</span>
              <div className="relative">
                <div
                  className="absolute -bottom-[2px]"
                  onMouseEnter={() => {
                    handleShow(1);
                  }}
                  onMouseLeave={handleNotShow}
                >
                  <SVG.Notification />
                </div>
                <div className={handleClass1}>
                  <div className="absolute w-80 -top-[70px] left-0 lg:-left-40 p-[6px] rounded-[10px] bg-[rgba(92,94,105,.3)] backdrop-blur-[10px] text-sm text-[#fff] whitespace-pre-wrap text-center">
                    Total value of tokens that were not purchased from this
                    wallet but were sold
                  </div>
                </div>
              </div>
            </div>
            <span className="text-yellow-500 pl-4 whitespace-nowrap">
              8,798 ₳
            </span>
          </div>
          <div className="lg:flex lg:items-baseline lg:justify-start lg:space-x-2 flex justify-between sm:text-base text-sm">
            <div className="flex items-baseline space-x-2">
              <span className="text-white whitespace-nowrap">
                Realized Profit
              </span>
              <div className="relative">
                <div
                  className="absolute -bottom-[2px]"
                  onMouseEnter={() => {
                    handleShow(2);
                  }}
                  onMouseLeave={handleNotShow}
                >
                  <SVG.Notification />
                </div>
                <div className={handleClass2}>
                  <div className="absolute w-80 -top-[70px] left-0 lg:-left-40 p-[6px] rounded-[10px] bg-[rgba(92,94,105,.3)] backdrop-blur-[10px] text-sm text-[#fff] whitespace-pre-wrap text-center">
                    The amount of profits that have been converted into ADA
                  </div>
                </div>
              </div>
            </div>
            <span className="text-red-500 pl-4 whitespace-nowrap">
              -6,937 ₳
            </span>
          </div>
        </div>
        <div className="xl:flex xl:space-x-4 xl:space-y-0 lg:space-x-0 lg:space-y-4">
          <div className="lg:flex lg:items-baseline lg:justify-start lg:space-x-2 flex justify-between sm:text-base text-sm">
            <div className="flex items-baseline space-x-2">
              <span className="text-white whitespace-nowrap">
                Unrealized Profit
              </span>
              <div className="relative">
                <div
                  className="absolute -bottom-[2px]"
                  onMouseEnter={() => {
                    handleShow(3);
                  }}
                  onMouseLeave={handleNotShow}
                >
                  <SVG.Notification />
                </div>
                <div className={handleClass3}>
                  <div className="absolute w-80 -top-[70px] left-0 lg:-left-40 p-[6px] rounded-[10px] bg-[rgba(92,94,105,.3)] backdrop-blur-[10px] text-sm text-[#fff] whitespace-pre-wrap text-center">
                    The theoretical profit if all investments were converted
                    into ADA
                  </div>
                </div>
              </div>
            </div>
            <span className="text-red-500 pl-4 whitespace-nowrap">
              -11,848 ₳
            </span>
          </div>
          <div className="lg:flex lg:items-baseline lg:justify-start lg:space-x-2 flex justify-between sm:text-base text-sm">
            <div className="flex items-baseline space-x-2">
              <span className="text-white whitespace-nowrap">
                Win/Loss Ratio
              </span>
              <div className="relative">
                <div
                  className="absolute -bottom-[2px]"
                  onMouseEnter={() => {
                    handleShow(4);
                  }}
                  onMouseLeave={handleNotShow}
                >
                  <SVG.Notification />
                </div>
                <div className={handleClass4}>
                  <div className="absolute w-80 -top-[110px] left-0 lg:-left-40 p-[6px] rounded-[10px] bg-[rgba(92,94,105,.3)] backdrop-blur-[10px] text-sm text-[#fff] whitespace-pre-wrap text-center">
                    Wins are how many times this address has sold an investments
                    for a profit, while losses are how many times this address
                    has sold an investment for a loss
                  </div>
                </div>
              </div>
            </div>
            <span className="space-x-2 pl-4">
              <span className="whitespace-nowrap text-green-500">
                10,452 (1,098,456 ₳)
              </span>
              <span className="text-white">/</span>
              <span className="whitespace-nowrap text-red-500">
                3,675 (-551,111 ₳)
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryTrade;
