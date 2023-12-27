import { useState, useEffect } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { LineChart } from "echarts/charts";

import DateButtonGroup from "./DateButtonGroup";
import WalletClass from "../../Pro/moneyFlow/WalletClass";
import * as SVG from "../../../common/Icons";
import DropDownMenu from "../../marketing/DropDownMenu";

const WalletVolume = () => {
  echarts.use([BarChart, LineChart]);

  const [duration, setDuration] = useState("24h");
  const [spread, setSpread] = useState(false);

  const beSpread = () => {
    setSpread(!spread);
  };

  const chooseItem = (item) => {
    setDuration(item.value);
  };

  const durationList = [
    { id: 0, value: "24h" },
    { id: 1, value: "7d" },
    { id: 2, value: "30d" },
    { id: 3, value: "All" },
  ];

  const Icons = [
    { source: <SVG.OverM />, description: "1M ADA+" },
    { source: <SVG.BelowM />, description: "250K-1M ADA" },
    { source: <SVG.OverH />, description: "100K-250K ADA" },
    { source: <SVG.BelowH />, description: "25K-100K ADA" },
    { source: <SVG.OverF />, description: "5K-25K ADA" },
    { source: <SVG.BelowF />, description: "0-5K ADA" }
  ];

  const buttonGroup = [
    {
      id: 0,
      date: "24h",
      active: true
    },
    {
      id: 1,
      date: "7d",
      active: false
    },
    {
      id: 3,
      date: "30d",
      active: false
    },
    {
      id: 4,
      date: "All",
      active: false
    }
  ];

  // ** State for button
  const [selectedTotal, setSelectedTotal] = useState("Total");
  // **

  const [grid, setGrid] = useState("8%");

  const optionBar1 = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "#121218",
      textStyle: {
        color: "#fff"
      }
    },
    grid: {
      top: 10,
      right: 50,
      left: 10,
      bottom: 30
    },
    // toolbox: {
    //   show: true,
    //   backgroundColor:"yellow",
    //   borderRadius:50,
    //   iconStyle:{
    //     color:"green",
    //   },
    //   right:10,
    //   top:0,
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    xAxis: {
      type: "value"
    },
    yAxis: {
      show: true,
      axisTick: { show: false },
      axisLabel: { show: false },
      type: "category",
      inverse: true
    },
    series: [
      {
        type: "bar",
        barWidth: 4,
        stack: "total",
        emphasis: {
          focus: "series"
        },
        data: [165, 170, 30, 150, 105, 110],
        itemStyle: {
          borderRadius: [7, 7, 7, 7],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: "red" },
            { offset: 0.65, color: "red" },
            { offset: 1, color: "#142028" }
          ])
        }
      },
      {
        type: "bar",
        stack: "total",
        emphasis: {
          focus: "series"
        },
        data: [150, 105, 110, 165, 170, 30],
        itemStyle: {
          borderRadius: [7, 7, 7, 7],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: "#142028" },
            { offset: 0.35, color: "yellow" },
            { offset: 1, color: "yellow" }
          ])
        }
      }
    ]
  };

  const optionBar2 = {
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
                { offset: 0, color: "#142028" },
                { offset: 0.25, color: "blue" },
                { offset: 1, color: "green" }
              ]);
            } else {
              return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "red" },
                { offset: 0.75, color: "orange" },
                { offset: 1, color: "#142028" }
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

  const clickedTotal = (e) => {
    setSelectedTotal(e.target.name);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize());
    handleWindowResize();
  }, [grid]);

  const handleWindowResize = () => {
    setGrid(window.innerWidth <= 640 ? "16%" : "8%");
  };

  return (
    <div className="w-full right-0 top-0 h-96 lg:w-[49%] bg-[#142028] rounded-2xl">
      <div className="flex justify-between items-center p-2 pb-8">
        <div className="flex justify-center items-center space-x-2">
          <span className="text-white lg:text-xl text-sm z-10 sm:whitespace-nowrap">
            Volume by Wallet Value
          </span>
          <div className="xl:block hidden">
            <DateButtonGroup dateData={buttonGroup} bg={"bg-[#0b1217]"} />
          </div>
          <div className="xl:hidden">
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
                <DropDownMenu
                  menuitems={durationList}
                  chooseItem={chooseItem}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#0b1217] rounded-[10px] mr-4 z-10">
            <button
              type="button"
              name="Total"
              onFocus={clickedTotal}
              className={`duration-500 cursor-pointer px-4 py-1 lg:h-8 text-sm text-[#9f9fa8] mr-2 hover:text-[#fff] ${
                selectedTotal === "Total"
                  ? "rounded-[10px] bg-[#3a4956] text-[#fff]"
                  : ""
              }`}
            >
              Total
            </button>
            <button
              type="button"
              name="Net"
              onFocus={clickedTotal}
              className={`duration-500 cursor-pointer px-4 py-1 text-sm text-[#9f9fa8] hover:text-[#fff] flex justify-center lg:h-8 
          ${
            selectedTotal === "Net"
              ? "rounded-[10px] bg-[#3a4956] text-[#fff]"
              : ""
          }`}
            >
              Net
            </button>
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
      {selectedTotal === "Total" ? (
        <div className="flex">
          <div className="flex flex-col justify-center xl:space-y-3 space-y-0 pb-6 lg:w-[20%] w-[10%]">
            {Icons.reverse().map((icon, id) => (
              <div
                key={id}
                className="xl:flex xl:flex-row flex flex-col xl:items-center xl:justify-end lg:items-end items-start xl:space-x-2 xl:space-y-0 space-x-0 lg:-space-y-1 pl-1"
              >
                <span className="lg:text-[10px] text-[7px] text-[#9f9fa8] whitespace-nowrap">
                  {icon.description}
                </span>
                {icon.source}
              </div>
            ))}
          </div>
          <div className="lg:w-[80%] w-[90%]">
            <ReactEChartsCore echarts={echarts} option={optionBar1} />
          </div>
        </div>
      ) : (
        <div className="relative">
          <ReactEChartsCore echarts={echarts} option={optionBar2} />
          <div className="flex justify-center">
            <div className="absolute top-1 flex flex-col justify-center items-center space-y-0">
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
      )}
    </div>
  );
};

export default WalletVolume;
