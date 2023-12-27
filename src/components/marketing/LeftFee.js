import React from "react";
import { useState, useEffect } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";

import { leftFee as fakeData } from "./FakeData";

const LeftFee = () => {
  echarts.use([BarChart]);

  const [screenSize, setScreenSize] = useState(false);

  const handleScreenSize = () => {
    setScreenSize(window.innerWidth <= 1280);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenSize());
  }, [screenSize]);

  const colors = {
    0: "#53a4fe",
    1: "green",
    2: "#fff",
    3: "yellow",
    4: "purple",
    5: "red"
  };

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
      top: "10%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      axisTick: { show: false },
      axisLabel: {
        rotate: 30,
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
        barWidth: 35,
        data: fakeData.map((item) => item.value).reverse(),
        itemStyle: {
          color: function (param) {
            return colors[param.dataIndex];
          },
          borderRadius: [7, 7, 7, 7]
        }
      }
    ]
  };

  return (
    <div className="relative h-96 mb-4 bg-[#142028] rounded-2xl w-full">
      <div className="flex justify-between items-center p-2">
        <span className="text-white text-sm">Fees Generated (₳)</span>
        <div className="sm:flex hidden">
          <img
            src="/static/images/icons/Icon.png"
            alt="taptool"
            className="w-8"
          />
        </div>
      </div>
      <div className="w-full h-full">
        <ReactEChartsCore echarts={echarts} option={option} />
      </div>
    </div>
  );
};

export default LeftFee;
