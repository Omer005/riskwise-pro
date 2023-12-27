import ChartSlick from "../ChartSick";
import LiquidityHeader from "./LiquidityHeader";
import LiquidityChart from "./LiquidityChart";
import ChartDexStats from "./ChartDexStats";
import LiquidityTableSecond from "./LiquidityTableSecond";
import LiquidityTableFisrt from "./LiquidityTableFisrt";
import LiquidityTableThird from "./LiquidityTableThird";
const ChartLiquidity = () => {

  return (
    <div className="lg:flex lg:justify-between pt-4  gap-3  overflow-x-hidden">
      <div className="lg:w-[9%] lg:flex lg:justify-center lg:items-start">
        <ChartSlick />
      </div>
      <div className="flex flex-col gap-4 lg:w-[90%] w-full h-full lg:p-4">
        <LiquidityHeader />
        {/* Chart part */}
        <div className="lg:flex lg:justify-between lg:space-y-0 space-y-4 w-full">
          <ChartDexStats />
          <LiquidityChart />
        </div>
        {/* table1 */}
        <LiquidityTableFisrt />
        <LiquidityTableSecond />
        <LiquidityTableThird />
      </div>
    </div>)
}
export default ChartLiquidity;