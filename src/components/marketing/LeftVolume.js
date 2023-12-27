// import { findInstance } from "react-dom-instance";
import { useState, useEffect } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";

const LeftVolume = () => {
  echarts.use([PieChart]);

  const [screenSize, setScreenSize] = useState(false);
  // const [position, setPosition] = useState(0);

  const handleScreenSize = () => {
    setScreenSize(window.innerWidth <= 1280);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenSize);
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
      trigger: "item",
      borderWidth: 0,
      backgroundColor: "#23232c",
      textStyle: {
        color: "white"
      }
    },
    legend: {
      top: "20%",
      left: "25",
      orient: "vertical",
      icon: "circle",
      borderColor: "black",
      textStyle: {
        color: "#fff"
      },
      itemGap: 16
    },
    series: [
      {
        type: "pie",
        radius: ["63%", "70%"],
        avoidLabelOverlap: false,
        left: "170",
        itemStyle: {
          borderRadius: 30,
          borderColor: "#fff",
          borderWidth: 0,
          color: function (param) {
            return colors[param.dataIndex];
          }
        },
        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 20,
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1201, name: "Minswap" },
          { value: 135, name: "WingRiders" },
          { value: 120, name: "Spectrum" },
          { value: 134, name: "VyFinance" },
          { value: 100, name: "MuesliSwap" },
          { value: 150, name: "SundaeSwap" }
        ]
      }
    ]
  };

  return (
    <div className="relative h-96 mb-4 bg-[#142028] rounded-2xl w-full">
      <div className="flex justify-between items-center p-2">
        <span className="text-white text-sm">Dominance (Volume)</span>
        <div className="sm:flex hidden">
          <img
            src="/static/images/icons/Icon.png"
            alt="taptool"
            className="w-8"
          />
        </div>
      </div>
      <div className="relative w-full h-full">
        <div className="absolute 2xl:top-[75px] xl:top-[100px] sm:top-[85px] top-[110px] 2xl:left-[85px] xl:left-[85px] sm:left-[85px] left-[85px] flex justify-center w-full h-full">
          <div className="flex justify-center items-center 2xl:w-[150px] xl:w-[100px] sm:w-[130px] w-[80px] 2xl:h-[150px] xl:h-[100px] sm:h-[130px] h-[80px] rounded-full bg-[#3a4956] opacity-70 cursor-pointer">
            <div className="text-center">
              <div className="text-[#9f9fa8] 2xl:text-xl xl:text-[16px] sm:text-xl text-sm">
                MIN
              </div>
              <div className="text-[#fff] 2xl:text-2xl xl:text-[15px] sm:text-2xl text-base">
                71.41%
              </div>
              <div className="text-[#fff] 2xl:text-[16px] xl:text-[12px] sm:text-[16px] text-[10px]">
                Dominance
              </div>
            </div>
          </div>
        </div>
        <div className="" id="chart">
          <ReactEChartsCore echarts={echarts} option={option} />
        </div>
      </div>
    </div>
  );
};

export default LeftVolume;
