import { useState } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";

import CommonChartHeader from "./CommonChartHeader";
import MarkClass from "./MarkClass";
import LeftDropdown from "./LeftDropdown";
import * as SVG from "../../../common/Icons";

const itemList = [
  { icon: <SVG.OverM />, value: "1M+ ₳" },
  { icon: <SVG.BelowM />, value: "250k ₳ - 1M ₳" },
  { icon: <SVG.OverH />, value: "100k ₳ - 250k ₳" },
  { icon: <SVG.BelowH />, value: "25k ₳ - 100k ₳" },
  { icon: <SVG.OverF />, value: "5k ₳ - 25k ₳" },
  { icon: <SVG.BelowF />, value: "0 - 5k ₳" },
  { icon: <SVG.WalletProfiler2 />, value: "All" }
];

const TokenStaking = () => {
  echarts.use([BarChart]);

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

  const notification = "Top inflow/outflow staking by token. Net inflow/outflow is calculated as\n value added to staking - value removed from staking."

  const [leftItem, setLeftItem] = useState(itemList[0].icon);
  const [spread, setSpread] = useState(false);

  const beSpread = () => {
    setSpread(!spread);
  };

  const chooseLeftItem = (item) => {
    setLeftItem(item.icon);
  };

  const Icons = [
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Fda8c30857834c6ae7203935b89278c532b3995245295456f993e1d244c51.png&w=32&q=75",
      description: "LQ"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Fd2wbrxwn38q552.cloudfront.net%2Ftoken-logos%2F682fe60c9918842b3323c43b5144bc3d52a23bd2fb81345560d73f634e45574d.png&w=32&q=75",
      description: "NEWM"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Fc0ee29a85b13209423b10447d3c2e6a50641a15c57770e27cb9d507357696e67526964657273.png&w=32&q=75",
      description: "WRT"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Fb316f8f668aca7359ecc6073475c0c8106239bf87e05a3a1bd5697647856594649.png&w=32&q=75",
      description: "xVYFI"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F8e51398904a5d3fc129fbf4f1589701de23c7824d5c90fdb9490e15a434841524c4933.png&w=32&q=75",
      description: "C3"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F8a1cfae21368b8bebbbed9800fec304e95cce39a2a57dc35e2e3ebaa4d494c4b.png&w=32&q=75",
      description: "MILK"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e.png&w=32&q=75",
      description: "MIN"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f56594649.png&w=32&q=75",
      description: "VYFI"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Fb34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a634e455441.png&w=32&q=75",
      description: "dNETA"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F533bb94a8850ee3ccbe483106489399112b74c905342cb1792a797a0494e4459.png&w=32&q=75",
      description: "INDY"
    }
  ];

  const option = {
    height: 560,
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
      bottom: "5%",
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
        data: [
          0.47, 0.45, 0.41, 0.38, 0.32, 0.27, 0.24, 0.19, 0.1, 0.02, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0
        ].reverse(),
        emphasis: {
          itemStyle: {
            color: "yellow"
          }
        }
      }
    ]
  };

  return (
    <div className="relative bg-[#142028] rounded-2xl w-full h-[700px]">
      <CommonChartHeader
        title={"Top Token Staking Inflow/Outflow"}
        descrip={"(Per Wallet Class)"}
        durationList={durationList}
        notification={notification}
      />
      <div className="relative p-2 h-[430px]">
        <ReactEChartsCore echarts={echarts} option={option} style={{ height: 700 }} />
        <div className="flex justify-center">
          <div className="absolute top-2 flex flex-col justify-center items-center space-y-1">
            {Icons.map((icon, id) => {
              return (
                <MarkClass
                  key={id}
                  source={icon.source}
                  description={icon.description}
                  round={"rounded-full"}
                  value={"-1.28M"}
                />
              );
            })}
          </div>
        </div>
        <div className="absolute -top-2 left-2">
          <div
            className="relative flex items-center bg-[#121218] px-3 mr-3 h-8 rounded-[10px] cursor-pointer z-[9999]"
            id="spread"
            onClick={beSpread}
          >
            <span onClick={beSpread} className="pr-2 text-[#9f9fa8] text-sm">
              {leftItem}
            </span>
            <div className="bg-black w-5 h-5 rounded-sm flex justify-center items-center">
              {spread === true ? <SVG.Up /> : <SVG.Down />}
            </div>
            <div
              className={`absolute bottom-0 left-0 z-50 ${
                spread === false ? "hidden" : "w-full"
              }`}
            >
              <LeftDropdown menuitems={itemList} chooseItem={chooseLeftItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenStaking;
