import ChartSlick from "../ChartSick";
import DisHeader from "./DisHeader";
import DisTable from "./DisTable";
import Holder from "./Holder";
import Token from "./Token";
import Unique from "./Unique";

const ChartDistribution = () => {
  return (
    <div className="h-full">
      <div className="lg:flex lg:justify-between pt-4 gap-3 overflow-x-hidden">
        <div className="lg:w-[9%] lg:flex lg:justify-center lg:items-start">
          <ChartSlick />
        </div>
        <div className="flex flex-col gap-4 lg:w-[90%] w-full h-full p-4">
          <DisHeader />
          <div className="flex px-4">
            <p className="text-white sm:text-lg text-sm font-medium">
              Top Balances
            </p>
          </div>
          <DisTable />
        </div>
      </div>
      <div className="bg-[#0b1217] rounded-2xl p-4 overflow-hidden xl:space-y-0 space-y-4">
        <div className="xl:flex xl:flex-row xl:justify-between flex flex-col w-full">
          <div className="xl:w-[49%] w-full">
            <Holder />
          </div>
          <div className="xl:w-[49%] w-full">
            <Token />
          </div>
        </div>
        <div className="">
          <Unique />
        </div>
      </div>
    </div>
  );
};
export default ChartDistribution;
