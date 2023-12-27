import { useState } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";

import CommonChartHeader from "./CommonChartHeader";

const TokenVolume = () => {
  echarts.use([BarChart]);

  const [selected, setSelected] = useState("1d");

  const clicked = (e) => {
    setSelected(e.target.name);
  };

  const durationList = [
    { id: 0, value: "All" },
    { id: 1, value: "7d" },
    { id: 2, value: "30d" },
    { id: 3, value: "90d" },
    { id: 4, value: "6m" },
    { id: 5, value: "1y" }
  ];

  const children = (
    <div className="">
      <div className="flex justify-center items-center bg-[#121218] rounded-[10px] sm:mr-4 mr-2">
        <button
          type="button"
          name="1d"
          onFocus={clicked}
          className={`duration-500 cursor-pointer sm:px-4 px-2 py-1 lg:h-7 sm:text-sm text-[10px] text-[#9f9fa8] mr-2 hover:text-[#fff] ${
            selected === "1d" ? "rounded-[10px] bg-[#3a4956] text-white" : ""
          }`}
        >
          1d
        </button>
        <button
          type="button"
          name="1w"
          onFocus={clicked}
          className={`duration-500 cursor-pointer sm:px-4 px-2 py-1 sm:text-sm text-[10px] text-[#9f9fa8] flex justify-center lg:h-7 
          ${selected === "1w" ? "rounded-[10px] bg-[#3a4956] text-white" : ""}`}
        >
          1w
        </button>
      </div>
    </div>
  );

  const data = [
    17423, 14210, -16764, 17879, -13478, 18373, -13891, 12171, 15520, 17269,
    -13724, 16707, -18188, 13879, 15626, -13635, 16177, -13156, 18793, -12598,
    18200, 15316, -17552, -11874, -19771, 15038, -16838, 12029, 19793, 16117,
    -12879, 17478, -11373, 19891, -15171, 12520, 16269, -19724, -13707, 15188,
    17423, 14210, -16764, 17879, -13478, 18373, -13891, 12171, 15520, 17269,
    -13724, 16707, -18188, 13879, 15626, -13635, 16177, -13156, 18793, -12598,
    18200, 15316, -17552, -11874, -19771, 15038, -16838, 12029, 19793, 16117,
    -12879, 17478, -11373, 19891, -15171, 12520, 16269, -19724, -13707, 15188,
    17423, 14210, -16764, 17879, -13478, 18373, -13891, 12171, 15520, 17269,
    -13724, 16707, -18188, 13879, 15626, -13635, 16177, -13156, 18793, -12598,
    18200, 15316, -17552, -11874, -19771, 15038, -16838, 12029, 19793, 16117,
    -12879, 17478, -11373, 19891, -15171, 12520, 16269, -19724, -13707, 15188
  ];

  const notification = "Buy volume - sell volume across all DEXs by day"

  const option = {
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
    grid: {
      top: "2%",
      left: "2%",
      right: "4%",
      bottom: "5%",
      height: 400,
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
        "Thu",
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
        "Thu",
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
    series: [
      {
        name: "",
        type: "bar",
        stack: "total",
        data: data,
        itemStyle: {
          borderRadius: [7, 7, 7, 7],
          color: function (params) {
            if (params.value > 0) {
              return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "green" },
                { offset: 1, color: "#0b1217" }
              ]);
            } else {
              return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#142028" },
                { offset: 1, color: "orange" }
              ]);
            }
          }
        },
        emphasis: {
          focus: "series",
          itemStyle: {
            color: "blue"
          }
        }
      }
    ]
  };

  return (
    <div className="bg-[#0b1217] p-5 my-8 rounded-2xl">
      <div className="bg-[#142028] rounded-2xl">
        <CommonChartHeader
          title={"Token Volume Netflow"}
          descrip={"(Excluding Stablecoins)"}
          durationList={durationList}
          children={children}
          notification={notification}
        />
        <div className="px-2 pb-2 w-full h-[450px]">
          <ReactEChartsCore echarts={echarts} option={option} style={{ height: 500 }} />
        </div>
      </div>
    </div>
  );
};

export default TokenVolume;
