import LineChart from "echarts-for-react";

import { series } from "./FakeData";

const AmountAddress = () => {
  const option = {
    color: ["blue", "green"],
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
      data: ["Amount", "Addresses"],
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
    },
    yAxis: [
      {
        type: "value",
        position: "right",
        alignTicks: false,
        axisLine: {
          show: false,
          lineStyle: {
            color: "white"
          }
        },
        axisLabel: {
          formatter: "{value}"
        }
      },
      {
        type: "value",
        position: "left",
        alignTicks: false,
        axisLine: {
          show: false,
          lineStyle: {
            color: "white"
          }
        },
        axisLabel: {
          formatter: "{value} M"
        }
      }
    ],
    grid: {
      top: "2%",
      left: "4%",
      right: "4%",
      bottom: "8%",
      containLabel: true
    },
    series: series
  };

  return (
    <div className="w-full right-0 top-0 h-96 bg-[#142028] rounded-2xl">
      <div className="flex justify-between items-center p-2 pb-8">
        <div className="flex justify-center items-center space-x-5">
          <span className="text-white z-10 whitespace-nowrap lg:text-xl text-base">
            Amount Staked / Addresses Staked
          </span>
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
        <div className="absolute -top-4 left-2 lg:flex justify-center items-center h-full w-2 ml-1 text-white text-[12px] hidden">
          <span className="-rotate-90 text-lg whitespace-nowrap">
            Amount
          </span>
        </div>
        <LineChart option={option} />
        <div className="absolute -top-4 right-6 lg:flex justify-center items-center h-full w-2 ml-1 text-white text-[12px] hidden">
          <span className="-rotate-90 text-lg whitespace-nowrap">
            Addresses
          </span>
        </div>
      </div>
    </div>
  );
};

export default AmountAddress;
