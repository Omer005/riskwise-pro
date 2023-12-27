import { useState, useEffect } from "react";
import LineChart from "echarts-for-react";

import { series } from "./FakeData";

const RightWallet = () => {
  const [selected, setSelected] = useState("Exchange");
  const [grid, setGrid] = useState("8%");

  const clicked = (e) => {
    setSelected(e.target.name);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize());
    handleWindowResize();
  }, [grid]);

  const handleWindowResize = () => {
    setGrid(window.innerWidth <= 640 ? "16%" : "8%");
  };

  const optionEx = {
    color: ["#53a4fe", "green", "#fff", "yellow", "purple", "red"],
    tooltip: {
      padding: [16, 16, 8, 16],
      backgroundColor: "#121218",
      extraCssText:
        "pointer-events: all; overflow: auto; max-width: 400px;white-space: normal; boxShadow: 0px 4px 12px 0px rgba(0, 0, 0, .1);border-radius: 4px; max-height: 200px;",
      textStyle: {
        color: "#fff",
        fontSize: 12,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Segoe UI, "PingFang SC", "Helvetica Neue",Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;'
      },
      trigger: "axis"
    },
    legend: {
      show: true,
      left: "60",
      bottom: "-5",
      data: [
        "Minswap",
        "WingRiders",
        "MuesliSwap",
        "VyFinance",
        "Spectrum",
        "SundaeSwap"
      ],
      icon: "circle",
      textStyle: {
        color: "#fff",
        fontSize: 11
      },
      itemGap: 9
    },
    xAxis: {
      type: "category",
      axisTick: { show: false },
      boundaryGap: false,
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    },
    yAxis: {
      type: "value",
      splitLine: { 
        show: true,
        lineStyle: {
         color:'#121218'
        }
      },
    },
    grid: {
      top: "2%",
      left: "1%",
      right: "4%",
      bottom: grid,
      containLabel: true
    },
    series: series
  };

  const optionAll = {
    color: "blue",
    tooltip: {
      padding: [16, 16, 8, 16],
      backgroundColor: "#121218",
      extraCssText:
        "pointer-events: all; overflow: auto; max-width: 400px;white-space: normal; boxShadow: 0px 4px 12px 0px rgba(0, 0, 0, .1);border-radius: 4px; max-height: 200px;",
      textStyle: {
        color: "#fff",
        fontSize: 12,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Segoe UI, "PingFang SC", "Helvetica Neue",Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;'
      },
      trigger: "axis"
    },
    legend: {
      show: false
    },
    xAxis: {
      type: "category",
      axisTick: { show: false },
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    },
    yAxis: {
      type: "value",
      splitLine: { 
        show: true,
        lineStyle: {
         color:'#121218'
        }
      },
    },
    grid: {
      top: "2%",
      left: "1%",
      right: "4%",
      bottom: grid,
      containLabel: true
    },
    series: [
      {
        name: "All",
        type: "line",
        data: [
          "505060.1600",
          "552378.2100",
          "398193.7500",
          "627336.6800",
          "650430.7300",
          "505428.7800",
          "631757.7500",
          "481526.3500",
          "591364.7200",
          "581346.1500",
          "660430.7300",
          "525428.7800"
        ],
        smooth: true,
        lineStyle: {
          width: 2
        },
        showSymbol: false
      }
    ]
  };

  return (
    <div className="w-full right-0 top-0 h-96 bg-[#142028] rounded-2xl">
      <div className="flex justify-between items-center p-2 pb-8">
        <div className="flex justify-center items-center space-x-5">
          <span className="text-white text-sm z-10 truncate">
            Unique Wallets Trading
          </span>
          <div className="flex justify-center items-center bg-[#0b1217] rounded-[10px] mr-4 z-10">
            <button
              type="button"
              name="Exchange"
              onFocus={clicked}
              className={`duration-500 cursor-pointer px-4 py-1 lg:h-8 text-sm text-[#9f9fa8] mr-2 hover:text-[#fff] ${
                selected === "Exchange"
                  ? "rounded-[10px] bg-[#3a4956] text-[#fff]"
                  : ""
              }`}
            >
              Exchange
            </button>
            <button
              type="button"
              name="All"
              onFocus={clicked}
              className={`duration-500 cursor-pointer px-4 py-1 text-sm text-[#9f9fa8] hover:text-[#fff] flex justify-center lg:h-8 
          ${
            selected === "All" ? "rounded-[10px] bg-[#3a4956] text-[#fff]" : ""
          }`}
            >
              All
            </button>
          </div>
        </div>
        <div className="sm:flex hidden">
          <img
            src="/static/images/icons/Icon.png"
            alt="taptool"
            className="w-8"
          />
        </div>
      </div>
      {selected === "All" ? (
        <div className="">
          <LineChart option={optionAll} />
        </div>
      ) : (
        <LineChart option={optionEx} />
      )}
    </div>
  );
};

export default RightWallet;
