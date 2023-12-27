import ChartSlick from "../ChartSick";
import ProfitHeader from "./ProfitHeader";
import ProfitTable from "./ProfitTable";
import { Icon } from "../../../common/IMG/Images";
const ChartProfitLeaderboard = () => {
  return (
    <div className="lg:flex lg:justify-between pt-4  gap-3  overflow-x-hidden">
      <div className="lg:w-[9%] lg:flex lg:justify-center lg:items-start">
        <ChartSlick />
      </div>
      <div className="flex flex-col gap-4 lg:w-[90%] w-full h-full lg:p-4">
        <ProfitHeader />
        <div className="flex justify-between px-4">
          <p className="text-white sm:text-lg text-sm font-medium">
            Top Balances
          </p>
          <div className="w-10 h-10">
            <img src={Icon} alt="" className="" width={100} height={100} />
          </div>
        </div>
        <ProfitTable />
      </div>
    </div>
  );
};
export default ChartProfitLeaderboard;
