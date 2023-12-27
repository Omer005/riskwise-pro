import * as React from 'react';
import { useState, useEffect } from "react";
import DropDownMenu from "../marketing/DropDownMenu";
import Box from '@mui/material/Box';
import * as SVG from "../../common/Icons";
import { AGIX, Lq, Fact, Ibtc, Indy, Djed, Encs, Hunt, iUSD, Gens, Minswap, SNEK } from "../../common/IMG/Images";
import LinearProgress from '@mui/material/LinearProgress';
import SimpleBarReact from "simplebar-react";
const durationList = [
  { id: 0, value: "30d" },
  { id: 1, value: "7d" },
  { id: 2, value: "90d" },
  { id: 3, value: "180d" },
  { id: 4, value: "1y" },
  { id: 4, value: "all" }
];
const TopTokenDatas = [
  {
    id: 0,
    time: "20h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 1,
    time: "20h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 2,
    time: "19h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 3,
    time: "19h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 4,
    time: "19h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 5,
    time: "21h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 6,
    time: "21h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 7,
    time: "20h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 8,
    time: "18h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 9,
    time: "21h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 10,
    time: "17h ago",
    image: AGIX,
    name: "AGIX",
    value: "906,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 11,
    time: "17h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 12,
    time: "14h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
]
const TopTokenDatas1 = [
  {
    id: 0,
    time: "20h ago",
    image: Lq,
    name: "LQ",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 1,
    time: "20h ago",
    image: Fact,
    name: "Fact",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 2,
    time: "19h ago",
    image: Ibtc,
    name: "IBTC",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 3,
    time: "19h ago",
    image: Indy,
    name: "INDY",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 4,
    time: "19h ago",
    image: Djed,
    name: "DJED",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 5,
    time: "21h ago",
    image: Encs,
    name: "ENCS",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 6,
    time: "21h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 7,
    time: "20h ago",
    image: Hunt,
    name: "Hunt",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 8,
    time: "18h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 9,
    time: "21h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 10,
    time: "17h ago",
    image: AGIX,
    name: "AGIX",
    value: "906,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 11,
    time: "17h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 12,
    time: "14h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
]
const TopTokenDatas2 = [
  {
    id: 0,
    time: "20h ago",
    image: iUSD,
    name: "IUSD",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 1,
    time: "20h ago",
    image: Minswap,
    name: "Minswap",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 2,
    time: "19h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 3,
    time: "19h ago",
    image: SNEK,
    name: "SNEK",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 4,
    time: "19h ago",
    image: Gens,
    name: "GENS",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 5,
    time: "21h ago",
    image: Ibtc,
    name: "Ibtc",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 6,
    time: "21h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 7,
    time: "20h ago",
    image: Fact,
    name: "FACT",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 8,
    time: "18h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 9,
    time: "21h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 10,
    time: "17h ago",
    image: AGIX,
    name: "AGIX",
    value: "906,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 11,
    time: "17h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 12,
    time: "14h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
]
const TopTokenDatas3 = [
  {
    id: 0,
    time: "20h ago",
    image: iUSD,
    name: "iUSD",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 1,
    time: "20h ago",
    image: Fact,
    name: "Fact",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 2,
    time: "19h ago",
    image: Lq,
    name: "LQ",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 3,
    time: "19h ago",
    image: Encs,
    name: "ENCS",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 4,
    time: "19h ago",
    image: Djed,
    name: "DJED",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 5,
    time: "21h ago",
    image: Hunt,
    name: "HUNT",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 6,
    time: "21h ago",
    image: Gens,
    name: "GENS",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 7,
    time: "20h ago",
    image: Indy,
    name: "INDY",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 8,
    time: "18h ago",
    image: Minswap,
    name: "Minswap",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 9,
    time: "21h ago",
    image: SNEK,
    name: "SNEK",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 10,
    time: "17h ago",
    image: AGIX,
    name: "AGIX",
    value: "906,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 11,
    time: "17h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
  {
    id: 12,
    time: "14h ago",
    image: AGIX,
    name: "AGIX",
    value: "915,787 ₳",
    From: "addr1wyuy6...l5ee",
    To: "addr1wx7rm...hlzu",
    active: false,
    active1: false
  },
]

const ProPageTopTokenTransfers = () => {
  const [duration, setDuration] = useState("30d");
  const [spread, setSpread] = useState(false);
  const [data, setData] = useState(TopTokenDatas);
  const handleFromEnter = (_idx) => {
    const newData = data.map((item, idx) => {
      if (idx === _idx) { item.active = true; }
      else { item.active = false; }
      return item;
    })
    setData(newData)
  }
  const handleFromLeave = (_idx) => {
    const newData = data.map((item, idx) => {
      if (idx === _idx) item.active = false;
      else item.active = false;
      return item;
    })
    setData(newData)
  }
  const handleToEnter = (_idx) => {
    const newData = data.map((item, idx) => {
      if (idx === _idx) { item.active1 = true; }
      else { item.active1 = false; }
      return item;
    })
    setData(newData)
  }
  const handleToLeave = (_idx) => {
    const newData = data.map((item, idx) => {
      if (idx === _idx) { item.active1 = false; }
      else { item.active1 = false; }
      return item;
    })
    setData(newData)
  }

  const beSpread = () => {
    setSpread(!spread);
  };
  const chooseItem = (item) => {
    setDuration(item.value);
  };
  useEffect(() => {
    if (duration === "30d") setData(TopTokenDatas)
    if (duration === "90d") setData(TopTokenDatas1)
    if (duration === "7d") setData(TopTokenDatas2)
    if (duration === "180d") setData(TopTokenDatas3)
    else return
  }, [duration])
  return (
    <div
      className={`bg-[#142028] rounded-lg xl:w-[32%] relative lg:w-[48%] w-full p-3 `}>
      {/* Header */}
      <div className="flex justify-between">
        <span className="flex gap-2 sm:text-sm  text-xs text-white">Top Tokens Transfers</span>
        <div
          className="relative flex items-center bg-[#0b1217] px-3 h-7 rounded-[10px] cursor-pointer"
          id="spread"
          onClick={beSpread}   >
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
        <span className="w-[15%] text-[#9f9fa8] sm:text-sm  text-xs">
          Time
        </span>
        <span className="w-[22%] text-[#9f9fa8] sm:text-sm  text-xs">
          Token
        </span>
        <span className="w-[23%] text-[#9f9fa8] sm:text-sm  text-xs">
          Value
        </span>
        <span className="w-[20%] text-[#9f9fa8] sm:text-sm  text-xs">
          From
        </span>
        <span className="w-[20%] flex justify-start text-[#9f9fa8] sm:text-sm  text-xs">
          To
        </span>
      </div>
      {/* Table Content */}
      <SimpleBarReact className="h-[400px] ">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`flex  pt-2 border-b-[1px] border-[#555555] border-opacity-30 pb-2 cursor-pointer transition-all duration-300 transform hover:bg-[#3a4956] hover:opacity-70`}>
              {/* Time */}
              <span className="flex items-center gap-2 w-[15%] text-[#9f9fa8] sm:text-sm  text-xs">
                <p className="text-white sm:text-sm text-xs">{item.time}</p>
              </span>
              {/* Token */}
              <span className="flex items-center gap-2 w-[22%] text-[#9f9fa8] sm:text-sm  text-xs">
                <img
                  src={item.image}
                  width={50}
                  height={50}
                  className="rounded-full sm:w-8 w-6 sm:h-8 h-6"
                  alt="icon" />
                <p className="text-white sm:text-sm text-xs">{item.name}</p>
              </span>
              {/* Value */}
              <span
                className="flex flex-col justify-center items-start gap-2 w-[20%] text-[#9f9fa8] sm:text-sm  text-xs">
                <p className="text-white sm:text-sm text-xs">{item.value}</p>
                <Box sx={{ width: '70%' }}>
                  <LinearProgress
                    color='inherit'
                    variant="determinate" value={100} />
                </Box>
              </span>
              {/* From */}
              <span
                idx={item.id}
                onMouseEnter={() => handleFromEnter(idx)}
                onMouseLeave={() => handleFromLeave(idx)}
                className="flex items-center justify-start gap-2 w-[21%] text-[#9f9fa8] sm:text-sm  text-xs">
                <div
                  className=''>
                  {item.active ? (<div className='flex justify-between gap-2 bg-[#121212] hover:border-[1px] hover:border-blue-300 rounded-xl px-2 py-1'>
                    <SVG.Price1 />
                    <span className='text-sm'>❯</span>
                  </div>) : (<p className="text-white sm:text-sm text-xs inline-block whitespace-nowrap text-ellipsis overflow-hidden">{item.From}</p>)}
                </div>
              </span>
              {/* To */}
              <span
                idx={item.id}
                onMouseEnter={() => handleToEnter(idx)}
                onMouseLeave={() => handleToLeave(idx)}
                className="flex items-center justify-start gap-2 w-[22%] text-[#9f9fa8] sm:text-sm  text-xs">
                <div className='transition-all duration-200 transform'>
                  {item.active1 ?
                    (<div className='flex justify-between gap-2 bg-[#121212] hover:border-[1px] hover:border-blue-300 rounded-xl px-2 py-1'>
                      <SVG.Price1 />
                      <span className='text-sm'>❯</span>
                    </div>) :
                    (<p className="text-white sm:text-sm text-xs inline-block whitespace-nowrap text-ellipsis overflow-hidden">{item.To}</p>)}
                </div>
              </span>
            </div>
          )
        })}

      </SimpleBarReact>
    </div>
  );
};

export default ProPageTopTokenTransfers;
