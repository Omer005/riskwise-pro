import { useState, useEffect } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";

const legend1 = {
  top: "center",
  right: 20,
  orient: "vertical",
  borderColor: "black",
  textStyle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold"
  },
  itemGap: 16,
  align: "right"
};

const legend2 = {
  top: "bottom",
  left: "center",
  orient: "horizontal",
  borderColor: "black",
  textStyle: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold"
  },
  itemGap: 16,
  align: "right"
};

const data1 = [
  { value: 1201, name: "0-1k | 70.15%" },
  { value: 135, name: "1k-5k | 18.29%" },
  { value: 120, name: "5k-10k |   4.05%" },
  { value: 134, name: "10k-25k |   3.74%" },
  { value: 100, name: "25k-100k |   2.66%" },
  { value: 150, name: "100k-250k |   0.75%" },
  { value: 150, name: "250k-500k |   0.18%" },
  { value: 150, name: "500k-1m |   0.11%" },
  { value: 150, name: "1m+ |   0.07%" }
]

const data2 = [
  { value: 1201, name: "0-1k" },
  { value: 135, name: "1k-5k" },
  { value: 120, name: "5k-10k" },
  { value: 134, name: "10k-25k |   3.74%" },
  { value: 100, name: "25k-100k" },
  { value: 150, name: "100k-250k" },
  { value: 150, name: "250k-500k" },
  { value: 150, name: "500k-1m" },
  { value: 150, name: "1m+" }
]

const Holder = () => {
  echarts.use([PieChart]);

  const [legend, setLegend] = useState(legend1);
  const [height, setHeight] = useState(350);
  const [radius, setRadius] = useState(["75%", "83%"]);
  const [hide, setHide] = useState(false)
  const [data, setData] = useState(data1)

  const colors = {
    0: "#0b77b0",
    1: "#04a0f3",
    2: "#04d1f3",
    3: "#0afac4",
    4: "#00c382",
    5: "#1aa76a",
    6: "#106a1e",
    7: "#72af35",
    8: "#eeff00"
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setLegend(window.innerWidth <= 1280 ? legend2 : legend1);
      setHeight(window.innerWidth <= 1280 ? 500 : 300);
      setRadius(window.innerWidth <= 1280 ? ["58%", "65%"] : ["75%", "83%"]);
      setHide(window.innerWidth <= 1280 ? true : false);
      setData(window.innerWidth <= 1280 ? data2 : data1);
    });
    handleWindowResize();
  }, [legend]);

  const handleWindowResize = () => {
    setLegend(window.innerWidth <= 1280 ? legend2 : legend1);
    setHeight(window.innerWidth <= 1280 ? 500 : 300);
    setRadius(window.innerWidth <= 1280 ? ["58%", "65%"] : ["75%", "83%"]);
    setHide(window.innerWidth <= 1280 ? true : false);
    setData(window.innerWidth <= 1280 ? data2 : data1);
  };

  const option = {
    backgroundColor: "rgba(0, 0, 0, 0)",
    tooltip: {
      trigger: "item",
      borderWidth: 0,
      backgroundColor: "#23232c",
      textStyle: {
        color: "white"
      }
    },
    legend: legend,
    series: [
      {
        type: "pie",
        radius: radius,
        avoidLabelOverlap: false,
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
        data: data
      }
    ]
  };

  return (
    <div className="relative mb-4 bg-[#142028] rounded-2xl w-full">
      <div className="flex justify-between items-center p-2">
        <span className="text-white text-sm">Holder Distribution</span>
        <div className="sm:flex hidden">
          <img
            src="/static/images/icons/Icon.png"
            alt="taptool"
            className="w-8"
          />
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute flex justify-center items-center w-full h-full">
          <div className="flex flex-col justify-center items-center space-y-2 bg-[#0b1217] rounded-full w-40 h-40">
            <div className="text-white text-2xl">11183</div>
            <div className="whitespace-nowrap text-white text-2xl">0-1k ₳</div>
          </div>
        </div>
        <div id="chart">
          <ReactEChartsCore
            echarts={echarts}
            option={option}
            style={{ height: height }}
          />
        </div>
      </div>
    </div>
  );
};

export default Holder;
