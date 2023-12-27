import * as React from 'react';
import { useState, useEffect } from "react";
import DropDownMenu from "../marketing/DropDownMenu";
import Box from '@mui/material/Box';
import * as SVG from "../../common/Icons";
import { virtuaCard,  Ape2, Ape4, Ape3, Ape5, Ape6, Ape, ToolHeads } from "../../common/IMG/Images";
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
    Buyer: "stake1uya",
    Seller: "$x0",
    NFT: virtuaCard,
    NFTname: "Virtua Cardano Island Nano-CSS",
    price: "22,000 ₳",
    percent: 90
  },
  {
    id: 1,
    Buyer: "$cardanomad",
    Seller: "$deserter",
    NFT: Ape,
    NFTname: "The Ape Society",
    price: "8,999 ₳",
    percent: 40
  },
  {
    id: 2,
    Buyer: "$kronos24",
    Seller: "$makesyourage",
    NFT: Ape2,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 30
  },
  {
    id: 3,
    Buyer: "$ninos-nft",
    Seller: "$topalano",
    NFT: Ape3,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 40
  },
  {
    id: 4,
    Buyer: "stake1ux...lqf2",
    Seller: "$cnft_sniper",
    NFT: Ape4,
    NFTname: "The Ape Society",
    price: "5,995 ₳",
    percent: 38
  },
  {
    id: 5,
    Buyer: "$crytocowboys",
    Seller: "stake1ux...8chh",
    NFT: Ape5,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 38
  },
  {
    id: 6,
    Buyer: "$apecircle",
    Seller: "$strangematter",
    NFT: Ape6,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 30
  },
  {
    id: 7,
    Buyer: "$cardanomad",
    Seller: "$deserter",
    NFT: Ape,
    NFTname: "The Ape Society",
    price: "8,999 ₳",
    percent: 40
  },
  {
    id: 8,
    Buyer: "$kronos24",
    Seller: "$makesyourage",
    NFT: Ape2,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 30
  },
  {
    id: 9,
    Buyer: "$ninos-nft",
    Seller: "$topalano",
    NFT: Ape3,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 40
  },
  {
    id: 10,
    Buyer: "stake1ux...lqf2",
    Seller: "$cnft_sniper",
    NFT: Ape4,
    NFTname: "The Ape Society",
    price: "5,995 ₳",
    percent: 38
  },
  {
    id: 11,
    Buyer: "$crytocowboys",
    Seller: "stake1ux...8chh",
    NFT: Ape5,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 38
  },
  {
    id: 12,
    Buyer: "$apecircle",
    Seller: "$strangematter",
    NFT: Ape6,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 30
  },
]
const TopTokenDatas1 = [
  {
    id: 0,
    Buyer: "stake1uyau...9shn",
    Seller: "$x0",
    NFT: ToolHeads,
    NFTname: "ToolHeads",
    price: "22,000 ₳",
    percent: 90
  },
  {
    id: 1,
    Buyer: "$cardanomad",
    Seller: "$deserter",
    NFT: Ape,
    NFTname: "The Ape Society",
    price: "8,999 ₳",
    percent: 40
  },
  {
    id: 2,
    Buyer: "$kronos24",
    Seller: "$makesyourage",
    NFT: Ape2,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 30
  },
  {
    id: 3,
    Buyer: "$ninos-nft",
    Seller: "$topalano",
    NFT: Ape3,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 40
  },
  {
    id: 4,
    Buyer: "stake1ux...lqf2",
    Seller: "$cnft_sniper",
    NFT: Ape4,
    NFTname: "The Ape Society",
    price: "5,995 ₳",
    percent: 38
  },
  {
    id: 5,
    Buyer: "$crytocowboys",
    Seller: "stake1ux...8chh",
    NFT: Ape5,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 38
  },
  {
    id: 6,
    Buyer: "$apecircle",
    Seller: "$strangematter",
    NFT: Ape6,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 30
  },
  {
    id: 7,
    Buyer: "$cardanomad",
    Seller: "$deserter",
    NFT: Ape,
    NFTname: "The Ape Society",
    price: "8,999 ₳",
    percent: 40
  },
  {
    id: 8,
    Buyer: "$kronos24",
    Seller: "$makesyourage",
    NFT: Ape2,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 30
  },
  {
    id: 9,
    Buyer: "$ninos-nft",
    Seller: "$topalano",
    NFT: Ape3,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 40
  },
  {
    id: 10,
    Buyer: "stake1ux...lqf2",
    Seller: "$cnft_sniper",
    NFT: Ape4,
    NFTname: "The Ape Society",
    price: "5,995 ₳",
    percent: 38
  },
  {
    id: 11,
    Buyer: "$crytocowboys",
    Seller: "stake1ux...8chh",
    NFT: Ape5,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 38
  },
  {
    id: 12,
    Buyer: "$apecircle",
    Seller: "$strangematter",
    NFT: Ape6,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 30
  },
]
const TopTokenDatas2 = [
  {
    id: 0,
    Buyer: "stake1uyau...9shn",
    Seller: "$x0",
    NFT: virtuaCard,
    NFTname: "Virtua Cardano Island Nano-CSS",
    price: "22,000 ₳",
    percent: 90
  },
  {
    id: 1,
    Buyer: "$cardanomad",
    Seller: "$deserter",
    NFT: Ape,
    NFTname: "The Ape Society",
    price: "8,999 ₳",
    percent: 40
  },
  {
    id: 2,
    Buyer: "$kronos24",
    Seller: "$makesyourage",
    NFT: Ape2,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 30
  },
  {
    id: 3,
    Buyer: "$ninos-nft",
    Seller: "$topalano",
    NFT: Ape3,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 40
  },
  {
    id: 4,
    Buyer: "stake1ux...lqf2",
    Seller: "$cnft_sniper",
    NFT: Ape4,
    NFTname: "The Ape Society",
    price: "5,995 ₳",
    percent: 38
  },
  {
    id: 5,
    Buyer: "$crytocowboys",
    Seller: "stake1ux...8chh",
    NFT: Ape5,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 38
  },
  {
    id: 6,
    Buyer: "$apecircle",
    Seller: "$strangematter",
    NFT: Ape6,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 30
  },
  {
    id: 7,
    Buyer: "$cardanomad",
    Seller: "$deserter",
    NFT: Ape,
    NFTname: "The Ape Society",
    price: "8,999 ₳",
    percent: 40
  },
  {
    id: 8,
    Buyer: "$kronos24",
    Seller: "$makesyourage",
    NFT: Ape2,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 30
  },
  {
    id: 9,
    Buyer: "$ninos-nft",
    Seller: "$topalano",
    NFT: Ape3,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 40
  },
  {
    id: 10,
    Buyer: "stake1ux...lqf2",
    Seller: "$cnft_sniper",
    NFT: Ape4,
    NFTname: "The Ape Society",
    price: "5,995 ₳",
    percent: 38
  },
  {
    id: 11,
    Buyer: "$crytocowboys",
    Seller: "stake1ux...8chh",
    NFT: Ape5,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 38
  },
  {
    id: 12,
    Buyer: "$apecircle",
    Seller: "$strangematter",
    NFT: Ape6,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 30
  },
]
const TopTokenDatas3 = [
  {
    id: 0,
    Buyer: "stake1uyau...9shn",
    Seller: "$x0",
    NFT: virtuaCard,
    NFTname: "Virtua Cardano Island Nano-CSS",
    price: "22,000 ₳",
    percent: 90
  },
  {
    id: 1,
    Buyer: "$cardanomad",
    Seller: "$deserter",
    NFT: Ape,
    NFTname: "The Ape Society",
    price: "8,999 ₳",
    percent: 40
  },
  {
    id: 2,
    Buyer: "$kronos24",
    Seller: "$makesyourage",
    NFT: Ape2,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 30
  },
  {
    id: 3,
    Buyer: "$ninos-nft",
    Seller: "$topalano",
    NFT: Ape3,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 40
  },
  {
    id: 4,
    Buyer: "stake1ux...lqf2",
    Seller: "$cnft_sniper",
    NFT: Ape4,
    NFTname: "The Ape Society",
    price: "5,995 ₳",
    percent: 38
  },
  {
    id: 5,
    Buyer: "$crytocowboys",
    Seller: "stake1ux...8chh",
    NFT: Ape5,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 38
  },
  {
    id: 6,
    Buyer: "$apecircle",
    Seller: "$strangematter",
    NFT: Ape6,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 30
  },
  {
    id: 7,
    Buyer: "$cardanomad",
    Seller: "$deserter",
    NFT: Ape,
    NFTname: "The Ape Society",
    price: "8,999 ₳",
    percent: 40
  },
  {
    id: 8,
    Buyer: "$kronos24",
    Seller: "$makesyourage",
    NFT: Ape2,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 30
  },
  {
    id: 9,
    Buyer: "$ninos-nft",
    Seller: "$topalano",
    NFT: Ape3,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 40
  },
  {
    id: 10,
    Buyer: "stake1ux...lqf2",
    Seller: "$cnft_sniper",
    NFT: Ape4,
    NFTname: "The Ape Society",
    price: "5,995 ₳",
    percent: 38
  },
  {
    id: 11,
    Buyer: "$crytocowboys",
    Seller: "stake1ux...8chh",
    NFT: Ape5,
    NFTname: "The Ape Society",
    price: "7,999 ₳",
    percent: 38
  },
  {
    id: 12,
    Buyer: "$apecircle",
    Seller: "$strangematter",
    NFT: Ape6,
    NFTname: "The Ape Society",
    price: "6,200 ₳",
    percent: 30
  },
]
const ProPageTopNFTTrades = () => {
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
        <span className="w-[20%] text-[#9f9fa8] sm:text-sm  text-xs">
          Buyer
        </span>
        <span className="w-[20%] text-[#9f9fa8] sm:text-sm  text-xs">
          Seller
        </span>
        <span className="w-[30%] text-[#9f9fa8] sm:text-sm  text-xs">
          NFT
        </span>
        <span className="w-[30%] text-[#9f9fa8] sm:text-sm  text-xs">
          Price
        </span>
      </div>
      {/* Table Content */}
      <SimpleBarReact className="h-[400px] ">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`flex  pt-2 border-b-[1px] border-[#555555] border-opacity-30 pb-2 cursor-pointer transition-all duration-300 transform hover:bg-[#3a4956] hover:opacity-70`}>
              {/* Buyer */}
              <span className="flex items-center gap-2 w-[20%] text-[#9f9fa8] sm:text-sm  text-xs whitespace-nowrap  overflow-hidden">
                <p className="text-white sm:text-sm text-xs whitespace-nowrap inline-block overflow-hidden">{item.Buyer}</p>
              </span>
              {/* Seller */}
              <span className="flex items-center gap-2 w-[20%] text-[#9f9fa8] sm:text-sm  text-xs whitespace-nowrap  overflow-hidden">

                <p className="text-white sm:text-sm text-xs">{item.Seller}</p>
              </span>
              {/* NFT */}
              <span
                id={item.id}
                onMouseEnter={handleToEnter}
                onMouseLeave={handleToLeave}
                className={`flex flex-col justify-center items-start gap-2 w-[30%]  sm:text-sm  text-xs `}>
                <img
                  src={item.NFT}
                  width={50}
                  height={50}
                  className="rounded-md sm:w-8 w-6 sm:h-8 h-6"
                  alt="icon" />

              </span>
              {/* Price */}
              <span
                className="flex flex-col justify-center items-start gap-2 w-[30%] text-[#9f9fa8] sm:text-sm  text-xs">
                <p className="text-white sm:text-sm text-xs whitespace-nowrap inline-block ">{item.price}</p>
                <Box sx={{ width: '70%' }}>
                  <LinearProgress
                    color='inherit'
                    variant="determinate" value={item.percent} />
                </Box>
              </span>
            </div>
          )
        })}

      </SimpleBarReact>
    </div>
  );
};

export default ProPageTopNFTTrades;
