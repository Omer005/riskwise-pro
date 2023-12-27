import ChartSlick from "../ChartSick";
import TransferHeader from "./TransferHeader";
import TransferTable1 from "./TransferTable1";
import TransferTable2 from "./TransferTable2";
import TrendedTransfer from './TrendedTransfer';

const ChartTransfer = () => {
  return (
    <div className="lg:flex lg:justify-between pt-4  gap-3  overflow-x-hidden" >
      <div className="lg:w-[9%] lg:flex lg:justify-center lg:items-start">
        <ChartSlick />
      </div>
      <div className="flex flex-col gap-4 lg:w-[90%] w-full h-full lg:p-4">
        <TransferHeader />
        <TrendedTransfer />
        <TransferTable1 />
        <TransferTable2 />
      </div>
    </div>
  )
}
export default ChartTransfer;