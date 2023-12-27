import * as SVG from "../../../common/Icons";
const ProfitHeader = (props) => {

  return (
    <div
      style={{ "background": "linear-gradient(rgb(20, 32, 40), rgb(0, 0, 0)) 0px 0px no-repeat padding-box padding-box transparent" }}
      className="lg:flex lg:justify-between hidden w-full rounded-2xl h-full p-4">
      {/* Part 1 */}
      <div className="flex flex-col gap-3 w-1/4 bg-[#0b1217] rounded-xl p-3">
        <div className="flex justify-between items-center w-full">
          <p className="text-[#9f9fa8] text-base inline-block whitespace-normal overflow-hidden text-ellipsis">Total Realized Profit/Loss</p>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-yellow-400 font-normal text-sm">44% in Profit
            </p>
            <p className="text-red-400 font-normal text-sm">56% in Loss
            </p>
          </div>
          <div className="flex w-full">
            {/* <div className={`w-[${lengthToken}%]`}> */}
            <div className="w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-[#0b1217] rounded-full"></div>
            {/* </div> */}
            <div className="w-full h-1 bg-gradient-to-l from-red-500 via-red-500 to-[#0b1217] rounded-full"></div>
          </div>
          <div className="flex justify-between">
            <p className="text-white font-normal text-sm">534.07K ₳
            </p>
            <p className="text-white font-normal text-sm">332.07K ₳
            </p>
          </div>
        </div>
      </div>
      {/* Part 2 */}
      <div className="flex flex-col gap-3 w-1/4 bg-[#0b1217] rounded-xl p-3">
        <div className="flex justify-between items-center w-full">
          <p className="text-[#9f9fa8] text-base inline-block whitespace-normal overflow-hidden text-ellipsis">Total Unrealized Profit/Loss</p>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-yellow-400 font-normal text-sm">1% in Profit
            </p>
            <p className="text-red-400 font-normal text-sm">99% in Loss
            </p>
          </div>
          <div className="flex w-full">
            {/* <div className={`w-[${lengthToken}%]`}> */}
            <div className="w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-[#0b1217] rounded-full"></div>
            {/* </div> */}
            <div className="w-full h-1 bg-gradient-to-l from-red-500 via-red-500 to-[#0b1217] rounded-full"></div>
          </div>
          <div className="flex justify-between">
            <p className="text-white font-normal text-sm">534.07K ₳
            </p>
            <p className="text-white font-normal text-sm">332.07K ₳
            </p>
          </div>
        </div>
      </div>
      {/* Part 3 */}
      <div className="flex flex-col gap-3 w-1/4 bg-[#0b1217] rounded-xl p-3">
        <div className="flex justify-between items-center w-full">
          <p className="text-[#9f9fa8] text-base inline-block whitespace-normal overflow-hidden text-ellipsis">Total Unrealized Profit/Loss</p>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-yellow-400 font-normal text-sm">22% in Profit
            </p>
            <p className="text-red-400 font-normal text-sm">78% in Loss
            </p>
          </div>
          <div className="flex w-full">
            {/* <div className={`w-[${lengthToken}%]`}> */}
            <div className="w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-[#0b1217] rounded-full"></div>
            {/* </div> */}
            <div className="w-full h-1 bg-gradient-to-l from-red-500 via-red-500 to-[#0b1217] rounded-full"></div>
          </div>
          <div className="flex justify-between">
            <p className="text-white font-normal text-sm">235
            </p>
            <p className="text-white font-normal text-sm">844
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfitHeader