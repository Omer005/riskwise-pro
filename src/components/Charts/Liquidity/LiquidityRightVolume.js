import { useState, useEffect } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { LineChart } from "echarts/charts";

import DropDownMenu from "../../marketing/DropDownMenu";
import * as SVG from "../../../common/Icons";
import { dataVolume } from "./FakeData";

const LiquidityRightVolume = () => {
  echarts.use([BarChart, LineChart]);

  const [duration, setDuration] = useState("180d");
  const [spread, setSpread] = useState(false);

  // ** State for button
  const [selectedTotal, setSelectedTotal] = useState("Total");
  // **

  const beSpread = () => {
    setSpread(!spread);
  };

  const chooseItem = (item) => {
    setDuration(item.value);
  };

  const durationList = [
    { id: 0, value: "30d" },
    { id: 1, value: "90d" },
    { id: 2, value: "180d" },
    { id: 3, value: "1y" },
    { id: 4, value: "all" }
  ];

  const [grid, setGrid] = useState("8%");

  const optionBar = {
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
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
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
    grid: {
      top: "2%",
      left: "4%",
      right: "4%",
      bottom: grid,
      containLabel: true
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          color: "#121218"
        }
      }
    },
    xAxis: {
      type: "category",
      axisTick: { show: false },
      data: [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Tue",
        "Wed",
        "Thu"
      ]
    },
    series: dataVolume
  };

  const optionLine = {
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

    grid: {
      top: "2%",
      left: "4%",
      right: "4%",
      bottom: grid,
      containLabel: true
    },

    xAxis: [
      {
        axisTick: { show: false },
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      }
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            color: "#121218"
          }
        }
      }
    ],
    series: [
      {
        name: "Minswap",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series"
        },
        showSymbol: false,
        data: [55, 45, 40, 50, 45, 40, 55]
      },
      {
        name: "WingRiders",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series"
        },
        showSymbol: false,
        data: [15, 15, 15, 15, 5, 20, 10]
      },
      {
        name: "MuesliSwap",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series"
        },
        showSymbol: false,
        data: [5, 10, 5, 5, 10, 15, 5]
      },
      {
        name: "VyFinance",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series"
        },
        showSymbol: false,
        data: [10, 5, 5, 5, 10, 5, 5]
      },
      {
        name: "Spectrum",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series"
        },
        showSymbol: false,
        data: [5, 10, 15, 10, 10, 10, 10]
      },
      {
        name: "SundaeSwap",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series"
        },
        showSymbol: false,
        data: [10, 15, 20, 15, 20, 10, 15]
      }
    ]
  };

  const clickedTotal = (e) => {
    setSelectedTotal(e.target.name);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize());
    handleWindowResize();
  }, [grid]);

  const handleWindowResize = () => {
    setGrid(window.innerWidth <= 640 ? "16%" : "8%");
  };

  return (
    <div className="w-full right-0 top-0 h-96 lg:w-[69%] bg-[#142028] rounded-2xl">
      <div className="flex justify-between items-center p-2 pb-8">
        <div className="flex justify-center items-center space-x-5">
          <span className="text-white text-sm z-10 whitespace-nowrap">
            Trended Liquidity by DEX
          </span>

          <div
            className="relative flex items-center bg-[#0b1217] px-3 h-7 rounded-[10px] cursor-pointer"
            id="spread"
            onClick={beSpread}
          >
            <span onClick={beSpread} className="pr-2 text-[#9f9fa8] text-sm">
              {duration}
            </span>
            <div className="bg-black w-5 h-5 rounded-sm flex justify-center items-center">
              {spread === true ? <SVG.Up /> : <SVG.Down />}
            </div>
            <div
              className={`absolute bottom-0 left-0 z-50 ${
                spread === false ? "hidden" : "w-full"
              }`}
            >
              <DropDownMenu menuitems={durationList} chooseItem={chooseItem} />
            </div>
          </div>

          <div className="flex justify-center items-center bg-[#0b1217] rounded-[10px] mr-4 z-10">
            <button
              type="button"
              name="Total"
              onFocus={clickedTotal}
              className={`duration-500 cursor-pointer px-4 py-1 lg:h-8 text-sm text-[#9f9fa8] mr-2 hover:text-[#fff] ${
                selectedTotal === "Total"
                  ? "rounded-[10px] bg-[#3a4956] text-[#fff]"
                  : ""
              }`}
            >
              Total
            </button>
            <button
              type="button"
              name="Share"
              onFocus={clickedTotal}
              className={`duration-500 cursor-pointer px-4 py-1 text-sm text-[#9f9fa8] hover:text-[#fff] flex justify-center lg:h-8 
          ${
            selectedTotal === "Share"
              ? "rounded-[10px] bg-[#3a4956] text-[#fff]"
              : ""
          }`}
            >
              Share
            </button>
          </div>
        </div>
        <div className="sm:flex hidden space-x-1">
          <img
            src="/static/images/icons/Icon.png"
            alt="taptool"
            className="w-8"
          />
          <span className="text-[#9f9fa8] text-xs">Risk Wise</span>
          <p className="text-yellow-500 font-medium text-[8px]">Pro</p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -top-4 left-1 flex justify-center items-center h-full w-2 ml-1 text-white text-[12px]">
          <span className="-rotate-90">Amount</span>
        </div>
        {selectedTotal === "Total" ? (
          <ReactEChartsCore
            echarts={echarts}
            option={optionBar}
            style={{ height: 300 }}
          />
        ) : (
          <div className="">
            <ReactEChartsCore echarts={echarts} option={optionLine} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LiquidityRightVolume;
