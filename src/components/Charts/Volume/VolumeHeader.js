import * as SVG from "../../../common/Icons";
import DateButtonGroup from "../../../components/Charts/Volume/DateButtonGroup";

const dateData = [
  {
    id: 0,
    date: "24h",
    active: true
  },
  {
    id: 1,
    date: "7d",
    active: false
  },
  {
    id: 3,
    date: "30d",
    active: false
  },
  {
    id: 4,
    date: "All",
    active: false
  },
]

const VolumeHeader = (props) => {

  return (
    <div
      style={{ "background": "linear-gradient(rgb(20, 32, 40), rgb(0, 0, 0)) 0px 0px no-repeat padding-box padding-box transparent" }}
      className="lg:flex lg:justify-between hidden w-full rounded-2xl h-full p-4">
      {/* Part 1 */}
      <div className="flex flex-col gap-3 w-1/4 bg-[#0b1217] rounded-xl p-3">
        <div className="flex justify-between items-center w-full">
          <p className="text-[#9f9fa8] text-base inline-block whitespace-normal overflow-hidden text-ellipsis">Total Trades</p>
          <DateButtonGroup dateData={dateData} />
        </div>
        <div className="flex justify-start items-center gap-3">
          <p className="text-white text-base font-normal">463 </p>
          <span className="flex items-center gap-1 text-green-300 text-sm"><SVG.GoUp />27.90%
          </span>
        </div>
      </div>
      {/* Part 2 */}
      <div className="flex flex-col gap-3 w-1/4 bg-[#0b1217] rounded-xl p-3">
        <div className="flex justify-between items-center w-full">
          <p className="text-[#9f9fa8] text-base inline-block whitespace-normal overflow-hidden text-ellipsis">Trading Volume</p>
          <DateButtonGroup dateData={dateData} />
        </div>
        <div className="flex justify-start items-center gap-3">
          <p className="text-white text-base font-normal">1.27M ₳
          </p>
          <span className="flex items-center gap-1 text-[#9f9fa8] text-sm">22.31M JPG
          </span>
        </div>
      </div>
      {/* Part 3 */}
      <div className="flex flex-col gap-3 w-1/4 bg-[#0b1217] rounded-xl p-3">
        <div className="flex justify-between items-center w-full">
          <p className="text-[#9f9fa8] text-base inline-block whitespace-normal overflow-hidden text-ellipsis">Buy vs Sell Volume</p>
        </div>
        <div className=" flex flex-col">
          <div className="flex w-full">
            {/* <div className={`w-[${lengthToken}%]`}> */}
            <div className="w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-[#0b1217] rounded-full"></div>
            {/* </div> */}
            <div className="w-full h-1 bg-gradient-to-l from-red-500 via-red-500 to-[#0b1217] rounded-full"></div>
          </div>
          <div className="flex justify-between">
            <p className="text-yellow-400 font-normal text-sm">534.07K ₳
            </p>
            <p className="text-red-400 font-normal text-sm">332.07K ₳
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default VolumeHeader