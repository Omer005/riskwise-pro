import DateButtonGroupTable from "../Volume/DateButtonGroupTable"
const TransferHeader = (props) => {
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
      date: "90d",
      active: false
    },
    {
      id: 5,
      date: "all",
      active: false
    }
  ]
  return (
    <div
      style={{ "background": "linear-gradient(rgb(20, 32, 40), rgb(0, 0, 0)) 0px 0px no-repeat padding-box padding-box transparent" }}
      className="lg:flex lg:flex-col hidden gap-4 w-full rounded-2xl h-full p-4">
      <DateButtonGroupTable dateData={dateData} />
      {/* Part 1 */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 w-1/4 bg-[#0b1217] rounded-xl p-3">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#9f9fa8] text-base inline-block whitespace-normal overflow-hidden text-ellipsis"># Addresses Sending/Receive</p>
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-yellow-400 font-normal text-sm">52.02%
              </p>
              <p className="text-red-400 font-normal text-sm">47.98%
              </p>
            </div>
            <div className="flex w-full">
              {/* <div className={`w-[${lengthToken}%]`}> */}
              <div className="w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-[#0b1217] rounded-full"></div>
              {/* </div> */}
              <div className="w-full h-1 bg-gradient-to-l from-red-500 via-red-500 to-[#0b1217] rounded-full"></div>
            </div>
            <div className="flex justify-between">
              <p className="text-white font-normal text-sm">1675
              </p>
              <p className="text-white font-normal text-sm">1545
              </p>
            </div>
          </div>
        </div>
        {/* Part 2 */}
        <div className="flex flex-col gap-3 w-1/4 bg-[#0b1217] rounded-xl justify-center p-3">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#9f9fa8] text-base inline-block whitespace-normal overflow-hidden text-ellipsis">Active Addresses</p>
          </div>
          <p className="text-white text-xl inline-block whitespace-normal overflow-hidden text-ellipsis">1948</p>
        </div>
        {/* Part 3 */}
        <div className="flex flex-col gap-3 w-1/4 bg-[#0b1217] rounded-xl justify-center p-3">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#9f9fa8] text-base inline-block whitespace-normal overflow-hidden text-ellipsis">Transfer Volume</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-white text-xl inline-block whitespace-normal overflow-hidden text-ellipsis">4098 B ₳</p>
            <p className="text-[#9f9fa8] text-base inline-block whitespace-normal overflow-hidden text-ellipsis">1852 B iUSD</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TransferHeader