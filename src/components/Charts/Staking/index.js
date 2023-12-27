import ChartSlick from "../ChartSick";
import StakingHeader from "./StakingHeader";
import StakingTableFirst from "./StakingTableFirst";
import StakingTableSecond from "./StakingTableSecond";
import AmountAddress from "./AmountAddress";

const ChartStaking = () => {
  return (
    <div className="lg:flex lg:justify-between pt-4  gap-3  overflow-x-hidden">
      <div className="lg:w-[9%] lg:flex lg:justify-center lg:items-start">
        <ChartSlick />
      </div>
      <div className="flex flex-col gap-4 lg:w-[90%] w-full h-full lg:p-4">
        <StakingHeader />
        <AmountAddress />
        <StakingTableFirst />
        <StakingTableSecond />
      </div>
    </div>)
}

export default ChartStaking