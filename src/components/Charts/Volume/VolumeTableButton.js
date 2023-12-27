import { useState } from "react";
import { Icon } from "../../../common/IMG/Images";
import DateButtonGroupTable from "./DateButtonGroupTable";
const dateData = [
  {
    id: 0,
    date: "1h",
    active: true
  },
  {
    id: 1,
    date: "4h",
    active: false
  },
  {
    id: 3,
    date: "12h",
    active: false
  },
  {
    id: 4,
    date: "24h",
    active: false
  },
  {
    id: 5,
    date: "7d",
    active: false
  },
  {
    id: 6,
    date: "30d",
    active: false
  },
  {
    id: 7,
    date: "All",
    active: false
  },
]
const VolumeTableButton = (props) => {
  const [isActiveTop, setIsActiveTop] = useState(true);
  const [isActiveHistory, setIsActiveHistory] = useState(false);
  const handleTopClick = () => {
    setIsActiveTop(true);
    setIsActiveHistory(false);
  }
  const handleHistoryClick = () => {
    setIsActiveHistory(true);
    setIsActiveTop(false);
  }
  return (
    <div className="flex flex-col gap-4 px-4">
      {/* Menu */}
      <div className="flex bg-[#142028] rounded-2xl justify-between items-center gap-4 w-[200px] h-10">
        <button
          onClick={handleTopClick}
          className={` flex items-center justify-center text-[#9f9fa8] text-sm font-normal hover:text-white w-[100px] h-10 ${isActiveTop ? "bg-[#3a4956] text-white rounded-xl" : ""}`}>Top Traders</button>
        <button
          onClick={handleHistoryClick}
          className={` flex items-center justify-center text-[#9f9fa8] text-sm font-normal hover:text-white w-[110px] h-10  ${isActiveHistory ? "bg-[#3a4956] text-white rounded-xl" : ""}`}>Trade History</button>
      </div>
      {/* Table Header */}
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="max-sm:hidden text-white text-base font-medium tracking-wider">Top Traders by Volume</p>
          <DateButtonGroupTable dateData={dateData} />
        </div>
        <div className="w-8 h-8 max-sm:hidden">
          <img
            src={Icon}
            width={100}
            height={100}
            alt="icon" />
        </div>
      </div>
    </div>
  )
}
export default VolumeTableButton