import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";

import { dataVolume } from "./FakeData";

const Unique = () => {
  echarts.use([LineChart]);

  const optionBar = {
    color: "green",
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
    legend: {
      show: false,
    },
    grid: {
      top: "2%",
      left: "4%",
      right: "4%",
      bottom: "5%",
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
      boundaryGap: true,
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
        "Thu"
      ]
    },
    series: dataVolume
  };

  return (
    <div className="w-full right-0 top-0 h-96 bg-[#142028] rounded-2xl">
      <div className="flex justify-between items-center p-2 pb-8">
        <div className="flex justify-center items-center space-x-5">
          <span className="text-white text-sm z-10 whitespace-nowrap">
           Unique Addresses
          </span>
        </div>
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
          <span className="-rotate-90 whitespace-nowrap"># of Addresses</span>
        </div>
          <ReactEChartsCore
            echarts={echarts}
            option={optionBar}
          />
      </div>
    </div>
  );
};

export default Unique;
