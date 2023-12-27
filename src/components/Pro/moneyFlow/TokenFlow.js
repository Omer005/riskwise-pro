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

const TokenFlow = () => {
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

  const notification = "Top inflow/outflow by token. Net inflow/outflow is\n calculated as buy volume - sell volume."

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
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Fd28yzo4ezrm37i.cloudfront.net%2Fimage%2FQmaPe6g9NPTTkJ87CF2MjN9fS8Mbfwv8Ue6DwZyyUyXUQF&w=32&q=75",
      description: "SNEK"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F1ddcb9c9de95361565392c5bdff64767492d61a96166cb16094e54be4f5054.png&w=32&q=75",
      description: "OPT"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F8cfd6893f5f6c1cc954cec1a0a1460841b74da6e7803820dde62bb78524a56.png&w=32&q=75",
      description: "RIV"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Fa2944573e99d2ed3055b808eaa264f0bf119e01fc6b18863067c63e44d454c44.png&w=32&q=75",
      description: "MELD"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Fedfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e993444794e5458.png&w=32&q=75",
      description: "NTX"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Fsrc%2Ftoken-logos%2F95a427e384527065f2f8946f5e86320d0117839a5e98ea2c0b55fb0048554e54.png&w=32&q=75",
      description: "HUNT"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F8fef2d34078659493ce161a6c7fba4b56afefa8535296a5743f6958741414441.png&w=32&q=75",
      description: "LENFI"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Fsrc%2Ftoken-logos%2Fa3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e516f7263666178746f6b656e.png&w=32&q=75",
      description: "FACT"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F6ac8ef33b510ec004fe11585f7c5a9f0c07f0c23428ab4f29c1d7d104d454c44.png&w=32&q=75",
      description: "MELD"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F8a1cfae21368b8bebbbed9800fec304e95cce39a2a57dc35e2e3ebaa4d494c4b.png&w=32&q=75",
      description: "MILK"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f56594649.png&w=32&q=75",
      description: "VYFI"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Ff66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069425443.png&w=32&q=75",
      description: "iBTC"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Fcloudflare-ipfs.com%2Fipfs%2FQmP22dA8Nt7LiGeRoXjMuNjq69MNY7xmp7m1X9nxbAP9nv&w=32&q=75",
      description: "OPTIM"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Ff43a62fdc3965df486de8a0d32fe800963589c41b38946602a0dc53541474958.png&w=32&q=75",
      description: "AGIX"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Fsrc%2Ftoken-logos%2Ff6696363e9196289ef4f2b4bf34bc8acca5352cdc7509647afe6888f54454459.png&w=32&q=75",
      description: "TEDY"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F9abf0afd2f236a19f2842d502d0450cbcd9c79f123a9708f96fd9b96454e4353.png&w=32&q=75",
      description: "ENCS"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e.png&w=32&q=75",
      description: "MIN"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F5d16cc1a177b5d9ba9cfa9793b07e60f1fb70fea1f8aef064415d114494147.png&w=32&q=75",
      description: "IAG"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Ff66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069555344.png&w=32&q=75",
      description: "iUSD"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F1d7f33bd23d85e1a25d87d86fac4f199c3197a2f7afeb662a0f34e1e776f726c646d6f62696c65746f6b656e.png&w=32&q=75",
      description: "WMT"
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
          0.47, 0.45, 0.41, 0.38, 0.32, 0.27, 0.24, 0.19, 0.1, 0.02, -0.04,
          -0.11, -0.2, -0.25, -0.29, -0.34, -0.39, -0.4, -0.44, -0.47
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
        title={"Token Market Net Inflow/Outflow"}
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

export default TokenFlow;
