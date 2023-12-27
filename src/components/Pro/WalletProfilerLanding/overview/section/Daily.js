import React from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";

import { Daily as fakeData } from "./FakeData";

const Daily = () => {
  echarts.use([BarChart]);

  const option = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "#121218",
      axisPointer: {
        type: "shadow"
      },
      textStyle: {
        color: "#fff"
      }
    },
    grid: {
      top: "20%",
      left: "4%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      axisTick: { show: false },
      axisLabel: {
        textStyle: {
          baseline: "top",
          color: "#fff",
          fontSize: 10,
          fontWeight: "bold"
        }
      },
      type: "category",
      data: fakeData.map((item) => item.name).reverse()
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, 0.1],
      splitLine: {
        show: true,
        lineStyle: {
          color: "#121218"
        }
      }
    },
    series: [
      {
        type: "bar",
        barWidth: 20,
        data: fakeData.map((item) => item.value).reverse(),
        itemStyle: {
          color: "green",
          borderRadius: [15, 15, 15, 15]
        }
      }
    ]
  };

  return (
    <div className="relative w-full h-full lg:bg-gradient-to-b lg:from-[#3a4956] lg:to-[#0b1217] bg-[#3a4956] rounded-2xl">
      <span className="absolute text-white text-xl left-4 top-2">
        Day of Week
      </span>
      <div className="relative">
        <div className="absolute flex justify-center items-center h-full w-2 ml-1 text-white text-[12px]">
          <span className="-rotate-90">Transactions</span>
        </div>
        <ReactEChartsCore echarts={echarts} option={option} />
      </div>
    </div>
  );
};

export default Daily;
