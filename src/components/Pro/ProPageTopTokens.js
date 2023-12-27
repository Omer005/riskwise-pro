import * as React from 'react';
import { useState } from "react";
import DropDownMenu from "../marketing/DropDownMenu";
import Box from '@mui/material/Box';
import * as SVG from "../../common/Icons";
import { AGIX, Lq, Fact, Ibtc, Indy, Djed, Encs, Hunt, iUSD, Gens, Minswap, SNEK } from "../../common/IMG/Images";
import LinearProgress from '@mui/material/LinearProgress';
import SimpleBarReact from "simplebar-react";

const TopTokenDatas = [
  {
    id: 0,
    image: AGIX,
    name: "AGIX",
    price: "2.599 ₳",
    volume: 10,
    volumeValue: "124,951 ₳"
  },
  {
    id: 1,
    image: Lq,
    name: "Lq",
    price: "2.599 ₳",
    volume: 40,
    volumeValue: "124,951 ₳"
  },
  {
    id: 2,
    image: Fact,
    name: "Fact",
    price: "2.599 ₳",
    volume: 30,
    volumeValue: "124,951 ₳"
  },
  {
    id: 3,
    image: Ibtc,
    name: "Ibtc",
    price: "2.599 ₳",
    volume: 10,
    volumeValue: "124,951 ₳"
  },
  {
    id: 4,
    image: Indy,
    name: "Indy",
    price: "2.599 ₳",
    volume: 90,
    volumeValue: "124,951 ₳"
  },
  {
    id: 5,
    image: Djed,
    name: "Djed",
    price: "2.599 ₳",
    volume: 10,
    volumeValue: "124,951 ₳"
  },
  {
    id: 6,
    image: Encs,
    name: "Encs",
    price: "2.599 ₳",
    volume: 90,
    volumeValue: "124,951 ₳"
  },
  {
    id: 7,
    image: Gens,
    name: "Gens",
    price: "2.599 ₳",
    volume: 10,
    volumeValue: "124,951 ₳"
  },
  {
    id: 8,
    image: iUSD,
    name: "iUSD",
    price: "2.599 ₳",
    volume: 40,
    volumeValue: "124,951 ₳"
  },
  {
    id: 9,
    image: Hunt,
    name: "Hunt",
    price: "2.599 ₳",
    volume: 30,
    volumeValue: "124,951 ₳"
  },
  {
    id: 10,
    image: Minswap,
    name: "Minswap",
    price: "2.599 ₳",
    volume: 10,
    volumeValue: "124,951 ₳"
  },
  {
    id: 11,
    image: SNEK,
    name: "SNEK",
    price: "2.599 ₳",
    volume: 90,
    volumeValue: "124,951 ₳"
  },
  {
    id: 12,
    image: Djed,
    name: "Djed",
    price: "2.599 ₳",
    volume: 10,
    volumeValue: "124,951 ₳"
  },
  {
    id: 13,
    image: Encs,
    name: "Encs",
    price: "2.599 ₳",
    volume: 90,
    volumeValue: "124,951 ₳"
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
const ProPageTopTokens = () => {
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
      className={`bg-[#142028] rounded-lg xl:w-[32%] relative lg:w-[48%] w-full p-3 `}>
      {/* Header */}
      <div className="flex justify-between">
        <span className="flex gap-2 sm:text-sm  text-xs text-white">Top Tokens <p className="text-[#9f9fa8] sm:text-sm text-xs ">{"(By Volume)"}</p> </span>
        <div
          className="relative flex items-center bg-[#0b1217] px-3 h-7 rounded-[10px] cursor-pointer"
          id="spread"
          onClick={beSpread}
        >
          <span onClick={beSpread} className="pr-2 text-[#9f9fa8] text-sm">
            {duration}
          </span>
          <div className=" w-5 h-5 rounded-sm flex justify-center items-center">
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
        <span className="w-[35%] text-[#9f9fa8] sm:text-sm  text-xs">
          Name
        </span>
        <span className="w-[23%] text-[#9f9fa8] sm:text-sm  text-xs">
          Price
        </span>
        <span className="w-[42%] flex justify-end text-[#9f9fa8] sm:text-sm  text-xs">
          Volume
        </span>
      </div>
      {/* Table Content */}
      <SimpleBarReact className="h-[400px] ">
        {TopTokenDatas.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`flex  pt-2 border-b-[1px] border-[#555555] border-opacity-30 pb-2 cursor-pointer transition-all duration-300 transform hover:bg-[#3a4956] hover:opacity-70`}>
              {/* Name */}
              <span className="flex items-center gap-2 w-[35%] text-[#9f9fa8] sm:text-sm  text-xs">
                <img
                  src={item.image}
                  width={50}
                  height={50}
                  className="rounded-full w-8 h-8"
                  alt="icon" />
                <p className="text-white sm:text-sm text-xs">{item.name}</p>
              </span>
              {/* Price */}
              <span className="flex items-center gap-2 w-[23%] text-[#9f9fa8] sm:text-sm  text-xs">
                <p className="text-white sm:text-sm text-xs">{item.price}</p>
              </span>
              <span className="flex items-center justify-end gap-2 w-[42%] text-[#9f9fa8] sm:text-sm  text-xs">
                <p className="text-white sm:text-sm text-xs">{item.volumeValue}</p>
                <Box sx={{ width: '25%' }}>
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

export default ProPageTopTokens;
