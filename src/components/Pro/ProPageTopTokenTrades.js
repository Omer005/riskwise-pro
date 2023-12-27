import * as React from 'react';
import { useState, useEffect } from "react";
import DropDownMenu from "../marketing/DropDownMenu";
import Box from '@mui/material/Box';
import * as SVG from "../../common/Icons";
import { AGIX, Lq, Fact, Ibtc, Indy, Djed, Encs, Hunt, iUSD, Gens, Minswap, SNEK, LENFI, Copi } from "../../common/IMG/Images";
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
    address: "stake1uyau...9shn",
    addressType: "price1",
    image: AGIX,
    name: "AGIX",
    type: "Buy",
    Amount: "88,059 ₳",
    AmountPercent: 70
  },
  {
    id: 1,
    address: "stake1uyau...hyda",
    addressType: "price2",
    image: LENFI,
    name: "LENFI",
    type: "Buy",
    Amount: "84,059 ₳",
    AmountPercent: 100
  },
  {
    id: 2,
    address: "stake1uy6q...3r4g",
    addressType: "price1",
    image: Copi,
    name: "COPI",
    type: "Buy",
    Amount: "67,400 ₳",
    AmountPercent: 70
  },
  {
    id: 3,
    address: "stake1u8pd...vdh5",
    addressType: "price3",
    image: AGIX,
    name: "AGIX",
    type: "Buy",
    Amount: "54,059 ₳",
    AmountPercent: 30
  },
  {
    id: 4,
    address: "stake1uyau...sg77",
    addressType: "price1",
    image: Ibtc,
    name: "IBTC",
    type: "Buy",
    Amount: "50,185 ₳",
    AmountPercent: 30
  },
  {
    id: 5,
    address: "staek1u054...sg77",
    addressType: "price1",
    image: Ibtc,
    name: "IBTC",
    type: "Sell",
    Amount: "50,185 ₳",
    AmountPercent: 30
  },
  {
    id: 6,
    address: "stake1uyau...9shn",
    addressType: "price1",
    image: AGIX,
    name: "AGIX",
    type: "Buy",
    Amount: "88,059 ₳",
    AmountPercent: 70
  },
  {
    id: 7,
    address: "stake1uyau...2nt5",
    addressType: "price3",
    image: iUSD,
    name: "IUSD",
    type: "Sell",
    Amount: "36,325 ₳",
    AmountPercent: 30
  },
  {
    id: 8,
    address: "stake1uyau...uyul",
    addressType: "price2",
    image: iUSD,
    name: "IUSD",
    type: "Buy",
    Amount: "32,766 ₳",
    AmountPercent: 30
  },
  {
    id: 9,
    address: "stake1uy6q...u8kj",
    addressType: "price1",
    image: Fact,
    name: "FACT",
    type: "Buy",
    Amount: "30,000 ₳",
    AmountPercent: 70
  },
  {
    id: 10,
    address: "$vercel",
    addressType: "price3",
    image: LENFI,
    name: "LENFI",
    type: "Buy",
    Amount: "54,059 ₳",
    AmountPercent: 80
  },
  {
    id: 11,
    address: "stake1uyau...du67",
    addressType: "price1",
    image: LENFI,
    name: "LENFI",
    type: "Buy",
    Amount: "50,185 ₳",
    AmountPercent: 30
  },
  {
    id: 12,
    address: "staek1u054...l7es",
    addressType: "price1",
    image: Copi,
    name: "COPI",
    type: "Buy",
    Amount: "50,185 ₳",
    AmountPercent: 80
  },
  {
    id: 13,
    address: "stake1uyau...1ses",
    addressType: "price1",
    image: AGIX,
    name: "AGIX",
    type: "Buy",
    Amount: "65,059 ₳",
    AmountPercent: 80
  },

]
const TopTokenDatas1 = [
  {
    id: 0,
    address: "stake1uyau...9shn",
    addressType: "price1",
    image: Indy,
    name: "INDY",
    type: "Buy",
    Amount: "83,059 ₳",
    AmountPercent: 50
  },
  {
    id: 1,
    address: "stake1uyau...hyda",
    addressType: "price2",
    image: Hunt,
    name: "HUNT",
    type: "Buy",
    Amount: "24,059 ₳",
    AmountPercent: 400
  },
  {
    id: 2,
    address: "stake1uy6q...3r4g",
    addressType: "price1",
    image: Djed,
    name: "DJED",
    type: "Buy",
    Amount: "57,400 ₳",
    AmountPercent: 90
  },
  {
    id: 3,
    address: "stake1u8pd...vdh5",
    addressType: "price3",
    image: Encs,
    name: "ENCS",
    type: "Buy",
    Amount: "14,059 ₳",
    AmountPercent: 60
  },
  {
    id: 4,
    address: "stake1uyau...sg77",
    addressType: "price1",
    image: Ibtc,
    name: "IBTC",
    type: "Buy",
    Amount: "50,185 ₳",
    AmountPercent: 30
  },
  {
    id: 5,
    address: "staek1u054...sg77",
    addressType: "price1",
    image: Minswap,
    name: "MINSWAP",
    type: "Sell",
    Amount: "50,185 ₳",
    AmountPercent: 10
  },
  {
    id: 6,
    address: "stake1uyau...9shn",
    addressType: "price1",
    image: Gens,
    name: "GENS",
    type: "Buy",
    Amount: "88,059 ₳",
    AmountPercent: 70
  },
  {
    id: 7,
    address: "stake1uyau...2nt5",
    addressType: "price3",
    image: iUSD,
    name: "IUSD",
    type: "Sell",
    Amount: "36,325 ₳",
    AmountPercent: 30
  },
  {
    id: 8,
    address: "stake1uyau...uyul",
    addressType: "price2",
    image: iUSD,
    name: "IUSD",
    type: "Buy",
    Amount: "32,766 ₳",
    AmountPercent: 30
  },
  {
    id: 9,
    address: "stake1uy6q...u8kj",
    addressType: "price1",
    image: Fact,
    name: "FACT",
    type: "Buy",
    Amount: "30,000 ₳",
    AmountPercent: 70
  },
  {
    id: 10,
    address: "$vercel",
    addressType: "price3",
    image: LENFI,
    name: "LENFI",
    type: "Buy",
    Amount: "54,059 ₳",
    AmountPercent: 80
  },
  {
    id: 11,
    address: "stake1uyau...du67",
    addressType: "price1",
    image: LENFI,
    name: "LENFI",
    type: "Buy",
    Amount: "50,185 ₳",
    AmountPercent: 30
  },
  {
    id: 12,
    address: "staek1u054...l7es",
    addressType: "price1",
    image: Copi,
    name: "COPI",
    type: "Buy",
    Amount: "50,185 ₳",
    AmountPercent: 80
  },
  {
    id: 13,
    address: "stake1uyau...1ses",
    addressType: "price1",
    image: AGIX,
    name: "AGIX",
    type: "Buy",
    Amount: "65,059 ₳",
    AmountPercent: 80
  },

]
const TopTokenDatas2 = [
  {
    id: 0,
    address: "stake1uyau...9shn",
    addressType: "price1",
    image: AGIX,
    name: "AGIX",
    type: "Buy",
    Amount: "88,059 ₳",
    AmountPercent: 70
  },
  {
    id: 1,
    address: "stake1uyau...hyda",
    addressType: "price2",
    image: LENFI,
    name: "LENFI",
    type: "Buy",
    Amount: "84,059 ₳",
    AmountPercent: 100
  },
  {
    id: 2,
    address: "stake1uy6q...3r4g",
    addressType: "price1",
    image: Copi,
    name: "COPI",
    type: "Buy",
    Amount: "67,400 ₳",
    AmountPercent: 70
  },
  {
    id: 3,
    address: "stake1u8pd...vdh5",
    addressType: "price3",
    image: AGIX,
    name: "AGIX",
    type: "Buy",
    Amount: "54,059 ₳",
    AmountPercent: 30
  },
  {
    id: 4,
    address: "stake1uyau...sg77",
    addressType: "price1",
    image: Ibtc,
    name: "IBTC",
    type: "Buy",
    Amount: "50,185 ₳",
    AmountPercent: 30
  },
  {
    id: 5,
    address: "staek1u054...sg77",
    addressType: "price1",
    image: Ibtc,
    name: "IBTC",
    type: "Sell",
    Amount: "50,185 ₳",
    AmountPercent: 30
  },
  {
    id: 6,
    address: "stake1uyau...9shn",
    addressType: "price1",
    image: AGIX,
    name: "AGIX",
    type: "Buy",
    Amount: "88,059 ₳",
    AmountPercent: 70
  },
  {
    id: 7,
    address: "stake1uyau...2nt5",
    addressType: "price3",
    image: iUSD,
    name: "IUSD",
    type: "Sell",
    Amount: "36,325 ₳",
    AmountPercent: 30
  },
  {
    id: 8,
    address: "stake1uyau...uyul",
    addressType: "price2",
    image: iUSD,
    name: "IUSD",
    type: "Buy",
    Amount: "32,766 ₳",
    AmountPercent: 30
  },
  {
    id: 9,
    address: "stake1uy6q...u8kj",
    addressType: "price1",
    image: Fact,
    name: "FACT",
    type: "Buy",
    Amount: "30,000 ₳",
    AmountPercent: 70
  },
  {
    id: 10,
    address: "$vercel",
    addressType: "price3",
    image: LENFI,
    name: "LENFI",
    type: "Buy",
    Amount: "54,059 ₳",
    AmountPercent: 80
  },
  {
    id: 11,
    address: "stake1uyau...du67",
    addressType: "price1",
    image: LENFI,
    name: "LENFI",
    type: "Buy",
    Amount: "50,185 ₳",
    AmountPercent: 30
  },
  {
    id: 12,
    address: "staek1u054...l7es",
    addressType: "price1",
    image: Copi,
    name: "COPI",
    type: "Buy",
    Amount: "50,185 ₳",
    AmountPercent: 80
  },
  {
    id: 13,
    address: "stake1uyau...1ses",
    addressType: "price1",
    image: AGIX,
    name: "AGIX",
    type: "Buy",
    Amount: "65,059 ₳",
    AmountPercent: 80
  },

]
const TopTokenDatas3 = [
  {
    id: 0,
    address: "stake1uyau...9shn",
    addressType: "price1",
    image: Lq,
    name: "LQ",
    type: "Buy",
    Amount: "88,059 ₳",
    AmountPercent: 30
  },
  {
    id: 1,
    address: "stake1uyau...hyda",
    addressType: "price2",
    image: LENFI,
    name: "LENFI",
    type: "Buy",
    Amount: "84,059 ₳",
    AmountPercent: 100
  },
  {
    id: 2,
    address: "stake1uy6q...3r4g",
    addressType: "price1",
    image: iUSD,
    name: "IUSD",
    type: "Buy",
    Amount: "37,400 ₳",
    AmountPercent: 40
  },
  {
    id: 3,
    address: "stake1u8pd...vdh5",
    addressType: "price3",
    image: Minswap,
    name: "Minswap",
    type: "Buy",
    Amount: "54,059 ₳",
    AmountPercent: 40
  },
  {
    id: 4,
    address: "stake1uyau...sg77",
    addressType: "price1",
    image: Ibtc,
    name: "IBTC",
    type: "Buy",
    Amount: "50,185 ₳",
    AmountPercent: 30
  },
  {
    id: 5,
    address: "staek1u054...sg77",
    addressType: "price1",
    image: Hunt,
    name: "HUNT",
    type: "Sell",
    Amount: "53,185 ₳",
    AmountPercent: 20
  },
  {
    id: 6,
    address: "stake1uyau...9shn",
    addressType: "price1",
    image: SNEK,
    name: "SNEK",
    type: "Buy",
    Amount: "28,059 ₳",
    AmountPercent: 90
  },
  {
    id: 7,
    address: "stake1uyau...2nt5",
    addressType: "price3",
    image: iUSD,
    name: "IUSD",
    type: "Sell",
    Amount: "36,325 ₳",
    AmountPercent: 30
  },
  {
    id: 8,
    address: "stake1uyau...uyul",
    addressType: "price2",
    image: iUSD,
    name: "IUSD",
    type: "Buy",
    Amount: "32,766 ₳",
    AmountPercent: 30
  },
  {
    id: 9,
    address: "stake1uy6q...u8kj",
    addressType: "price1",
    image: Fact,
    name: "FACT",
    type: "Buy",
    Amount: "30,000 ₳",
    AmountPercent: 70
  },
  {
    id: 10,
    address: "$vercel",
    addressType: "price3",
    image: LENFI,
    name: "LENFI",
    type: "Buy",
    Amount: "54,059 ₳",
    AmountPercent: 80
  },
  {
    id: 11,
    address: "stake1uyau...du67",
    addressType: "price1",
    image: LENFI,
    name: "LENFI",
    type: "Buy",
    Amount: "50,185 ₳",
    AmountPercent: 30
  },
  {
    id: 12,
    address: "staek1u054...l7es",
    addressType: "price1",
    image: Copi,
    name: "COPI",
    type: "Buy",
    Amount: "50,185 ₳",
    AmountPercent: 80
  },
  {
    id: 13,
    address: "stake1uyau...1ses",
    addressType: "price1",
    image: AGIX,
    name: "AGIX",
    type: "Buy",
    Amount: "65,059 ₳",
    AmountPercent: 80
  },

]

const ProPageTopTokenTrades = () => {
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
        <span className="flex gap-2 sm:text-sm  text-xs text-white">Top Token Trades</span>
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
              }`}  >
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
        <span className="w-[40%] text-[#9f9fa8] sm:text-sm  text-xs">
          Address
        </span>
        <span className="w-[23%] text-[#9f9fa8] sm:text-sm  text-xs">
          Token
        </span>
        <span className="w-[25%] text-[#9f9fa8] sm:text-sm  text-xs">
          Type
        </span>
        <span className="w-[12%] text-[#9f9fa8] sm:text-sm  text-xs">
          Amount
        </span>
      </div>
      {/* Table Content */}
      <SimpleBarReact className="h-[400px] ">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`flex  pt-2 border-b-[1px] border-[#555555] border-opacity-30 pb-2 cursor-pointer transition-all duration-300 transform hover:bg-[#3a4956] hover:opacity-70`}>
              {/* Address */}
              <span className="flex items-center gap-2 w-[40%] text-[#9f9fa8] sm:text-sm  text-xs">
                <p className="text-white sm:text-sm text-xs">{item.address}</p>
              </span>
              {/* Token */}
              <span className="flex items-center gap-2 w-[23%] text-[#9f9fa8] sm:text-sm  text-xs">
                <img
                  src={item.image}
                  width={50}
                  height={50}
                  className="rounded-full sm:w-8 w-6 sm:h-8 h-6"
                  alt="icon" />
                <p className="text-white sm:text-sm text-xs">{item.name}</p>
              </span>
              {/* Type */}
              <span
                id={item.id}
                onMouseEnter={handleToEnter}
                onMouseLeave={handleToLeave}
                className={`flex flex-col justify-center items-start gap-2 w-[25%]  sm:text-sm  text-xs ${item.type === "Buy" ? "text-green-300" : "text-red-300"}`}>
                <p className={` sm:text-sm text-xs ${item.type === "Buy" ? "text-green-300" : "text-red-300"}`}>{item.type}</p>

              </span>
              {/* Amount */}
              <span
                className="flex flex-col justify-center items-start gap-2 w-[12%] text-[#9f9fa8] sm:text-sm  text-xs">
                <p className="text-white sm:text-sm text-xs whitespace-nowrap inline-block ">{item.Amount}</p>
                <Box sx={{ width: '70%' }}>
                  <LinearProgress
                    color='inherit'
                    variant="determinate" value={item.AmountPercent} />
                </Box>
              </span>
            </div>
          )
        })}

      </SimpleBarReact>
    </div>
  );
};

export default ProPageTopTokenTrades;
