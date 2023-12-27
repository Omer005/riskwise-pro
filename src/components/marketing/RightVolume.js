import { useState, useEffect } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { LineChart } from "echarts/charts";

import { dataVolume, dataTrades } from "./FakeData";

const TradingVolume = () => {
  echarts.use([BarChart, LineChart]);

  // ** State for buttons
  const [selectedVolume, setSelectedVolume] = useState("Volume");
  const [selectedTotal, setSelectedTotal] = useState("Total");
  // **

  const [grid, setGrid] = useState("8%");

  const optionVolume = {
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
      },
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
      left: "2%",
      right: "4%",
      bottom: grid,
      containLabel: true
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

  const optionTrades = {
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
      },
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
      left: "2%",
      right: "4%",
      bottom: grid,
      containLabel: true
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
    series: dataTrades
  };

  const optionLineVolume = {
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
      left: "2%",
      right: "4%",
      bottom: grid,
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
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
           color:'#121218'
          }
        },
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

  const optionLineTrades = {
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
      left: "2%",
      right: "4%",
      bottom: grid,
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
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
           color:'#121218'
          }
        },
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
        data: [20, 15, 10, 15, 5, 20, 15]
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
        data: [10, 15, 5, 5, 10, 10, 5]
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
        data: [5, 5, 10, 5, 10, 10, 5]
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
        data: [5, 10, 15, 10, 10, 10, 15]
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
        data: [5, 10, 20, 15, 20, 10, 5]
      }
    ]
  };

  const clickedVolume = (e) => {
    setSelectedVolume(e.target.name);
  };

  const clickedTotal = (e) => {
    setSelectedTotal(e.target.name);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {setGrid(window.innerWidth <= 640 ? "16%" : "8%")});
    handleWindowResize();
  }, [grid]);

  const handleWindowResize = () => {
    setGrid(window.innerWidth <= 640 ? "16%" : "8%");
  };

  return (
    <div className="w-full right-0 top-0 h-96 bg-[#142028] rounded-2xl">
      <div className="flex justify-between items-center p-2 pb-8">
        <div className="flex justify-center items-center sm:space-x-5 space-x-1">
          <span className="text-white text-sm z-10 truncate">Trading Volume (₳)</span>
          <div className="flex justify-center items-center bg-[#0b1217] rounded-[10px] sm:mr-4 mr-2 z-10">
            <button
              type="button"
              name="Volume"
              onFocus={clickedVolume}
              className={`duration-500 cursor-pointer sm:px-4 px-1 py-1 lg:h-8 text-sm text-[#9f9fa8] mr-2 hover:text-[#fff] ${
                selectedVolume === "Volume"
                  ? "rounded-[10px] bg-[#3a4956] bg-opacity-70 text-white"
                  : "" }`} >
              Volume
            </button>
            <button
              type="button"
              name="Trades"
              onFocus={clickedVolume}
              className={`duration-500 cursor-pointer sm:px-4 px-1 py-1 text-sm text-[#9f9fa8] hover:text-[#fff] flex justify-center lg:h-8 
          ${
            selectedVolume === "Trades"
              ? "rounded-[10px] bg-[#3a4956] bg-opacity-70 text-white"
              : ""
          }`}  >
              Trades
            </button>
          </div>
          <div className="flex justify-center items-center bg-[#0b1217] rounded-[10px] sm:mr-4 mr-2 z-10">
            <button
              type="button"
              name="Total"
              onFocus={clickedTotal}
              className={`duration-500 cursor-pointer sm:px-4 px-1 py-1 lg:h-8 text-sm text-[#9f9fa8] mr-2 hover:text-[#fff] ${
                selectedTotal === "Total"
                  ? "rounded-[10px] bg-[#3a4956] bg-opacity-70 text-white"
                  : ""
              }`}
            >
              Total
            </button>
            <button
              type="button"
              name="Share"
              onFocus={clickedTotal}
              className={`duration-500 cursor-pointer sm:px-4 px-1 py-1 text-sm text-[#9f9fa8] hover:text-[#fff] flex justify-center lg:h-8 
          ${
            selectedTotal === "Share"
              ? "bg-[#3a4956] bg-opacity-70 rounded-[10px] text-white"
              : ""
          }`}
            >
              Share
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
      {selectedVolume === "Volume" ? (
        selectedTotal === "Total" ? (
          <div className="">
            <ReactEChartsCore echarts={echarts} option={optionVolume} />
          </div>
        ) : (
          <ReactEChartsCore echarts={echarts} option={optionLineVolume} />
        )
      ) : (
        selectedTotal === "Total" ? (
        <ReactEChartsCore echarts={echarts} option={optionTrades} />
      ) : (
        <span className="">
          <ReactEChartsCore echarts={echarts} option={optionLineTrades} />
        </span>
      )
      )}
    </div>
  );
};

export default TradingVolume;
