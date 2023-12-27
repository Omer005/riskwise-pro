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

const notification =
  "Top inflow/outflow liquidity by liquidity pool. Net inflow/outflow is calculated as\n ADA added to liquidity - ADA removed from liquidity.";

const LiquidityPool = () => {
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
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F75fcc276057db5fc48eae0e11453c773c8a54604c3086bf9d95ac1b743485259.png&w=32&q=75",
      description: "CHRY/ADA LP(TeddySwap)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Fsrc%2Ftoken-logos%2Ff6696363e9196289ef4f2b4bf34bc8acca5352cdc7509647afe6888f54454459.png&w=32&q=75",
      description: "TEDY/ADA LP(TeddySwap)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Ff66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069455448.png&w=32&q=75",
      description: "iETH/ADA LP(Minswap)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Ff43a62fdc3965df486de8a0d32fe800963589c41b38946602a0dc53541474958.png&w=32&q=75",
      description: "AGIX/ADA LP(Minswap)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F86abe45be4d8fb2e8f28e8047d17d0ba5592f2a6c8c452fc88c2c14358524159.png&w=32&q=75",
      description: "XRAY/ADA LP(WingRiders)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Ff66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069555344.png&w=32&q=75",
      description: "iUSD/ADA LP(Minswap)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F533bb94a8850ee3ccbe483106489399112b74c905342cb1792a797a0494e4459.png&w=32&q=75",
      description: "INDY/ADA LP(SundaeSwap)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Fcloudflare-ipfs.com%2Fipfs%2FQmP22dA8Nt7LiGeRoXjMuNjq69MNY7xmp7m1X9nxbAP9nv&w=32&q=75",
      description: "OPTIM/ADA LP(Spectrum)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61446a65644d6963726f555344.png&w=32&q=75",
      description: "DJED/ADA LP(WingRiders)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61446a65644d6963726f555344.png&w=32&q=75",
      description: "DJED/ADA LP(Spectrum)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Fb34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a634e455441.png&w=32&q=75",
      description: "cNETA/ADA LP(Minswap)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Fsrc%2Ftoken-logos%2Ff6696363e9196289ef4f2b4bf34bc8acca5352cdc7509647afe6888f54454459.png&w=32&q=75",
      description: "TEDY/ADA LP(TeddySwap)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e.png&w=32&q=75",
      description: "MIN/ADA LP(Minsawp)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Fcloudflare-ipfs.com%2Fipfs%2FQmP22dA8Nt7LiGeRoXjMuNjq69MNY7xmp7m1X9nxbAP9nv&w=32&q=75",
      description: "OPTIM/ADA LP(Spectrum)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F4190b2941d9be04acc69c39739bd5acc66d60ccab480d8e20bc87e3763425443.png&w=32&q=75",
      description: "cBTC/ADA LP(Minswap)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F4190b2941d9be04acc69c39739bd5acc66d60ccab480d8e20bc87e3763425443.png&w=32&q=75",
      description: "cBTC/ADA LP(Spectrum)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Fsrc%2Ftoken-logos%2F95a427e384527065f2f8946f5e86320d0117839a5e98ea2c0b55fb0048554e54.png&w=32&q=75",
      description: "HUNT/ADA LP(Spectrum)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Fsrc%2Ftoken-logos%2F95a427e384527065f2f8946f5e86320d0117839a5e98ea2c0b55fb0048554e54.png&w=32&q=75",
      description: "HUNT/ADA LP(Minswap)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2F75fcc276057db5fc48eae0e11453c773c8a54604c3086bf9d95ac1b743485259.png&w=32&q=75",
      description: "CHRY/ADA LP(Minswap)"
    },
    {
      source:
        "https://www.taptools.io/_next/image?url=https%3A%2F%2Ftaptools-public.s3.amazonaws.com%2Ftoken-logos%2Fb34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a634e455441.png&w=32&q=75",
      description: "cNETA/ADA LP(Minswap)"
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
        title={"Top Liquidity Pool Inflow/Outflow"}
        descrip={"(Per Wallet Class)"}
        durationList={durationList}
        notification={notification}
      />
      <div className="relative p-2 h-[430px]">
        <ReactEChartsCore
          echarts={echarts}
          option={option}
          style={{ height: 700 }}
        />
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

export default LiquidityPool;
