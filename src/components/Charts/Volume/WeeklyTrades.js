import { useState, useEffect } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";

import { weeklyTrades as dataVolume } from "./FakeData";

const WeeklyTrades = () => {
  echarts.use([BarChart]);

  const [grid, setGrid] = useState("8%");

  const optionBar = {
    color: ["#53a4fe", "green", "#fff", "yellow", "purple", "red"],
    tooltip: {
      padding: [16, 16, 8, 16],
      backgroundColor: "#121218",
      extraCssText:
        "pointer-events: all; overflow: auto; max-width: 400px;white-space: normal; box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, .1);border-radius: 4px; max-height: 200px;",
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
        "Sat"
      ]
    },
    series: dataVolume
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize());
    handleWindowResize();
  }, [grid]);

  const handleWindowResize = () => {
    setGrid(window.innerWidth <= 1280 ? "16%" : "8%");
  };

  return (
    <div className="w-full right-0 top-0 h-96 lg:w-[49%] bg-[#142028] rounded-2xl">
      <div className="flex justify-between items-center p-2 pb-8">
        <div className="flex justify-center items-center space-x-5">
          <span className="text-white lg:text-xl text-sm z-10 sm:whitespace-nowrap">
            Weekly Trades per DEX
          </span>
        </div>
        <div className="md:flex hidden">
          <img
            src="/static/images/icons/Icon.png"
            alt="taptool"
            className="w-8"
          />
        </div>
      </div>
      <ReactEChartsCore echarts={echarts} option={optionBar} />
    </div>
  );
};

export default WeeklyTrades;
