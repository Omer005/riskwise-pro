import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";

import CommonChartHeader from "./CommonChartHeader";
import { TotalMarket as SVG } from "../../../common/Icons";

const TotalMarket = () => {
  echarts.use([BarChart]);
  
  const data = 630230;

  const notification = "Inflow/outflow for entire native asset market. Net inflow/outflow is \n calculated as buy volume - sell volume"

  const durationList = [
    { id: 0, value: "7d" },
    { id: 1, value: "24h" },
    { id: 2, value: "30d" },
    { id: 3, value: "90d" },
    { id: 4, value: "6m" },
    { id: 5, value: "1y" },
    { id: 6, value: "All" }
  ];

  const itemColor = () => {
    if (data > 0) {
      return [
        { offset: 0, color: "#142028" },
        { offset: 1, color: "green" }
      ];
    } else {
      return [
        { offset: 0, color: "orange" },
        { offset: 1, color: "#142028" }
      ];
    }
  };

  const emphasisColor = () => {
    if (data > 0) {
      return [
        { offset: 0, color: "#142028" },
        { offset: 1, color: "blue" }
      ];
    } else {
      return [
        { offset: 0, color: "red" },
        { offset: 1, color: "#142028" }
      ];
    }
  };

  const option = {
    height: 80,
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
      left: "3%",
      right: "3%",
      top: "0%",
      containLabel: true
    },
    xAxis: {
      type: "value",
      min: -(data * 1.1),
      max: data * 1.1,
      splitLine: {
        show: true,
        lineStyle: {
          color: "#121218"
        }
      }
    },
    yAxis: {
      show: false,
      type: "category"
    },
    series: [
      {
        name: "Total Market :",
        type: "bar",
        barWidth: 4,
        data: [data],
        itemStyle: {
          borderRadius: [7, 7, 7, 7],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, itemColor())
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 1, 1, emphasisColor())
          }
        }
      }
    ]
  };

  return (
    <div className="bg-[#0b1217] p-5 my-4 rounded-2xl">
      <div className="bg-[#142028] rounded-2xl text-white">
        <CommonChartHeader
          title={"Total Market Net Inflow/Outflow"}
          durationList={durationList}
          notification={notification}
        />
        <div className="relative p-2 w-full">
          <div className="absolute md:-top-14 top-2 flex justify-center w-full">
            <SVG />
          </div>
          <ReactEChartsCore echarts={echarts} option={option} style={{ height: 120 }} />
        </div>
      </div>
    </div>
  );
};

export default TotalMarket;
