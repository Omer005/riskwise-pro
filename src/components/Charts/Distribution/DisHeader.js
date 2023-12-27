import * as SVG from "../../../common/Icons";
const DisHeader = (props) => {

  return (
    <div
      style={{ "background": "linear-gradient(rgb(20, 32, 40), rgb(0, 0, 0)) 0px 0px no-repeat padding-box padding-box transparent" }}
      className="lg:flex lg:justify-between hidden w-full rounded-2xl h-full p-4">
      {/* Part 1 */}
      <div className="flex flex-col gap-3 w-1/4 bg-[#0b1217] rounded-xl p-3">
        <div className="flex justify-between items-center w-full">
          <p className="text-[#9f9fa8] text-base inline-block whitespace-normal overflow-hidden text-ellipsis">Holders</p>
        </div>
        <div className="flex justify-start items-center gap-3">
          <p className="text-white text-base font-normal">8,862 </p>
          <span className="flex items-center gap-1 text-green-300 text-sm"><SVG.GoUp />2.90%
          </span>
        </div>
      </div>
      {/* Part 2 */}
      <div className="flex flex-col gap-3 w-1/4 bg-[#0b1217] rounded-xl p-3">
        <div className="flex justify-between items-center w-full">
          <p className="text-[#9f9fa8] text-base inline-block whitespace-normal overflow-hidden text-ellipsis">Median Holder Balance</p>
        </div>
        <div className="flex justify-start items-center gap-3">
          <p className="text-white text-base font-normal">654.34 ₳
          </p>
          <span className="flex items-center gap-1 text-[#9f9fa8] text-sm">91.46 LENFI
          </span>
        </div>
      </div>
      {/* Part 3 */}
      <div className="flex flex-col gap-3 w-1/4 bg-[#0b1217] rounded-xl p-3">
        <div className="flex justify-between items-center w-full">
          <p className="text-[#9f9fa8] text-base inline-block whitespace-normal overflow-hidden text-ellipsis">Avg Holder Age</p>
        </div>
        <div className="flex justify-start items-center gap-3">
          <p className="text-white text-base font-normal">348.67 days </p>
        </div>
      </div>
    </div>
  )
}
export default DisHeader