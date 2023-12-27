import * as React from 'react';
import { useState } from "react";
import DropDownMenu from "../marketing/DropDownMenu";
import Box from '@mui/material/Box';
import * as SVG from "../../common/Icons";
import LinearProgress from '@mui/material/LinearProgress';
import SimpleBarReact from "simplebar-react";

const MintingDatas = [
  {
    id: 0,
    name: "7044e...4a2cd",
    volume: 90,
    volumeValue: "20889"
  },
  {
    id: 1,
    name: "Minswap Farm Harvest (hvAsset)",
    volume: 40,
    volumeValue: "1768"
  },
  {
    id: 2,
    name: "Cardania: Enter the Ultraverse 1st Ed.Cards",
    volume: 10,
    volumeValue: "598"
  },
  {
    id: 3,
    name: "8395d...Ofebd",
    volume: 10,
    volumeValue: "335"
  },
  {
    id: 4,
    name: "Minswap LP Tokens",
    volume: 90,
    volumeValue: "290"
  },
  {
    id: 5,
    name: "Furniture by The Ape Society",
    volume: 10,
    volumeValue: "288"
  },
  {
    id: 6,
    name: "5a66c...b799b",
    volume: 20,
    volumeValue: "150"
  },
  {
    id: 7,
    name: "Cardana Starships",
    volume: 10,
    volumeValue: "150"
  },
  {
    id: 8,
    name: "ADA Handle",
    volume: 40,
    volumeValue: "112"
  },
  {
    id: 9,
    name: "Fluid Tokens Bond",
    volume: 30,
    volumeValue: "106"
  },
]
const durationList = [
  { id: 0, value: "30d" },
  { id: 1, value: "7d" },
  { id: 2, value: "90d" },
  { id: 3, value: "180d" },
  { id: 4, value: "1y" },
  { id: 4, value: "all" }
];
const ProPagePoliciesMinting = () => {
  const [duration, setDuration] = useState("30d");
  const [spread, setSpread] = useState(false);
  
  const beSpread = () => {
    setSpread(!spread);
  };
  const chooseItem = (item) => {
    setDuration(item.value);
  };
  return (
    <div
      className="bg-[#142028] rounded-lg xl:w-[32%] relative lg:w-[48%] w-full p-3 ">
      {/* Header */}
      <div className="flex justify-between">
        <span className="flex gap-2 sm:text-sm  text-xs text-white">Policies Minting
        </span>
        <div
          className="relative flex items-center bg-[#0b1217] px-3 h-7 rounded-[10px] cursor-pointer"
          id="spread"
          onClick={beSpread}
        >
          <span onClick={beSpread} className="pr-2 text-[#9f9fa8] text-sm">
            {duration}
          </span>
          <div className="bg-[#0b1217] w-5 h-5 rounded-sm flex justify-center items-center">
            {spread === true ? <SVG.Up /> : <SVG.Down />}
          </div>
          <div
            className={`absolute bottom-0 left-0 z-50 ${spread === false ? "hidden" : "w-full"
              }`}
          >
            <DropDownMenu
              menuitems={durationList}
              chooseItem={chooseItem}
            />
          </div>
        </div>
      </div>
      {/* Table */}
      {/* Table Header */}
      <div className="flex mt-3 border-b-[1px] border-[#555555] border-opacity-30 pb-2">
        <span className="w-[70%] text-[#9f9fa8] sm:text-sm  text-xs">
          Name
        </span>
        <span className="w-[30%] flex justify-end text-[#9f9fa8] sm:text-sm  text-xs">
          Mints
        </span>
      </div>
      {/* Table Content */}
      <SimpleBarReact className="h-[400px] ">
        {MintingDatas.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`flex  pt-2 border-b-[1px] border-[#555555] border-opacity-30 pb-2 transition-all duration-300 transform hover:bg-[#3a4956] hover:opacity-70 cursor-pointer`}>
              {/* Name */}
              <span className="flex items-center gap-2 w-[70%] text-[#9f9fa8] sm:text-sm  text-xs ">
                <p className="text-white sm:text-sm text-xs  overflow-hidden whitespace-nowrap text-ellipsis">{item.name}</p>
              </span>
              <span className="flex items-center justify-end gap-2 w-[30%] text-[#9f9fa8] sm:text-sm  text-xs">
                <p className="text-white sm:text-sm text-xs overflow-hidden whitespace-normal text-ellipsis">{item.volumeValue}</p>
                <Box sx={{ width: '60%' }}>
                  <LinearProgress
                    color='inherit'
                    variant="determinate" value={item.volume} />
                </Box>
              </span>
            </div>
          )
        })}

      </SimpleBarReact>
    </div>
  );
};

export default ProPagePoliciesMinting;
