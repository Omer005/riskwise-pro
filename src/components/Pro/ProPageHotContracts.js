import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import SimpleBarReact from "simplebar-react";

const HotContracts = [
  {
    id: 0,
    name: "MinSwap Batcher",
    volume: 10,
    volumeValue: "7759"
  },
  {
    id: 1,
    name: "jpg.store",
    volume: 40,
    volumeValue: "6561"
  },
  {
    id: 2,
    name: "Minswap pools",
    volume: 30,
    volumeValue: "3531"
  },
  {
    id: 3,
    name: "WingRiders Batcher",
    volume: 10,
    volumeValue: "2079"
  },
  {
    id: 4,
    name: "MuesliSwap",
    volume: 90,
    volumeValue: "1093"
  },
  {
    id: 5,
    name: "Spectrum Finance Batcher",
    volume: 30,
    volumeValue: "1093"
  },
  {
    id: 6,
    name: "SundaeSwap Batcher",
    volume: 90,
    volumeValue: "920"
  },
  {
    id: 7,
    name: "21bd8...b6c4c",
    volume: 10,
    volumeValue: "828"
  },
  {
    id: 8,
    name: "WingRiders Pools",
    volume: 40,
    volumeValue: "818 "
  },
  {
    id: 9,
    name: "SundaeSwap Batcher Fees",
    volume: 30,
    volumeValue: "422"
  },
]
const ProPageHotContracts = () => {
  return (
    <div
      className="bg-[#142028] rounded-lg xl:w-[32%] relative lg:w-[48%] w-full p-3 ">
      {/* Header */}
      <div className="flex justify-between">
        <span className="flex gap-2 sm:text-sm  text-xs text-white">Hot Contracts/Scripts </span>
      </div>
      {/* Table */}
      {/* Table Header */}
      <div className="flex mt-3 border-b-[1px] border-[#555555] border-opacity-30 pb-2">
        <span className="w-[70%] text-[#9f9fa8] sm:text-sm  text-xs">
          Name
        </span>

        <span className="w-[30%] flex justify-end text-[#9f9fa8] sm:text-sm  text-xs">
          Txs
        </span>
      </div>
      {/* Table Content */}
      <SimpleBarReact className="h-[400px] ">
        {HotContracts.map((item, idx) => {
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
                <Box sx={{ width: '55%' }}>
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

export default ProPageHotContracts;
