import ChartPosition from "./ChartPosition";
import ChartWatchList from "./ChartWatchList";
import ChartBulish from "./ChartBulish";
import ChartConnect from "./ChartConnect";
const ChartOrders = () => {
  return (
    <div className="flex flex-col w-[400px] mt-4">
      <ChartConnect />
      <ChartPosition />
      <ChartBulish />
      <ChartWatchList />
    </div>
  )
}

export default ChartOrders