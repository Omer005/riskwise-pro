import * as React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import * as SVG from "../../common/Icons";
import { BossCatAlie, ChilledKongs, MallardO, Copi, Fact, Djed, iUSD, Meld, Cornucopias, DogBreaking, Mallard, BankHolder, WeirdOZ,BossCat,DEAD,Lq ,OREMOB, Indy} from "../../common/IMG/Images";
import LinearProgress from '@mui/material/LinearProgress';
import SimpleBarReact from "simplebar-react";

const TopMoverGainerDatas = [
  {
    id: 0,
    image: BossCatAlie,
    name: "Boss Cat Alien Club",
    price: "589 ₳",
    volume: 100,
    rising: 20.2,
  },
  {
    id: 1,
    image: ChilledKongs,
    name: "Chilled Kongs",
    price: "445 ₳",
    volume: 100,
    rising: 19.3,
  },
  {
    id: 2,
    image: MallardO,
    name: "The Mallard Order",
    price: "390 ₳",
    volume: 30,
    rising: 11.43,
  },
  {
    id: 3,
    image: Copi,
    name: "COPI",
    price: "0.107 ₳",
    volume: 10,
    rising: 8.48,
  },
  {
    id: 4,
    image: Fact,
    name: "FACT",
    price: "0.003000 ₳",
    volume: 90,
    rising: 5.34,
  },
  {
    id: 5,
    image: iUSD,
    name: "iUSD",
    price: "2.481 ₳",
    volume: 30,
    rising: 3.25
  },
  {
    id: 6,
    image: Djed,
    name: "DJED",
    price: "2.632 ₳",
    volume: 90,
    rising: 3.25
  },
  {
    id: 7,
    image: Meld,
    name: "MELD",
    price: "0.0334 ₳",
    volume: 10,
    rising: 3.25
  },
  {
    id: 8,
    image: Cornucopias,
    name: "Cornucopias GTI Javelin 2022",
    price: "99 ₳",
    volume: 30,
    volumeValue: "3.13 ₳"
  },
  {
    id: 9,
    image: DogBreaking,
    name: "Dog Breaking(Hosky Edition)",
    price: "2.599 ₳",
    volume: 30,
    volumeValue: "124,951 ₳"
  },
  {
    id: 10,
    image: Mallard,
    name: "The Mallard Order",
    price: "2.599 ₳",
    volume: 10,
    volumeValue: "124,951 ₳"
  },
  {
    id: 11,
    image: BankHolder,
    name: "BankHolder Pass",
    price: "2.599 ₳",
    volume: 90,
    volumeValue: "124,951 ₳"
  },
  {
    id: 12,
    image: WeirdOZ,
    name: "WeirdOZ",
    price: "2.599 ₳",
    volume: 10,
    volumeValue: "124,951 ₳"
  },
  {
    id: 13,
    image: Meld,
    name: "MELD",
    price: "2.599 ₳",
    volume: 90,
    volumeValue: "124,951 ₳"
  },

]
const TopMoverLoserDatas = [
  {
    id: 0,
    image: BossCat,
    name: "Boss Cat Rocket",
    price: "389 ₳",
    volume: 100,
    rising: 2.2,
  },
  {
    id: 1,
    image: ChilledKongs,
    name: "Chilled Kongs",
    price: "105 ₳",
    volume: 100,
    rising: 3.3,
  },
  {
    id: 2,
    image: DEAD,
    name: "DEAD",
    price: "390 ₳",
    volume: 60,
    rising: 11.43,
  },
  {
    id: 3,
    image: Lq,
    name: "LQ",
    price: "07 ₳",
    volume: 20,
    rising: 8.48,
  },
  {
    id: 4,
    image: OREMOB,
    name: "OREMOB",
    price: "0.003000 ₳",
    volume: 30,
    rising: 40.34,
  },
  {
    id: 5,
    image: iUSD,
    name: "iUSD",
    price: "9.481 ₳",
    volume: 50,
    rising: 3.25
  },
  {
    id: 6,
    image: Indy,
    name: "INDY",
    price: "4.632 ₳",
    volume: 60,
    rising: 8.25
  },
  {
    id: 7,
    image: Meld,
    name: "MELD",
    price: "0.0334 ₳",
    volume: 10,
    rising: 3.25
  },
  {
    id: 8,
    image: Cornucopias,
    name: "Cornucopias GTI Javelin 2022",
    price: "99 ₳",
    volume: 30,
    volumeValue: "3.13 ₳"
  },
  {
    id: 9,
    image: DogBreaking,
    name: "Dog Breaking(Hosky Edition)",
    price: "2.599 ₳",
    volume: 30,
    volumeValue: "124,951 ₳"
  },
  {
    id: 10,
    image: Mallard,
    name: "The Mallard Order",
    price: "2.599 ₳",
    volume: 10,
    volumeValue: "124,951 ₳"
  },
  {
    id: 11,
    image: BankHolder,
    name: "BankHolder Pass",
    price: "2.599 ₳",
    volume: 90,
    volumeValue: "124,951 ₳"
  },
  {
    id: 12,
    image: WeirdOZ,
    name: "WeirdOZ",
    price: "2.599 ₳",
    volume: 10,
    volumeValue: "124,951 ₳"
  },
  {
    id: 13,
    image: Meld,
    name: "MELD",
    price: "2.599 ₳",
    volume: 90,
    volumeValue: "124,951 ₳"
  },

]

const ProPageTopMovers = () => {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState(TopMoverGainerDatas)
  const handleGainerClick = () => {
    setIsActive(true);
  }
  const handleLoserClick = () => {
    setIsActive(false)
  }
  useEffect(() => {
    if (isActive) { setData(TopMoverGainerDatas) }
    else
    setData(TopMoverLoserDatas)
  }, [isActive])
  return (
    <div
      className="bg-[#142028] rounded-lg xl:w-[32%] relative lg:w-[48%] w-full p-3 ">
      {/* Header */}
      <div className="flex justify-between">
        <span className="flex items-center gap-2 sm:text-sm  text-xs text-white"> Top Movers  <SVG.Alert /> </span>

        <div className={`flex h-fit w-fit  bg-[#0b1217] rounded-xl`}>
          <button
            onClick={handleGainerClick}
            className={` text-xs sm:h-8 h-6 sm:w-20 w-16 flex justify-center items-center ${isActive ? "bg-[#3a4956]  rounded-xl text-white px-4 py-2" : "text-white"}`}>Gainers</button>
          <button
            onClick={handleLoserClick}
            className={` text-xs sm:h-8 h-6 sm:w-20 w-16 flex justify-center items-center ${isActive ? "text-white" : "bg-[#3a4956]  rounded-xl text-white px-4 py-2"}`}>Losers</button>
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
          24 % chg
        </span>
      </div>
      {/* Table Content */}
      <SimpleBarReact className="h-[400px] ">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`flex  pt-2 border-b-[1px] border-[#555555] border-opacity-30 pb-2 transition-all duration-300 transform hover:bg-[#3a4956] hover:opacity-70 cursor-pointer`}>
              {/* Name */}
              <span className="flex items-center gap-2 w-[35%] text-[#9f9fa8] sm:text-sm  text-xs ">
                <img
                  src={item.image}
                  width={50}
                  height={50}
                  className="rounded-lg w-8 h-8"
                  alt="icon" />
                <p className="text-white sm:text-sm text-xs  overflow-hidden whitespace-nowrap text-ellipsis">{item.name}</p>
              </span>
              {/* Price */}
              <span className="flex items-center gap-2 w-[23%] text-[#9f9fa8] sm:text-sm  text-xs overflow-hidden whitespace-normal text-ellipsis">
                <p className="text-white sm:text-sm text-xs overflow-hidden whitespace-normal text-ellipsis">{item.price}</p>
              </span>
              <span className="flex items-center justify-end gap-2 w-[42%] text-[#9f9fa8] sm:text-sm  text-xs">
                {isActive?(<SVG.GoUp />):(<SVG.GoDown />)}
                <p className={`${isActive?"text-green-300":"text-red-300"} sm:text-sm text-xs overflow-hidden whitespace-normal text-ellipsis`}>{item.rising}{"%"}</p>
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

export default ProPageTopMovers;
