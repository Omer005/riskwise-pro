import React from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";

const Token = () => {
  echarts.use([BarChart]);

  const option = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "#121218",
      textStyle: {
        color: "#fff"
      },
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      bottom: 5,
      left: 20,
      orient: "horizontal",
      borderColor: "black",
      textStyle: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold"
      },
      itemGap: 16,
      align: "right"
    },
    grid: {
      top: "3%",
      left: "5%",
      right: "4%",
      bottom: "13%",
      containLabel: true
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} %"
      }
    },
    xAxis: {
      type: "category",
      axisTick: { show: false },
      data: [
        "<7 Days",
        "7-30 Days",
        "30-60 Days",
        "60-90 Days",
        "90-180 Days",
        "180 Days-1 Year"
      ]
    },
    series: [
      {
        name: "Addresses",
        color: "#014e1b",
        type: "bar",
        barGap: 0,
        itemStyle: {
          borderRadius: [7, 7, 0, 0]
        },
        data: [7, 8, 4, 6, 10, 72]
      },
      {
        name: "Tokens",
        color: "#00ff55",
        type: "bar",
        barGap: 0,
        itemStyle: {
          borderRadius: [7, 7, 0, 0]
        },
        data: [4, 6, 6, 8, 14, 68]
      }
    ]
  };

  return (
    <div className="relative w-full bg-[#142028] rounded-2xl">
      <div className="flex justify-between items-center p-2">
        <span className="text-white text-sm">Token Seniority Distribution</span>
        <div className="sm:flex hidden">
          <img
            src="/static/images/icons/Icon.png"
            alt="taptool"
            className="w-8"
          />
        </div>
      </div>
      <div className="relative">
        <div className="absolute -top-4 left-1 flex justify-center items-center h-full w-2 ml-1 text-white text-[12px]">
          <span className="-rotate-90 whitespace-nowrap">% Holding</span>
        </div>
        <ReactEChartsCore
          echarts={echarts}
          option={option}
          style={{ height: 300 }}
        />
      </div>
    </div>
  );
};

export default Token;
