import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";

import CommonChartHeader from "./CommonChartHeader";
import WalletClass from "./WalletClass";
import * as SVG from "../../../common/Icons";

const TokenMarket = () => {
  echarts.use([BarChart]);

  const Icons = [
    { source: <SVG.OverM />, description: "1M ADA+" },
    { source: <SVG.BelowM />, description: "250K-1M ADA" },
    { source: <SVG.OverH />, description: "100K-250K ADA" },
    { source: <SVG.BelowH />, description: "25K-100K ADA" },
    { source: <SVG.OverF />, description: "5K-25K ADA" },
    { source: <SVG.BelowF />, description: "0-5K ADA" }
  ];

  const durationList = [
    { id: 0, value: "7d" },
    { id: 1, value: "1h" },
    { id: 2, value: "4h" },
    { id: 3, value: "12h" },
    { id: 4, value: "24h" },
    { id: 5, value: "30d" },
    { id: 6, value: "90d" },
    { id: 7, value: "6m" },
    { id: 8, value: "1y" },
    { id: 9, value: "All" }
  ];

  const notification = "Inflow/outflow by wallet value for the fungible token market. Net inflow/outflow is\n calculated as buy volume - sell volume."

  const option = {
    height: 355,
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
      bottom: "6%",
      containLabel: false
    },
    xAxis: {
      type: "value",
      // min: -(maxData * 1.1),
      // max: maxData * 1.1,
      min: -0.5,
      max: 0.5,
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
        name: "Cost",
        type: "bar",
        barWidth: 4,
        itemStyle: {
          borderRadius: [7, 7, 7, 7],
          color: function (params) {
            if (params.value > 0) {
              return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "black" },
                { offset: 0.05, color: "blue" },
                { offset: 1, color: "green" }
              ]);
            } else {
              return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "red" },
                { offset: 0.5, color: "orange" },
                { offset: 1, color: "black" }
              ]);
            }
          }
        },
        data: [-0.23, 0.08, -0.17, 0.47, -0.36, 0.18],
        emphasis: {
          itemStyle: {
            color: "yellow"
          }
        }
      }
    ]
  };

  return (
    <div className="relative bg-[#142028] rounded-2xl w-full">
      <CommonChartHeader
        title={"Token Market Net Inflow/Outflow"}
        descrip={"(Per Wallet Class)"}
        durationList={durationList}
        notification={notification}
      />
      <div className="relative p-2 h-[430px]">
        <ReactEChartsCore echarts={echarts} option={option} style={{ height: 500 }} />
        <div className="flex justify-center">
          <div className="absolute top-4 flex flex-col justify-center items-center space-y-3">
            {Icons.map((icon, id) => {
              return (
                <WalletClass
                  key={id}
                  source={icon.source}
                  description={icon.description}
                  value={"-1.28M"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenMarket;
