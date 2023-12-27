import ChartSlick from "../ChartSick";
import VolumeHeader from "./VolumeHeader";
import VolumeTableButton from "./VolumeTableButton";
import VolumeTable from "./VolumeTable";
import WalletVolume from "./WalletVolume";
import WeeklyTrades from "./WeeklyTrades";

const ChartVolume = () => {
  return (
    <div className="lg:flex lg:justify-end pt-4 gap-3 overflow-x-hidden">
      <div className="lg:w-[9%] lg:flex lg:justify-center lg:items-start">
        <ChartSlick />
      </div>
      <div className="flex flex-col gap-4 lg:w-[90%] w-full h-full lg:p-4">
        {/* Volume Header */}
        <VolumeHeader />
        {/* Chart */}
        <div className="w-full h-full rounded-2xl p-4 bg-gradient-to-t from-black to-[#142028]">
          <div className="lg:flex lg:justify-between lg:space-y-0 space-y-4 w-full h-full">
            <WalletVolume />
            <WeeklyTrades />
          </div>
        </div>
        {/* Table */}
        <VolumeTableButton />
        <VolumeTable />
      </div>
    </div>
  );
};
export default ChartVolume;
