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
  { icon: <SVG.BelowF />, value: "0 - 5k ₳" }
];

const notification = "Top inflow/outflow by NFT collection. Net inflow/outflow is\n calculated as buy volume - sell volume."

const NFTCollection = () => {
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
        "https://d28yzo4ezrm37i.cloudfront.net/image/QmVEGrcrMnmhfSCmaFoWu6MD51R1jXk2kq8uyMuksGCeBB?s=200",
      description: "HungryCow"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/QmNRsHyStKznRqQtwT9zeGASu4u8MZsUf86m4ctAscoPAR?s=200",
      description: "The Ape Society"
    },
    {
      source:
        "https://d2wbrxwn38q552.cloudfront.net/exchange-logos/pxlz.png?s=200",
      description: "DEADPXLZ"
    },
    {
      source:
        "https://d2wbrxwn38q552.cloudfront.net/images/tt-logo-small.png?s=200",
      description: "Tappy by TapTools"
    },
    {
      source:
        "https://d2wbrxwn38q552.cloudfront.net/nft-images/4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f.png?s=200",
      description: "SpaceBudz"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/QmVYkepurtBuTeb2C5gwshwN9WAZeM21drvr1N1YnK7jo4?s=200",
      description: "ADA Handle"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/QmfJTEyXmoLYiWcTCA2Kv1kXQysyncKTfy4jp2RghPet3M?s=200",
      description: "Poki Lifetime Pass"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/QmNSL2YRtBH9R1PPVdDvyqX8EBs7bVYrubcps5sYP5sXuT?s=200",
      description: "Chilled Kongs"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/QmNgxCACLBLaeKvesZaFWEw7QFNVbiYy7oSjLjaYZcmQHS?s=200",
      description: "Furniture by The Ape Society"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/Qma1x94dGm2utdYQqd5sfnHWaBd2j1E2gRHeBy8ZyYnDq6?s=200",
      description: "Space Ape Club"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/QmbYzcxXEXEHDufvALPX8PZkXBc8e5jR8kR3W8pgGhWfkd?s=200",
      description: "Politikoz"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/Qmc4mYzHc7jJ61r6GviHF5DKHHCc5Dd3PAhVWotHYqTLCt?s=200",
      description: "The Mandrillz"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/QmacCcAXdmWcWsAHrGqBeRxhQ6hx11z1ys1kv13MYNPEFS?s=200",
      description: "Chilled Kongs Vox Avatar"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/QmT6ybSoVUnBD6xL97Pfaxkj9MN1Ngedkhb7DfHSe3azsB?s=200",
      description: "Alley Katz"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/QmcpSLdqjnHQy27EGr7y1ReqQqip8kZqaJgudYpuU9vUxH?s=200",
      description: "MeteraWhite"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/bafybeih2pktxxovb2rtal6fzjr7kpkayyjy4b62vsjkq5s7zh6n7idav3i?s=200",
      description: "Magic Kongs"
    },
    {
      source:
        "https://d2wbrxwn38q552.cloudfront.net/nft-images/901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f4834.png?s=200",
      description: "The Mallard Order"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/QmZRf6WNsbWyUWLypoZ2posa8XsPNmh61EL3tVFZ1Yxw9p?s=200",
      description: "Clay Nation X Good Charlotte by Clay Mates"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/QmNqCgpSw5dCWtSspLFnHM2hu9Q3YoFFiDMPPuDANwU1vy?s=200",
      description: "Comucopias Custom Dome Sale"
    },
    {
      source:
        "https://d28yzo4ezrm37i.cloudfront.net/image/QmcDAPTqXaEFpTozSC86AVS8DjqztK5jF7wnrMHWLYDQP3?s=200",
      description: "Cornucopias Land Sale - Zones 1-3"
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
        title={"Top NFT Collection Inflow/Outflow"}
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
                  round={"rounded-[4px]"}
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

export default NFTCollection;
