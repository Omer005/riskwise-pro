import { useState } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { LineChart } from "echarts/charts";

import DropDownMenu from "../../marketing/DropDownMenu";
import * as SVG from "../../../common/Icons";

const TrendedTransfer = () => {
  echarts.use([BarChart, LineChart]);

  const [duration, setDuration] = useState("180d");
  const [spread, setSpread] = useState(false);

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

  const colors = ["#53c5ff", "#faed34"];

  const option = {
    color: colors,
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
    grid: {
      top: "4%",
      left: "7%",
      bottom: "14%",
      right: "7%"
    },
    legend: {
      data: ["Transfer Count", "Transfer Vol"],
      bottom: -5,
      left: 40,
      textStyle: {
        color: "#fff",
        fontSize: 11
      },
      itemGap: 9
    },
    xAxis: [
      {
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
          "Dec",
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
      }
    ],
    yAxis: [
      {
        type: "value",
        position: "right",
        alignTicks: false,
        axisLine: {
          show: false,
          lineStyle: {
            color: colors[0]
          }
        },
        axisLabel: {
          formatter: "{value} B"
        }
      },
      {
        type: "value",
        position: "left",
        alignTicks: false,
        axisLine: {
          show: false,
          lineStyle: {
            color: colors[1]
          }
        },
        axisLabel: {
          formatter: "{value} K"
        }
      }
    ],
    series: [
      {
        name: "Transfer Vol",
        type: "bar",
        itemStyle: {
          borderRadius: [7, 7, 0, 0]
        },
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
        ]
      },
      {
        name: "Transfer Count",
        type: "line",
        smooth: true,
        showSymbol: false,
        yAxisIndex: 1,
        data: [
          2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2, 2.0,
          2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2
        ]
      }
    ]
  };

  return (
    <div className="w-full right-0 top-0 h-96 bg-[#142028] rounded-2xl">
      <div className="flex justify-between items-center p-2 pb-8">
        <div className="flex justify-center items-center space-x-5">
          <span className="text-white text-sm z-10 whitespace-nowrap">
            Trended Transfers by day
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
        </div>
        <div className="sm:flex hidden">
          <img
            src="/static/images/icons/Icon.png"
            alt="taptool"
            className="w-8"
          />
        </div>
      </div>
      <div className="relative">
        <div className="absolute -top-4 left-2 xl:flex justify-center items-center h-full w-2 ml-1 text-white text-[12px] hidden">
          <span className="-rotate-90 text-lg whitespace-nowrap">
            Transfer Count
          </span>
        </div>
        <ReactEChartsCore echarts={echarts} option={option} />
        <div className="absolute -top-4 right-6 xl:flex justify-center items-center h-full w-2 ml-1 text-white text-[12px] hidden">
          <span className="-rotate-90 text-lg whitespace-nowrap">
            Transfer Vol
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrendedTransfer;
